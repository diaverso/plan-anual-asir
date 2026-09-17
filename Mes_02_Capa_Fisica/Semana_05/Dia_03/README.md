# Semana 5 — Día 3 (miércoles)

```text
📅 Día: Semana 5 — Día 3
⏱️ Duración prevista: 5 h 00 min
📚 Objetivo: Modulación — ASK, FSK, PSK y QAM
🛠️ Práctica: Laboratorio «La radio de tu equipo» y caso práctico del enlace entre edificios
```

---

## De qué va hoy

Hasta ayer los bits iban **tal cual** por el cable. Pero hay medios que no lo permiten: una línea
pensada para la voz, que corta las frecuencias bajas y altas, o **el aire**, donde una señal digital
en banda base no llega a ninguna parte.

La solución es **subir la información a una onda portadora** que sí viaja bien por ese medio, y
cambiarle algo en cada bit: la **amplitud**, la **frecuencia** o la **fase**. Es la modulación, y
combinando dos de esas propiedades a la vez se llega a **QAM**, la técnica con la que funcionan hoy
el Wi-Fi y la fibra hasta casa.

---

## Objetivos concretos

- Explicar qué es **modular** y para qué sirve, y qué hace un **módem**.
- Distinguir **portadora**, **moduladora** y señal **modulada**.
- Reconocer **ASK, FSK y PSK** en un dibujo y describir qué cambia en cada una.
- Clasificar los cuatro casos de modulación según la señal y la portadora sean analógicas o digitales.
- Explicar la **modulación multibit** y calcular bits por símbolo en **QAM**.
- Leer una **constelación**.
- Explicar por qué el Wi-Fi **baja de velocidad** cuando la señal empeora.

---

## Conocimientos previos necesarios

| Concepto | De dónde viene |
|---|---|
| Amplitud, frecuencia y fase | Día 1 |
| El medio como filtro | Día 1 |
| Banda base, baudios y bps | Día 2 |
| Más niveles, más sensibilidad al ruido | Día 2 |
| Bandas de 2,4 y 5 GHz | Semana 4, Día 4 |

---

## Orden de la sesión

| Bloque | Tiempo | Material |
|---|---:|---|
| 🧠 Repaso de lo fallado | 18 min | Aparece solo al inicio de la teoría |
| 📖 Teoría con 3 paradas de escritura | 68 min | [teoria.html](teoria.html) |
| 🃏 Flashcards (12 tarjetas) | 12 min | Al final de la teoría |
| ❓ Quiz cronometrado (15 preguntas) | 24 min | Al final de la teoría |
| 🛠️ Ejercicios con caso práctico (6 bloques) | 84 min | [ejercicios.html](ejercicios.html) |
| 💻 Laboratorio: la radio de tu equipo | 79 min | [laboratorio.html](laboratorio.html) |
| 🧾 Cierre y anotación de dudas | 15 min | — |
| | **300 min** | **5 h 00 min** |

Al ser una sesión de cinco horas, incluye un **caso práctico** que integra lo de toda la semana.

---

## El laboratorio de hoy

Primero, el **modulador** de la página: los mismos bits en ASK, FSK y PSK, uno debajo de otro, y su
posición en una constelación QAM de 16 puntos.

Después consultas **qué normas Wi-Fi admite tu adaptador** y averiguas cuántos bits por símbolo puede
llegar a usar cada una.

> ⚠️ La parte del adaptador es para **Windows**. En Linux el equivalente es `iw list`, que no se ha
> podido comprobar en este curso: requiere un equipo Linux con tarjeta Wi-Fi real.

---

## Cierre de la sesión

Comprueba que puedes, sin mirar:

- Dibujar `101` en ASK, FSK y PSK.
- Decir cuántos bits lleva cada símbolo de QAM-64.
- Explicar por qué un enlace de radio va más lento cuando llueve.

---

## Mañana

**Día 4 — Perturbaciones y capacidad.** Qué ensucia la señal por el camino, cómo se mide en
**decibelios** y cuál es el máximo de bits por segundo que cabe en un canal: los límites de
**Nyquist** y **Shannon**.

*Tarea de calentamiento:* hoy has visto que más puntos en la constelación dan más bits por símbolo.
¿Por qué no usar un millón de puntos? ¿Qué lo impide?

---

[🏠 Centro de Aprendizaje](../../../web_interactiva/index.html) · [Índice de la semana](../README.md) · [← Día 2](../Dia_02/README.md) · [Día 4 →](../Dia_04/README.md)
