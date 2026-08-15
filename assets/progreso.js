/*
 * Seguimiento de progreso del Plan Anual ASIR.
 *
 * Guarda en localStorage el resultado de cada quiz y de cada hoja de
 * ejercicios, y mantiene el resumen que lee `web_interactiva/index.html`.
 *
 * Dos claves:
 *
 *   parProgress          resumen que consume el panel del Centro de Aprendizaje
 *                        { exercisesDone, correctAnswers, totalAnswers,
 *                          timeSpent (min), currentWeek }
 *
 *   parProgresoDetalle   resultado por actividad, indexado por su ruta:
 *                        { "Mes_01/Semana_01/Dia_03/teoria": { correctas,
 *                          total, minutos, semana, fecha } }
 *
 * El resumen se recalcula siempre a partir del detalle. Así, repetir un quiz
 * SUSTITUYE su resultado anterior en lugar de sumarse, y las cifras nunca se
 * inflan por volver a hacer la misma actividad.
 */

const PARProgreso = (function () {

    const CLAVE_RESUMEN = 'parProgress';
    // Topes para no llenar localStorage ni abrumar en el repaso
    const MAX_FALLOS = 20;
    const MAX_REPASO = 8;
    const CLAVE_DETALLE = 'parProgresoDetalle';

    // Tope por actividad: si se deja la pestaña abierta toda la noche, no
    // queremos contabilizar 9 horas de estudio.
    const MAX_MINUTOS_ACTIVIDAD = 180;

    const cargadaEn = Date.now();

    function leer(clave, porDefecto) {
        try {
            return JSON.parse(localStorage.getItem(clave)) || porDefecto;
        } catch (e) {
            return porDefecto;
        }
    }

    function escribir(clave, valor) {
        try {
            localStorage.setItem(clave, JSON.stringify(valor));
        } catch (e) {
            // localStorage puede fallar en modo privado o con file:// restringido.
            // El progreso es accesorio: la página debe seguir funcionando.
            console.warn('No se pudo guardar el progreso:', e.message);
        }
    }

    // Identificador estable de la actividad a partir de su ruta:
    // .../Mes_01_Fundamentos/Semana_01/Dia_03/teoria.html
    //   → "Mes_01_Fundamentos/Semana_01/Dia_03/teoria"
    function idActividad() {
        const partes = decodeURIComponent(location.pathname).split('/').filter(Boolean);
        const archivo = (partes.pop() || 'pagina').replace(/\.html?$/i, '');
        const relevantes = partes.filter(p => /^(Mes_\d+|Semana_\d+|Dia_\d+)/i.test(p));
        return (relevantes.length ? relevantes.join('/') + '/' : '') + archivo;
    }

    function semanaDeLaRuta() {
        const m = decodeURIComponent(location.pathname).match(/Semana_(\d+)/i);
        return m ? parseInt(m[1], 10) : 1;
    }

    function minutosEnPagina() {
        const min = Math.round((Date.now() - cargadaEn) / 60000);
        return Math.min(Math.max(min, 1), MAX_MINUTOS_ACTIVIDAD);
    }

    // Recalcula el resumen desde cero a partir del detalle completo
    function recalcularResumen(detalle) {
        const resumen = {
            exercisesDone: 0,
            correctAnswers: 0,
            totalAnswers: 0,
            timeSpent: 0,
            currentWeek: 1
        };

        Object.values(detalle).forEach(act => {
            resumen.exercisesDone++;
            resumen.correctAnswers += act.correctas || 0;
            resumen.totalAnswers += act.total || 0;
            resumen.timeSpent += act.minutos || 0;
            resumen.currentWeek = Math.max(resumen.currentWeek, act.semana || 1);
        });

        escribir(CLAVE_RESUMEN, resumen);
        return resumen;
    }

    /**
     * Registra el resultado de la actividad actual.
     * @param {number} correctas  aciertos obtenidos
     * @param {number} total      apartados evaluables
     */
    function registrar(correctas, total, fallos) {
        const detalle = leer(CLAVE_DETALLE, {});

        detalle[idActividad()] = {
            correctas: correctas,
            total: total,
            minutos: minutosEnPagina(),
            semana: semanaDeLaRuta(),
            fecha: new Date().toISOString(),
            // Preguntas falladas, para que reaparezcan en el repaso del día
            // siguiente. Si se repite la actividad, la lista se sustituye:
            // lo que ya se domina deja de aparecer.
            fallos: Array.isArray(fallos) ? fallos.slice(0, MAX_FALLOS) : []
        };

        escribir(CLAVE_DETALLE, detalle);
        return recalcularResumen(detalle);
    }

    /*
     * Preguntas falladas en actividades ANTERIORES a la actual, de más
     * reciente a más antigua. La página de hoy las muestra al empezar, que es
     * cuando el repaso rinde: recuperar lo que fallaste ayer fija mucho más
     * que releerlo.
     */
    function fallosPendientes(limite) {
        const actual = idActividad();
        const detalle = leer(CLAVE_DETALLE, {});

        return Object.keys(detalle)
            .filter(k => k !== actual)
            .map(k => ({ clave: k, act: detalle[k] }))
            .filter(x => x.act.fallos && x.act.fallos.length)
            .sort((a, b) => (a.act.fecha < b.act.fecha ? 1 : -1))
            .flatMap(x => x.act.fallos.map(f => Object.assign({ origen: x.clave }, f)))
            .slice(0, limite || MAX_REPASO);
    }

    function detalle() {
        return leer(CLAVE_DETALLE, {});
    }

    function resumen() {
        return leer(CLAVE_RESUMEN, {
            exercisesDone: 0,
            correctAnswers: 0,
            totalAnswers: 0,
            timeSpent: 0,
            currentWeek: 1
        });
    }

    /* ------------------------------------------------------- copia de seguridad
     * El progreso vive en localStorage, que es de este navegador y de este
     * equipo: se pierde al limpiar los datos de navegación y no viaja al móvil.
     * Estas dos funciones permiten sacarlo a un fichero y volver a meterlo.
     */
    const FORMATO = 'par-asir-progreso';
    const VERSION_COPIA = 1;

    function exportar() {
        return JSON.stringify({
            formato: FORMATO,
            version: VERSION_COPIA,
            fecha: new Date().toISOString(),
            detalle: leer(CLAVE_DETALLE, {})
        }, null, 2);
    }

    // Lee la copia sin aplicarla, para poder avisar antes de tocar nada
    function analizarCopia(texto) {
        let datos;
        try {
            datos = JSON.parse(texto);
        } catch (e) {
            return { ok: false, error: 'El archivo no es un JSON válido.' };
        }
        if (!datos || datos.formato !== FORMATO || typeof datos.detalle !== 'object' || !datos.detalle) {
            return { ok: false, error: 'Este archivo no es una copia de progreso de este curso.' };
        }
        if (datos.version > VERSION_COPIA) {
            return { ok: false, error: 'La copia se hizo con una versión más nueva del curso.' };
        }

        const propias = leer(CLAVE_DETALLE, {});
        const claves = Object.keys(datos.detalle);
        return {
            ok: true,
            fecha: datos.fecha,
            actividades: claves.length,
            nuevas: claves.filter(k => !propias[k]).length,
            existentes: Object.keys(propias).length
        };
    }

    /*
     * Se FUNDE con lo que ya hay, quedándose con el resultado más reciente de
     * cada actividad. Así nunca se pierde trabajo: importar la copia del
     * portátil en el móvil suma en lugar de sustituir.
     */
    function importar(texto) {
        const info = analizarCopia(texto);
        if (!info.ok) return info;

        const entrante = JSON.parse(texto).detalle;
        const detalle = leer(CLAVE_DETALLE, {});
        let nuevas = 0, actualizadas = 0;

        Object.keys(entrante).forEach(k => {
            const act = entrante[k];
            if (!act || typeof act.total !== 'number') return;   // línea corrupta: se salta
            if (!detalle[k]) {
                detalle[k] = act; nuevas++;
            } else if ((act.fecha || '') > (detalle[k].fecha || '')) {
                detalle[k] = act; actualizadas++;
            }
        });

        escribir(CLAVE_DETALLE, detalle);
        recalcularResumen(detalle);
        return { ok: true, nuevas: nuevas, actualizadas: actualizadas };
    }

    function reiniciar() {
        try {
            localStorage.removeItem(CLAVE_DETALLE);
            localStorage.removeItem(CLAVE_RESUMEN);
        } catch (e) {
            console.warn('No se pudo borrar el progreso:', e.message);
        }
    }

    return {
        registrar: registrar,
        fallosPendientes: fallosPendientes,
        exportar: exportar,
        analizarCopia: analizarCopia,
        importar: importar,
        detalle: detalle,
        resumen: resumen,
        reiniciar: reiniciar
    };

})();
