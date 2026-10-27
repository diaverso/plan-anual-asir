# Semana 9 — Día 4 (jueves)

```text
📅 Día: Semana 9 — Día 4
⏱️ Duración prevista: 4 h 33 min
📚 Objetivo: ARP, el puente entre la IP y la MAC
🛠️ Práctica: Ver ARP trabajando en tu red
```

---

## De qué va hoy

El lunes quedó una pregunta abierta: si la capa de red trabaja con direcciones IP y la de enlace con
direcciones MAC, **alguien tiene que traducir**. Ese alguien es **ARP**, y hoy le toca.

El libro lo trata en un apartado con un nombre que lo explica todo: «Coordinación entre los
distintos niveles». Porque de eso se trata: de que un equipo tenga varias direcciones a la vez y
todas acaben encajando.

Hoy también se cierra la semana por el lado práctico: vas a **vaciar tu tabla ARP y verla
reconstruirse**, que es la forma más directa de entender un protocolo.

---

## Objetivos concretos

- Explicar **qué problema resuelve** ARP y por qué no se puede evitar.
- Describir los **cinco pasos** de una resolución ARP tal como los enumera el libro.
- Explicar por qué la pregunta va en **difusión** y la respuesta en **unicast**.
- Distinguir las entradas **dinámicas** de las **estáticas** de la tabla.
- Explicar cómo funciona ARP cuando el destino está **en otra red**.
- Saber qué era **RARP** y qué lo sustituyó.

---

## Orden de la sesión

| Bloque | Tiempo | Material |
|---|---:|---|
| 🧠 Repaso: lo fallado ayer | 18 min | Aparece al abrir la teoría |
| 📖 Teoría con paradas de escritura | 62 min | [teoria.html](teoria.html) |
| 🃏 Flashcards | 13 min | En la misma página |
| ❓ Quiz cronometrado | 22 min | Al final de la teoría |
| 🛠️ Ejercicios | 76 min | [ejercicios.html](ejercicios.html) |
| 💻 Laboratorio: ARP en vivo | 66 min | [laboratorio.html](laboratorio.html) |
| 🧾 Cierre | 16 min | — |
| | **273 min** | **4 h 33 min** |

---

## Lo que hace falta

Un **terminal con permisos de administrador** para una parte del laboratorio: vaciar la tabla ARP lo
exige. Si no puedes, se indica una alternativa que funciona sin privilegios.

---

## Cierre de sesión

Anota cuántas entradas tenía tu tabla ARP, cuántas quedaron al vaciarla y cuántas había un minuto
después. Explica con tus palabras por qué vuelven solas.

**Qué reforzar**: la diferencia entre pedir la MAC de un equipo de tu red y la de uno de fuera. Es la
base del Mes 6 y vuelve en el Mes 11 al hablar de ataques.

---

## Lo que viene mañana

**Día 5 — Síntesis y test semanal.** Viernes: mapa de la semana, flashcards de los cuatro días y un
test de 22 preguntas con desglose por día.

---

[🏠 Centro de Aprendizaje](../../../web_interactiva/index.html) · [Índice de la semana](../README.md) · [← Día 3](../Dia_03/README.md) · [Teoría →](teoria.html)
