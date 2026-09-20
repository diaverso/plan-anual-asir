# Semana 6 — Medios cableados

> ✅ **Semana completa**: cinco días, **4 laboratorios** y test semanal.

---

## Tema y objetivos

La semana pasada quedó claro qué limita a un medio: su **ancho de banda** y su **relación
señal/ruido**. Esta semana se ve **de qué está hecho** cada medio, y por qué sus números son los que
son.

> **Elegir un medio no es elegir el más rápido, sino el que cumple en velocidad, distancia, ruido y
> presupuesto.**

Al terminar deberías poder:

1. Aplicar los **seis criterios** con los que se compara un medio de transmisión.
2. Distinguir toda la familia del par trenzado: **UTP, FTP, STP, S/STP y S/FTP**.
3. Explicar qué significan los **MHz** de una categoría y relacionarlos con la velocidad que admite.
4. **Montar y comprobar** un conector RJ-45, y saber qué errores arruinan un enlace.
5. Describir el **coaxial** y sus dos usos, y reconocer sus conectores.
6. Explicar la **fibra óptica**: sus tres componentes, sus tipos, sus empalmes y sus pérdidas.
7. **Elegir el medio adecuado** para un escenario y justificarlo con cifras.

---

## Conocimientos previos necesarios

| Concepto | De dónde viene |
|---|---|
| Par trenzado, UTP y categorías básicas | Mes 1, Semana 2, Día 2 |
| RJ-45, T568A y T568B, cable directo y cruzado | Mes 1, Semana 2, Día 2 |
| Cableado estructurado: rack, panel y latiguillo | Mes 1, Semana 2, Día 2 |
| Ancho de banda en Hz frente a bps | Semana 5, Día 1 |
| Baudios, bits por símbolo y 1000BASE-T | Semana 5, Día 2 |
| Atenuación, diafonía, EMI y decibelios | Semana 5, Día 4 |
| Nyquist y Shannon | Semana 5, Día 4 |

> ⚠️ **Esta semana no repite el Mes 1.** Lo de la Semana 2 se da por sabido y se usa. Lo nuevo es la
> familia completa de apantallamientos, el montaje real, el coaxial y la fibra en detalle, y los
> criterios de elección.

---

## Conceptos nuevos

| Concepto | Día | Se usará después en |
|---|---|---|
| Medios guiados y no guiados | 1 | Semana 7 |
| Los seis criterios de comparación | 1 | Semanas 7 y 8 |
| Par sin trenzar, categoría 1 y RJ-11 | 1 | — |
| FTP, S/STP y S/FTP · notación ISO | 1 | Semana 8 |
| El ancho de banda de cada categoría, en MHz | 1 | Semana 8 (certificación) |
| Montaje de RJ-45 macho y hembra | 2 | **Semana 8** |
| Herramientas: crimpadora, impacto, comprobador | 2 | Semana 8 |
| Errores de montaje: destrenzado, pares partidos | 2 | Semana 8 |
| Coaxial de banda base y de banda ancha | 3 | Mes 11 (acceso por cable) |
| Fibra: fuente, medio y detector | 3 | Semana 7, Mes 11 |
| Monomodo, multimodo e índice gradual | 3 | Mes 11 |
| Empalmes, conectores y pérdidas en fibra | 3 | Semana 8 |
| Presupuesto óptico en decibelios | 3 | Semana 8 |
| Criterios de elección y seguridad eléctrica | 4 | **Semana 8**, Mes 12 |

---

## Distribución de los cinco días

| Día | Tema | Duración | Materiales |
|-----|------|---------:|------------|
| **[Día 1](Dia_01/README.md)** · lunes | **El cobre por dentro**: criterios, apantallamientos y categorías | 4 h 20 min | [Teoría y quiz](Dia_01/teoria.html) · [Ejercicios](Dia_01/ejercicios.html) · [Laboratorio](Dia_01/laboratorio.html) |
| **[Día 2](Dia_02/README.md)** · martes | **Montaje y comprobación** de conectores | 4 h 41 min | [Teoría y quiz](Dia_02/teoria.html) · [Ejercicios](Dia_02/ejercicios.html) · [Laboratorio](Dia_02/laboratorio.html) |
| **[Día 3](Dia_03/README.md)** · miércoles | **Coaxial y fibra óptica** | 4 h 35 min | [Teoría y quiz](Dia_03/teoria.html) · [Ejercicios](Dia_03/ejercicios.html) · [Laboratorio](Dia_03/laboratorio.html) |
| **[Día 4](Dia_04/README.md)** · jueves | **Elegir el medio**: comparativa y diseño | 4 h 48 min | [Teoría y quiz](Dia_04/teoria.html) · [Ejercicios](Dia_04/ejercicios.html) · [Laboratorio](Dia_04/laboratorio.html) |
| **[Día 5](Dia_05/README.md)** · viernes | Síntesis y **test semanal** | 3 h 23 min | [Síntesis y test](Dia_05/teoria.html) · [Recuperación](Dia_05/ejercicios.html) |

**Semana completa: 22 h 07 min.**

---

## Los cuatro laboratorios

Ninguno exige comprar material. El del Día 2 tiene una **ampliación opcional** para quien disponga
de cable, conectores y crimpadora.

| Día | Laboratorio | Qué se obtiene |
|---|---|---|
| 1 | El cableado que ya tienes | Lees la **etiqueta impresa** de tus cables y compruebas si su categoría da para la velocidad que has negociado |
| 2 | Diagnóstico y plano | Interpretas fallos típicos de montaje a partir de sus síntomas y dibujas el plano de una instalación |
| 3 | Presupuesto óptico | Calculas en **decibelios** si un enlace de fibra llega, contando conectores y empalmes |
| 4 | Elegir medio para cuatro tramos | Justificas la elección de cada tramo de una nave con cifras |

---

## Evaluación

- **Quiz diario** al final de cada teoría, con recuperación de la Semana 5 y del Mes 1.
- **Ejercicios** autocorregibles, con cálculos de distancia, atenuación y presupuesto.
- **Viernes:** test semanal con desglose por día y hoja de recuperación.

Criterios: 70 % test, 30 % ejercicios prácticos. Aprobado: 5/10.

---

[🏠 Centro de Aprendizaje](../../web_interactiva/index.html) · [Índice del mes](../README.md) · [← Semana 5](../Semana_05/README.md)
