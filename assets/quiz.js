/*
 * Motor de quizzes compartido del Plan Anual ASIR.
 *
 * Cada quiz.html define una variable global `quizData` antes de cargar este
 * script:
 *
 *   const quizData = {
 *       titulo: 'Quiz Día 1',
 *       subtitulo: '¿Qué es una red? · Historia de las telecomunicaciones',
 *       tiempo: '20 minutos',
 *       questions: [
 *           {
 *               text: 'Enunciado de la pregunta',
 *               options: { a: '...', b: '...', c: '...', d: '...' },
 *               answer: 'b',
 *               feedback: 'Explicación de por qué es la correcta',
 *               topic: 'Historia'      // opcional: agrupa el desglose final
 *           }
 *       ]
 *   };
 */

const questions = quizData.questions;

// Respuestas correctas indexadas como q1, q2, ... para la corrección
const correctAnswers = {};
questions.forEach((q, i) => {
    correctAnswers['q' + (i + 1)] = q.answer;
});

// Escribe en un elemento solo si existe: las páginas de teoría no incluyen
// la cabecera propia del quiz, pero sí el contador de resultados.
function setText(id, value) {
    const el = document.getElementById(id);
    if (el) {
        el.textContent = value;
    }
}

// Rellenar cabecera e información del quiz
function renderHeader() {
    setText('quizTitle', quizData.titulo);
    setText('quizSubtitle', quizData.subtitulo || '');
    setText('timer', quizData.tiempo || 'Sin límite');
    setText('totalQuestions', questions.length);
    setText('total', questions.length);
}

// Una pregunta con varias respuestas correctas usa casillas en vez de radios
function esMultiple(q) {
    return Array.isArray(q.answer);
}

function respuestasEsperadas(q) {
    return esMultiple(q) ? q.answer : [q.answer];
}

// Generar el HTML de las preguntas
function renderQuiz() {
    const quiz = document.getElementById('quiz');
    quiz.innerHTML = questions.map((q, i) => {
        const n = i + 1;
        const tipo = esMultiple(q) ? 'checkbox' : 'radio';
        const opciones = Object.keys(q.options).map(letra => `
                    <div class="option">
                        <input type="${tipo}" id="q${n}${letra}" name="q${n}" value="${letra}">
                        <label for="q${n}${letra}">${q.options[letra]}</label>
                    </div>`).join('');

        const etiqueta = q.topic ? `<span class="question-topic">${q.topic}</span>` : '';
        const aviso = esMultiple(q)
            ? '<span class="question-topic">Varias respuestas</span>' : '';

        return `
            <div class="question" data-question="${n}">
                <div class="question-header">
                    <div class="question-meta">
                        <span class="question-number">Pregunta ${n}</span>
                        ${etiqueta}
                        ${aviso}
                    </div>
                    <button type="button" class="btn-marcar" data-marcar="${n}"
                            aria-pressed="false">Marcar para revisar</button>
                </div>
                <div class="question-text">${q.text}</div>
                <div class="options">${opciones}</div>
                <div class="feedback">
                    <strong>Respuesta correcta: ${respuestasEsperadas(q).join(', ').toUpperCase()}</strong><br>
                    ${q.feedback}
                    ${q.repaso ? `<a class="repaso-teoria" href="${q.repaso}">↑ Repasar este apartado de la teoría</a>` : ''}
                </div>
            </div>`;
    }).join('');

    document.querySelectorAll('#quiz input').forEach(input => {
        input.addEventListener('change', updateProgress);
    });

    document.querySelectorAll('.btn-marcar').forEach(btn => {
        btn.addEventListener('click', () => alternarMarca(btn));
    });
}

// ------------------------------------------------ marcar para revisar

function alternarMarca(btn) {
    const div = btn.closest('.question');
    const marcada = div.classList.toggle('marcada');
    btn.classList.toggle('activo', marcada);
    btn.setAttribute('aria-pressed', marcada ? 'true' : 'false');
    btn.textContent = marcada ? 'Marcada ✓' : 'Marcar para revisar';
    actualizarContadorMarcas();
}

function actualizarContadorMarcas() {
    const cont = document.getElementById('contadorRevision');
    if (!cont) return;
    const n = document.querySelectorAll('.question.marcada').length;
    cont.textContent = n ? `${n} pregunta(s) marcada(s) para revisar` : '';
}

// ----------------------------------------------------- temporizador

/*
 * Cuenta atrás real. `quizData.minutos` la activa; sin ese campo no hay reloj.
 *
 * El reloj NO arranca al cargar la página: en una página de teoría el quiz está
 * al final, después de 45 minutos de lectura, y se habría agotado mucho antes de
 * llegar a él. Arranca cuando ocurre lo primero de esto:
 *   - el bloque del quiz entra en pantalla,
 *   - el estudiante marca una respuesta,
 *   - o pulsa el botón de empezar.
 */
let pararTemporizador = () => {};

function prepararTemporizador() {
    const caja = document.getElementById('temporizador');
    if (!caja || !quizData.minutos) return;

    let restantes = quizData.minutos * 60;
    let arrancado = false;
    let intervalo = null;

    function reloj() {
        const m = Math.floor(restantes / 60);
        const s = restantes % 60;
        return `${m}:${String(s).padStart(2, '0')}`;
    }

    function pintar() {
        caja.textContent = `⏱ ${reloj()}`;
        caja.classList.toggle('aviso', restantes <= 300 && restantes > 0);
        caja.classList.toggle('agotado', restantes <= 0);
    }

    // Estado inicial: en espera, sin descontar
    caja.classList.add('en-espera');
    caja.textContent = `⏱ ${reloj()} · sin iniciar`;

    const boton = document.createElement('button');
    boton.type = 'button';
    boton.className = 'btn-sec btn-empezar';
    boton.textContent = 'Empezar quiz';
    caja.insertAdjacentElement('afterend', boton);

    function arrancar() {
        if (arrancado) return;
        arrancado = true;
        caja.classList.remove('en-espera');
        boton.remove();
        pintar();

        intervalo = setInterval(() => {
            restantes--;
            if (restantes === 300) {
                pintar();
                alert('Quedan 5 minutos para terminar el quiz.');
            }
            if (restantes <= 0) {
                clearInterval(intervalo);
                restantes = 0;
                caja.classList.remove('aviso');
                caja.classList.add('agotado');
                caja.textContent = '⏱ Tiempo agotado';
                alert('Se ha agotado el tiempo. Corrige para ver tu resultado.');
                return;
            }
            pintar();
        }, 1000);
    }

    pararTemporizador = function () {
        if (intervalo) clearInterval(intervalo);
        if (arrancado && restantes > 0) {
            caja.classList.remove('aviso');
            caja.textContent = `⏱ ${reloj()} · detenido`;
        }
    };

    boton.addEventListener('click', arrancar);

    // Marcar cualquier respuesta también pone el reloj en marcha
    document.querySelectorAll('#quiz input').forEach(input => {
        input.addEventListener('change', arrancar, { once: true });
    });

    // Y entrar en la zona del quiz, si el navegador lo soporta
    const zona = document.getElementById('quiz-inicio') || document.getElementById('quiz');
    if (zona && 'IntersectionObserver' in window) {
        const obs = new IntersectionObserver(entradas => {
            if (entradas.some(e => e.isIntersecting)) {
                arrancar();
                obs.disconnect();
            }
        }, { threshold: 0.35 });
        obs.observe(zona);
    }
}

// Desglose por tema: indica qué bloques hay que repasar
function renderBreakdown(aciertosPorTema) {
    const temas = Object.keys(aciertosPorTema);
    const breakdown = document.getElementById('breakdown');

    if (temas.length < 2) {
        breakdown.style.display = 'none';
        return;
    }

    breakdown.style.display = 'block';
    document.getElementById('breakdownRows').innerHTML = temas.map(tema => {
        const datos = aciertosPorTema[tema];
        const pct = Math.round((datos.correct / datos.total) * 100);
        const aviso = pct < 50 ? ' — repasar' : '';
        return `
                    <div class="breakdown-row">
                        <span>${tema}</span>
                        <span><strong>${datos.correct}/${datos.total}</strong> (${pct}%)${aviso}</span>
                    </div>`;
    }).join('');
}

function checkAnswers() {
    let correct = 0;
    let total = Object.keys(correctAnswers).length;
    let unanswered = [];

    // Aciertos por tema para el desglose final
    const aciertosPorTema = {};
    const falladas = [];
    questions.forEach(q => {
        if (!q.topic) return;
        if (!aciertosPorTema[q.topic]) {
            aciertosPorTema[q.topic] = { correct: 0, total: 0 };
        }
        aciertosPorTema[q.topic].total++;
    });

    // Verificar cada pregunta
    for (let qNum in correctAnswers) {
        const index = parseInt(qNum.substring(1), 10) - 1;
        const pregunta = questions[index];
        const marcados = [...document.querySelectorAll(`input[name="${qNum}"]:checked`)];
        const questionDiv = document.querySelector(`[data-question="${qNum.substring(1)}"]`);
        const feedback = questionDiv.querySelector('.feedback');
        const options = questionDiv.querySelectorAll('.option');

        if (!marcados.length) {
            unanswered.push(qNum.substring(1));
            continue;
        }

        // Limpiar clases previas
        options.forEach(opt => {
            opt.classList.remove('correct', 'incorrect');
        });

        const esperadas = respuestasEsperadas(pregunta);
        const elegidas = marcados.map(x => x.value);
        const acierto = elegidas.length === esperadas.length
            && esperadas.every(r => elegidas.includes(r));

        // Se marca en verde toda opción correcta y en rojo lo elegido de más
        questionDiv.querySelectorAll(`input[name="${qNum}"]`).forEach(input => {
            if (esperadas.includes(input.value)) {
                input.parentElement.classList.add('correct');
            } else if (input.checked) {
                input.parentElement.classList.add('incorrect');
            }
        });

        if (acierto) {
            correct++;
            if (pregunta.topic) {
                aciertosPorTema[pregunta.topic].correct++;
            }
            questionDiv.classList.add('correct');
            questionDiv.classList.remove('incorrect');
            feedback.classList.add('show', 'correct');
            feedback.classList.remove('incorrect');
        } else {
            questionDiv.classList.add('incorrect');
            questionDiv.classList.remove('correct');
            feedback.classList.add('show', 'incorrect');
            feedback.classList.remove('correct');

            // Se guarda para el repaso del día siguiente
            falladas.push({
                texto: pregunta.text,
                solucion: esperadas.map(l => pregunta.options[l]).join(' · '),
                porque: pregunta.feedback || '',
                tema: pregunta.topic || '',
                repaso: pregunta.repaso || '',
                titulo: (typeof quizData !== 'undefined' && quizData.titulo) || document.title
            });
        }
    }

    if (unanswered.length > 0) {
        alert(`Por favor, responde todas las preguntas. Faltan: ${unanswered.join(', ')}`);
        return;
    }

    // Mostrar resultados
    const percentage = Math.round((correct / total) * 100);
    const incorrect = total - correct;

    document.getElementById('score').textContent = percentage + '%';
    document.getElementById('correct').textContent = correct;
    document.getElementById('total').textContent = total;
    document.getElementById('incorrect').textContent = incorrect;

    const verdict = document.getElementById('verdict');
    if (percentage >= 90) {
        verdict.innerHTML = '<strong style="color: #28a745;">EXCELENTE</strong> - Dominas completamente el tema';
    } else if (percentage >= 70) {
        verdict.innerHTML = '<strong style="color: #20c997;">MUY BIEN</strong> - Buen nivel de comprensión';
    } else if (percentage >= 50) {
        verdict.innerHTML = '<strong style="color: #ffc107;">APROBADO</strong> - Revisa los errores';
    } else {
        verdict.innerHTML = '<strong style="color: #dc3545;">SUSPENSO</strong> - Debes repasar el tema';
    }

    renderBreakdown(aciertosPorTema);
    pararTemporizador();

    // Guardar el resultado para el panel del Centro de Aprendizaje.
    // Si progreso.js no está cargado, el quiz sigue funcionando igual.
    if (typeof PARProgreso !== 'undefined') {
        PARProgreso.registrar(correct, total, falladas);
    }

    document.getElementById('results').classList.add('show');
    document.getElementById('progressBar').style.width = percentage + '%';
    const barraTxt = document.getElementById('progressTexto');
    if (barraTxt) barraTxt.textContent = `${percentage}% de aciertos`;

    // Scroll to results
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

function resetQuiz() {
    // Limpiar selecciones
    document.querySelectorAll('#quiz input').forEach(input => {
        input.checked = false;
    });

    // Limpiar clases y marcas de revisión
    document.querySelectorAll('.question').forEach(q => {
        q.classList.remove('correct', 'incorrect', 'marcada');
    });
    document.querySelectorAll('.btn-marcar').forEach(b => {
        b.classList.remove('activo');
        b.setAttribute('aria-pressed', 'false');
        b.textContent = 'Marcar para revisar';
    });
    actualizarContadorMarcas();

    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('correct', 'incorrect');
    });

    document.querySelectorAll('.feedback').forEach(fb => {
        fb.classList.remove('show', 'correct', 'incorrect');
    });

    // Ocultar resultados
    document.getElementById('results').classList.remove('show');
    document.getElementById('breakdownRows').innerHTML = '';

    // Reset progress bar
    document.getElementById('progressBar').style.width = '0%';
    const t = document.getElementById('progressTexto');
    if (t) t.textContent = '';

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateProgress() {
    const total = Object.keys(correctAnswers).length;
    let answered = 0;

    for (let qNum in correctAnswers) {
        if (document.querySelector(`input[name="${qNum}"]:checked`)) {
            answered++;
        }
    }

    const percentage = Math.round((answered / total) * 100);
    document.getElementById('progressBar').style.width = percentage + '%';
    const txt = document.getElementById('progressTexto');
    if (txt) txt.textContent = `${answered} de ${total} respondidas`;
}

renderHeader();
renderQuiz();
prepararTemporizador();
updateProgress();
