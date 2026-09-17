# Semana 5 — Conceptos de transmisión

> ✅ **Semana completa**: cinco días, **4 laboratorios** con visualizadores de señales y test semanal.

---

## Tema y objetivos

En el Mes 1 la capa física era una frase: «se encarga de transmitir los bits por el medio». Esta
semana se contesta a la pregunta que esa frase esconde:

> **¿Por qué un cable, o el aire, tiene una velocidad máxima?**

La respuesta ordena los cuatro días. Una señal no es una sola cosa, sino una **suma de frecuencias**,
y el medio **solo deja pasar algunas**. Todo lo demás —codificar, modular, luchar contra el ruido—
son formas de aprovechar mejor esas frecuencias.

Al terminar deberías poder:

1. Describir una señal por su **amplitud, frecuencia, periodo y fase**.
2. Explicar con Fourier por qué el medio limita la velocidad, y calcular cuántos armónicos llegan.
3. Distinguir los **dos significados** de «ancho de banda»: en hercios y en bits por segundo.
4. Codificar bits en **NRZ y Manchester**, y distinguir **baudios de bps**.
5. Explicar **ASK, FSK, PSK y QAM** y leer una constelación.
6. Trabajar en **decibelios** y calcular capacidades con **Nyquist y Shannon**.

---

## Conocimientos previos necesarios

| Concepto | De dónde viene |
|---|---|
| Qué le hace el medio a la señal | Semana 1, Día 2 |
| Analógico y digital, regeneración | Semana 1, Día 3 |
| El teorema de Nyquist **del muestreo** | Semana 1, Día 3 |
| Velocidad en bps y sus prefijos | Semana 1, Día 3 |
| Por qué se trenza el par trenzado | Semana 2, Día 2 |
| El repetidor regenera la señal | Semana 4, Día 1 |

> ⚠️ **Ojo con Nyquist.** En la Semana 1 apareció como teorema **del muestreo**: muestrear al doble de
> la frecuencia máxima. El jueves aparece otra vez, pero como **límite de capacidad** de un canal. Es
> el mismo Nyquist y la misma idea de fondo, aplicada al revés. El Día 4 lo explica.

---

## Conceptos nuevos

| Concepto | Día | Se usará después en |
|---|---|---|
| Amplitud, frecuencia, periodo y fase | 1 | Semana 7 (radio), Mes 11 (xDSL) |
| Serie de Fourier y armónicos | 1 | Semanas 6 y 7 |
| Ancho de banda en Hz frente a bps | 1 | Todo el mes · Semana 6 (categorías de cable en MHz) |
| El medio como filtro | 1 | Semana 6 |
| Codificación NRZ y Manchester | 2 | Mes 3 (Ethernet) |
| Sincronismo y transmisión síncrona y asíncrona | 2 | Mes 3 |
| Baudios frente a bps · señales multinivel | 2 | Mes 3, Semana 12 |
| Modulación ASK, FSK, PSK y QAM | 3 | Semana 7, **Semana 12 (Wi-Fi)**, Mes 11 |
| Constelaciones | 3 | Semana 12 |
| Decibelios y relación señal/ruido | 4 | Semanas 6, 7 y 8 (certificación) |
| Atenuación, diafonía, EMI y ruido impulsivo | 4 | **Semanas 6 y 8** |
| Capacidad de Nyquist y de Shannon | 4 | Semana 7, Mes 11 |

---

## Distribución de los cinco días

| Día | Tema | Duración | Materiales |
|-----|------|---------:|------------|
| **[Día 1](Dia_01/README.md)** · lunes | **Anatomía de una señal**: Fourier y el ancho de banda | 4 h 46 min | [Teoría y quiz](Dia_01/teoria.html) · [Ejercicios](Dia_01/ejercicios.html) · [Laboratorio](Dia_01/laboratorio.html) |
| **[Día 2](Dia_02/README.md)** · martes | **Codificación**: NRZ, Manchester, baudios y bps | 4 h 33 min | [Teoría y quiz](Dia_02/teoria.html) · [Ejercicios](Dia_02/ejercicios.html) · [Laboratorio](Dia_02/laboratorio.html) |
| **[Día 3](Dia_03/README.md)** · miércoles | **Modulación**: ASK, FSK, PSK y QAM | 5 h 00 min | [Teoría y quiz](Dia_03/teoria.html) · [Ejercicios](Dia_03/ejercicios.html) · [Laboratorio](Dia_03/laboratorio.html) |
| **[Día 4](Dia_04/README.md)** · jueves | **Perturbaciones y capacidad**: dB, Nyquist y Shannon | 4 h 14 min | [Teoría y quiz](Dia_04/teoria.html) · [Ejercicios](Dia_04/ejercicios.html) · [Laboratorio](Dia_04/laboratorio.html) |
| **[Día 5](Dia_05/README.md)** · viernes | Síntesis y **test semanal** | 3 h 03 min | [Síntesis y test](Dia_05/teoria.html) · [Recuperación](Dia_05/ejercicios.html) |

**Semana completa: 21 h 36 min.**

---

## Los cuatro laboratorios

Esta semana los laboratorios usan **visualizadores de señales** que calculan la onda en el propio
navegador. No hace falta instalar nada ni estar conectado.

| Día | Laboratorio | Lo que demuestra |
|---|---|---|
| 1 | Laboratorio de Fourier | Reproduces **la tabla de la red telefónica** del libro y encuentras a qué velocidad el receptor empieza a equivocarse |
| 2 | Tu tarjeta a 1 Gbps | Con 125 millones de cambios por segundo en cada par, de dónde salen los **mil millones de bits** |
| 3 | La radio de tu equipo | Qué normas Wi-Fi admite tu adaptador y qué modulación usa cada una |
| 4 | Canal con ruido | A qué relación señal/ruido aparecen los errores, y cómo la calcula Shannon |

> ⚠️ El Día 1 incluye una parte **para escuchar** la señal. Es opcional, pero baja el volumen antes: una
> onda cuadrada suena áspera.

---

## Evaluación

- **Quiz diario** al final de cada teoría, con recuperación de semanas anteriores.
- **Ejercicios** autocorregibles, con cálculos de frecuencia, baudios, decibelios y capacidad.
- **Laboratorios** con datos de tu propio equipo.
- **Viernes:** test semanal con **desglose por día** y hoja de recuperación.

Criterios: 70 % test, 30 % ejercicios prácticos. Aprobado: 5/10.

---

[🏠 Centro de Aprendizaje](../../web_interactiva/index.html) · [Índice del mes](../README.md) · [← Mes 1, Semana 4](../../Mes_01_Fundamentos/Semana_04/README.md)
