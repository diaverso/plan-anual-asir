# Semana 2 — Día 1: La tarjeta de red y la dirección MAC

```text
📅 Día: Semana 2 — Día 1
⏱️ Duración prevista: 3 h 28 min
📚 Objetivo: entender qué hace una NIC y saber leer una dirección MAC bit a bit
🛠️ Práctica: inventario de las interfaces de tu equipo y análisis de tu tabla ARP
```

---

## Objetivos concretos

Al terminar la sesión debes ser capaz de:

1. Explicar las **cuatro funciones** de una tarjeta de red y por qué es el único componente imprescindible.
2. Describir la estructura de una MAC: **24 bits de OUI + 24 bits de interfaz**.
3. Determinar, **mirando un solo dígito**, si una MAC es unicast o de grupo, y si es universal o inventada.
4. Justificar por qué hacen falta MAC **e** IP, y cuál de las dos cambia en cada salto.
5. Identificar en tu propio equipo qué interfaces son físicas y cuáles virtuales.
6. Explicar por qué el filtrado por MAC no es una medida de seguridad.

---

## Conocimientos previos necesarios

De la **Semana 1**:

| Concepto | Dónde se vio | Para qué hace falta hoy |
|---|---|---|
| Dominio de colisión y de broadcast | Día 6 | La MAC de broadcast define el dominio |
| Medio compartido y CSMA/CD | Día 2 y Día 5 | Explica el descarte de tramas ajenas |
| Direcciones privadas y NAT | Día 4 | Se compara con el alcance local de la MAC |
| Tabla ARP | Laboratorio del Día 5 | Hoy se lee entendiendo qué es cada línea |

Si alguno no lo tienes claro, dedícale los primeros minutos del repaso.

---

## Orden de la sesión

| # | Bloque | Tiempo | Material |
|---|--------|-------:|----------|
| 1 | 🧠 Repaso de la Semana 1 | 15 min | Flashcards del [Día 7](../../Semana_01/Dia_07/teoria.html#repaso) |
| 2 | 📖 Teoría + 4 checkpoints | 45 min | [teoria.html](teoria.html) |
| 3 | 🃏 Flashcards del día (14) | 10 min | [teoria.html](teoria.html#repaso) |
| 4 | ❓ Quiz cronometrado (13 preguntas) | 18 min | [teoria.html](teoria.html#quiz-inicio) |
| 5 | 🛠️ Ejercicios (5 bloques) | 55 min | [ejercicios.html](ejercicios.html) |
| 6 | 💻 Laboratorio | 55 min | [laboratorio.html](laboratorio.html) |
| 7 | 🧾 Cierre y repaso de errores | 10 min | — |
| | **Total** | **3 h 28 min** | |

---

## Conceptos nuevos de hoy

| Concepto | Se usará después en |
|---|---|
| NIC y sus cuatro funciones | Semana 4 (dispositivos), Mes 3 (capa de enlace) |
| Dirección MAC y OUI | Semana 11 (tabla CAM del switch), Semana 22 (ARP) |
| Bits I/G y U/L | Mes 3 (tramas Ethernet), Semana 23 (multicast) |
| Unicast, multicast y broadcast | Semana 23 (IGMP), Mes 9 (VLAN) |
| MAC frente a IP | Mes 4 en adelante: es la base de todo el direccionamiento |
| Modo promiscuo | Mes 2 y siguientes, al usar Wireshark |

---

## Cierre de la sesión

Antes de cerrar, comprueba que puedes responder sin mirar:

- ¿Qué hace la NIC con una trama que no va dirigida a ella, y por qué eso permite que exista Wireshark?
- ¿Qué te dice el segundo dígito de una MAC?
- ¿Qué cambia en cada salto: la MAC o la IP? ¿Por qué?
- ¿Por qué no se enruta Internet con MAC?

**Aspectos que suelen necesitar refuerzo:**

- Confundir el bit I/G con el U/L. Truco: **I/G es el último bit**, el de menor peso; U/L es el de al lado.
- Creer que la MAC llega al servidor de destino.
- Decir «la MAC del ordenador» en lugar de «la MAC de la interfaz».

---

## Navegación

- ⬅️ [Semana 1 — Día 7](../../Semana_01/Dia_07/teoria.html)
- 📋 [Índice de la Semana 2](../README.md)
- ➡️ [Día 2 — Medios y conectores](../Dia_02/README.md)
- 🏠 [Centro de Aprendizaje](../../../web_interactiva/index.html)
