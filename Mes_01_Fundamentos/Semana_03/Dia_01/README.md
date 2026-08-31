# Semana 3 — Día 1 (lunes)

```text
📅 Día: Semana 3 — Día 1
⏱️ Duración prevista: 4 h 24 min
📚 Objetivo: Por qué se divide la red en capas · el modelo OSI y sus capas 1, 2 y 3
🛠️ Práctica: Laboratorio «Recorre las capas en tu propio equipo»
```

---

## De qué va hoy

Llevas dos semanas acumulando piezas sueltas: señal, cable, MAC, IP, puertos, servidores, servicios. Hoy aparece el **mapa que las coloca a todas en su sitio**.

El modelo OSI no es una lista que memorizar: es la herramienta que permite **diagnosticar por capas** en vez de a ciegas, y la razón de que se pueda cambiar el Wi-Fi por un cable sin tocar nada más.

Hoy se ven las **tres capas de abajo**, las que llevan los datos de un sitio a otro. Mañana, las cuatro de arriba y la encapsulación.

---

## Objetivos concretos

Al terminar deberías poder:

- Explicar **qué problema resuelve** dividir en capas, con un ejemplo propio.
- Nombrar las **siete capas en orden**, en los dos sentidos.
- Decir de cada una de las capas 1, 2 y 3: **qué hace, con qué dirección trabaja y hasta dónde llega**.
- Distinguir el **alcance** de cada capa: un salto frente a extremo a extremo.
- Explicar por qué **la MAC cambia en cada salto y la IP no**.
- Situar en su capa cualquier problema de red que te describan.

---

## Conocimientos previos que hoy se recolocan

| Concepto | De dónde viene |
|---|---|
| Señal, medio, ruido y ancho de banda | Semana 1, Día 3 → **capa 1** |
| Dirección MAC y tramas | Semana 2, Día 1 → **capa 2** |
| Dirección IP, privada frente a pública, NAT | Semana 1, Día 4 → **capa 3** |
| Puertos y servicios | Semana 2, Día 5 → **capa 4**, mañana |

No hay nada nuevo que memorizar en esa columna de la derecha: es material que ya tienes, colocado por fin en su sitio.

---

## Orden de la sesión

| Bloque | Tiempo | Material |
|---|---:|---|
| 🧠 Repaso de lo fallado | 18 min | Aparece solo al inicio de la teoría |
| 📖 Teoría con 4 paradas de escritura | 62 min | [teoria.html](teoria.html) |
| 🃏 Flashcards (14 tarjetas) | 12 min | Al final de la teoría |
| ❓ Quiz cronometrado (14 preguntas) | 22 min | Al final de la teoría |
| 🛠️ Ejercicios (6 bloques) | 72 min | [ejercicios.html](ejercicios.html) |
| 💻 Laboratorio: recorre las capas | 64 min | [laboratorio.html](laboratorio.html) |
| 🧾 Cierre y anotación de dudas | 14 min | — |
| | **264 min** | **4 h 24 min** |

---

## El laboratorio de hoy

Recorres las capas **1 → 2 → 3 → 7** en tu propio equipo, un comando por capa, comprobando en cada una qué información aparece y cuál no.

Lo importante no es ejecutar los comandos: es darte cuenta de que **cada uno te enseña una capa distinta de la misma conexión**, y que un fallo se ve en unos y no en otros.

---

## Cierre de la sesión

Antes de cerrar, comprueba que puedes hacer esto **sin mirar**:

- Recitar las siete capas hacia arriba y hacia abajo.
- Decir el alcance de las capas 2 y 3 y por qué son distintos.
- Explicar dónde miran el switch y el router.

Si alguna falla, no pasa nada: el quiz de mañana incluye una pregunta de recuperación del Día 1, y el viernes hay test de toda la semana.

---

## Mañana

**Día 2 — Las capas de arriba y la encapsulación.** Transporte, sesión, presentación y aplicación, y sobre todo el mecanismo que hace funcionar el modelo: cómo un dato va bajando de capa en capa poniéndose cabeceras.

*Tarea de calentamiento:* si un fichero de 1 MB se envía por la red, ¿por el cable viaja exactamente 1 MB, más, o menos?

---

[🏠 Centro de Aprendizaje](../../../web_interactiva/index.html) · [Índice de la semana](../README.md) · [Día 2 →](../Dia_02/README.md)
