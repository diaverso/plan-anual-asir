# Semana 2 — Día 6: Método de diseño de una red

```text
📅 Día: Semana 2 — Día 6
⏱️ Duración prevista: 3 h 24 min
📚 Objetivo: aprender a diseñar una red y a justificar cada decisión
🛠️ Práctica: PROYECTO — diseñar la red completa de Gestoría Ribera, S.L.
```

---

## Este día es distinto

Es el primer día del curso en el que **produces una propuesta** en lugar de responder preguntas. Por eso el reparto de tiempo se invierte: la teoría baja a 40 minutos y el proyecto sube a 70.

| | Un día normal | Hoy |
|---|---:|---:|
| Teoría | 45-50 min | **40 min** |
| Ejercicios | ~58 min | **45 min** |
| Laboratorio | ~55 min | **70 min** |

---

## Objetivos concretos

Al terminar la sesión debes ser capaz de:

1. Formular las **preguntas** que hay que hacer antes de diseñar nada, y saber qué decide cada una.
2. Aplicar el método: **requisitos → topología → medio → equipamiento → servicios → riesgos**.
3. Dimensionar contando **tomas, no personas**, con margen de crecimiento contrastado.
4. Decidir **cobre o fibra** en cada tramo y cuántos armarios hacen falta.
5. Distinguir **asumir** un riesgo de **ignorarlo**, y redactarlo como iría en un informe.
6. Enumerar la documentación mínima de una instalación y por qué el **registro de decisiones** es la parte más valiosa.
7. Justificar por qué el mejor diseño es **el más avanzado que esa empresa puede sostener**.

---

## Conocimientos previos necesarios

Hoy se usa **todo lo de dos semanas**:

| Concepto | Dónde se vio |
|---|---|
| Topologías y modelo jerárquico | Semana 1, Días 5 y 6 |
| Tipos de red, VPN y NAT | Semana 1, Día 4 |
| Categorías, 100 m y cableado estructurado | Semana 2, Día 2 |
| Cliente-servidor frente a P2P | Semana 2, Día 3 |
| RAID, disponibilidad, MTTR y SPOF | Semana 2, Día 4 |
| Servicios, dependencias y orden de arranque | Semana 2, Día 5 |

> **Alcance:** se diseña a nivel de **componentes y servicios**. El cálculo de subredes es el Mes 4, las VLAN el Mes 9 y el enrutamiento los Meses 7 y 8.

---

## Orden de la sesión

| # | Bloque | Tiempo | Material |
|---|--------|-------:|----------|
| 1 | 🧠 Repaso de los Días 4 y 5 | 15 min | Flashcards de [Día 4](../Dia_04/teoria.html#repaso) y [Día 5](../Dia_05/teoria.html#repaso) |
| 2 | 📖 Teoría + 3 checkpoints | 40 min | [teoria.html](teoria.html) |
| 3 | 🃏 Flashcards del día (11) | 8 min | [teoria.html](teoria.html#repaso) |
| 4 | ❓ Quiz cronometrado (12 preguntas) | 16 min | [teoria.html](teoria.html#quiz-inicio) |
| 5 | 🛠️ Ejercicios (4 bloques) | 45 min | [ejercicios.html](ejercicios.html) |
| 6 | 💻 **PROYECTO** | 70 min | [laboratorio.html](laboratorio.html) |
| 7 | 🧾 Cierre y revisión del diseño | 10 min | — |
| | **Total** | **3 h 24 min** | |

---

## El proyecto

**Gestoría Ribera, S.L.**: 60 personas en 2 plantas, datos fiscales de clientes, sin informático interno y con presupuesto ajustado. Hay que entregar topología, medio, dimensionado, reparto de servicios, análisis de riesgos y documentación.

**Ten papel y lápiz a mano.** Dibujar la topología antes de escribir evita la mitad de los errores.

El enunciado incluye un dato que **hace inviable** la solución más obvia. Localízalo antes de empezar.

### Cómo se evalúa

No hay una única solución correcta: varios diseños distintos pueden ser válidos si están bien justificados, y uno «correcto» sin justificación no vale nada. Por eso la mayoría de apartados son de **autoevaluación con rúbrica**, y solo los cálculos se corrigen solos.

---

## Cierre de la sesión

Comprueba que puedes responder sin mirar:

- ¿Cuáles son los seis pasos del método, en orden?
- ¿Qué se cuenta para dimensionar un switch, y qué margen se aplica?
- ¿Cuándo hace falta un segundo armario?
- ¿Qué diferencia hay entre asumir e ignorar un riesgo?
- ¿Cuál es la parte más valiosa de la documentación, y por qué?

**Aspectos que suelen necesitar refuerzo:**

- Contar personas en lugar de tomas al dimensionar.
- Aplicar el porcentaje de margen sin contrastarlo con el crecimiento declarado.
- Redundar lo llamativo y dejar la cadena rota en la pieza barata.

---

## Navegación

- ⬅️ [Día 5 — Los servicios que sostienen una red](../Dia_05/README.md)
- 📋 [Índice de la Semana 2](../README.md)
- 🏠 [Centro de Aprendizaje](../../../web_interactiva/index.html)
