/*
 * Componentes interactivos de la teoría del Plan Anual ASIR.
 *
 * La página declara `interactivoData` antes de cargar este script y coloca
 * los contenedores donde quiere cada componente:
 *
 *   <div id="timeline"></div>
 *   <div id="flashcards"></div>
 *   <div id="simulacion"></div>
 *   <div data-checkpoint="0"></div>     ← intercalado en la teoría
 *
 *   const interactivoData = {
 *       timeline: [ { anio, titulo, que, problema } ],
 *       flashcards: [ { frente, dorso } ],
 *       checkpoints: [ { pregunta, modelo, puntos: [] } ],
 *       simulacion: true
 *   };
 *
 * Todo es opcional: si un contenedor no existe, su componente no se monta.
 */

(function () {
    'use strict';

    const datos = typeof interactivoData !== 'undefined' ? interactivoData : {};

    // ------------------------------------------------------------- utilidades

    function crear(html) {
        const t = document.createElement('template');
        t.innerHTML = html.trim();
        return t.content.firstElementChild;
    }

    function escapar(s) {
        return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
            .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    // ------------------------------------------------------ conmutador de tema

    // El tema inicial lo aplica un script mínimo en <head> para evitar el
    // parpadeo; aquí solo añadimos el botón que lo cambia.
    function montarTema() {
        const raiz = document.documentElement;
        const btn = crear('<button class="tema-toggle" type="button" aria-label="Cambiar tema"></button>');

        function pintar() {
            const oscuro = raiz.dataset.tema === 'oscuro'
                || (raiz.dataset.tema !== 'claro'
                    && window.matchMedia('(prefers-color-scheme: dark)').matches);
            btn.textContent = oscuro ? '☀️' : '🌙';
            btn.title = oscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
        }

        btn.addEventListener('click', () => {
            const oscuro = raiz.dataset.tema === 'oscuro'
                || (raiz.dataset.tema !== 'claro'
                    && window.matchMedia('(prefers-color-scheme: dark)').matches);
            raiz.dataset.tema = oscuro ? 'claro' : 'oscuro';
            try {
                localStorage.setItem('parTema', raiz.dataset.tema);
            } catch (e) { /* modo privado: el tema no persiste, no es grave */ }
            pintar();
        });

        pintar();
        document.body.appendChild(btn);
    }

    // ------------------------------------------------------- línea de tiempo

    function montarTimeline() {
        const cont = document.getElementById('timeline');
        if (!cont || !datos.timeline) return;

        cont.classList.add('timeline');
        cont.innerHTML = datos.timeline.map((h, i) => `
            <div class="hito" data-hito="${i}">
                <span class="hito-punto" aria-hidden="true"></span>
                <button class="hito-boton" type="button" aria-expanded="false" aria-controls="hito-det-${i}">
                    <span class="hito-anio">${escapar(h.anio)}</span>
                    <span class="hito-titulo">${h.titulo}</span>
                </button>
                <div class="hito-detalle" id="hito-det-${i}">
                    <p>${h.que}</p>
                    <p class="hito-problema"><strong>Qué problema resolvió:</strong> ${h.problema}</p>
                </div>
            </div>`).join('');

        cont.querySelectorAll('.hito-boton').forEach(btn => {
            btn.addEventListener('click', () => {
                const hito = btn.closest('.hito');
                const abierto = hito.classList.toggle('abierto');
                btn.setAttribute('aria-expanded', abierto ? 'true' : 'false');
            });
        });
    }

    // ------------------------------------------------------------ flashcards

    function montarFlashcards() {
        const cont = document.getElementById('flashcards');
        if (!cont || !datos.flashcards || !datos.flashcards.length) return;

        const cartas = datos.flashcards;
        let indice = 0;
        const falladas = [];

        cont.classList.add('mazo');
        cont.innerHTML = `
            <p class="mazo-progreso" id="mazoProgreso"></p>
            <div class="flashcard" id="flashcard" tabindex="0" role="button"
                 aria-label="Pulsa para ver la respuesta">
                <div class="flashcard-inner">
                    <div class="flashcard-cara flashcard-frente">
                        <span id="fcFrente"></span>
                        <span class="flashcard-pista">Pulsa para girar</span>
                    </div>
                    <div class="flashcard-cara flashcard-dorso">
                        <span id="fcDorso"></span>
                    </div>
                </div>
            </div>
            <div class="mazo-acciones">
                <button type="button" class="btn-sec btn-sabia" id="fcSabia">La sabía</button>
                <button type="button" class="btn-sec btn-nosabia" id="fcNoSabia">No la sabía</button>
            </div>
            <div class="mazo-resumen" id="mazoResumen"></div>`;

        const tarjeta = cont.querySelector('#flashcard');
        const frente = cont.querySelector('#fcFrente');
        const dorso = cont.querySelector('#fcDorso');
        const progreso = cont.querySelector('#mazoProgreso');
        const resumen = cont.querySelector('#mazoResumen');

        function pintar() {
            if (indice >= cartas.length) return terminar();
            tarjeta.classList.remove('girada');
            frente.innerHTML = cartas[indice].frente;
            dorso.innerHTML = cartas[indice].dorso;
            progreso.textContent = `Tarjeta ${indice + 1} de ${cartas.length}`;
        }

        function terminar() {
            tarjeta.style.display = 'none';
            cont.querySelector('.mazo-acciones').style.display = 'none';
            progreso.textContent = `Mazo completado: ${cartas.length - falladas.length} de ${cartas.length} sabidas`;

            resumen.classList.add('show');
            resumen.innerHTML = falladas.length
                ? `<h3>Repasa estas ${falladas.length}</h3><ul>${
                    falladas.map(i => `<li>${cartas[i].frente}</li>`).join('')}</ul>
                   <div class="mazo-acciones" style="margin-top:16px">
                       <button type="button" class="btn-sec" id="fcRepetir">Repetir las falladas</button>
                   </div>`
                : '<h3>Perfecto</h3><p>Has sabido todas las tarjetas. Puedes pasar al quiz.</p>';

            const repetir = resumen.querySelector('#fcRepetir');
            if (repetir) {
                repetir.addEventListener('click', () => {
                    const pendientes = falladas.slice();
                    cartas.length = 0;
                    pendientes.forEach(i => cartas.push(datos.flashcards[i]));
                    falladas.length = 0;
                    indice = 0;
                    resumen.classList.remove('show');
                    tarjeta.style.display = '';
                    cont.querySelector('.mazo-acciones').style.display = '';
                    pintar();
                });
            }
        }

        function girar() {
            tarjeta.classList.toggle('girada');
        }

        tarjeta.addEventListener('click', girar);
        tarjeta.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); girar(); }
        });

        cont.querySelector('#fcSabia').addEventListener('click', () => { indice++; pintar(); });
        cont.querySelector('#fcNoSabia').addEventListener('click', () => {
            falladas.push(indice);
            indice++;
            pintar();
        });

        pintar();
    }

    // ------------------------------------------------------------ checkpoints

    // Pregunta intercalada: obliga a escribir antes de revelar la respuesta
    // modelo. Es el bloque que convierte la lectura pasiva en trabajo activo.
    const MIN_CARACTERES = 40;

    function montarCheckpoints() {
        const huecos = document.querySelectorAll('[data-checkpoint]');
        if (!huecos.length || !datos.checkpoints) return;

        huecos.forEach(hueco => {
            const i = parseInt(hueco.dataset.checkpoint, 10);
            const cp = datos.checkpoints[i];
            if (!cp) return;

            const puntos = (cp.puntos || []).map(p => `<li>${p}</li>`).join('');

            hueco.className = 'checkpoint';
            hueco.innerHTML = `
                <div class="checkpoint-cabecera">
                    <span aria-hidden="true">✍️</span>
                    <span>Párate y responde</span>
                </div>
                <div class="checkpoint-pregunta">${cp.pregunta}</div>
                <textarea id="cp-${i}" rows="4"
                          aria-label="Tu respuesta"
                          placeholder="Escribe tu respuesta con tus propias palabras..."></textarea>
                <div class="checkpoint-acciones">
                    <button type="button" class="btn-sec" id="cp-btn-${i}" disabled>Ver respuesta modelo</button>
                    <span class="checkpoint-aviso" id="cp-aviso-${i}">Escribe al menos ${MIN_CARACTERES} caracteres</span>
                </div>
                <div class="checkpoint-modelo" id="cp-mod-${i}">
                    <strong>Respuesta modelo</strong>
                    ${cp.modelo}
                    ${puntos ? `<p><strong>Comprueba que has mencionado:</strong></p><ul class="rubrica">${puntos}</ul>` : ''}
                </div>`;

            const area = hueco.querySelector(`#cp-${i}`);
            const btn = hueco.querySelector(`#cp-btn-${i}`);
            const aviso = hueco.querySelector(`#cp-aviso-${i}`);
            const modelo = hueco.querySelector(`#cp-mod-${i}`);

            area.addEventListener('input', () => {
                const n = area.value.trim().length;
                const listo = n >= MIN_CARACTERES;
                btn.disabled = !listo;
                aviso.textContent = listo
                    ? 'Ya puedes contrastar tu respuesta'
                    : `Escribe al menos ${MIN_CARACTERES} caracteres (llevas ${n})`;
            });

            btn.addEventListener('click', () => {
                modelo.classList.add('show');
                btn.disabled = true;
                aviso.textContent = 'Compara tu respuesta con la modelo y anota lo que te falte';
            });
        });
    }

    // ------------------------------ simulación de conmutación de paquetes

    // `simulacion: true` o `'paquetes'` → conmutación de paquetes vs circuitos
    // `simulacion: 'colisiones'`        → hub (medio compartido) vs switch
    function montarSimulacion() {
        const cont = document.getElementById('simulacion');
        if (!cont || !datos.simulacion) return;

        const tipo = datos.simulacion === true ? 'paquetes' : datos.simulacion;
        if (tipo === 'colisiones') return simColisiones(cont);
        return simPaquetes(cont);
    }

    function simPaquetes(cont) {
        const NODOS = {
            A: { x: 60, y: 130, etiqueta: 'A (origen)' },
            B: { x: 210, y: 50, etiqueta: 'B' },
            C: { x: 210, y: 210, etiqueta: 'C' },
            D: { x: 370, y: 50, etiqueta: 'D' },
            E: { x: 370, y: 210, etiqueta: 'E' },
            F: { x: 510, y: 130, etiqueta: 'F (destino)' }
        };
        const ENLACES = [
            ['A', 'B'], ['A', 'C'], ['B', 'D'], ['C', 'E'],
            ['B', 'C'], ['D', 'F'], ['E', 'F'], ['D', 'E']
        ];

        cont.classList.add('simulacion');
        cont.innerHTML = `
            <h3>Simulación: ¿qué pasa si se corta un enlace?</h3>
            <p>Compara cómo reacciona una red de paquetes frente a un circuito reservado cuando falla un tramo.</p>
            <canvas id="simCanvas" width="570" height="260"
                    role="img" aria-label="Red de seis nodos con paquetes viajando del origen al destino"></canvas>
            <div class="simulacion-acciones">
                <button type="button" class="btn-sec" id="simModo">Modo: conmutación de paquetes</button>
                <button type="button" class="btn-sec btn-solucion" id="simCortar">Cortar enlace B–D</button>
            </div>
            <div class="simulacion-estado" id="simEstado"></div>`;

        const canvas = cont.querySelector('#simCanvas');
        const ctx = canvas.getContext('2d');
        const btnModo = cont.querySelector('#simModo');
        const btnCortar = cont.querySelector('#simCortar');
        const estado = cont.querySelector('#simEstado');

        let modoPaquetes = true;
        let cortado = false;
        let paquetes = [];
        let entregados = 0;
        let perdidos = 0;
        let ultimoSpawn = 0;

        function activos() {
            return ENLACES.filter(([a, b]) => !(cortado && a === 'B' && b === 'D'));
        }

        // Camino más corto por anchura; con varios empates elige uno al azar
        // para que se vea el reparto de carga entre rutas.
        function ruta(desde, hasta) {
            const vecinos = {};
            activos().forEach(([a, b]) => {
                (vecinos[a] = vecinos[a] || []).push(b);
                (vecinos[b] = vecinos[b] || []).push(a);
            });
            const cola = [[desde]];
            const vistos = new Set([desde]);
            const encontrados = [];
            let profundidad = null;

            while (cola.length) {
                const camino = cola.shift();
                const fin = camino[camino.length - 1];
                if (profundidad !== null && camino.length > profundidad) break;
                if (fin === hasta) {
                    profundidad = camino.length;
                    encontrados.push(camino);
                    continue;
                }
                (vecinos[fin] || []).forEach(v => {
                    if (!camino.includes(v)) {
                        if (!vistos.has(v) || profundidad !== null) {
                            vistos.add(v);
                            cola.push(camino.concat(v));
                        }
                    }
                });
            }
            if (!encontrados.length) return null;
            return encontrados[Math.floor(Math.random() * encontrados.length)];
        }

        const RUTA_CIRCUITO = ['A', 'B', 'D', 'F'];

        function nuevoPaquete() {
            const camino = modoPaquetes ? ruta('A', 'F') : RUTA_CIRCUITO;
            if (!camino) { perdidos++; return; }
            // En modo circuito, si el enlace reservado está roto el paquete
            // no busca alternativa: se pierde. Esa es justamente la diferencia.
            if (!modoPaquetes && cortado) { perdidos++; return; }
            paquetes.push({ camino: camino, tramo: 0, t: 0 });
        }

        function dibujar() {
            const css = getComputedStyle(document.documentElement);
            const colBorde = css.getPropertyValue('--borde').trim() || '#e9ecef';
            const colTexto = css.getPropertyValue('--texto').trim() || '#2c3e50';
            const colPrim = css.getPropertyValue('--primario').trim() || '#667eea';
            const colSup = css.getPropertyValue('--superficie').trim() || '#fff';

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ENLACES.forEach(([a, b]) => {
                const roto = cortado && a === 'B' && b === 'D';
                ctx.beginPath();
                ctx.moveTo(NODOS[a].x, NODOS[a].y);
                ctx.lineTo(NODOS[b].x, NODOS[b].y);
                ctx.strokeStyle = roto ? '#dc3545' : colBorde;
                ctx.lineWidth = roto ? 2 : 3;
                ctx.setLineDash(roto ? [7, 6] : []);
                ctx.stroke();
                ctx.setLineDash([]);
            });

            paquetes.forEach(p => {
                const a = NODOS[p.camino[p.tramo]];
                const b = NODOS[p.camino[p.tramo + 1]];
                if (!b) return;
                const x = a.x + (b.x - a.x) * p.t;
                const y = a.y + (b.y - a.y) * p.t;
                ctx.beginPath();
                ctx.arc(x, y, 6, 0, Math.PI * 2);
                ctx.fillStyle = '#20c997';
                ctx.fill();
            });

            Object.keys(NODOS).forEach(k => {
                const n = NODOS[k];
                ctx.beginPath();
                ctx.arc(n.x, n.y, 20, 0, Math.PI * 2);
                ctx.fillStyle = colSup;
                ctx.fill();
                ctx.strokeStyle = colPrim;
                ctx.lineWidth = 3;
                ctx.stroke();

                ctx.fillStyle = colTexto;
                ctx.font = 'bold 14px Segoe UI, sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(k, n.x, n.y);

                ctx.font = '11px Segoe UI, sans-serif';
                ctx.fillText(n.etiqueta.replace(/^[A-F] ?/, ''), n.x, n.y + 33);
            });
        }

        function paso(ts) {
            if (ts - ultimoSpawn > 700) {
                nuevoPaquete();
                ultimoSpawn = ts;
            }
            paquetes.forEach(p => {
                p.t += 0.022;
                if (p.t >= 1) {
                    p.t = 0;
                    p.tramo++;
                    if (p.tramo >= p.camino.length - 1) {
                        p.fin = true;
                        entregados++;
                    }
                }
            });
            paquetes = paquetes.filter(p => !p.fin);

            dibujar();
            estado.innerHTML = modoPaquetes
                ? `<strong>Conmutación de paquetes.</strong> Cada paquete calcula su ruta al salir. `
                  + `Entregados: <strong>${entregados}</strong> · Perdidos: <strong>${perdidos}</strong>. `
                  + (cortado ? 'El enlace B–D está roto y los paquetes lo rodean: el servicio continúa.'
                             : 'Corta un enlace y observa que siguen llegando.')
                : `<strong>Conmutación de circuitos.</strong> Se reservó la ruta A–B–D–F. `
                  + `Entregados: <strong>${entregados}</strong> · Perdidos: <strong>${perdidos}</strong>. `
                  + (cortado ? 'Al romperse el circuito reservado la comunicación se corta: no busca alternativa.'
                             : 'Corta el enlace B–D y compara con el modo anterior.');

            requestAnimationFrame(paso);
        }

        btnModo.addEventListener('click', () => {
            modoPaquetes = !modoPaquetes;
            btnModo.textContent = 'Modo: conmutación de ' + (modoPaquetes ? 'paquetes' : 'circuitos');
            paquetes = [];
            entregados = 0;
            perdidos = 0;
        });

        btnCortar.addEventListener('click', () => {
            cortado = !cortado;
            btnCortar.textContent = cortado ? 'Reparar enlace B–D' : 'Cortar enlace B–D';
            paquetes = [];
            entregados = 0;
            perdidos = 0;
        });

        requestAnimationFrame(paso);
    }

    // ------------------- simulación de colisiones: hub frente a switch

    function simColisiones(cont) {
        const PCS = [
            { x: 70, y: 45, nombre: 'PC1' },
            { x: 70, y: 205, nombre: 'PC2' },
            { x: 500, y: 45, nombre: 'PC3' },
            { x: 500, y: 205, nombre: 'PC4' }
        ];
        const CENTRO = { x: 285, y: 125 };

        cont.classList.add('simulacion');
        cont.innerHTML = `
            <h3>Simulación: ¿por qué el hub provoca colisiones?</h3>
            <p>Los cuatro equipos intentan transmitir a la vez. Cambia de dispositivo y compara qué ocurre.</p>
            <canvas id="colCanvas" width="570" height="250"
                    role="img" aria-label="Cuatro equipos conectados a un dispositivo central intercambiando tramas"></canvas>
            <div class="simulacion-acciones">
                <button type="button" class="btn-sec" id="colModo">Dispositivo: HUB</button>
                <button type="button" class="btn-sec btn-solucion" id="colReset">Reiniciar contadores</button>
            </div>
            <div class="simulacion-estado" id="colEstado"></div>`;

        const canvas = cont.querySelector('#colCanvas');
        const ctx = canvas.getContext('2d');
        const btnModo = cont.querySelector('#colModo');
        const estado = cont.querySelector('#colEstado');

        let esHub = true;
        let tramas = [];
        let entregadas = 0;
        let colisiones = 0;
        let destello = 0;
        let ultimo = 0;

        function nuevaTrama(ts) {
            // Cada PC transmite de vez en cuando hacia otro PC al azar
            PCS.forEach((pc, i) => {
                if (Math.random() > 0.35) return;
                let destino = i;
                while (destino === i) destino = Math.floor(Math.random() * PCS.length);
                tramas.push({ origen: i, destino: destino, t: 0, ida: true, nacida: ts });
            });
        }

        function detectarColision() {
            // En un hub el medio es único: dos tramas viajando a la vez chocan
            const enVuelo = tramas.filter(t => !t.muerta);
            if (enVuelo.length > 1) {
                enVuelo.forEach(t => { t.muerta = true; });
                colisiones++;
                destello = 12;
                return true;
            }
            return false;
        }

        function dibujar() {
            const css = getComputedStyle(document.documentElement);
            const colBorde = css.getPropertyValue('--borde').trim() || '#e9ecef';
            const colTexto = css.getPropertyValue('--texto').trim() || '#2c3e50';
            const colPrim = css.getPropertyValue('--primario').trim() || '#667eea';
            const colSup = css.getPropertyValue('--superficie').trim() || '#fff';

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Enlaces
            PCS.forEach(pc => {
                ctx.beginPath();
                ctx.moveTo(pc.x, pc.y);
                ctx.lineTo(CENTRO.x, CENTRO.y);
                ctx.strokeStyle = destello > 0 ? '#dc3545' : colBorde;
                ctx.lineWidth = 3;
                ctx.stroke();
            });

            // Tramas en vuelo
            tramas.forEach(t => {
                const a = t.ida ? PCS[t.origen] : CENTRO;
                const b = t.ida ? CENTRO : PCS[t.destino];
                const x = a.x + (b.x - a.x) * t.t;
                const y = a.y + (b.y - a.y) * t.t;
                ctx.beginPath();
                ctx.arc(x, y, 7, 0, Math.PI * 2);
                ctx.fillStyle = t.muerta ? '#dc3545' : '#20c997';
                ctx.fill();
            });

            // Dispositivo central
            ctx.beginPath();
            ctx.roundRect(CENTRO.x - 55, CENTRO.y - 26, 110, 52, 10);
            ctx.fillStyle = destello > 0 ? '#f8d7da' : colSup;
            ctx.fill();
            ctx.strokeStyle = destello > 0 ? '#dc3545' : colPrim;
            ctx.lineWidth = 3;
            ctx.stroke();
            ctx.fillStyle = colTexto;
            ctx.font = 'bold 16px Segoe UI, sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(esHub ? 'HUB' : 'SWITCH', CENTRO.x, CENTRO.y - 6);
            ctx.font = '11px Segoe UI, sans-serif';
            ctx.fillText(esHub ? 'medio compartido' : 'enlaces dedicados', CENTRO.x, CENTRO.y + 12);

            // Equipos
            PCS.forEach(pc => {
                ctx.beginPath();
                ctx.roundRect(pc.x - 34, pc.y - 20, 68, 40, 8);
                ctx.fillStyle = colSup;
                ctx.fill();
                ctx.strokeStyle = colPrim;
                ctx.lineWidth = 2.5;
                ctx.stroke();
                ctx.fillStyle = colTexto;
                ctx.font = 'bold 13px Segoe UI, sans-serif';
                ctx.fillText(pc.nombre, pc.x, pc.y);
            });

            if (destello > 0) {
                ctx.fillStyle = '#dc3545';
                ctx.font = 'bold 15px Segoe UI, sans-serif';
                ctx.fillText('¡COLISIÓN!', CENTRO.x, CENTRO.y + 48);
            }
        }

        function paso(ts) {
            if (ts - ultimo > 900) {
                nuevaTrama(ts);
                ultimo = ts;
            }

            if (esHub) detectarColision();

            tramas.forEach(t => {
                t.t += 0.03;
                if (t.t >= 1) {
                    if (t.ida) { t.ida = false; t.t = 0; }
                    else { t.fin = true; if (!t.muerta) entregadas++; }
                }
            });
            // Las tramas muertas desaparecen enseguida: representan la trama
            // destruida que CSMA/CD obliga a retransmitir tras una espera.
            tramas = tramas.filter(t => !t.fin && !(t.muerta && t.t > 0.25));

            if (destello > 0) destello--;
            dibujar();

            const total = entregadas + colisiones;
            const pct = total ? Math.round((colisiones / total) * 100) : 0;
            estado.innerHTML = esHub
                ? `<strong>HUB — medio compartido, half-duplex.</strong> Solo puede transmitir uno cada vez: `
                  + `si dos coinciden, las señales se superponen y ambas tramas se destruyen. `
                  + `Entregadas: <strong>${entregadas}</strong> · Colisiones: <strong>${colisiones}</strong> (${pct} %). `
                  + 'CSMA/CD las detecta y obliga a reintentar tras una espera aleatoria.'
                : `<strong>SWITCH — enlaces dedicados, full-duplex.</strong> Cada puerto es un enlace punto a punto `
                  + `con pares separados para transmitir y recibir, así que la superposición es imposible. `
                  + `Entregadas: <strong>${entregadas}</strong> · Colisiones: <strong>${colisiones}</strong>. `
                  + 'Sin colisiones, CSMA/CD deja de ser necesario.';

            requestAnimationFrame(paso);
        }

        function reiniciar() {
            tramas = [];
            entregadas = 0;
            colisiones = 0;
            destello = 0;
        }

        btnModo.addEventListener('click', () => {
            esHub = !esHub;
            btnModo.textContent = 'Dispositivo: ' + (esHub ? 'HUB' : 'SWITCH');
            reiniciar();
        });
        cont.querySelector('#colReset').addEventListener('click', reiniciar);

        requestAnimationFrame(paso);
    }

    // ------------------------------------------- utilidades de laboratorio

    // Pestañas Windows / Linux en los bloques de comandos
    function montarTabsSO() {
        document.querySelectorAll('.so-tabs').forEach(tabs => {
            const grupo = tabs.dataset.grupo;
            tabs.querySelectorAll('.so-tab').forEach(tab => {
                tab.addEventListener('click', () => {
                    tabs.querySelectorAll('.so-tab').forEach(t => t.classList.remove('activa'));
                    tab.classList.add('activa');
                    document.querySelectorAll(`.so-panel[data-grupo="${grupo}"]`).forEach(p => {
                        p.classList.toggle('activo', p.dataset.so === tab.dataset.so);
                    });
                });
            });
        });
    }

    // Botón de copiar en los bloques de comandos
    function montarCopiar() {
        document.querySelectorAll('.comando').forEach(bloque => {
            const pre = bloque.querySelector('pre');
            if (!pre) return;
            const btn = crear('<button type="button" class="btn-copiar">Copiar</button>');
            btn.addEventListener('click', async () => {
                try {
                    await navigator.clipboard.writeText(pre.innerText.trim());
                    btn.textContent = 'Copiado';
                } catch (e) {
                    // file:// sin permisos de portapapeles: se selecciona el texto
                    const r = document.createRange();
                    r.selectNodeContents(pre);
                    window.getSelection().removeAllRanges();
                    window.getSelection().addRange(r);
                    btn.textContent = 'Seleccionado';
                }
                setTimeout(() => { btn.textContent = 'Copiar'; }, 1800);
            });
            bloque.appendChild(btn);
        });
    }

    /* ------------------------------------------------- repaso de fallos
     * Muestra al empezar el día las preguntas que se fallaron en
     * actividades anteriores. Primero hay que intentar recordarlas: el
     * botón revela la respuesta, no al revés. Si no hay nada pendiente el
     * bloque no aparece, para no meter ruido.
     */
    function montarRepasoFallos() {
        const caja = document.getElementById('repaso-fallos');
        if (!caja) return;

        if (typeof PARProgreso === 'undefined' || !PARProgreso.fallosPendientes) return;

        let pendientes = [];
        try { pendientes = PARProgreso.fallosPendientes(); } catch (e) { return; }
        if (!pendientes.length) return;

        const titulo = document.createElement('h3');
        titulo.className = 'repaso-fallos-titulo';
        titulo.innerHTML = '🔁 Antes de empezar: lo que fallaste';
        caja.appendChild(titulo);

        const intro = document.createElement('p');
        intro.className = 'repaso-fallos-intro';
        intro.innerHTML = pendientes.length === 1
            ? 'Quedó <strong>una pregunta</strong> sin acertar. Intenta responderla de memoria antes de descubrirla.'
            : `Quedaron <strong>${pendientes.length} preguntas</strong> sin acertar. `
              + 'Intenta responderlas de memoria antes de descubrirlas: recuperar fija mucho más que releer.';
        caja.appendChild(intro);

        pendientes.forEach((f, n) => {
            const item = document.createElement('div');
            item.className = 'repaso-fallo';

            const origen = f.titulo ? `<span class="repaso-fallo-origen">${f.titulo}</span>` : '';
            const enlace = f.repaso
                ? ` · <a href="${f.repaso}">Ver en la teoría</a>`
                : '';

            item.innerHTML = `
                ${origen}
                <div class="repaso-fallo-pregunta">${f.texto}</div>
                <button type="button" class="btn-sec repaso-fallo-btn">Ver la respuesta</button>
                <div class="repaso-fallo-solucion" hidden>
                    <strong>Respuesta:</strong> ${f.solucion || '—'}
                    ${f.porque ? `<p>${f.porque}</p>` : ''}
                    <p class="repaso-fallo-meta">${f.tema || ''}${enlace}</p>
                </div>`;

            const btn = item.querySelector('.repaso-fallo-btn');
            const sol = item.querySelector('.repaso-fallo-solucion');
            btn.addEventListener('click', () => {
                sol.hidden = false;
                btn.remove();
            });

            caja.appendChild(item);
        });

        caja.classList.add('activo');
    }

    // ------------------------------------------------------------- arranque

    function iniciar() {
        montarTema();
        montarRepasoFallos();
        montarTimeline();
        montarFlashcards();
        montarCheckpoints();
        montarSimulacion();
        montarTabsSO();
        montarCopiar();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', iniciar);
    } else {
        iniciar();
    }
})();
