# Semana 2 — Día 4: Servidores

```text
📅 Día: Semana 2 — Día 4
⏱️ Duración prevista: 3 h 35 min
📚 Objetivo: qué hace fiable a un servidor, cómo se mide la disponibilidad y por qué se virtualiza
🛠️ Práctica: cálculo de disponibilidad y análisis de puntos únicos de fallo de tu red
```

---

## Objetivos concretos

Al terminar la sesión debes ser capaz de:

1. Explicar por qué en un servidor se paga la **fiabilidad** y no la potencia.
2. Decir qué resuelve cada característica: ECC, fuentes redundantes, hot-swap, RAID y gestión remota.
3. Recordar qué tolera cada nivel de **RAID** y calcular su capacidad útil.
4. Explicar por qué **RAID no es una copia de seguridad**.
5. Convertir un porcentaje de disponibilidad en **minutos de caída al año**, y al revés.
6. Aplicar **disponibilidad = MTBF ÷ (MTBF + MTTR)** y razonar dónde conviene invertir.
7. Detectar **puntos únicos de fallo** en una instalación, incluidos los no técnicos.
8. Distinguir hipervisor de **tipo 1 y tipo 2**, y contenedor de máquina virtual.
9. Separar **IaaS, PaaS y SaaS** por el reparto de responsabilidad.

---

## Conocimientos previos necesarios

| Concepto | Dónde se vio | Para qué hace falta hoy |
|---|---|---|
| Servidor como papel, no como máquina | Semana 2, Día 3 | Hoy se ve la otra cara: la máquina |
| Rack y unidades U | Semana 2, Día 2 | Formatos de servidor |
| Modelo jerárquico de tres capas | Semana 1, Día 6 | Se recupera en el quiz |
| Tolerancia a fallos por topología | Semana 1, Días 5 y 6 | El concepto de SPOF lo generaliza |

---

## Orden de la sesión

| # | Bloque | Tiempo | Material |
|---|--------|-------:|----------|
| 1 | 🧠 Repaso del Día 3 | 15 min | Flashcards del [Día 3](../Dia_03/teoria.html#repaso) |
| 2 | 📖 Teoría + 4 checkpoints | 48 min | [teoria.html](teoria.html) |
| 3 | 🃏 Flashcards del día (16) | 10 min | [teoria.html](teoria.html#repaso) |
| 4 | ❓ Quiz cronometrado (14 preguntas) | 18 min | [teoria.html](teoria.html#quiz-inicio) |
| 5 | 🛠️ Ejercicios (5 bloques) | 58 min | [ejercicios.html](ejercicios.html) |
| 6 | 💻 Laboratorio | 55 min | [laboratorio.html](laboratorio.html) |
| 7 | 🧾 Cierre y repaso de errores | 11 min | — |
| | **Total** | **3 h 35 min** | |

---

## Fórmulas del día

```text
minutos de caída al año = 525 600 × (1 − disponibilidad)

disponibilidad = MTBF ÷ (MTBF + MTTR)

capacidad útil RAID 5 = (N − 1) × tamaño
capacidad útil RAID 6 = (N − 2) × tamaño
```

Un año tiene **525 600 minutos**. Cada nueve añadido **divide la caída entre diez**.

---

## Conceptos nuevos de hoy

| Concepto | Se usará después en |
|---|---|
| ECC, hot-swap, gestión remota | Mes 12 (administración) |
| Niveles de RAID | Mes 12, y en cualquier diseño de servidor |
| Disponibilidad, MTBF y MTTR | Mes 11 y Mes 12; proyecto integrador |
| Puntos únicos de fallo | Semana 33 (STP), Mes 11, proyecto integrador |
| Hipervisores y clústeres | Mes 12 |
| Contenedores | Mes 12 |
| IaaS, PaaS, SaaS | Mes 10 y Mes 12 |

---

## Cierre de la sesión

Comprueba que puedes responder sin mirar:

- ¿Qué se paga en un servidor, si no es la potencia?
- ¿Cuántos fallos tolera RAID 0? ¿Y RAID 6?
- ¿Por qué RAID no sustituye a una copia de seguridad?
- ¿Cuántos minutos al año permite el 99,9 %?
- Dos servidores, uno falla menos y otro se repara antes. ¿Cuál conviene?
- ¿Qué le falta a una empresa que virtualiza diez servicios en un solo anfitrión?

**Aspectos que suelen necesitar refuerzo:**

- Creer que RAID 0 es redundante porque lleva el nombre.
- Olvidar que los cálculos de disponibilidad parten de 525 600 minutos.
- Duplicar componentes y dejar la redundancia rota al final de la cadena (la regleta, el switch).

---

## Navegación

- ⬅️ [Día 3 — El software de red](../Dia_03/README.md)
- 📋 [Índice de la Semana 2](../README.md)
- ➡️ [Día 5 — Servicios de red](../Dia_05/README.md)
- 🏠 [Centro de Aprendizaje](../../../web_interactiva/index.html)
