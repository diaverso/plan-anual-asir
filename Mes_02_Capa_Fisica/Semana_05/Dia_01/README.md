# Semana 5 — Día 1 (lunes)

```text
📅 Día: Semana 5 — Día 1
⏱️ Duración prevista: 4 h 46 min
📚 Objetivo: Anatomía de una señal — Fourier y el ancho de banda
🛠️ Práctica: Laboratorio de Fourier (reproducir la tabla de la red telefónica)
```

---

## De qué va hoy

Empieza el Mes 2 con una pregunta que el Mes 1 dejó sin contestar: **¿por qué un cable tiene una
velocidad máxima?** Si los bits son solo «tensión alta» y «tensión baja», ¿qué impide enviarlos
cada vez más deprisa?

La respuesta es de 1822 y se la debemos a Fourier: una señal cuadrada **no es una sola onda**, sino
la suma de muchas, cada una a una frecuencia. El medio solo deja pasar algunas, y cuanto más rápido
envías, más de ellas se quedan por el camino.

---

## Objetivos concretos

- Describir una señal por su **amplitud, frecuencia, periodo y fase**, y pasar de frecuencia a periodo.
- Explicar qué dice el **teorema de Fourier** y qué es un **armónico**.
- Saber qué armónicos tiene una onda cuadrada y cómo decrece su amplitud.
- Distinguir los **dos significados de «ancho de banda»**: en Hz y en bps.
- Calcular la frecuencia del primer armónico y **cuántos armónicos llegan** por un medio.
- Explicar por qué **aumentar la velocidad** en un medio fijo termina produciendo errores.

---

## Conocimientos previos necesarios

| Concepto | De dónde viene |
|---|---|
| Lo que el medio le hace a la señal | Semana 1, Día 2 |
| Analógico y digital · regeneración | Semana 1, Día 3 |
| Ancho de banda como velocidad en bps | Semana 1, Día 3 |
| El repetidor regenera la señal | Semana 4, Día 1 |

---

## Orden de la sesión

| Bloque | Tiempo | Material |
|---|---:|---|
| 🧠 Repaso de lo fallado | 18 min | Aparece solo al inicio de la teoría |
| 📖 Teoría con 3 paradas de escritura | 64 min | [teoria.html](teoria.html) |
| 🃏 Flashcards (12 tarjetas) | 12 min | Al final de la teoría |
| ❓ Quiz cronometrado (14 preguntas) | 22 min | Al final de la teoría |
| 🛠️ Ejercicios (6 bloques) | 78 min | [ejercicios.html](ejercicios.html) |
| 💻 Laboratorio de Fourier | 78 min | [laboratorio.html](laboratorio.html) |
| 🧾 Cierre y anotación de dudas | 14 min | — |
| | **286 min** | **4 h 46 min** |

---

## El laboratorio de hoy

En el libro de la asignatura hay una tabla que muestra cuántos armónicos de una señal digital
**llegan al receptor** por una línea telefónica según la velocidad: 80 a 300 bps, 2 a 9 600 bps y
ninguno a 38 400 bps.

Hoy **la reproduces tú**, fila a fila, con un visualizador que calcula la señal en el navegador. Y
compruebas lo que la tabla no dice: **en qué fila empieza el receptor a equivocarse**.

> ⚠️ Hay una parte para **escuchar** la señal, que es opcional. Baja el volumen antes de pulsar.

---

## Cierre de la sesión

Comprueba que puedes, sin mirar:

- Convertir 50 Hz en su periodo, y 2 s en su frecuencia.
- Decir qué armónicos tiene una onda cuadrada y por qué el tercero importa más que el noveno.
- Explicar por qué a 38 400 bps no llega nada por la línea telefónica.

---

## Mañana

**Día 2 — Codificación.** Cómo se ponen los bits en el cable, qué pasa cuando llegan cien ceros
seguidos y por qué **baudios** y **bits por segundo** no son lo mismo.

*Tarea de calentamiento:* tu tarjeta Ethernet va a 1 Gbps por un cable que solo deja pasar unos
100 MHz. Con lo que veas hoy, eso parece imposible. ¿Qué se te ocurre que hacen para conseguirlo?

---

[🏠 Centro de Aprendizaje](../../../web_interactiva/index.html) · [Índice de la semana](../README.md) · [Día 2 →](../Dia_02/README.md)
