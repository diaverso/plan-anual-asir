# Semana 5 — Día 2 (martes)

```text
📅 Día: Semana 5 — Día 2
⏱️ Duración prevista: 4 h 33 min
📚 Objetivo: Codificación — NRZ, Manchester, baudios y bps
🛠️ Práctica: Laboratorio «Tu tarjeta a 1 Gbps»
```

---

## De qué va hoy

Ayer terminaste con una contradicción: una tarjeta a **1 Gbps** por un cable que deja pasar unos
**100 MHz**. Con dos niveles y un solo par, eso necesitaría frecuencias cinco veces más altas.

Hoy se resuelve. La clave está en **cómo se ponen los bits en el cable**: qué nivel significa qué,
cuándo cambia la señal y cuántos bits lleva cada cambio. Eso es la **codificación**, y de ella salen
dos conceptos que no hay que volver a confundir: **baudios** y **bits por segundo**.

---

## Objetivos concretos

- Distinguir **codificación** de **señalización**.
- Codificar una secuencia en **NRZ** y en **Manchester**, y dibujarla.
- Explicar el problema del **sincronismo** y por qué Manchester lo resuelve.
- Distinguir transmisión **síncrona** de **asíncrona**.
- Diferenciar **baudios** de **bps** y calcular uno a partir del otro.
- Explicar por qué las señales **multinivel** ganan velocidad y pierden resistencia al ruido.
- Explicar con cifras cómo consigue Gigabit Ethernet mil millones de bits por segundo.

---

## Conocimientos previos necesarios

| Concepto | De dónde viene |
|---|---|
| Fourier, armónicos y el medio como filtro | Día 1 |
| Ancho de banda en Hz y en bps | Día 1 |
| Transmisión en serie | Semana 1, Día 2 |
| Dúplex y semidúplex | Semana 1, Día 2 |

---

## Orden de la sesión

| Bloque | Tiempo | Material |
|---|---:|---|
| 🧠 Repaso de lo fallado | 18 min | Aparece solo al inicio de la teoría |
| 📖 Teoría con 3 paradas de escritura | 62 min | [teoria.html](teoria.html) |
| 🃏 Flashcards (12 tarjetas) | 12 min | Al final de la teoría |
| ❓ Quiz cronometrado (14 preguntas) | 22 min | Al final de la teoría |
| 🛠️ Ejercicios (6 bloques) | 76 min | [ejercicios.html](ejercicios.html) |
| 💻 Laboratorio: tu tarjeta a 1 Gbps | 70 min | [laboratorio.html](laboratorio.html) |
| 🧾 Cierre y anotación de dudas | 13 min | — |
| | **273 min** | **4 h 33 min** |

---

## El laboratorio de hoy

Dos partes. Primero, con el **codificador** de la página, compruebas qué le pasa a NRZ con dieciséis
ceros seguidos y cuántas transiciones hace Manchester con esos mismos bits.

Después consultas **las velocidades que admite tu propia tarjeta** y haces la cuenta que resuelve la
contradicción de ayer.

> ⚠️ El laboratorio **no cambia** la configuración de la tarjeta: solo la lee. Forzar una velocidad
> distinta cortaría tu conexión.

---

## Cierre de la sesión

Comprueba que puedes, sin mirar:

- Dibujar `0110` en NRZ y en Manchester.
- Explicar por qué NRZ tiene problemas con una ristra de ceros.
- Calcular los bps de una señal de 4 niveles a 1 000 baudios.

---

## Mañana

**Día 3 — Modulación.** Qué hacer cuando el medio no deja pasar las frecuencias bajas, o cuando el
medio es el aire: subir la información a una **portadora** y cambiarle la amplitud, la frecuencia o la
fase.

*Tarea de calentamiento:* hoy has visto que más niveles permiten más bits por cambio. ¿Qué otras
propiedades de una onda, además de su nivel, se te ocurre que podrían llevar información?

---

[🏠 Centro de Aprendizaje](../../../web_interactiva/index.html) · [Índice de la semana](../README.md) · [← Día 1](../Dia_01/README.md) · [Día 3 →](../Dia_03/README.md)
