# Semana 4 — Día 1 (lunes)

```text
📅 Día: Semana 4 — Día 1
⏱️ Duración prevista: 4 h 31 min
📚 Objetivo: Dispositivos de capa 1 y 2 — del repetidor al switch
🛠️ Práctica: Laboratorio «Demuestra que tu red usa un switch»
```

---

## De qué va hoy

Tres semanas de conceptos —señales, MAC, capas, encapsulación— y esta semana se convierten en **aparatos que se compran, se instalan y se configuran**.

Hay una idea que ordena las cuatro sesiones: **cada dispositivo se define por la capa más alta que es capaz de mirar**. Hoy tocan las dos primeras: repetidor y hub en la capa 1, puente y switch en la capa 2.

Y la pregunta interesante del día: **por qué el hub desapareció por completo** siendo más barato.

---

## Objetivos concretos

- Clasificar cualquier dispositivo de red por su capa y explicar el criterio.
- Explicar por qué un hub **no puede** filtrar, y quién filtra en su lugar.
- Calcular el ancho de banda por equipo en una red con hub.
- Explicar los tres problemas del hub: rendimiento, semidúplex y seguridad.
- Decir qué idea aportó el **puente** y por qué el switch es «un puente con muchos puertos».
- **Contar dominios** de colisión y de broadcast en cualquier escenario.
- Explicar por qué un switch **no** separa dominios de broadcast.

---

## Conocimientos previos necesarios

| Concepto | De dónde viene |
|---|---|
| Dominios de colisión y de broadcast | Semana 1, Día 6 |
| CSMA/CD, dúplex y semidúplex | Semana 1, Día 2 |
| Topología física frente a lógica | Semana 1, Día 5 |
| Regenerar frente a amplificar | Semana 1, Día 3 |
| MAC, difusión y bit I/G | Semana 2, Día 1 |
| Las capas y su alcance | Semana 3, Día 1 |

Hoy **no se explica** ninguno de esos conceptos otra vez: se usan. Si alguno se te ha quedado flojo, repásalo antes.

---

## Orden de la sesión

| Bloque | Tiempo | Material |
|---|---:|---|
| 🧠 Repaso de lo fallado | 18 min | Aparece solo al inicio de la teoría |
| 📖 Teoría con 3 paradas de escritura | 60 min | [teoria.html](teoria.html) |
| 🃏 Flashcards (14 tarjetas) | 12 min | Al final de la teoría |
| ❓ Quiz cronometrado (14 preguntas) | 22 min | Al final de la teoría |
| 🛠️ Ejercicios (6 bloques) | 74 min | [ejercicios.html](ejercicios.html) |
| 💻 Laboratorio con Wireshark | 70 min | [laboratorio.html](laboratorio.html) |
| 🧾 Cierre y anotación de dudas | 15 min | — |
| | **271 min** | **4 h 31 min** |

---

## El laboratorio de hoy

Uno de los más redondos del mes, porque **demuestra la teoría con un número**.

Capturas todo el tráfico que pasa por tu cable, sin filtro, y lo clasificas en cuatro montones con filtros de visualización: lo tuyo, la difusión, el multicast y **lo de otros equipos**.

En una captura real de 18 segundos salieron **870 tuyas, 23 de difusión, 145 de multicast y 0 de otros equipos** — y eso con seis o siete aparatos usando la red a la vez.

Ese cero es la diferencia entre la capa 1 y la capa 2. Con un hub, ese montón sería el más grande de los cuatro.

> ⚠️ Hoy **no** se pone filtro de captura: queremos ver justamente lo que no va dirigido a nosotros.

---

## Cierre de la sesión

Comprueba que puedes, sin mirar:

- Decir la capa de cada dispositivo y qué mira.
- Contar dominios en un escenario con switch y hub mezclados.
- Explicar por qué el switch no separa dominios de broadcast.

---

## Mañana

**Día 2 — El switch por dentro.** Cómo construye su tabla MAC sin que nadie se la configure, qué hace cuando no conoce un destino y por qué el arranque de una red es una sucesión de preguntas a gritos.

*Tarea de calentamiento:* un switch recién enchufado no conoce ninguna MAC. ¿Cómo averigua quién está en cada puerto, si nadie se lo dice?

---

[🏠 Centro de Aprendizaje](../../../web_interactiva/index.html) · [Índice de la semana](../README.md) · [Día 2 →](../Dia_02/README.md)
