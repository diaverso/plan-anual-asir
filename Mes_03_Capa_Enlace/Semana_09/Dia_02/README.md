# Semana 9 — Día 2 (martes)

```text
📅 Día: Semana 9 — Día 2
⏱️ Duración prevista: 4 h 20 min
📚 Objetivo: La trama: estructura, delimitación y detección de errores
🛠️ Práctica: Medir la sobrecarga real de tu tráfico
```

---

## De qué va hoy

Ayer quedó claro **a quién** va el mensaje. Hoy toca **cómo se empaqueta**.

El receptor no ve mensajes: ve una corriente de bits sin pausas. Alguien tiene que marcar dónde
empieza cada envío, dónde acaba, y dejar constancia de que no se ha estropeado por el camino. Eso
es la **trama**, y hoy se abre campo a campo.

Al final aparece una cuenta que se arrastra todo el curso: **cuánto de lo que pasa por el cable son
datos de verdad y cuánto es envoltorio**.

---

## Objetivos concretos

- Explicar por qué hace falta **delimitar** y qué pasa si no se hace.
- Nombrar los campos de la trama Ethernet y decir para qué sirve cada uno.
- Distinguir **Ethernet II** de **IEEE 802.3** y saber cuál se usa hoy.
- Explicar los límites de **64 y 1518 bytes** y qué es el relleno.
- Describir cómo detecta errores el **FCS** y por qué no los corrige.
- **Calcular la sobrecarga** de una trama y su eficiencia.

---

## Orden de la sesión

| Bloque | Tiempo | Material |
|---|---:|---|
| 🧠 Repaso: lo fallado ayer | 16 min | Aparece al abrir la teoría |
| 📖 Teoría con paradas de escritura | 60 min | [teoria.html](teoria.html) |
| 🃏 Flashcards | 12 min | En la misma página |
| ❓ Quiz cronometrado | 20 min | Al final de la teoría |
| 🛠️ Ejercicios | 74 min | [ejercicios.html](ejercicios.html) |
| 💻 Laboratorio: la sobrecarga de tu tráfico | 62 min | [laboratorio.html](laboratorio.html) |
| 🧾 Cierre | 16 min | — |
| | **260 min** | **4 h 20 min** |

---

## Lo que hace falta

Un **terminal**. Nada que instalar: el laboratorio usa el MTU que ya tiene configurado tu equipo y
`ping` para comprobarlo.

---

## Cierre de sesión

Anota el MTU de tu adaptador, la eficiencia que has calculado para una trama llena y para una
mínima, y la diferencia entre detectar y corregir un error.

**Qué reforzar**: el cálculo de eficiencia, que vuelve en la Semana 10 con las variantes de Ethernet
y en el Mes 10 al hablar de TCP.

---

## Lo que viene mañana

**Día 3 — Acceso al medio y control de flujo.** Ya sabemos empaquetar y direccionar. Falta ponerse
de acuerdo en **quién habla y cuándo**, y en qué pasa si el que recibe no da abasto.

---

[🏠 Centro de Aprendizaje](../../../web_interactiva/index.html) · [Índice de la semana](../README.md) · [← Día 1](../Dia_01/README.md) · [Teoría →](teoria.html)
