# Semana 4 — Día 2 (martes)

```text
📅 Día: Semana 4 — Día 2
⏱️ Duración prevista: 4 h 55 min
📚 Objetivo: El switch por dentro — la tabla MAC y ARP
🛠️ Práctica: Laboratorio «El aprendizaje en directo»
```

---

## De qué va hoy

Ayer terminaste con una pregunta abierta: un switch recién enchufado **no conoce ninguna MAC**, nadie se las configura, y aun así a los pocos segundos entrega cada trama en su puerto.

Hoy verás cómo lo consigue. Y cabe en una frase: **aprende de la MAC de origen y decide con la de destino**.

---

## Objetivos concretos

- Explicar por qué el switch aprende del **origen** y no del destino.
- Describir la **tabla MAC**: qué relaciona, cómo se llena y por qué se llama CAM.
- Aplicar las **tres decisiones**: reenviar, filtrar e inundar.
- Simular el llenado de una tabla trama a trama.
- Explicar la **caducidad** de las entradas y qué efecto visible tiene.
- Explicar qué hace **ARP** y por qué la pregunta va en difusión y la respuesta en unicast.
- Distinguir la tabla **MAC** de la tabla **ARP**.
- Comparar **store-and-forward** con **cut-through**.

---

## Conocimientos previos necesarios

| Concepto | De dónde viene |
|---|---|
| El switch decide por MAC; dominios | Día 1 |
| Difusión y bit I/G | Semana 2, Día 1 |
| El FCS y para qué sirve | Semana 2, Día 1 |
| Direcciones IP frente a MAC | Semana 1, Día 4 |
| Alcance de la capa 2 | Semana 3, Día 1 |

---

## Orden de la sesión

| Bloque | Tiempo | Material |
|---|---:|---|
| 🧠 Repaso de lo fallado ayer | 20 min | Aparece solo al inicio de la teoría |
| 📖 Teoría con 3 paradas de escritura | 65 min | [teoria.html](teoria.html) |
| 🃏 Flashcards (15 tarjetas) | 14 min | Al final de la teoría |
| ❓ Quiz cronometrado (15 preguntas) | 24 min | Al final de la teoría |
| 🛠️ Ejercicios (6 bloques) | 80 min | [ejercicios.html](ejercicios.html) |
| 💻 Laboratorio: ARP en directo | 76 min | [laboratorio.html](laboratorio.html) |
| 🧾 Cierre y anotación de dudas | 16 min | — |
| | **295 min** | **4 h 55 min** |

---

## El laboratorio de hoy

Ayer mediste el **resultado** del filtrado; hoy ves el **mecanismo**.

Lees tu tabla ARP, provocas preguntas ARP haciendo ping a direcciones libres de tu red, y cuentas cuántas preguntas y cuántas respuestas te llegan.

El resultado real de una captura de 25 segundos: **64 preguntas pero solo 5 respuestas**, y las cinco eran mías.

Ves las preguntas de todo el mundo porque van en **difusión**, pero solo tus respuestas porque van en **unicast**. Es la medición de ayer, ahora con los dos comportamientos dentro del **mismo protocolo**.

---

## Cierre de la sesión

Comprueba que puedes, sin mirar:

- Decir de qué dirección aprende el switch y con cuál decide.
- Enumerar las tres decisiones y cuándo se toma cada una.
- Simular tres tramas sobre una tabla vacía.
- Explicar por qué la pregunta ARP va en difusión.

---

## Mañana

**Día 3 — El router.** El aparato que sí separa dominios de broadcast. Qué mira, cómo decide y por qué su tabla, a diferencia de la del switch, **no se construye sola**.

*Tarea de calentamiento:* el switch aprende solo escuchando. ¿Podría un router hacer lo mismo para saber por dónde se va a una red que está a diez saltos?

---

[🏠 Centro de Aprendizaje](../../../web_interactiva/index.html) · [Índice de la semana](../README.md) · [← Día 1](../Dia_01/README.md)
