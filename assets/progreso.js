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
    function registrar(correctas, total) {
        const detalle = leer(CLAVE_DETALLE, {});

        detalle[idActividad()] = {
            correctas: correctas,
            total: total,
            minutos: minutosEnPagina(),
            semana: semanaDeLaRuta(),
            fecha: new Date().toISOString()
        };

        escribir(CLAVE_DETALLE, detalle);
        return recalcularResumen(detalle);
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
        detalle: detalle,
        resumen: resumen,
        reiniciar: reiniciar
    };

})();
