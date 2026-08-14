# Semana 2 — Componentes de una red

> ⚠️ **Nota sobre el temario.** El `README.md` raíz asigna a esta semana *«Componentes y Tipos de Redes: PAN, LAN, MAN, WAN, topologías»*. La **mitad de tipos y topologías ya quedó cubierta en la Semana 1** (Día 4: PAN/LAN/MAN/WAN y VPN; Días 5 y 6: todas las topologías y los dominios de colisión y broadcast).
>
> Para no duplicar tres días de contenido, esta semana desarrolla la **otra mitad del título**: los **componentes** de una red, que no se habían visto. Sin invadir la Semana 3 (modelo OSI) ni la Semana 4 (hub, switch, router, AP).

> ✅ **Semana completa**: los 7 días publicados, con 6 laboratorios, 1 proyecto de diseño y test semanal.

---

## Tema y objetivos

Después de la Semana 1, sabes **qué es** una red, **cómo viaja** la señal y **con qué forma** se disponen los equipos. Lo que no has mirado nunca es **de qué está hecha**.

Esta semana desmonta la red pieza a pieza:

1. La **tarjeta de red**: el único componente imprescindible.
2. El **medio**: lo único que se toca con las manos.
3. El **software**: lo único que no se ve.
4. Los **servidores** que los sostienen y su disponibilidad.
5. Los **servicios** que hacen falta y de quién depende cada uno.
6. Cómo se **diseña** todo junto, en un proyecto real.

---

## Conocimientos previos necesarios

De la **Semana 1** completa, y especialmente:

| Concepto | Día de la Semana 1 |
|---|---|
| Señal, ruido, ancho de banda y latencia | Día 3 |
| Medio compartido, CSMA/CD y dúplex | Día 2 |
| PAN, LAN, MAN, WAN · IP privadas y NAT | Día 4 |
| Topologías y modelo jerárquico | Días 5 y 6 |
| Dominios de colisión y de broadcast | Día 6 |

---

## Distribución de los siete días

| Día | Tema | Duración | Materiales |
|-----|------|---------:|------------|
| **[Día 1](Dia_01/README.md)** | La tarjeta de red y la dirección MAC | 3 h 28 min | [Teoría y quiz](Dia_01/teoria.html) · [Ejercicios](Dia_01/ejercicios.html) · [Laboratorio](Dia_01/laboratorio.html) |
| **[Día 2](Dia_02/README.md)** | El medio físico: cables, conectores y cableado estructurado | 3 h 47 min | [Teoría y quiz](Dia_02/teoria.html) · [Ejercicios](Dia_02/ejercicios.html) · [Laboratorio](Dia_02/laboratorio.html) |
| **[Día 3](Dia_03/README.md)** | El software de red: cliente-servidor y P2P | 3 h 19 min | [Teoría y quiz](Dia_03/teoria.html) · [Ejercicios](Dia_03/ejercicios.html) · [Laboratorio](Dia_03/laboratorio.html) |
| **[Día 4](Dia_04/README.md)** | Servidores: hardware, disponibilidad y virtualización | 3 h 35 min | [Teoría y quiz](Dia_04/teoria.html) · [Ejercicios](Dia_04/ejercicios.html) · [Laboratorio](Dia_04/laboratorio.html) |
| **[Día 5](Dia_05/README.md)** | Los servicios que sostienen una red | 3 h 51 min | [Teoría y quiz](Dia_05/teoria.html) · [Ejercicios](Dia_05/ejercicios.html) · [Laboratorio](Dia_05/laboratorio.html) |
| **[Día 6](Dia_06/README.md)** | Método de diseño · **proyecto completo** | 3 h 24 min | [Teoría y quiz](Dia_06/teoria.html) · [Ejercicios](Dia_06/ejercicios.html) · [**Proyecto**](Dia_06/laboratorio.html) |
| **[Día 7](Dia_07/README.md)** | Síntesis y **test semanal** | 3 h 12 min | [Síntesis y test](Dia_07/teoria.html) · [Recuperación](Dia_07/ejercicios.html) |

**Semana completa: 24 h 36 min.**

---

## Conceptos nuevos

| Concepto | Día | Se usará después en |
|---|---|---|
| NIC y sus cuatro funciones | 1 | Semana 4, Mes 3 |
| Dirección MAC, OUI, bits I/G y U/L | 1 | Semana 11 (tabla CAM), Semana 22 (ARP) |
| Unicast, multicast y broadcast | 1 | Semana 23 (IGMP), Mes 9 (VLAN) |
| MAC frente a IP | 1 | Todo el direccionamiento, del Mes 4 en adelante |
| Par trenzado y señalización diferencial | 2 | Mes 2 completo |
| Categorías y límite de 100 m | 2 | Mes 2, y todo diseño de red |
| T568A/B, auto-MDIX | 2 | Semana 8, prácticas con Packet Tracer |
| Cableado estructurado | 2 | Semana 8 y proyecto integrador |
| Servicios, puertos y cuaterna | 3 | Semana 37 (TCP/UDP), Mes 10, Mes 11 |
| Cliente-servidor y P2P | 3 | Mes 10 (servicios de red) |
| RAID, disponibilidad, MTBF y MTTR | 4 | Mes 12, proyecto integrador |
| Puntos únicos de fallo | 4 | Semana 33 (STP), Mes 11 |
| Virtualización, clústeres y contenedores | 4 | Mes 12 |
| IaaS, PaaS, SaaS | 4 | Mes 10 y Mes 12 |
| DHCP, APIPA y concesiones | 5 | Mes 10, Mes 4 |
| DNS, TTL y caché | 5 | Mes 10, Semana 22 |
| Directorio, directivas y NTP | 5 | Mes 10 y Mes 12 |
| Dependencias y orden de arranque | 5 | Mes 12, proyecto integrador |
| Método de diseño y análisis de riesgos | 6 | Todo el curso; proyecto de la semana 48 |

---

## Progresión de la semana

```text
Día 1 — El componente que pone los bits en el medio
   ↓
Día 2 — El medio por el que viajan
   ↓
Día 3 — El software que decide qué se envía y a quién
   ↓
Día 4 — La máquina que sostiene ese software
   ↓
Día 5 — Los servicios concretos y sus dependencias
   ↓
Día 6 — Todo junto: diseñar una red de verdad
   ↓
Día 7 — Síntesis y evaluación
```

Cada día recupera el anterior: el Día 2 explica por qué un fallo de cable deja a un equipo fuera de la tabla ARP del Día 1; el Día 3 cierra la cadena **MAC → IP → puerto**; y el Día 6 obliga a usarlo todo a la vez para producir una propuesta defendible.

---

## Herramientas necesarias

- **Terminal** (PowerShell o bash). Todos los comandos son de solo lectura.
- Un **cable de red** cualquiera que puedas examinar, para el Día 2.
- **Papel y lápiz** para el proyecto del Día 6: hay que dibujar la topología.
- Opcional: acceso a la interfaz web de tu router.

No hace falta instalar nada.

---

## Evaluación

| Actividad | Dónde | Peso |
|---|---|---|
| Quiz diario | Al final de cada `teoria.html` | Seguimiento |
| Ejercicios | `ejercicios.html` de cada día | Seguimiento |
| Laboratorio | `laboratorio.html` de cada día | Seguimiento |
| **Proyecto de diseño** | Día 6 | Autoevaluación con rúbrica |
| **Test semanal (30 preguntas)** | Día 7 | **Nota de la semana** |
| Recuperación de errores | Día 7 | Seguimiento |

**Criterio de superación:** 50 % en cada actividad y **15/30** en el test semanal.

El test reparte 4 preguntas por día más 6 de integración, y al corregir muestra el **desglose por día** con enlace al que haya que repasar. Si no se supera, se repasa y se repite: el progreso **sustituye** el resultado anterior en lugar de sumarse.

---

## Navegación

- ⬅️ [Semana 1 — Introducción a las Redes](../Semana_01/README.md)
- 📋 [Mes 1 — Fundamentos](../README.md)
- 🏠 [Centro de Aprendizaje](../../web_interactiva/index.html)
