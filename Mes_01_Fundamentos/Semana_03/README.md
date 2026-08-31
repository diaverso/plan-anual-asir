# Semana 3 — Arquitecturas y modelos: OSI, TCP/IP y normalización

> ✅ **Semana completa**: los cinco días publicados, con **4 laboratorios** y test semanal.

> 🗓️ **Primera semana con el nuevo calendario de cinco días.** De lunes a jueves, contenido nuevo; el **viernes**, síntesis y evaluación. Las Semanas 1 y 2 se publicaron con siete días y se conservan tal cual.

---

## Tema y objetivos

Las dos primeras semanas fueron acumulando piezas: señal, cable, MAC, IP, puertos, servidores, servicios. Cada una se entendía por separado, pero **faltaba el mapa** que las coloca a todas en su sitio.

Eso es esta semana. No se aprende ninguna tecnología nueva: se aprende **la estructura** que ordena todas las que ya conoces y todas las que vendrán.

Al terminar deberías poder:

1. Explicar **por qué** una red se divide en capas, más allá de recitarlas.
2. Nombrar las **siete capas de OSI** y decir de cada una qué hace y con qué dirección trabaja.
3. Seguir la **encapsulación** de un dato hacia abajo y hacia arriba, sabiendo cómo se llama en cada nivel.
4. Manejar el modelo **TCP/IP** y su correspondencia con OSI.
5. Situar en su capa cualquier problema de red, que es lo que convierte el modelo en una herramienta de **diagnóstico**.

---

## Conocimientos previos necesarios

| Concepto | De dónde viene | En qué capa encaja |
|---|---|---|
| Señal, medio, ruido, ancho de banda | Semana 1, Día 3 | Capa 1 |
| Dirección MAC, tramas, FCS | Semana 2, Día 1 | Capa 2 |
| Dirección IP, privada/pública, NAT | Semana 1, Día 4 | Capa 3 |
| Puertos y servicios | Semana 2, Día 5 | Capa 4 |
| Cliente-servidor, HTTP, DNS | Semana 2, Días 3 y 5 | Capa 7 |

Esta tabla es, en el fondo, el resumen de la semana: **nada de la izquierda es nuevo**; lo nuevo es la columna de la derecha.

---

## Distribución de los cinco días

| Día | Tema | Duración | Materiales |
|-----|------|---------:|------------|
| **[Día 1](Dia_01/README.md)** · lunes | Por qué capas · OSI: capas 1, 2 y 3 | 4 h 24 min | [Teoría y quiz](Dia_01/teoria.html) · [Ejercicios](Dia_01/ejercicios.html) · [Laboratorio](Dia_01/laboratorio.html) |
| **[Día 2](Dia_02/README.md)** · martes | OSI: capas 4 a 7 · **encapsulación** | 4 h 47 min | [Teoría y quiz](Dia_02/teoria.html) · [Ejercicios](Dia_02/ejercicios.html) · [Laboratorio](Dia_02/laboratorio.html) |
| **[Día 3](Dia_03/README.md)** · miércoles | El modelo **TCP/IP** y su comparación con OSI | 4 h 12 min | [Teoría y quiz](Dia_03/teoria.html) · [Ejercicios](Dia_03/ejercicios.html) · [Laboratorio](Dia_03/laboratorio.html) |
| **[Día 4](Dia_04/README.md)** · jueves | **Normalización** · estreno de **Wireshark** | 4 h 38 min | [Teoría y quiz](Dia_04/teoria.html) · [Ejercicios](Dia_04/ejercicios.html) · [Laboratorio](Dia_04/laboratorio.html) |
| **[Día 5](Dia_05/README.md)** · viernes | Síntesis y **test semanal** de 25 preguntas | 3 h 34 min | [Síntesis y test](Dia_05/teoria.html) · [Recuperación](Dia_05/ejercicios.html) |

**Semana completa: 21 h 35 min.**

---

## Conceptos nuevos

| Concepto | Día | Se usará después en |
|---|---|---|
| Modelo de capas y su utilidad | 1 | Todo el curso |
| Las siete capas de OSI | 1 y 2 | Todo el curso |
| Alcance por capa: un salto frente a extremo a extremo | 1 | Semanas 4, 21 y siguientes |
| PDU: datos, segmento, paquete, trama, bits | 2 | Semana 4, Mes 3 |
| Encapsulación y desencapsulación | 2 | Semana 4, Mes 5 |
| Tamaños de cabecera y eficiencia | 2 | Mes 3, cálculos de rendimiento |
| MTU, MSS y fragmentación | 2 | Mes 5, enrutamiento |
| Comunicación entre pares | 2 | Semana 21 |
| Modelo TCP/IP | 3 | Todo el curso |
| Organismos de normalización | 4 | Meses 2 y 3 |

---

## Cómo se usará esta semana más adelante

El modelo de capas no se estudia una vez y se olvida: **reaparece cada vez que entra una tecnología nueva**, y por eso conviene que quede sólido ahora.

| Cuándo | Para qué se usará |
|---|---|
| Semana 4 | Situar hub, switch y router en su capa |
| Mes 2 | Detallar la capa 1: medios y transmisión |
| Mes 3 | Detallar la capa 2: Ethernet y tramas |
| Meses 4-5 | Detallar la capa 3: IP y enrutamiento |
| Mes 9 | Detallar la capa 4: TCP y UDP |
| Mes 10 | Detallar la capa 7: DNS, DHCP, HTTP |

---

## Herramientas que se estrenan

| Herramienta | Día | Para qué |
|---|---|---|
| `Resolve-DnsName` / `dig` | 3 | Resolver un nombre a mano y ver que DNS es capa de aplicación |
| `Get-NetTCPConnection` / `ss` | 3 | Ver las conexiones abiertas: IP, puertos y programa de cada una |
| `curl -v` | 3 | Seguir una petición web capa por capa |
| **Wireshark** | 4 | Ver los bytes reales de una trama y comprobar las cuentas de la semana |

> ⚠️ **Wireshark hay que instalarlo** ([wireshark.org/download.html](https://www.wireshark.org/download.html)), incluido el componente **Npcap** en Windows. Reserva unos minutos al empezar el Día 4.

---

## Evaluación prevista

- **Quiz diario** al final de cada teoría, con recuperación de días anteriores.
- **Ejercicios** autocorregibles, incluidos cálculos de cabeceras y MTU.
- **Laboratorios** con datos reales de tu propio equipo.
- **Viernes:** test semanal de 20 a 30 preguntas con desglose por día.

Criterios: 70 % test, 30 % ejercicios prácticos. Aprobado: 5/10.

---

[🏠 Centro de Aprendizaje](../../web_interactiva/index.html) · [Índice del mes](../README.md) · [← Semana 2](../Semana_02/README.md)
