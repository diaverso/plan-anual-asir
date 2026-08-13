/*
 * Motor de ejercicios interactivos del Plan Anual ASIR.
 *
 * Cada ejercicios.html define una variable global `ejerciciosData` antes de
 * cargar este script. Tipos admitidos: texto, numero, opcion, ordenar,
 * relacionar, tabla y desarrollo.
 *
 *   const ejerciciosData = {
 *       titulo: 'Día 1 — Ejercicios',
 *       subtitulo: '¿Qué es una red? · Historia',
 *       tiempo: '70 min',
 *       ejercicios: [
 *           {
 *               titulo: 'EJERCICIO 1: Ventajas de las redes',
 *               tiempo: '20 min',
 *               enunciado: '<p>Texto HTML del enunciado</p>',
 *               items: [ ... ]
 *           }
 *       ]
 *   };
 *
 * Los ítems de tipo `desarrollo` no puntúan: exigen escribir una respuesta y
 * después muestran una solución modelo con su rúbrica para autoevaluarse.
 */

// ---------------------------------------------------------------- utilidades

// Normaliza texto para comparar: sin mayúsculas, acentos, espacios sobrantes
// ni puntuación final. Así "Compartición de recursos." == "comparticion de recursos"
function normalizar(texto) {
    return String(texto)
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/[.,;:!?]+$/, '')
        .trim();
}

function esTextoCorrecto(valor, respuestas) {
    const v = normalizar(valor);
    if (!v) return false;
    return respuestas.some(r => normalizar(r) === v);
}

function esNumeroCorrecto(valor, item) {
    const v = parseFloat(String(valor).replace(',', '.'));
    if (isNaN(v)) return false;
    const tolerancia = item.tolerancia !== undefined ? item.tolerancia : 0.01;
    return Math.abs(v - item.respuesta) <= tolerancia;
}

/*
 * Validadores por regla, para los laboratorios: allí cada máquina da datos
 * distintos, así que no se puede comparar con una respuesta fija. Lo que se
 * comprueba es que el dato tenga la FORMA correcta.
 */
const VALIDADORES = {
    ipv4: {
        prueba: v => /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.test(v.trim())
            && v.trim().split('.').every(o => +o >= 0 && +o <= 255),
        error: 'Eso no es una IPv4 válida. Son cuatro números de 0 a 255 separados por puntos, por ejemplo 192.168.1.34.'
    },
    ipv4_privada: {
        prueba: v => {
            const t = v.trim();
            if (!VALIDADORES.ipv4.prueba(t)) return false;
            const [a, b] = t.split('.').map(Number);
            return a === 10
                || (a === 172 && b >= 16 && b <= 31)
                || (a === 192 && b === 168);
        },
        error: 'No está en ningún rango privado. Los rangos privados son 10.x.x.x, de 172.16.x.x a 172.31.x.x y 192.168.x.x.'
    },
    // Acepta IPv4 o IPv6. Necesario para la puerta de enlace y el DNS: en
    // muchos equipos actuales Windows muestra ahí una IPv6 de enlace local
    // (fe80::...), y rechazarla sería marcar como error un dato correcto.
    ip: {
        prueba: v => {
            const t = v.trim().replace(/%\w+$/, '');   // quita el %18 de scope
            if (VALIDADORES.ipv4.prueba(t)) return true;
            return /^[0-9a-f:]+$/i.test(t) && t.includes('::')
                || /^([0-9a-f]{1,4}:){7}[0-9a-f]{1,4}$/i.test(t);
        },
        error: 'No parece una dirección IP. Se admite IPv4 (192.168.1.1) o IPv6 (fe80::e6ab:89ff:feb8:6f38).'
    },
    mascara: {
        prueba: v => {
            const t = v.trim();
            if (/^\/\d{1,2}$/.test(t)) return +t.slice(1) >= 0 && +t.slice(1) <= 32;
            if (!VALIDADORES.ipv4.prueba(t)) return false;
            // Una máscara válida es una tira de unos seguida de una de ceros
            const bits = t.split('.').map(o => (+o).toString(2).padStart(8, '0')).join('');
            return /^1*0*$/.test(bits);
        },
        error: 'No es una máscara válida. Debe ser del tipo 255.255.255.0 (unos seguidos de ceros) o en formato /24.'
    },
    mac: {
        prueba: v => /^([0-9a-f]{2}[:-]){5}[0-9a-f]{2}$/i.test(v.trim()),
        error: 'No es una MAC válida. Son 6 pares hexadecimales separados por dos puntos o guiones, por ejemplo 00:1B:44:11:3A:B7.'
    },
    entero_positivo: {
        prueba: v => /^\d+$/.test(v.trim()) && +v > 0,
        error: 'Debe ser un número entero mayor que cero.'
    },
    numero: {
        prueba: v => !isNaN(parseFloat(String(v).replace(',', '.'))),
        error: 'Debe ser un número.'
    },
    texto: {
        prueba: v => v.trim().length >= 2,
        error: 'Escribe algo más concreto.'
    }
};

function validarPorRegla(valor, item) {
    /*
     * Validador `salida`: comprueba que el estudiante ha pegado la salida REAL
     * de un comando, verificando que contiene los fragmentos característicos
     * declarados en `item.debe`. Impide resolver el laboratorio de cabeza sin
     * abrir la terminal, que es justo lo que hay que evitar.
     */
    if (item.validador === 'salida') {
        const t = normalizar(valor);
        if (t.length < (item.minimo || 40)) {
            return { ok: false, error: 'Pega la salida completa del comando, no un resumen.' };
        }
        const faltan = (item.debe || []).filter(grupo => {
            const opciones = Array.isArray(grupo) ? grupo : [grupo];
            return !opciones.some(f => t.includes(normalizar(f)));
        });
        if (faltan.length) {
            const muestra = faltan.map(g => Array.isArray(g) ? g[0] : g);
            return {
                ok: false,
                error: `No encuentro en lo que has pegado: <code>${muestra.join('</code>, <code>')}</code>. `
                     + 'Comprueba que has ejecutado el comando indicado y que copias su salida entera.'
            };
        }
        return { ok: true };
    }

    const v = VALIDADORES[item.validador];
    if (!v) return { ok: false, error: 'Validador desconocido: ' + item.validador };
    return v.prueba(valor) ? { ok: true } : { ok: false, error: v.error };
}

function escapar(texto) {
    return String(texto)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

// Identificador único de cada ítem: e0i1, e2i0...
function idItem(e, i) {
    return 'e' + e + 'i' + i;
}

// ------------------------------------------------------------------ pintado

function pintarTexto(id, item) {
    const ancho = item.ancho || '320px';
    return `<input type="text" class="resp-texto" id="${id}" style="max-width:${ancho}"
                   placeholder="${escapar(item.placeholder || 'Tu respuesta')}" autocomplete="off">`;
}

function pintarNumero(id, item) {
    const unidad = item.unidad ? `<span class="unidad">${escapar(item.unidad)}</span>` : '';
    return `<span class="resp-numero-wrap">
                <input type="text" inputmode="decimal" class="resp-texto resp-numero" id="${id}"
                       placeholder="0" autocomplete="off">${unidad}
            </span>`;
}

function pintarOpcion(id, item) {
    const tipo = item.multiple ? 'checkbox' : 'radio';
    return '<div class="opciones-ej">' + Object.keys(item.opciones).map(letra => `
        <div class="opcion-ej">
            <input type="${tipo}" id="${id}_${letra}" name="${id}" value="${letra}">
            <label for="${id}_${letra}">${item.opciones[letra]}</label>
        </div>`).join('') + '</div>';
}

function pintarOrdenar(id, item) {
    const posiciones = item.elementos.map((_, n) => `<option value="${n + 1}">${n + 1}</option>`).join('');
    return '<div class="lista-ordenar">' + item.elementos.map((el, n) => `
        <div class="fila-ordenar" data-elemento="${escapar(el)}">
            <select id="${id}_${n}" class="sel-orden"><option value="">–</option>${posiciones}</select>
            <span>${el}</span>
        </div>`).join('') + '</div>';
}

function pintarRelacionar(id, item) {
    const opciones = item.derecha.map(d => `<option value="${escapar(d)}">${escapar(d)}</option>`).join('');
    return '<div class="lista-relacionar">' + item.izquierda.map((izq, n) => `
        <div class="fila-relacionar">
            <span class="rel-izq">${izq}</span>
            <select id="${id}_${n}" class="sel-relacion"><option value="">– elige –</option>${opciones}</select>
        </div>`).join('') + '</div>';
}

function pintarTabla(id, item) {
    const cabecera = item.cabecera.map(c => `<th>${c}</th>`).join('');
    const filas = item.filas.map((fila, f) => {
        const celdas = fila.celdas.map((celda, c) => {
            if (celda.fijo !== undefined) {
                return `<td>${celda.fijo}</td>`;
            }
            return `<td><input type="text" class="resp-texto resp-celda" id="${id}_${f}_${c}"
                              placeholder="${escapar(celda.placeholder || '...')}" autocomplete="off"></td>`;
        }).join('');
        return `<tr><th scope="row">${fila.etiqueta}</th>${celdas}</tr>`;
    }).join('');

    return `<div class="tabla-wrap"><table class="tabla-ej">
                <thead><tr><th>${item.esquina || ''}</th>${cabecera}</tr></thead>
                <tbody>${filas}</tbody>
            </table></div>`;
}

function pintarDesarrollo(id, item) {
    return `<textarea class="resp-desarrollo" id="${id}" rows="${item.filas || 6}"
                      placeholder="Escribe aquí tu respuesta antes de ver la solución modelo"></textarea>`;
}

// Frase con huecos: el texto lleva marcas {{0}}, {{1}}... que se sustituyen
// por campos de entrada.
function pintarHuecos(id, item) {
    const frase = item.frase.replace(/\{\{(\d+)\}\}/g, (m, n) =>
        `<input type="text" class="hueco" id="${id}_${n}" autocomplete="off"
                aria-label="Hueco ${(+n) + 1}">`);
    return `<div class="frase-huecos">${frase}</div>`;
}

// Campo validado por regla (para laboratorios con datos propios de cada equipo).
// Con `multilinea` se convierte en área de pegado para salidas de comandos.
function pintarValidado(id, item) {
    if (item.multilinea) {
        return `<textarea class="resp-desarrollo resp-salida" id="${id}" rows="${item.filas || 8}"
                          spellcheck="false"
                          placeholder="${escapar(item.placeholder || 'Pega aquí la salida del comando')}"></textarea>`;
    }
    const ayuda = item.ayuda ? `<span class="unidad">${escapar(item.ayuda)}</span>` : '';
    return `<span class="resp-numero-wrap">
                <input type="text" class="resp-texto" id="${id}" style="max-width:${item.ancho || '300px'}"
                       placeholder="${escapar(item.placeholder || 'Tu dato')}" autocomplete="off">${ayuda}
            </span>`;
}

const PINTORES = {
    texto: pintarTexto,
    numero: pintarNumero,
    opcion: pintarOpcion,
    ordenar: pintarOrdenar,
    relacionar: pintarRelacionar,
    tabla: pintarTabla,
    desarrollo: pintarDesarrollo,
    huecos: pintarHuecos,
    validado: pintarValidado
};

function pintarItem(e, i, item) {
    const id = idItem(e, i);
    const pintor = PINTORES[item.tipo];
    if (!pintor) {
        return `<div class="item-ej"><p class="aviso">Tipo de ejercicio desconocido: ${escapar(item.tipo)}</p></div>`;
    }

    const pregunta = item.pregunta ? `<div class="pregunta-ej">${item.pregunta}</div>` : '';

    let etiqueta = '';
    if (item.tipo === 'desarrollo') {
        etiqueta = '<span class="etiqueta-ej">Autoevaluación</span>';
    } else if (item.tipo === 'validado') {
        etiqueta = '<span class="etiqueta-ej">Dato de tu equipo</span>';
    }

    // Pistas progresivas: se revelan de una en una, antes de la solución.
    const pistas = (item.pistas && item.pistas.length)
        ? `<div class="pistas">
               <button type="button" class="btn-pista" data-pistas="${id}">
                   Necesito una pista (${item.pistas.length})
               </button>
               <div id="pistas_${id}"></div>
           </div>`
        : '';

    return `
        <div class="item-ej" data-item="${id}">
            ${etiqueta}
            ${pregunta}
            ${pintor(id, item)}
            ${pistas}
            <div class="feedback-ej" id="fb_${id}"></div>
        </div>`;
}

// Revela la siguiente pista del ítem y desactiva el botón al agotarlas
function revelarPista(e, i) {
    const item = ejerciciosData.ejercicios[e].items[i];
    const id = idItem(e, i);
    const cont = document.getElementById('pistas_' + id);
    const btn = document.querySelector(`.btn-pista[data-pistas="${id}"]`);
    const dadas = cont.querySelectorAll('.pista').length;

    if (dadas >= item.pistas.length) return;

    const p = document.createElement('div');
    p.className = 'pista';
    p.innerHTML = `<span class="pista-num">Pista ${dadas + 1}:</span>${item.pistas[dadas]}`;
    cont.appendChild(p);

    const quedan = item.pistas.length - (dadas + 1);
    if (quedan > 0) {
        btn.textContent = `Necesito otra pista (${quedan})`;
    } else {
        btn.textContent = 'No quedan más pistas';
        btn.disabled = true;
    }
}

function pintarEjercicios() {
    const cont = document.getElementById('ejercicios');
    cont.innerHTML = ejerciciosData.ejercicios.map((ej, e) => {
        const tiempo = ej.tiempo ? `<span class="tiempo-ej">${escapar(ej.tiempo)}</span>` : '';
        const items = ej.items.map((item, i) => pintarItem(e, i, item)).join('');
        return `
        <section class="ejercicio" data-ejercicio="${e}">
            <div class="ejercicio-header">
                <h2>${ej.titulo}</h2>
                ${tiempo}
            </div>
            <div class="enunciado">${ej.enunciado || ''}</div>
            ${items}
            <div class="ejercicio-acciones">
                <button class="btn-sec" onclick="corregirEjercicio(${e})">Corregir este ejercicio</button>
                <button class="btn-sec btn-solucion" onclick="verSolucion(${e})">Ver solución</button>
            </div>
        </section>`;
    }).join('');
}

// --------------------------------------------------------------- corrección

// Devuelve { correcto, detalle } para un ítem concreto.
// `detalle` describe qué partes están mal, para dar feedback útil.
function corregirItem(e, i, item) {
    const id = idItem(e, i);

    if (item.tipo === 'texto') {
        const el = document.getElementById(id);
        const ok = esTextoCorrecto(el.value, item.respuestas);
        marcarCampo(el, ok, el.value.trim() !== '');
        return { correcto: ok, respondido: el.value.trim() !== '' };
    }

    if (item.tipo === 'numero') {
        const el = document.getElementById(id);
        const ok = esNumeroCorrecto(el.value, item);
        marcarCampo(el, ok, el.value.trim() !== '');
        return { correcto: ok, respondido: el.value.trim() !== '' };
    }

    if (item.tipo === 'opcion') {
        const marcados = [...document.querySelectorAll(`input[name="${id}"]:checked`)].map(x => x.value);
        const esperadas = Array.isArray(item.respuesta) ? item.respuesta : [item.respuesta];
        const ok = marcados.length === esperadas.length && esperadas.every(r => marcados.includes(r));

        document.querySelectorAll(`input[name="${id}"]`).forEach(input => {
            const fila = input.parentElement;
            fila.classList.remove('correct', 'incorrect');
            if (esperadas.includes(input.value)) {
                fila.classList.add('correct');
            } else if (input.checked) {
                fila.classList.add('incorrect');
            }
        });
        return { correcto: ok, respondido: marcados.length > 0 };
    }

    if (item.tipo === 'ordenar') {
        let ok = true;
        let respondido = false;
        item.elementos.forEach((el, n) => {
            const sel = document.getElementById(`${id}_${n}`);
            if (sel.value) respondido = true;
            const posicionCorrecta = item.orden.indexOf(el) + 1;
            const acierto = parseInt(sel.value, 10) === posicionCorrecta;
            if (!acierto) ok = false;
            marcarCampo(sel, acierto, sel.value !== '');
        });
        return { correcto: ok, respondido: respondido };
    }

    if (item.tipo === 'relacionar') {
        let ok = true;
        let respondido = false;
        item.izquierda.forEach((izq, n) => {
            const sel = document.getElementById(`${id}_${n}`);
            if (sel.value) respondido = true;
            const acierto = normalizar(sel.value) === normalizar(item.pares[izq]);
            if (!acierto) ok = false;
            marcarCampo(sel, acierto, sel.value !== '');
        });
        return { correcto: ok, respondido: respondido };
    }

    if (item.tipo === 'tabla') {
        let ok = true;
        let respondido = false;
        let fallos = 0;
        item.filas.forEach((fila, f) => {
            fila.celdas.forEach((celda, c) => {
                if (celda.fijo !== undefined) return;
                const input = document.getElementById(`${id}_${f}_${c}`);
                if (input.value.trim()) respondido = true;
                const acierto = esTextoCorrecto(input.value, celda.respuestas);
                if (!acierto) { ok = false; fallos++; }
                marcarCampo(input, acierto, input.value.trim() !== '');
            });
        });
        return { correcto: ok, respondido: respondido, fallos: fallos };
    }

    if (item.tipo === 'huecos') {
        let ok = true;
        let respondido = false;
        item.respuestas.forEach((valid, n) => {
            const input = document.getElementById(`${id}_${n}`);
            if (!input) return;
            if (input.value.trim()) respondido = true;
            const acierto = esTextoCorrecto(input.value, valid);
            if (!acierto) ok = false;
            marcarCampo(input, acierto, input.value.trim() !== '');
        });
        return { correcto: ok, respondido: respondido };
    }

    if (item.tipo === 'validado') {
        const el = document.getElementById(id);
        const escrito = el.value.trim() !== '';
        const res = escrito ? validarPorRegla(el.value, item) : { ok: false };
        marcarCampo(el, res.ok, escrito);
        return { correcto: res.ok, respondido: escrito, motivo: res.error };
    }

    if (item.tipo === 'desarrollo') {
        const el = document.getElementById(id);
        return { correcto: null, respondido: el.value.trim().length >= 20 };
    }

    return { correcto: false, respondido: false };
}

function marcarCampo(el, correcto, respondido) {
    el.classList.remove('campo-ok', 'campo-mal');
    if (!respondido) return;
    el.classList.add(correcto ? 'campo-ok' : 'campo-mal');
}

// Feedback de un ítem: solo se revela tras corregir o pedir la solución
function mostrarFeedbackItem(e, i, item, resultado, revelarSolucion) {
    const fb = document.getElementById('fb_' + idItem(e, i));

    if (item.tipo === 'desarrollo') {
        if (!resultado.respondido && !revelarSolucion) {
            fb.className = 'feedback-ej show pendiente';
            fb.innerHTML = '<strong>Escribe tu respuesta primero.</strong> Necesitas redactar al menos unas líneas antes de ver la solución modelo.';
            return;
        }
        const rubrica = (item.rubrica || []).map(p => `<li>${p}</li>`).join('');
        fb.className = 'feedback-ej show modelo';
        fb.innerHTML = `
            <strong>Solución modelo</strong>
            ${item.modelo}
            ${rubrica ? `<p><strong>Comprueba que tu respuesta incluye:</strong></p><ul class="rubrica">${rubrica}</ul>` : ''}`;
        return;
    }

    if (!resultado.respondido && !revelarSolucion) {
        fb.className = 'feedback-ej show pendiente';
        fb.innerHTML = '<strong>Sin responder.</strong> Contesta antes de corregir.';
        return;
    }

    const explicacion = item.explicacion ? `<div class="explicacion">${item.explicacion}</div>` : '';

    if (resultado.correcto) {
        fb.className = 'feedback-ej show correcto';
        fb.innerHTML = `<strong>Correcto</strong>${explicacion}`;
    } else {
        fb.className = 'feedback-ej show incorrecto';
        // En los ítems validados el fallo es de formato, no de contenido:
        // se explica qué forma debía tener el dato en lugar de dar «la» solución.
        const titulo = item.tipo === 'validado' ? 'Revisa este dato' : 'Incorrecto';
        const motivo = resultado.motivo ? `<p>${resultado.motivo}</p>` : textoSolucion(item);
        fb.innerHTML = `<strong>${titulo}</strong>${motivo}${explicacion}`;
    }
}

// Redacta la solución de un ítem según su tipo
function textoSolucion(item) {
    if (item.tipo === 'texto') {
        return `<p>Respuesta válida: <em>${escapar(item.respuestas[0])}</em></p>`;
    }
    if (item.tipo === 'numero') {
        return `<p>Respuesta: <em>${item.respuesta}${item.unidad ? ' ' + item.unidad : ''}</em></p>`;
    }
    if (item.tipo === 'opcion') {
        const esperadas = Array.isArray(item.respuesta) ? item.respuesta : [item.respuesta];
        return `<p>Opción correcta: <em>${esperadas.map(r => r.toUpperCase()).join(', ')}</em></p>`;
    }
    if (item.tipo === 'ordenar') {
        return `<p>Orden correcto: <em>${item.orden.map((x, n) => `${n + 1}. ${x}`).join(' · ')}</em></p>`;
    }
    if (item.tipo === 'relacionar') {
        const pares = item.izquierda.map(izq => `<li>${izq} → <em>${escapar(item.pares[izq])}</em></li>`).join('');
        return `<ul class="rubrica">${pares}</ul>`;
    }
    if (item.tipo === 'tabla') {
        return '<p>Revisa las casillas marcadas en rojo: contienen la respuesta incorrecta.</p>';
    }
    if (item.tipo === 'huecos') {
        const sol = item.respuestas.map((r, n) => `<li>Hueco ${n + 1}: <em>${escapar(r[0])}</em></li>`).join('');
        return `<ul class="rubrica">${sol}</ul>`;
    }
    if (item.tipo === 'validado') {
        // No hay solución única: el dato es propio de cada equipo
        return '';
    }
    return '';
}

function corregirEjercicio(e, revelarSolucion) {
    const ej = ejerciciosData.ejercicios[e];
    ej.items.forEach((item, i) => {
        const resultado = corregirItem(e, i, item);
        mostrarFeedbackItem(e, i, item, resultado, revelarSolucion === true);
    });
    actualizarProgreso();
}

function verSolucion(e) {
    // Rellena los campos con la solución y después muestra el feedback completo
    const ej = ejerciciosData.ejercicios[e];
    ej.items.forEach((item, i) => {
        const id = idItem(e, i);

        if (item.tipo === 'texto' || item.tipo === 'numero') {
            const el = document.getElementById(id);
            if (!el.value.trim()) {
                el.value = item.tipo === 'numero' ? item.respuesta : item.respuestas[0];
            }
        } else if (item.tipo === 'ordenar') {
            item.elementos.forEach((el, n) => {
                const sel = document.getElementById(`${id}_${n}`);
                if (!sel.value) sel.value = item.orden.indexOf(el) + 1;
            });
        } else if (item.tipo === 'relacionar') {
            item.izquierda.forEach((izq, n) => {
                const sel = document.getElementById(`${id}_${n}`);
                if (!sel.value) sel.value = item.pares[izq];
            });
        } else if (item.tipo === 'tabla') {
            item.filas.forEach((fila, f) => {
                fila.celdas.forEach((celda, c) => {
                    if (celda.fijo !== undefined) return;
                    const input = document.getElementById(`${id}_${f}_${c}`);
                    if (!input.value.trim()) input.value = celda.respuestas[0];
                });
            });
        } else if (item.tipo === 'huecos') {
            item.respuestas.forEach((valid, n) => {
                const input = document.getElementById(`${id}_${n}`);
                if (input && !input.value.trim()) input.value = valid[0];
            });
        }
        // 'validado' no se rellena: el dato depende del equipo del estudiante
    });

    corregirEjercicio(e, true);
}

function corregirTodo() {
    ejerciciosData.ejercicios.forEach((_, e) => corregirEjercicio(e));

    let correctos = 0;
    let evaluables = 0;
    let desarrollo = 0;

    ejerciciosData.ejercicios.forEach((ej, e) => {
        ej.items.forEach((item, i) => {
            if (item.tipo === 'desarrollo') {
                desarrollo++;
                return;
            }
            evaluables++;
            if (corregirItem(e, i, item).correcto) correctos++;
        });
    });

    const pct = evaluables ? Math.round((correctos / evaluables) * 100) : 0;

    document.getElementById('score').textContent = pct + '%';
    document.getElementById('correct').textContent = correctos;
    document.getElementById('total').textContent = evaluables;
    document.getElementById('incorrect').textContent = evaluables - correctos;

    const verdict = document.getElementById('verdict');
    let texto;
    if (pct >= 90) {
        texto = '<strong style="color: #28a745;">EXCELENTE</strong> - Dominas los ejercicios del día';
    } else if (pct >= 70) {
        texto = '<strong style="color: #20c997;">MUY BIEN</strong> - Buen nivel, revisa los fallos';
    } else if (pct >= 50) {
        texto = '<strong style="color: #ffc107;">APROBADO</strong> - Repasa los apartados fallados';
    } else {
        texto = '<strong style="color: #dc3545;">INSUFICIENTE</strong> - Vuelve a la teoría antes de continuar';
    }
    if (desarrollo) {
        texto += `<br><span style="font-size:0.85em;opacity:0.9">${desarrollo} apartado(s) de desarrollo se autoevalúan y no puntúan.</span>`;
    }
    verdict.innerHTML = texto;

    // Guardar el resultado para el panel del Centro de Aprendizaje.
    // Si progreso.js no está cargado, los ejercicios siguen funcionando igual.
    if (typeof PARProgreso !== 'undefined') {
        PARProgreso.registrar(correctos, evaluables);
    }

    document.getElementById('results').classList.add('show');
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

function reiniciar() {
    document.querySelectorAll('.resp-texto, .resp-desarrollo').forEach(el => {
        el.value = '';
        el.classList.remove('campo-ok', 'campo-mal');
    });
    document.querySelectorAll('select').forEach(el => {
        el.value = '';
        el.classList.remove('campo-ok', 'campo-mal');
    });
    document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(el => {
        el.checked = false;
        el.parentElement.classList.remove('correct', 'incorrect');
    });
    document.querySelectorAll('.feedback-ej').forEach(fb => {
        fb.className = 'feedback-ej';
        fb.innerHTML = '';
    });
    document.getElementById('results').classList.remove('show');
    actualizarProgreso();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Progreso = apartados con alguna respuesta escrita, sobre el total
function actualizarProgreso() {
    let total = 0;
    let respondidos = 0;

    ejerciciosData.ejercicios.forEach((ej, e) => {
        ej.items.forEach((item, i) => {
            total++;
            const id = idItem(e, i);
            let hay = false;

            if (item.tipo === 'texto' || item.tipo === 'numero'
                || item.tipo === 'desarrollo' || item.tipo === 'validado') {
                hay = document.getElementById(id).value.trim() !== '';
            } else if (item.tipo === 'huecos') {
                hay = item.respuestas.some((_, n) => {
                    const el = document.getElementById(`${id}_${n}`);
                    return el && el.value.trim() !== '';
                });
            } else if (item.tipo === 'opcion') {
                hay = document.querySelector(`input[name="${id}"]:checked`) !== null;
            } else if (item.tipo === 'ordenar') {
                hay = item.elementos.some((_, n) => document.getElementById(`${id}_${n}`).value !== '');
            } else if (item.tipo === 'relacionar') {
                hay = item.izquierda.some((_, n) => document.getElementById(`${id}_${n}`).value !== '');
            } else if (item.tipo === 'tabla') {
                hay = item.filas.some((fila, f) => fila.celdas.some((celda, c) =>
                    celda.fijo === undefined && document.getElementById(`${id}_${f}_${c}`).value.trim() !== ''));
            }

            if (hay) respondidos++;
        });
    });

    const pct = total ? Math.round((respondidos / total) * 100) : 0;
    document.getElementById('progressBar').style.width = pct + '%';
    const txt = document.getElementById('progressTexto');
    if (txt) txt.textContent = `${respondidos} de ${total} apartados`;
}

// ------------------------------------------------------------------- inicio

function iniciar() {
    const cabecera = document.getElementById('ejTitulo');
    if (cabecera) cabecera.textContent = ejerciciosData.titulo;
    const sub = document.getElementById('ejSubtitulo');
    if (sub) sub.textContent = ejerciciosData.subtitulo || '';
    const tiempo = document.getElementById('ejTiempo');
    if (tiempo) tiempo.textContent = ejerciciosData.tiempo || '';

    pintarEjercicios();

    document.querySelectorAll('.resp-texto, .resp-desarrollo, .hueco, select').forEach(el => {
        el.addEventListener('input', actualizarProgreso);
        el.addEventListener('change', actualizarProgreso);
    });
    document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(el => {
        el.addEventListener('change', actualizarProgreso);
    });

    // Botones de pista: el id del ítem viaja en data-pistas ("e0i2")
    document.querySelectorAll('.btn-pista').forEach(btn => {
        const m = btn.dataset.pistas.match(/^e(\d+)i(\d+)$/);
        if (!m) return;
        btn.addEventListener('click', () => revelarPista(+m[1], +m[2]));
    });

    actualizarProgreso();
}

iniciar();
