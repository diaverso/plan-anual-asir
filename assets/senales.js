/*
 * Visualizadores de señales del Mes 2 (capa física).
 *
 * La página coloca un contenedor por visualizador y este script lo monta:
 *
 *   <div class="senal" data-senal="fourier"></div>       Día 1 · armónicos y ancho de banda
 *   <div class="senal" data-senal="codificacion"></div>  Día 2 · NRZ, Manchester, multinivel
 *   <div class="senal" data-senal="modulacion"></div>    Día 3 · ASK, FSK, PSK y QAM-16
 *   <div class="senal" data-senal="ruido"></div>         Día 4 · ruido, S/N y errores
 *
 * Atributos opcionales:
 *   data-modo="bits"         (fourier) arranca con la secuencia 01100010 del libro
 *   data-bits="01001101"     (codificacion, modulacion) bits iniciales
 *
 * Todo se CALCULA y se dibuja; el audio del modo Fourier es opcional. Así funciona
 * sin altavoces, sin conexión y se puede verificar en un navegador sin cabeza.
 */

(function () {
    'use strict';

    // ------------------------------------------------------------- utilidades

    function colores() {
        const css = getComputedStyle(document.documentElement);
        const v = (n, d) => css.getPropertyValue(n).trim() || d;
        return {
            texto: v('--texto', '#2c3e50'),
            tenue: v('--texto-tenue', '#868e96'),
            borde: v('--borde', '#e9ecef'),
            prim: v('--primario', '#667eea'),
            mal: v('--mal-bd', '#dc3545'),
            ok: v('--ok-bd', '#28a745'),
            avi: v('--avi-bd', '#ffc107'),
            sup: v('--superficie', '#ffffff')
        };
    }

    // Lienzo nítido en pantallas de alta densidad: el tamaño lógico se fija
    // en el HTML y aquí se multiplica el búfer por devicePixelRatio.
    function preparar(canvas) {
        const w = +canvas.getAttribute('width');
        const h = +canvas.getAttribute('height');
        const dpr = Math.min(window.devicePixelRatio || 1, 3);
        if (!canvas.dataset.w) {
            canvas.dataset.w = w;
            canvas.dataset.h = h;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
        }
        const ctx = canvas.getContext('2d');
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, w, h);
        return { ctx, w: +canvas.dataset.w, h: +canvas.dataset.h };
    }

    function fmt(n, dec) {
        return Number(n).toLocaleString('es-ES', {
            minimumFractionDigits: dec || 0, maximumFractionDigits: dec || 0
        });
    }

    function limpiarBits(s, porDefecto) {
        const b = String(s || '').replace(/[^01]/g, '').slice(0, 16);
        return b.length ? b : porDefecto;
    }

    // Generador pseudoaleatorio con semilla: la misma semilla da siempre el
    // mismo ruido, para que dos alumnos comparen la misma muestra.
    function azar(semilla) {
        let a = semilla >>> 0;
        return function () {
            a = (a + 0x6D2B79F5) >>> 0;
            let t = a;
            t = Math.imul(t ^ (t >>> 15), t | 1);
            t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
    }

    function gauss(rnd) {
        const u = Math.max(rnd(), 1e-12);
        return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * rnd());
    }

    function ejes(ctx, w, h, c, y0) {
        ctx.strokeStyle = c.borde;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(30, y0);
        ctx.lineTo(w - 8, y0);
        ctx.stroke();
    }

    function rotulo(ctx, texto, x, y, color, alinear) {
        ctx.fillStyle = color;
        ctx.font = '12px system-ui, sans-serif';
        ctx.textAlign = alinear || 'left';
        ctx.fillText(texto, x, y);
    }

    function trazar(ctx, puntos, color, grosor, discontinua) {
        ctx.strokeStyle = color;
        ctx.lineWidth = grosor || 2;
        ctx.setLineDash(discontinua ? [5, 4] : []);
        ctx.beginPath();
        puntos.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])));
        ctx.stroke();
        ctx.setLineDash([]);
    }

    // ================================================================ FOURIER

    // Coeficientes de Fourier de UN periodo muestreado: a0 (continua) y, para
    // cada armónico k, su parte coseno (a) y seno (b).
    function coeficientes(x, K) {
        const N = x.length;
        const a0 = x.reduce((s, v) => s + v, 0) / N;
        const a = [0], b = [0];
        for (let k = 1; k <= K; k++) {
            let sa = 0, sb = 0;
            for (let n = 0; n < N; n++) {
                const w = 2 * Math.PI * k * n / N;
                sa += x[n] * Math.cos(w);
                sb += x[n] * Math.sin(w);
            }
            a.push(2 * sa / N);
            b.push(2 * sb / N);
        }
        return { a0, a, b };
    }

    function reconstruir(co, kMax, N) {
        const y = new Array(N).fill(co.a0);
        for (let k = 1; k <= kMax && k < co.a.length; k++) {
            for (let n = 0; n < N; n++) {
                const w = 2 * Math.PI * k * n / N;
                y[n] += co.a[k] * Math.cos(w) + co.b[k] * Math.sin(w);
            }
        }
        return y;
    }

    const BITS_LIBRO = '01100010';            // ejemplo 3.1 del libro
    const VELOCIDADES = [300, 600, 1200, 2400, 4800, 9600, 19200, 38400];
    const K_MAX = 100;
    const N_MUESTRAS = 1600;

    function periodo(modo) {
        const x = new Array(N_MUESTRAS);
        for (let n = 0; n < N_MUESTRAS; n++) {
            if (modo === 'bits') {
                x[n] = +BITS_LIBRO[Math.floor(n * 8 / N_MUESTRAS)];
            } else {
                x[n] = n < N_MUESTRAS / 2 ? 1 : -1;
            }
        }
        return x;
    }

    function montarFourier(cont) {
        let modo = cont.dataset.modo === 'bits' ? 'bits' : 'cuadrada';
        cont.innerHTML = `
            <h3>Laboratorio de Fourier: la señal que llega depende del medio</h3>
            <p>Elige una señal y el <strong>ancho de banda del medio</strong>. Solo pasan los armónicos cuya
            frecuencia cabe dentro de él; el resto se pierde por el camino.</p>
            <div class="senal-controles">
                <label>Señal
                    <select data-c="modo">
                        <option value="cuadrada">Onda cuadrada</option>
                        <option value="bits">Los bits 01100010 (ejemplo del libro)</option>
                    </select>
                </label>
                <label><span data-c="rotVel">Frecuencia fundamental</span>
                    <input type="range" data-c="vel">
                    <output class="senal-valor" data-c="valVel"></output>
                </label>
                <label>Ancho de banda del medio
                    <input type="range" data-c="bw">
                    <output class="senal-valor" data-c="valBw"></output>
                </label>
            </div>
            <p class="senal-etiqueta">Dominio del tiempo · discontinua: la señal enviada · continua: la que llega</p>
            <canvas data-c="tiempo" width="640" height="200" role="img"
                    aria-label="Señal enviada y señal recibida a lo largo del tiempo"></canvas>
            <p class="senal-etiqueta">Dominio de la frecuencia · cada barra es un armónico · la línea vertical es el límite del medio</p>
            <canvas data-c="espectro" width="640" height="170" role="img"
                    aria-label="Amplitud de cada armónico y límite de frecuencia del medio"></canvas>
            <div class="senal-lectura" aria-live="polite">
                <div>Primer armónico<strong data-c="f1"></strong></div>
                <div>Armónicos que caben en el medio<strong data-c="pasan"></strong></div>
                <div data-c="cajaBits">Bits que entiende el receptor<strong class="senal-bits" data-c="bits"></strong></div>
            </div>
            <div class="simulacion-acciones">
                <button type="button" class="btn-sec" data-c="oir">▶ Escuchar la señal que llega</button>
            </div>
            <p class="senal-etiqueta" data-c="avisoAudio">Baja el volumen antes de pulsar: una onda cuadrada suena áspera.</p>`;
        cont.classList.add('simulacion');

        const q = s => cont.querySelector(`[data-c="${s}"]`);
        const selModo = q('modo'), vel = q('vel'), bw = q('bw');
        const cvT = q('tiempo'), cvE = q('espectro');
        const coef = { cuadrada: coeficientes(periodo('cuadrada'), K_MAX),
                       bits: coeficientes(periodo('bits'), K_MAX) };

        let audio = null;

        function configurar() {
            if (modo === 'bits') {
                vel.min = 0; vel.max = VELOCIDADES.length - 1; vel.step = 1; vel.value = 0;
                bw.min = 0; bw.max = 12000; bw.step = 100; bw.value = 3000;
                q('rotVel').textContent = 'Velocidad de transmisión';
                q('cajaBits').hidden = false;
            } else {
                vel.min = 100; vel.max = 1000; vel.step = 50; vel.value = 200;
                bw.min = 0; bw.max = 8000; bw.step = 50; bw.value = 1000;
                q('rotVel').textContent = 'Frecuencia fundamental';
                q('cajaBits').hidden = true;
            }
        }

        function f0() {
            return modo === 'bits' ? VELOCIDADES[+vel.value] / 8 : +vel.value;
        }

        function estado() {
            const fund = f0();
            const limite = +bw.value;
            const kMax = Math.min(K_MAX, Math.floor(limite / fund + 1e-9));
            return { fund, limite, kMax, co: coef[modo] };
        }

        function pintar() {
            const c = colores();
            const e = estado();
            const x = periodo(modo);
            const y = reconstruir(e.co, e.kMax, N_MUESTRAS);

            q('valVel').textContent = modo === 'bits'
                ? fmt(VELOCIDADES[+vel.value]) + ' bps'
                : fmt(e.fund) + ' Hz';
            q('valBw').textContent = fmt(e.limite) + ' Hz';
            q('f1').textContent = fmt(e.fund, e.fund % 1 ? 1 : 0) + ' Hz';

            // Útiles: en la onda cuadrada solo existen los impares.
            const utiles = [];
            for (let k = 1; k <= e.kMax; k++) {
                if (Math.hypot(e.co.a[k], e.co.b[k]) > 1e-3) utiles.push(k);
            }
            // La cifra principal es la del libro (tabla 3.1): cuántos armónicos
            // CABEN en el ancho de banda. Entre paréntesis, cuántos llevan energía:
            // la onda cuadrada no tiene pares y 01100010 no tiene los múltiplos de 8.
            q('pasan').textContent = e.kMax >= K_MAX ? `${K_MAX} o más`
                : e.kMax + (utiles.length !== e.kMax ? ` (${utiles.length} con energía)` : '');

            // --- tiempo: dos periodos de la señal
            {
                const { ctx, w, h } = preparar(cvT);
                const lo = modo === 'bits' ? -0.4 : -1.5, hi = modo === 'bits' ? 1.4 : 1.5;
                const Y = v => h - 16 - (v - lo) / (hi - lo) * (h - 30);
                ejes(ctx, w, h, c, Y(modo === 'bits' ? 0 : 0));
                const tramo = (arr) => {
                    const pts = [];
                    for (let rep = 0; rep < 2; rep++) {
                        for (let n = 0; n < N_MUESTRAS; n += 4) {
                            pts.push([30 + ((rep * N_MUESTRAS + n) / (2 * N_MUESTRAS)) * (w - 40), Y(arr[n])]);
                        }
                    }
                    return pts;
                };
                trazar(ctx, tramo(x), c.tenue, 1.5, true);
                trazar(ctx, tramo(y), c.prim, 2.2);
                if (modo === 'bits') {
                    ctx.strokeStyle = c.avi;
                    ctx.setLineDash([2, 4]);
                    ctx.beginPath();
                    ctx.moveTo(30, Y(0.5)); ctx.lineTo(w - 8, Y(0.5));
                    ctx.stroke();
                    ctx.setLineDash([]);
                    rotulo(ctx, 'umbral', w - 10, Y(0.5) - 4, c.tenue, 'right');
                    for (let i = 0; i < 8; i++) {
                        rotulo(ctx, BITS_LIBRO[i], 30 + (i + 0.5) / 16 * (w - 40), 12, c.tenue, 'center');
                    }
                }
            }

            // --- espectro
            {
                const { ctx, w, h } = preparar(cvE);
                const fMax = Math.max(e.limite * 1.3, e.fund * 12);
                const X = f => 30 + f / fMax * (w - 45);
                const base = h - 22;
                const amp = k => Math.hypot(e.co.a[k], e.co.b[k]);
                const aMax = Math.max(...e.co.a.map((_, k) => (k ? amp(k) : 0)));
                ejes(ctx, w, h, c, base);
                for (let k = 1; k <= K_MAX && k * e.fund <= fMax; k++) {
                    const A = amp(k);
                    if (A < 1e-3) continue;
                    const alto = A / aMax * (base - 14);
                    ctx.fillStyle = k <= e.kMax ? c.prim : c.borde;
                    const ancho = Math.max(1.5, Math.min(8, (w - 45) / (fMax / e.fund) * 0.6));
                    ctx.fillRect(X(k * e.fund) - ancho / 2, base - alto, ancho, alto);
                }
                ctx.strokeStyle = c.mal;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(X(e.limite), 6); ctx.lineTo(X(e.limite), base);
                ctx.stroke();
                rotulo(ctx, 'límite del medio', X(e.limite) + 5, 16, c.mal);
                rotulo(ctx, '0 Hz', 30, h - 6, c.tenue);
                rotulo(ctx, fmt(fMax) + ' Hz', w - 10, h - 6, c.tenue, 'right');
            }

            // --- qué bits entiende el receptor
            if (modo === 'bits') {
                const caja = q('bits');
                caja.innerHTML = '';
                for (let i = 0; i < 8; i++) {
                    const v = y[Math.floor((i + 0.5) * N_MUESTRAS / 8)];
                    const dudoso = Math.abs(v - 0.5) < 0.15;
                    const leido = dudoso ? '?' : (v > 0.5 ? '1' : '0');
                    const s = document.createElement('span');
                    s.textContent = leido;
                    if (leido !== BITS_LIBRO[i]) s.className = 'mal';
                    caja.appendChild(s);
                }
                caja.setAttribute('aria-label', 'Bits leídos: ' + caja.textContent);
            }

            if (audio) actualizarAudio();
        }

        // --- audio: una PeriodicWave con exactamente los armónicos que pasan
        function onda(ctxA) {
            const e = estado();
            const n = Math.max(2, e.kMax + 1);
            const real = new Float32Array(n), imag = new Float32Array(n);
            for (let k = 1; k <= e.kMax; k++) {
                real[k] = e.co.a[k];
                imag[k] = e.co.b[k];
            }
            return ctxA.createPeriodicWave(real, imag, { disableNormalization: false });
        }

        function actualizarAudio() {
            if (!audio) return;
            const e = estado();
            audio.osc.frequency.setValueAtTime(e.fund, audio.ctx.currentTime);
            if (e.kMax >= 1) {
                audio.osc.setPeriodicWave(onda(audio.ctx));
                audio.gan.gain.setTargetAtTime(0.06, audio.ctx.currentTime, 0.02);
            } else {
                audio.gan.gain.setTargetAtTime(0, audio.ctx.currentTime, 0.02);
            }
        }

        q('oir').addEventListener('click', () => {
            const btn = q('oir');
            if (audio) {
                audio.osc.stop();
                audio.ctx.close();
                audio = null;
                btn.textContent = '▶ Escuchar la señal que llega';
                return;
            }
            const AC = window.AudioContext || window.webkitAudioContext;
            if (!AC) {
                q('avisoAudio').textContent = 'Este navegador no permite generar audio. El resto funciona igual.';
                return;
            }
            const ctxA = new AC();
            const osc = ctxA.createOscillator();
            const gan = ctxA.createGain();
            gan.gain.value = 0;
            osc.connect(gan).connect(ctxA.destination);
            audio = { ctx: ctxA, osc, gan };
            actualizarAudio();
            osc.start();
            btn.textContent = '■ Parar';
        });

        selModo.value = modo;
        selModo.addEventListener('change', () => { modo = selModo.value; configurar(); pintar(); });
        vel.addEventListener('input', pintar);
        bw.addEventListener('input', pintar);
        configurar();
        pintar();
        return { pintar };
    }

    // =========================================================== CODIFICACION

    function montarCodificacion(cont) {
        const inicial = limpiarBits(cont.dataset.bits, '01001101');
        cont.innerHTML = `
            <h3>Codificador de línea: los mismos bits, tres formas de ponerlos en el cable</h3>
            <p>Escribe hasta 16 bits. Fíjate en <strong>cuántos cambios</strong> hace cada código y en qué
            pasa con una ristra de ceros.</p>
            <div class="senal-controles">
                <label>Bits a enviar
                    <input type="text" data-c="bits" value="${inicial}" maxlength="24"
                           spellcheck="false" autocomplete="off" inputmode="numeric">
                </label>
                <label>Ejemplos
                    <select data-c="ej">
                        <option value="">— elige uno —</option>
                        <option value="01001101">Mezcla normal</option>
                        <option value="0000000000000000">Dieciséis ceros seguidos</option>
                        <option value="1111111111111111">Dieciséis unos seguidos</option>
                        <option value="0101010101010101">Alternando</option>
                    </select>
                </label>
            </div>
            <canvas data-c="lienzo" width="640" height="330" role="img"
                    aria-label="Reloj, codificación NRZ, codificación Manchester y señal de cuatro niveles para los bits escritos"></canvas>
            <div class="senal-lectura" aria-live="polite">
                <div>Bits<strong data-c="nb"></strong></div>
                <div>Símbolos NRZ<strong data-c="snrz"></strong></div>
                <div>Transiciones NRZ<strong data-c="tnrz"></strong></div>
                <div>Transiciones Manchester<strong data-c="tman"></strong></div>
                <div>Símbolos con 4 niveles<strong data-c="s4"></strong></div>
                <div>Tramo más largo sin cambios (NRZ)<strong data-c="racha"></strong></div>
            </div>`;
        cont.classList.add('simulacion');

        const q = s => cont.querySelector(`[data-c="${s}"]`);
        const entrada = q('bits'), cv = q('lienzo');

        function transiciones(niveles) {
            let t = 0;
            for (let i = 1; i < niveles.length; i++) if (niveles[i] !== niveles[i - 1]) t++;
            return t;
        }

        function pintar() {
            const bits = limpiarBits(entrada.value, '0');
            const c = colores();
            const { ctx, w } = preparar(cv);
            const n = bits.length;
            const x0 = 110, ancho = (w - x0 - 12) / n;
            const filas = [
                { nombre: 'Reloj', y: 40 },
                { nombre: 'NRZ', y: 115 },
                { nombre: 'Manchester', y: 190 },
                { nombre: '4 niveles', y: 275 }
            ];
            const alto = 26;

            // rejilla de bits
            for (let i = 0; i <= n; i++) {
                ctx.strokeStyle = c.borde;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(x0 + i * ancho, 18);
                ctx.lineTo(x0 + i * ancho, 310);
                ctx.stroke();
            }
            for (let i = 0; i < n; i++) rotulo(ctx, bits[i], x0 + (i + 0.5) * ancho, 14, c.texto, 'center');
            filas.forEach(f => rotulo(ctx, f.nombre, 8, f.y + 4, c.tenue));

            // Reloj: un ciclo por bit
            {
                const y = filas[0].y, pts = [];
                for (let i = 0; i < n; i++) {
                    const xa = x0 + i * ancho;
                    pts.push([xa, y + alto / 2], [xa, y - alto / 2], [xa + ancho / 2, y - alto / 2],
                             [xa + ancho / 2, y + alto / 2], [xa + ancho, y + alto / 2]);
                }
                trazar(ctx, pts, c.tenue, 1.5);
            }

            // NRZ: 1 = nivel alto, 0 = nivel bajo, sin volver a cero
            const nrz = bits.split('').map(Number);
            {
                const y = filas[1].y, pts = [];
                nrz.forEach((b, i) => {
                    const yy = b ? y - alto / 2 : y + alto / 2;
                    pts.push([x0 + i * ancho, yy], [x0 + (i + 1) * ancho, yy]);
                });
                trazar(ctx, pts, c.prim, 2.4);
            }

            // Manchester (IEEE 802.3): 0 = de alto a bajo, 1 = de bajo a alto,
            // siempre con transición en mitad del bit
            const man = [];
            {
                const y = filas[2].y, pts = [];
                nrz.forEach((b, i) => {
                    const primero = b ? 0 : 1, segundo = b ? 1 : 0;
                    man.push(primero, segundo);
                    const xa = x0 + i * ancho, xm = xa + ancho / 2;
                    const Y = v => (v ? y - alto / 2 : y + alto / 2);
                    pts.push([xa, Y(primero)], [xm, Y(primero)], [xm, Y(segundo)], [xa + ancho, Y(segundo)]);
                });
                trazar(ctx, pts, c.ok, 2.4);
            }

            // 4 niveles: cada pareja de bits es UN símbolo (00 01 10 11 → 0 1 2 3)
            const simbolos = [];
            for (let i = 0; i < n; i += 2) simbolos.push(parseInt((bits[i] + (bits[i + 1] || '0')), 2));
            {
                const y = filas[3].y, pts = [];
                const Y = v => y + 30 - v * 20;
                simbolos.forEach((s, j) => {
                    pts.push([x0 + j * 2 * ancho, Y(s)], [x0 + Math.min(n, (j + 1) * 2) * ancho, Y(s)]);
                    rotulo(ctx, (bits[j * 2] + (bits[j * 2 + 1] || '·')), x0 + (j * 2 + 1) * ancho, y + 44, c.tenue, 'center');
                });
                trazar(ctx, pts, c.avi, 2.4);
            }

            let racha = 1, max = 1;
            for (let i = 1; i < n; i++) { racha = bits[i] === bits[i - 1] ? racha + 1 : 1; max = Math.max(max, racha); }

            q('nb').textContent = n;
            q('snrz').textContent = n;
            q('tnrz').textContent = transiciones(nrz);
            q('tman').textContent = transiciones(man);
            q('s4').textContent = simbolos.length;
            q('racha').textContent = max + (max === 1 ? ' bit' : ' bits');
        }

        entrada.addEventListener('input', pintar);
        q('ej').addEventListener('change', () => {
            if (q('ej').value) { entrada.value = q('ej').value; pintar(); }
        });
        pintar();
        return { pintar };
    }

    // ============================================================= MODULACION

    // Constelación QAM-16 con código Gray en cada eje: dos bits para I y dos para Q
    const GRAY = { '00': -3, '01': -1, '11': 1, '10': 3 };

    function montarModulacion(cont) {
        const inicial = limpiarBits(cont.dataset.bits, '10110010');
        cont.innerHTML = `
            <h3>Modulador: los mismos bits sobre una portadora</h3>
            <p>La portadora es una onda que viaja bien por el medio. Para que lleve información hay que
            <strong>cambiarle algo</strong> en cada bit: la amplitud, la frecuencia o la fase.</p>
            <div class="senal-controles">
                <label>Bits a enviar
                    <input type="text" data-c="bits" value="${inicial}" maxlength="24"
                           spellcheck="false" autocomplete="off" inputmode="numeric">
                </label>
                <label>Ciclos de portadora por bit
                    <input type="range" data-c="ciclos" min="1" max="6" step="1" value="3">
                    <output class="senal-valor" data-c="valCiclos"></output>
                </label>
            </div>
            <canvas data-c="lienzo" width="640" height="360" role="img"
                    aria-label="Datos, modulación en amplitud, en frecuencia y en fase de los bits escritos"></canvas>
            <p class="senal-etiqueta">Constelación QAM-16 · cada punto es un símbolo de 4 bits · numerados en el orden en que se envían</p>
            <canvas data-c="qam" width="640" height="300" role="img"
                    aria-label="Constelación QAM de 16 puntos con los símbolos enviados resaltados"></canvas>
            <div class="senal-lectura" aria-live="polite">
                <div>Bits<strong data-c="nb"></strong></div>
                <div>Símbolos en ASK, FSK o PSK<strong data-c="s1"></strong></div>
                <div>Símbolos en QAM-16<strong data-c="s4"></strong></div>
            </div>`;
        cont.classList.add('simulacion');

        const q = s => cont.querySelector(`[data-c="${s}"]`);
        const entrada = q('bits'), ciclos = q('ciclos');

        function pintar() {
            const bits = limpiarBits(entrada.value, '1');
            const n = bits.length;
            const cic = +ciclos.value;
            q('valCiclos').textContent = cic + (cic === 1 ? ' ciclo' : ' ciclos') + ' (en FSK, el 1 lleva el doble)';
            const c = colores();

            {
                const { ctx, w } = preparar(q('lienzo'));
                const x0 = 70, ancho = (w - x0 - 12) / n, amp = 24;
                const filas = [['Datos', 38], ['ASK', 118], ['FSK', 208], ['PSK', 298]];
                for (let i = 0; i <= n; i++) {
                    ctx.strokeStyle = c.borde;
                    ctx.beginPath();
                    ctx.moveTo(x0 + i * ancho, 16); ctx.lineTo(x0 + i * ancho, 336);
                    ctx.stroke();
                }
                for (let i = 0; i < n; i++) rotulo(ctx, bits[i], x0 + (i + 0.5) * ancho, 12, c.texto, 'center');
                filas.forEach(f => rotulo(ctx, f[0], 8, f[1] + 4, c.tenue));

                const pts = [];
                bits.split('').forEach((b, i) => {
                    const yy = filas[0][1] + (b === '1' ? -amp / 2 : amp / 2);
                    pts.push([x0 + i * ancho, yy], [x0 + (i + 1) * ancho, yy]);
                });
                trazar(ctx, pts, c.tenue, 2);

                const muestras = 60;
                const fila = (idx, fn, color) => {
                    const p = [];
                    for (let i = 0; i < n; i++) {
                        for (let s = 0; s <= muestras; s++) {
                            const t = s / muestras;
                            p.push([x0 + (i + t) * ancho, filas[idx][1] - fn(bits[i] === '1', t) * amp]);
                        }
                    }
                    trazar(ctx, p, color, 1.8);
                };
                // ASK: el 0 con amplitud reducida (no nula, como en la figura del libro)
                fila(1, (uno, t) => (uno ? 1 : 0.3) * Math.sin(2 * Math.PI * cic * t), c.prim);
                // FSK: el 1 con el doble de frecuencia
                fila(2, (uno, t) => Math.sin(2 * Math.PI * (uno ? 2 * cic : cic) * t), c.ok);
                // PSK binaria: el 0 desplazado media onda (180°)
                fila(3, (uno, t) => Math.sin(2 * Math.PI * cic * t + (uno ? 0 : Math.PI)), c.avi);
            }

            // QAM-16
            const grupos = [];
            for (let i = 0; i < n; i += 4) grupos.push((bits.slice(i, i + 4) + '0000').slice(0, 4));
            {
                const { ctx, w, h } = preparar(q('qam'));
                const cx = w / 2, cy = h / 2 + 4, paso = 27;
                ctx.strokeStyle = c.borde;
                ctx.beginPath();
                ctx.moveTo(cx - 140, cy); ctx.lineTo(cx + 140, cy);
                ctx.moveTo(cx, cy - 130); ctx.lineTo(cx, cy + 130);
                ctx.stroke();
                rotulo(ctx, 'I (en fase)', cx + 145, cy + 4, c.tenue);
                // a la izquierda del eje, por encima de la fila superior de puntos
                rotulo(ctx, 'Q (en cuadratura)', cx - 8, 12, c.tenue, 'right');
                const usados = {};
                grupos.forEach((g, j) => { (usados[g] = usados[g] || []).push(j + 1); });
                Object.keys(GRAY).forEach(bi => Object.keys(GRAY).forEach(bq => {
                    const etiqueta = bi + bq;
                    const px = cx + GRAY[bi] * paso * 1.4, py = cy - GRAY[bq] * paso * 1.4;
                    const marcado = usados[etiqueta];
                    ctx.fillStyle = marcado ? c.prim : c.tenue;
                    ctx.beginPath();
                    ctx.arc(px, py, marcado ? 7 : 4, 0, 2 * Math.PI);
                    ctx.fill();
                    rotulo(ctx, etiqueta, px, py + 18, marcado ? c.texto : c.tenue, 'center');
                    if (marcado) rotulo(ctx, marcado.join(','), px + 10, py - 8, c.prim);
                }));
            }

            q('nb').textContent = n;
            q('s1').textContent = n;
            q('s4').textContent = grupos.length;
        }

        entrada.addEventListener('input', pintar);
        ciclos.addEventListener('input', pintar);
        pintar();
        return { pintar };
    }

    // ================================================================== RUIDO

    function montarRuido(cont) {
        cont.innerHTML = `
            <h3>Canal con ruido: cuándo empieza a equivocarse el receptor</h3>
            <p>Se envían 40 bits con dos niveles, +1 y −1. El receptor mira el centro de cada bit y decide con
            un umbral en 0. Baja la relación señal/ruido y observa cuándo aparecen los errores.</p>
            <div class="senal-controles">
                <label>Relación señal/ruido (S/N)
                    <input type="range" data-c="snr" min="-6" max="30" step="1" value="20">
                    <output class="senal-valor" data-c="valSnr"></output>
                </label>
                <label>Ancho de banda del canal (para Shannon)
                    <select data-c="bw">
                        <option value="3100">3 100 Hz · línea telefónica</option>
                        <option value="4000">4 000 Hz · ejemplo del libro</option>
                        <option value="1000000">1 MHz</option>
                        <option value="100000000">100 MHz · cable de categoría 5e</option>
                    </select>
                </label>
                <label><span><input type="checkbox" data-c="imp"> Añadir ruido impulsivo</span>
                    <small>picos breves y fuertes, como al arrancar un motor</small>
                </label>
            </div>
            <canvas data-c="lienzo" width="640" height="220" role="img"
                    aria-label="Señal binaria recibida con ruido, umbral de decisión y bits erróneos marcados"></canvas>
            <div class="senal-lectura" aria-live="polite">
                <div>S/N lineal<strong data-c="lin"></strong></div>
                <div>Bits erróneos<strong data-c="err"></strong></div>
                <div>Capacidad de Shannon<strong data-c="shannon"></strong></div>
            </div>
            <div class="simulacion-acciones">
                <button type="button" class="btn-sec" data-c="otra">Otra muestra de ruido</button>
            </div>`;
        cont.classList.add('simulacion');

        const q = s => cont.querySelector(`[data-c="${s}"]`);
        const BITS = 40, POR_BIT = 24;
        let semilla = 7;
        const datos = [];
        {
            const r = azar(20260915);
            for (let i = 0; i < BITS; i++) datos.push(r() < 0.5 ? 1 : 0);
        }

        function pintar() {
            const snrDb = +q('snr').value;
            const snr = Math.pow(10, snrDb / 10);
            const sigma = Math.sqrt(1 / snr);            // potencia de señal = 1
            const r = azar(semilla);
            const impulsivo = q('imp').checked;
            const rx = [];
            // Ruido impulsivo: ráfagas cortas y fuertes, no muestras sueltas. Una
            // muestra aislada casi nunca cae en el centro del bit, que es donde
            // decide el receptor, y el simulador contradiría lo que enseña.
            let rafaga = 0, golpe = 0;
            for (let i = 0; i < BITS * POR_BIT; i++) {
                let v = (datos[Math.floor(i / POR_BIT)] ? 1 : -1) + sigma * gauss(r);
                if (impulsivo) {
                    if (!rafaga && r() < 0.008) {
                        rafaga = 12;
                        golpe = (r() < 0.5 ? -1 : 1) * (3 + 2 * r());
                    }
                    if (rafaga) { v += golpe; rafaga--; }
                }
                rx.push(v);
            }
            let errores = 0;
            const mal = [];
            for (let i = 0; i < BITS; i++) {
                const leido = rx[i * POR_BIT + POR_BIT / 2] > 0 ? 1 : 0;
                if (leido !== datos[i]) { errores++; mal.push(i); }
            }

            const c = colores();
            const { ctx, w, h } = preparar(q('lienzo'));
            const lo = -4, hi = 4;
            const Y = v => h - 10 - (Math.max(lo, Math.min(hi, v)) - lo) / (hi - lo) * (h - 20);
            const X = i => 10 + i / (BITS * POR_BIT) * (w - 20);
            mal.forEach(i => {
                ctx.fillStyle = c.mal;
                ctx.globalAlpha = 0.18;
                ctx.fillRect(X(i * POR_BIT), 4, X(POR_BIT) - 10, h - 8);
                ctx.globalAlpha = 1;
            });
            const ideal = [];
            datos.forEach((b, i) => {
                ideal.push([X(i * POR_BIT), Y(b ? 1 : -1)], [X((i + 1) * POR_BIT), Y(b ? 1 : -1)]);
            });
            trazar(ctx, ideal, c.tenue, 1.4, true);
            trazar(ctx, rx.map((v, i) => [X(i), Y(v)]), c.prim, 1.2);
            ctx.strokeStyle = c.avi;
            ctx.setLineDash([3, 4]);
            ctx.beginPath();
            ctx.moveTo(10, Y(0)); ctx.lineTo(w - 10, Y(0));
            ctx.stroke();
            ctx.setLineDash([]);

            const bw = +q('bw').value;
            const cap = bw * Math.log2(1 + snr);
            q('valSnr').textContent = fmt(snrDb) + ' dB';
            q('lin').textContent = snr >= 10 ? fmt(snr) : fmt(snr, 2);
            q('err').textContent = `${errores} de ${BITS}`;
            q('shannon').textContent = cap >= 1e6 ? fmt(cap / 1e6, 1) + ' Mbps'
                : cap >= 1e3 ? fmt(cap / 1e3, 1) + ' kbps' : fmt(cap) + ' bps';
        }

        ['snr', 'bw', 'imp'].forEach(id => q(id).addEventListener('input', pintar));
        q('imp').addEventListener('change', pintar);
        q('otra').addEventListener('click', () => { semilla++; pintar(); });
        pintar();
        return { pintar };
    }

    // --------------------------------------------------------------- arranque

    const MONTAJES = {
        fourier: montarFourier,
        codificacion: montarCodificacion,
        modulacion: montarModulacion,
        ruido: montarRuido
    };

    function iniciar() {
        const montados = [];
        document.querySelectorAll('.senal[data-senal]').forEach(cont => {
            const fn = MONTAJES[cont.dataset.senal];
            if (fn) montados.push(fn(cont));
        });
        // Al cambiar de tema, los lienzos se repintan con los colores nuevos
        new MutationObserver(() => montados.forEach(m => m && m.pintar()))
            .observe(document.documentElement, { attributes: true, attributeFilter: ['data-tema'] });
        if (window.matchMedia) {
            const mq = window.matchMedia('(prefers-color-scheme: dark)');
            if (mq.addEventListener) mq.addEventListener('change', () => montados.forEach(m => m && m.pintar()));
        }
    }

    // Expuesto para las pruebas automáticas
    window.PARSenales = { coeficientes, reconstruir, periodo, BITS_LIBRO, VELOCIDADES };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', iniciar);
    } else {
        iniciar();
    }
})();
