# Semana 8 — Cableado estructurado

> ✅ **Semana completa**: cinco días, **4 laboratorios**, test semanal y **examen mensual**.

---

## Tema y objetivos

Tres semanas viendo medios sueltos: un cable, una fibra, una antena. Esta semana se ve el
**sistema**: cómo se organiza el cableado de un edificio entero para que dure veinte años, lo instale
quien lo instale y sirva para lo que haga falta.

> **Un cableado estructurado no se diseña para la red de hoy: se diseña para el edificio.**

Al terminar deberías poder:

1. Nombrar los **subsistemas** de un cableado estructurado y decir qué hace cada uno.
2. Aplicar las **distancias** de la norma y distinguir **enlace permanente** de **canal**.
3. Elegir y dimensionar **canalizaciones** y **armarios**, con sus unidades de rack.
4. Enumerar las **buenas prácticas** de instalación y los errores que arruinan una certificación.
5. Distinguir los **tres tipos de comprobadores** y explicar qué mide cada uno.
6. Interpretar un **informe de certificación**: continuidad, mapeado, longitud, atenuación, NEXT,
   FEXT, ELFEXT, ACR y pérdida por retorno.
7. **Etiquetar y documentar** una instalación para que otro técnico pueda trabajar con ella.
8. Superar el **examen mensual** del Mes 2.

---

## Aviso sobre las fuentes de esta semana

El libro de la asignatura dedica un apartado completo a la **comprobación del cableado** —el Día 3
sale casi entero de ahí— pero apenas roza la **normativa**: cita EIA/TIA-568, EN-50173 e
ISO/IEC 11801 y dice que «definen en la práctica cómo se deben instalar las redes en los edificios»,
sin desarrollarlo. Y de la instalación física solo trata, en un párrafo, los armarios de distribución
y el montaje en rack.

Por eso los **Días 1, 2 y 4** se apoyan en las propias normas y en la práctica profesional. Cada
apartado que no salga del libro va marcado en la página, como en las semanas anteriores.

---

## Conocimientos previos necesarios

| Concepto | De dónde viene |
|---|---|
| Rack, panel de parcheo, roseta y latiguillo | Mes 1, Semana 2, Día 4 |
| Los 100 m del enlace: 90 + 10 | Semana 6, Días 1 y 2 |
| Categorías y su ancho de banda en MHz | Semana 6, Día 1 |
| Montaje de conectores y destrenzado | Semana 6, Día 2 |
| Par partido, comprobador y certificador | Semana 6, Día 2 |
| Fibra: tipos, conectores y presupuesto óptico | Semana 6, Día 3 |
| Elección de medio y seguridad eléctrica | Semana 6, Día 4 |
| Atenuación, diafonía y decibelios | Semana 5, Día 4 |

---

## Conceptos nuevos

| Concepto | Día | Se usará después en |
|---|---|---|
| Los seis subsistemas del cableado | 1 | **Mes 12**, proyecto final |
| Topología en estrella jerárquica | 1 | Mes 3 |
| Enlace permanente y canal | 1 | Día 3 |
| Distancias de la norma y backbone | 1 | Mes 12 |
| Canalizaciones: canaleta, bandeja, tubo | 2 | Mes 12 |
| Armarios, unidades de rack y su reparto | 2 | **Mes 12** |
| Buenas prácticas de tirado e instalación | 2 | Mes 12 |
| Comprobadores: continuidad, cableado y TDR | 3 | Mes 12 |
| Reflectometría y OTDR | 3 | Mes 11 |
| Parámetros de certificación | 3 | **Mes 12** |
| Etiquetado normalizado | 4 | Mes 12 |
| Documentación de proyecto y garantía | 4 | **Mes 12**, proyecto final |

---

## Distribución de los cinco días

| Día | Tema | Duración | Materiales |
|-----|------|---------:|------------|
| **[Día 1](Dia_01/README.md)** · lunes | **Los subsistemas**: cómo se organiza el cableado de un edificio | 4 h 33 min | [Teoría y quiz](Dia_01/teoria.html) · [Ejercicios](Dia_01/ejercicios.html) · [Laboratorio](Dia_01/laboratorio.html) |
| **[Día 2](Dia_02/README.md)** · martes | **Instalación física**: canalizaciones, armarios y buenas prácticas | 4 h 26 min | [Teoría y quiz](Dia_02/teoria.html) · [Ejercicios](Dia_02/ejercicios.html) · [Laboratorio](Dia_02/laboratorio.html) |
| **[Día 3](Dia_03/README.md)** · miércoles | **Comprobación y certificación**: los parámetros y sus aparatos | 4 h 55 min | [Teoría y quiz](Dia_03/teoria.html) · [Ejercicios](Dia_03/ejercicios.html) · [Laboratorio](Dia_03/laboratorio.html) |
| **[Día 4](Dia_04/README.md)** · jueves | **Etiquetado y documentación**: entregar el proyecto | 4 h 11 min | [Teoría y quiz](Dia_04/teoria.html) · [Ejercicios](Dia_04/ejercicios.html) · [Laboratorio](Dia_04/laboratorio.html) |
| **[Día 5](Dia_05/README.md)** · viernes | Síntesis, **test semanal** y **examen mensual** | 3 h 52 min | [Síntesis y test](Dia_05/teoria.html) · [Examen mensual](../examen_mensual.html) |

**Semana completa: 21 h 57 min.**

---

## Los cuatro laboratorios

| Día | Laboratorio | Qué se obtiene |
|---|---|---|
| 1 | Los subsistemas de tu edificio | Identificas cada subsistema donde vives o estudias y dibujas el esquema en estrella |
| 2 | Monta el armario | Repartes las **unidades de rack** de un armario de planta y calculas canalizaciones |
| 3 | Lee el informe | Interpretas **tres certificaciones reales**, una aprobada y dos fallidas, y diagnosticas la causa |
| 4 | Documenta la instalación | Construyes el **etiquetado**, la tabla de enlaces y el dosier de entrega |

---

## Evaluación

- **Quiz diario** al final de cada teoría.
- **Ejercicios** autocorregibles con cálculos de distancias, unidades de rack y decibelios.
- **Viernes:** test semanal **y** [examen mensual](../examen_mensual.html) del Mes 2, con repaso
  previo de los fallos acumulados durante el mes.

Criterios de la semana: 70 % test, 30 % ejercicios. Examen mensual: 50 % test, 50 % práctica.
Aprobado: 5/10.

---

[🏠 Centro de Aprendizaje](../../web_interactiva/index.html) · [Índice del mes](../README.md) · [← Semana 7](../Semana_07/README.md)
