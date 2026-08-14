# Semana 2 — Día 2: El medio físico

```text
📅 Día: Semana 2 — Día 2
⏱️ Duración prevista: 3 h 47 min
📚 Objetivo: conocer el cable como componente y saber elegirlo y diagnosticarlo
🛠️ Práctica: leer la etiqueta de un cable real y medir la velocidad negociada de tu enlace
```

---

## Objetivos concretos

Al terminar la sesión debes ser capaz de:

1. Explicar **por qué está trenzado** el par trenzado, en términos de señalización diferencial.
2. Decidir cuándo tiene sentido un cable apantallado y **por qué mal usado empeora** la instalación.
3. Elegir la categoría correcta cruzando **velocidad objetivo y distancia real**.
4. Recordar el reparto de los **100 metros**: 90 de cableado fijo + 10 de latiguillos.
5. Distinguir **T568A de T568B** y explicar qué es un cable cruzado y por qué casi ha desaparecido.
6. Diagnosticar el caso clásico del **enlace que negocia 100 Mbps** teniendo equipamiento de gigabit.
7. Describir el **cableado estructurado** y para qué sirve el día que hay que reorganizar la oficina.

---

## Conocimientos previos necesarios

| Concepto | Dónde se vio | Para qué hace falta hoy |
|---|---|---|
| Señal, ruido y atenuación | Semana 1, Día 3 | Explica el trenzado y el límite de 100 m |
| Half-duplex y desajuste de dúplex | Semana 1, Día 2 | Reaparece en la autonegociación |
| Modelo jerárquico de tres capas | Semana 1, Día 6 | Decide dónde va cobre y dónde fibra |
| Cálculos de tiempo de transferencia | Semana 1, Día 3 | Se recupera en el quiz |

> **Alcance:** hoy se estudia el cable **como componente**. La física de la transmisión, la atenuación, la diafonía y la certificación con equipo de medida son el **Mes 2 completo**.

---

## Orden de la sesión

| # | Bloque | Tiempo | Material |
|---|--------|-------:|----------|
| 1 | 🧠 Repaso del Día 1 | 15 min | Flashcards del [Día 1](../Dia_01/teoria.html#repaso) |
| 2 | 📖 Teoría + 4 checkpoints | 50 min | [teoria.html](teoria.html) |
| 3 | 🃏 Flashcards del día (16) | 10 min | [teoria.html](teoria.html#repaso) |
| 4 | ❓ Quiz cronometrado (14 preguntas) | 20 min | [teoria.html](teoria.html#quiz-inicio) |
| 5 | 🛠️ Ejercicios (5 bloques) | 60 min | [ejercicios.html](ejercicios.html) |
| 6 | 💻 Laboratorio | 60 min | [laboratorio.html](laboratorio.html) |
| 7 | 🧾 Cierre y repaso de errores | 12 min | — |
| | **Total** | **3 h 47 min** | |

---

## Conceptos nuevos de hoy

| Concepto | Se usará después en |
|---|---|
| Señalización diferencial y trenzado | Mes 2 completo (capa física) |
| UTP, FTP, STP | Mes 2, semana 6 (medios cableados) |
| Categorías y límite de 100 m | Mes 2, y en todo diseño de red posterior |
| T568A / T568B, directo y cruzado | Semana 8 (cableado estructurado), prácticas con Packet Tracer |
| Auto-MDIX y autonegociación | Semana 10 (Ethernet), diagnóstico de dúplex |
| Fibra multimodo y monomodo | Mes 2, semana 6 |
| Cableado estructurado, rack, patch panel | Semana 8 y proyecto integrador de la semana 48 |

---

## Material necesario

- Un **cable de red** cualquiera que puedas mirar de cerca.
- Terminal con `Get-NetAdapter` (Windows) o `ethtool` (Linux).
- Opcional: acceso a la interfaz web de tu router.

---

## Cierre de la sesión

Comprueba que puedes responder sin mirar:

- ¿Por qué el ruido se cancela en un par trenzado?
- ¿Qué categoría hace falta para 10 Gbps a 80 metros, y por qué no vale Cat 6 ni Cat 8?
- ¿Cuántos pares usa 100 Mbps? ¿Y 1 Gbps? ¿Qué avería explica eso?
- ¿Qué se toca cuando hay que reorganizar los puestos de una oficina?

**Aspectos que suelen necesitar refuerzo:**

- Creer que Cat 6 da 10 Gbps a cualquier distancia.
- Pensar que los latiguillos no cuentan dentro de los 100 m.
- Suponer que el apantallado siempre mejora.

---

## Navegación

- ⬅️ [Día 1 — La tarjeta de red y la MAC](../Dia_01/README.md)
- 📋 [Índice de la Semana 2](../README.md)
- ➡️ [Día 3 — Software de red](../Dia_03/README.md)
- 🏠 [Centro de Aprendizaje](../../../web_interactiva/index.html)
