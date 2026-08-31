# Semana 3 — Día 2 (martes)

```text
📅 Día: Semana 3 — Día 2
⏱️ Duración prevista: 4 h 47 min
📚 Objetivo: Capas 4 a 7 del modelo OSI · la encapsulación
🛠️ Práctica: Laboratorio «Mide el MTU real de tu línea»
```

---

## De qué va hoy

Ayer viste las tres capas que **mueven** los datos. Hoy tocan las cuatro que hacen que esos datos **signifiquen** algo, y sobre todo el mecanismo que sostiene todo el modelo: la **encapsulación**.

Es el día en que dejan de ser siete cajas en un dibujo y se convierten en **bytes que puedes contar**. Al final de la sesión sabrás exactamente cuántos de los megas que pagas son tuyos y cuántos son cabeceras.

---

## Objetivos concretos

Al terminar deberías poder:

- Explicar qué dos problemas resuelve la **capa 4** que la 3 deja abiertos.
- Situar **TLS en la capa 6** y explicar por qué HTTPS no es un protocolo aparte.
- Distinguir un **protocolo de capa 7** de un programa que lo usa.
- Recitar la secuencia de PDU: **datos → segmento → paquete → trama → bits**.
- Decir el tamaño de las cabeceras **Ethernet, IP, TCP y UDP** de memoria.
- Calcular el **MSS** a partir de un MTU cualquiera.
- Explicar quién lee cada cabecera por el camino, y deducir de ahí por qué las MAC cambian y las IP no.
- **Medir** el MTU real de una conexión y deducir qué tecnología hay debajo.

---

## Conocimientos previos necesarios

| Concepto | De dónde viene |
|---|---|
| Las siete capas y el alcance de cada una | **Ayer**, Día 1 |
| Puertos y servicios | Semana 2, Día 5 → hoy se colocan en la capa 4 |
| Tramas y FCS | Semana 2, Día 1 |
| Cálculo de tiempo de transferencia | Semana 1, Día 2 → hoy se explica su margen de error |

---

## Orden de la sesión

| Bloque | Tiempo | Material |
|---|---:|---|
| 🧠 Repaso de lo fallado ayer | 20 min | Aparece solo al inicio de la teoría |
| 📖 Teoría con 4 paradas de escritura | 65 min | [teoria.html](teoria.html) |
| 🃏 Flashcards (15 tarjetas) | 12 min | Al final de la teoría |
| ❓ Quiz cronometrado (15 preguntas) | 24 min | Al final de la teoría |
| 🛠️ Ejercicios (6 bloques, con cálculos) | 78 min | [ejercicios.html](ejercicios.html) |
| 💻 Laboratorio: mide tu MTU | 72 min | [laboratorio.html](laboratorio.html) |
| 🧾 Cierre y anotación de dudas | 16 min | — |
| | **287 min** | **4 h 47 min** |

---

## El laboratorio de hoy

El más interesante del mes hasta ahora, porque **el resultado no está en ningún libro**: es un número propio de tu línea.

Con un solo comando vas a provocar que un router descarte un paquete por no caber, y de ahí deducir el MTU real del camino. Si te sale **1492** en lugar de 1500, acabas de detectar los **8 bytes de PPPoE** que tu operador añade sin que nadie te lo cuente.

Después, la distinción entre `PingSucceeded` y `TcpTestSucceeded`, que es la primera comprobación real de cualquier incidencia: **¿falla la red o falla el servicio?**

> ⚠️ Si tienes una **VPN activa, apágala** antes del laboratorio: añade su propia cabecera y medirías el MTU del túnel, no el de tu línea.

---

## Cierre de la sesión

Comprueba que puedes, sin mirar:

- Decir los cuatro tamaños de cabecera: 14, 20, 20, 8.
- Calcular el MSS de un MTU de 1400.
- Explicar por qué el FCS va al final y todo lo demás delante.
- Decir quién lee la cabecera TCP en un trayecto de seis routers.

---

## Mañana

**Día 3 — TCP/IP**: el modelo que de verdad se usa en Internet, sus cuatro capas y por qué acabó desplazando a OSI.

*Tarea de calentamiento:* si OSI es el modelo «oficial» de la ISO, ¿por qué crees que Internet terminó usando otro?

---

[🏠 Centro de Aprendizaje](../../../web_interactiva/index.html) · [Índice de la semana](../README.md) · [← Día 1](../Dia_01/README.md)
