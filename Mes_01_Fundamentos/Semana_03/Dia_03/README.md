# Semana 3 — Día 3 (miércoles)

```text
📅 Día: Semana 3 — Día 3
⏱️ Duración prevista: 4 h 12 min
📚 Objetivo: El modelo TCP/IP y su correspondencia con OSI
🛠️ Práctica: Laboratorio «La pila entera en una petición»
```

---

## De qué va hoy

Dos días estudiando OSI, que es el modelo que **no se usa**. Hoy aparece el que sí: **TCP/IP**, el que está funcionando ahora mismo en tu equipo.

La pregunta interesante del día no es cuál es mejor, sino **por qué se siguen estudiando los dos**. La respuesta corta: TCP/IP para funcionar, OSI para hablar.

---

## Objetivos concretos

Al terminar deberías poder:

- Explicar por qué **TCP/IP es anterior a OSI** y qué consecuencias tuvo.
- Nombrar sus **cuatro capas** y decir qué hace cada una.
- Reconstruir la **tabla de correspondencia** con OSI sin memorizarla, usando la regla de que las del medio coinciden.
- Justificar por qué TCP/IP **no define** su capa de acceso a la red y por qué eso es una ventaja.
- Explicar el **reloj de arena** y usarlo para razonar sobre la lentitud de IPv6.
- Situar HTTP, DNS, TCP, UDP, IP, ICMP, ARP y Ethernet en su capa.
- Saber por qué al oír «capa 7» hay que pensar en **OSI**.

---

## Conocimientos previos necesarios

| Concepto | De dónde viene |
|---|---|
| Las siete capas de OSI y su alcance | Día 1 |
| Encapsulación, PDU y cabeceras | Día 2 |
| Puertos y servicios | Semana 2, Día 5 |
| DNS y DHCP | Semana 2, Día 5 |
| Direcciones IP y MAC | Semana 1, Día 4 · Semana 2, Día 1 |

---

## Orden de la sesión

| Bloque | Tiempo | Material |
|---|---:|---|
| 🧠 Repaso de lo fallado ayer | 18 min | Aparece solo al inicio de la teoría |
| 📖 Teoría con 3 paradas de escritura | 58 min | [teoria.html](teoria.html) |
| 🃏 Flashcards (14 tarjetas) | 12 min | Al final de la teoría |
| ❓ Quiz cronometrado (14 preguntas) | 22 min | Al final de la teoría |
| 🛠️ Ejercicios (6 bloques) | 70 min | [ejercicios.html](ejercicios.html) |
| 💻 Laboratorio: la pila en una petición | 62 min | [laboratorio.html](laboratorio.html) |
| 🧾 Cierre y anotación de dudas | 10 min | — |
| | **252 min** | **4 h 12 min** |

---

## El laboratorio de hoy

Las cuatro capas de TCP/IP **en una sola petición web**, con tres comandos que ya tienes:

1. `Resolve-DnsName` — la traducción del nombre, capa de aplicación.
2. `Get-NetTCPConnection` — tus conexiones abiertas ahora mismo, con IP, puertos y **el programa** de cada una: tres capas en cada fila.
3. `curl -v` — una petición completa contándote lo que hace en cada paso.

El hallazgo del día suele ser el **puerto efímero**: repites el comando y tu puerto de origen cambia, mientras el 443 del servidor no. Ahí se entiende de golpe la diferencia entre quien llama y quien atiende.

> ⚠️ En PowerShell hay que escribir **`curl.exe`**, con extensión: `curl` a secas es un alias de otro comando y no entiende las opciones.

---

## Cierre de la sesión

Comprueba que puedes, sin mirar:

- Recitar las cuatro capas de TCP/IP de abajo arriba.
- Decir qué capas de OSI se funden en cuál, y cuáles coinciden.
- Explicar el reloj de arena en tres frases.
- Decir por qué DNS va sobre UDP.

---

## Mañana

**Día 4 — Normalización**: quién decide cómo son los protocolos. ISO, IEEE, IETF y los RFC. Y el estreno de **Wireshark**, con el que verás por fin los bytes reales de una trama y comprobarás con tus ojos las cuentas del Día 2.

*Tarea de calentamiento:* si nadie manda en Internet, ¿quién decide que el puerto de la web sea el 80?

---

[🏠 Centro de Aprendizaje](../../../web_interactiva/index.html) · [Índice de la semana](../README.md) · [← Día 2](../Dia_02/README.md)
