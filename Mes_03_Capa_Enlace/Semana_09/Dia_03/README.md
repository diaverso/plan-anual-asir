# Semana 9 — Día 3 (miércoles)

```text
📅 Día: Semana 9 — Día 3
⏱️ Duración prevista: 4 h 18 min
📚 Objetivo: Acceso al medio y control de flujo
🛠️ Práctica: Buscar colisiones donde ya no quedan
```

---

## De qué va hoy

Ya sabemos **a quién** va el mensaje y **cómo** se empaqueta. Falta el acuerdo más básico de todos:
**quién habla y cuándo**.

El libro lo compara con un *walkie-talkie*: si los dos interlocutores hablan a la vez, se produce
una **colisión** y no se entiende nada. Hoy se ven las dos familias de soluciones a ese problema, y
el otro acuerdo que hace falta: qué ocurre cuando el que recibe **no da abasto**.

Y se cierra con una pregunta incómoda: si hoy casi todo son conmutadores y full-dúplex, ¿sigue
haciendo falta todo esto?

---

## Objetivos concretos

- Explicar qué es una **colisión** y por qué solo ocurre en un medio compartido.
- Distinguir las dos familias de métodos de acceso: **contienda** y **turnos**.
- Describir el **paso de testigo** y en qué se diferencia de escuchar antes de hablar.
- Explicar el **control de flujo** y por qué no es lo mismo que el control de errores.
- Razonar por qué el conmutador y el full-dúplex **hicieron desaparecer las colisiones**.

---

## Orden de la sesión

| Bloque | Tiempo | Material |
|---|---:|---|
| 🧠 Repaso: lo fallado ayer | 16 min | Aparece al abrir la teoría |
| 📖 Teoría con paradas de escritura | 58 min | [teoria.html](teoria.html) |
| 🃏 Flashcards | 12 min | En la misma página |
| ❓ Quiz cronometrado | 20 min | Al final de la teoría |
| 🛠️ Ejercicios | 74 min | [ejercicios.html](ejercicios.html) |
| 💻 Laboratorio: busca colisiones | 62 min | [laboratorio.html](laboratorio.html) |
| 🧾 Cierre | 16 min | — |
| | **258 min** | **4 h 18 min** |

---

## Un aviso sobre el temario

El método de acceso de Ethernet, **CSMA/CD**, se estudia a fondo la **semana que viene**, que es
donde lo sitúa el `README.md` del curso. Hoy se ve el problema general y las familias de
soluciones, para que la semana que viene CSMA/CD se entienda como *una* respuesta entre varias y no
como la única que existe.

---

## Cierre de sesión

Anota el dúplex y la velocidad negociados por tu adaptador, y si tu equipo ha registrado alguna
colisión. Después explica con tus palabras por qué ese número es el que es.

**Qué reforzar**: la diferencia entre control de flujo y control de errores, que se confunden
constantemente y vuelven en el Mes 10 con TCP.

---

## Lo que viene mañana

**Día 4 — ARP.** La capa de red trabaja con direcciones IP y la de enlace con direcciones MAC.
Alguien tiene que traducir, y mañana se ve quién y cómo.

---

[🏠 Centro de Aprendizaje](../../../web_interactiva/index.html) · [Índice de la semana](../README.md) · [← Día 2](../Dia_02/README.md) · [Teoría →](teoria.html)
