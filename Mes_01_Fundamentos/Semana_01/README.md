# Semana 1 — Introducción a las Redes

**Mes 1: Fundamentos de Redes** · Semana 1 de 48

---

## Tema y objetivos

Esta semana asienta el vocabulario y los conceptos sobre los que se construye **todo el resto del curso**. Al terminarla debes ser capaz de:

- Definir qué es una red, para qué sirve y qué problemas introduce.
- Identificar los componentes de cualquier sistema de comunicación y diagnosticar por ellos.
- Distinguir señales analógicas y digitales, y operar con unidades de velocidad y tamaño.
- Clasificar cualquier red por extensión (PAN, LAN, MAN, WAN) y por propietario.
- Reconocer las topologías y predecir **qué ocurre cuando algo falla** en cada una.
- Contar dominios de colisión y de broadcast en una topología dada.

## Conocimientos previos

Ninguno. Es la primera semana del curso.

## Conceptos nuevos

| Concepto | Día | Se usará después en |
|----------|-----|---------------------|
| Conmutación de paquetes | 1 | Mes 6 (capa de red) |
| Modos de transmisión y colisiones | 2 | Mes 3 (Ethernet, CSMA/CD) |
| Unidades y cálculo de transferencia | 3 | Todo el curso |
| Latencia y jitter | 3 | Mes 10 (QoS, VoIP) |
| Clasificación LAN/WAN | 4 | Mes 11 (tecnologías WAN) |
| VPN | 4 | Mes 12, Semana 45 |
| Topologías y jerarquía | 5-6 | Mes 9 (switching, STP) |
| Dominios de colisión y broadcast | 6 | Mes 3 y Mes 9 (VLAN) |

---

## Distribución de los siete días

| Día | Tema | Duración | Materiales |
|-----|------|---------:|------------|
| **[Día 1](Dia_01/README.md)** | Qué es una red, ventajas e historia | 3 h 17 min | [Teoría y quiz](Dia_01/teoria.html) · [Ejercicios](Dia_01/ejercicios.html) · [Laboratorio](Dia_01/laboratorio.html) |
| **[Día 2](Dia_02/README.md)** | Sistema de comunicación y modos de transmisión | 3 h 32 min | [Teoría y quiz](Dia_02/teoria.html) · [Ejercicios](Dia_02/ejercicios.html) · [Laboratorio](Dia_02/laboratorio.html) |
| **[Día 3](Dia_03/README.md)** | Señales, ancho de banda, latencia y cálculos | 3 h 22 min | [Teoría y quiz](Dia_03/teoria.html) · [Ejercicios](Dia_03/ejercicios.html) · [Laboratorio](Dia_03/laboratorio.html) |
| **[Día 4](Dia_04/README.md)** | PAN, LAN, MAN, WAN · públicas, privadas y VPN | 3 h 42 min | [Teoría y quiz](Dia_04/teoria.html) · [Ejercicios](Dia_04/ejercicios.html) · [Laboratorio](Dia_04/laboratorio.html) |
| **[Día 5](Dia_05/README.md)** | Topologías básicas: bus, anillo y estrella | 3 h 13 min | [Teoría y quiz](Dia_05/teoria.html) · [Ejercicios](Dia_05/ejercicios.html) · [Laboratorio](Dia_05/laboratorio.html) |
| **[Día 6](Dia_06/README.md)** | Malla, árbol e híbrida · dominios de colisión y broadcast | 3 h 53 min | [Teoría y quiz](Dia_06/teoria.html) · [Ejercicios](Dia_06/ejercicios.html) · [Laboratorio](Dia_06/laboratorio.html) |
| **[Día 7](Dia_07/README.md)** | Síntesis, test semanal y recuperación de errores | 3 h 07 min | [Síntesis y test](Dia_07/teoria.html) · [Recuperación](Dia_07/ejercicios.html) |

**Carga total de la semana**: 23 h 46 min

> Las duraciones son **aleatorias por día** (entre 3 h y 4 h) conforme a las reglas de [CLAUDE.md](../../CLAUDE.md). No hay una duración fija asociada a ningún día de la semana.

---

## Progresión de la semana

```text
  Día 1 ─ ¿QUÉ es una red?
     ↓
  Día 2 ─ ¿CÓMO se comunican?
     ↓
  Día 3 ─ ¿QUÉ viaja y a qué velocidad?
     ↓
  Día 4 ─ ¿HASTA DÓNDE llega la red?
     ↓
  Día 5 ─ ¿CÓMO se disponen los equipos? (básicas)
     ↓
  Día 6 ─ ¿CÓMO se disponen? (avanzadas) + ¿hasta dónde llega cada señal?
     ↓
  Día 7 ─ Consolidación y evaluación
```

---

## Evaluación

| Instrumento | Cuándo | Peso |
|-------------|--------|------|
| Quiz diario (12-15 preguntas) | Al final de cada `teoria.html` | Autoevaluación, no puntúa |
| Ejercicios diarios | En cada `ejercicios.html` | Autoevaluación, no puntúa |
| **Test semanal (31 preguntas)** | Día 7 | **Nota de la semana** |
| Examen mensual | Fin del Mes 1 | Ver [README del mes](../README.md) |

### Criterio de superación

| Test semanal | Qué hacer |
|--------------|-----------|
| ≥ 90 % | Pasa a la Semana 2 |
| 70-89 % | Repasa los días señalados en el desglose |
| 50-69 % | Repite la teoría de los días flojos antes de continuar |
| < 50 % | Repite la semana completa |

---

## Herramientas necesarias

- **Navegador web** para la teoría, los quizzes, los ejercicios y los laboratorios.
- **Terminal** (en Windows, también **PowerShell**) para los laboratorios de los días 1 a 5.
- **Cisco Packet Tracer** para el laboratorio del Día 6 ([descarga gratuita](https://www.netacad.com/courses/packet-tracer)).
- **Docker** o dos máquinas virtuales, opcional, para la ampliación del Día 1.
- Papel y lápiz para el Día 5, y calculadora para los cálculos del Día 3.

> Los seis laboratorios usan **datos de tu propio equipo**: se comprueba que tengan la forma correcta y que sepas interpretarlos, no que coincidan con una solución única.

---

## Navegación

- 🏠 **[Centro de Aprendizaje](../../web_interactiva/index.html)** — acceso rápido a los 7 días desde el navegador
- ⬆️ [Mes 1 — Fundamentos de Redes](../README.md)
- ➡️ Semana 2 — Componentes y Tipos de Redes *(pendiente de crear)*
- 📋 [Plan Anual ASIR](../../README.md)
