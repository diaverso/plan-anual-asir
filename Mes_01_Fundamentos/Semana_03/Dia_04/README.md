# Semana 3 — Día 4 (jueves)

```text
📅 Día: Semana 3 — Día 4
⏱️ Duración prevista: 4 h 38 min
📚 Objetivo: Normalización · organismos, estándares y RFC
🛠️ Práctica: Laboratorio con Wireshark — los bytes de verdad
```

---

## De qué va hoy

Ayer terminaste con una pregunta: si nadie manda en Internet, **¿quién decide que el puerto de la web sea el 80?**

Hoy se responde, y con ella todas las de su familia: quién decide cuántos bytes mide una cabecera IP, qué significa cada bit de una MAC y por qué el cable de un fabricante encaja en el aparato de otro.

Y por la tarde, el laboratorio que cierra la semana: **Wireshark**. Cuatro días contando bytes sobre el papel; hoy se ven.

---

## Objetivos concretos

Al terminar deberías poder:

- Explicar qué garantiza un estándar y qué pasaba cuando no los había.
- Distinguir **de iure** de **de facto**, y explicar por qué TCP/IP acabó siendo las dos cosas.
- Aplicar la regla **IEEE / IETF / IANA** sin memorizar listas.
- Explicar por qué **HTTP es de la IETF y HTML del W3C**.
- Decir qué es un **RFC** y por qué no se modifican nunca.
- Reconocer **802.3, 802.11 y 802.1Q**.
- Situar los tres **rangos de puertos** y decir de dónde salen los efímeros que viste ayer.
- Distinguir **MUST** de **SHOULD**.
- Capturar tráfico con Wireshark y leer una trama capa por capa.

---

## Conocimientos previos necesarios

| Concepto | De dónde viene |
|---|---|
| MAC, OUI y bits I/G y U/L | Semana 2, Día 1 |
| Trama Ethernet y FCS | Semana 2, Día 1 |
| Cabeceras, MTU y el bit DF | Día 2 |
| Puertos y puertos efímeros | Día 3 |
| El reloj de arena y el papel de IP | Día 3 |

---

## Orden de la sesión

| Bloque | Tiempo | Material |
|---|---:|---|
| 🧠 Repaso de lo fallado ayer | 20 min | Aparece solo al inicio de la teoría |
| 📖 Teoría con 3 paradas de escritura | 62 min | [teoria.html](teoria.html) |
| 🃏 Flashcards (15 tarjetas) | 12 min | Al final de la teoría |
| ❓ Quiz cronometrado (15 preguntas) | 24 min | Al final de la teoría |
| 🛠️ Ejercicios (6 bloques) | 74 min | [ejercicios.html](ejercicios.html) |
| 💻 Laboratorio con Wireshark | 70 min | [laboratorio.html](laboratorio.html) |
| 🧾 Cierre y preparación del viernes | 16 min | — |
| | **278 min** | **4 h 38 min** |

---

## El laboratorio de hoy

> ⚠️ **Hay que instalar Wireshark.** Descárgalo de [wireshark.org/download.html](https://www.wireshark.org/download.html) y acepta las opciones por defecto, incluida la instalación de **Npcap**, que es el componente que permite capturar. Reserva 5-8 minutos para esto antes de empezar.

Capturas una petición web real y buscas en los bytes lo estudiado esta semana:

- El **OUI** traducido al nombre del fabricante, del registro del IEEE.
- Los bits **I/G** y **U/L** de la MAC, marcados uno a uno.
- Los **20 bytes** de cabecera IP y el bit **DF**, que resulta ir activado siempre.
- La suma completa de la trama: 129 = 14 + 20 + 20 + 75.

Y un hallazgo que **corrige** lo que estudiaste el martes: la cabecera TCP mide 20 bytes en la petición pero **32 en el SYN**, porque los 20 son el mínimo y el saludo lleva opciones. Solo se ve mirando una captura.

> ⚠️ Captura **tu propio tráfico**. Hacerlo en una red que no administras es otra cosa y puede ser ilegal.

---

## Cierre de la sesión

Mañana es viernes de evaluación. Repasa especialmente:

- La tabla de **correspondencia OSI ↔ TCP/IP**.
- Los **tamaños de cabecera**: 14, 20, 20, 8 y 4.
- La regla **IEEE / IETF / IANA**.
- Los nombres de las **PDU** por capa.

---

## Mañana

**Día 5 — viernes de evaluación.** Síntesis de la semana, mazo de flashcards de los cuatro días y **test semanal de 25 preguntas** cronometrado, con desglose por día y enlace directo a lo que haya que repasar.

---

[🏠 Centro de Aprendizaje](../../../web_interactiva/index.html) · [Índice de la semana](../README.md) · [← Día 3](../Dia_03/README.md)
