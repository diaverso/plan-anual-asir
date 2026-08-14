# Semana 2 — Día 3: El software de red

```text
📅 Día: Semana 2 — Día 3
⏱️ Duración prevista: 3 h 19 min
📚 Objetivo: servicios, puertos y los modelos cliente-servidor y P2P
🛠️ Práctica: inventario de los servicios a la escucha en tu propio equipo
```

---

## Objetivos concretos

Al terminar la sesión debes ser capaz de:

1. Explicar qué significa que un programa esté **a la escucha** y por qué eso es una responsabilidad.
2. Describir qué es un **puerto**, sus tres rangos y por qué el del servidor es fijo y el del cliente no.
3. Explicar cómo se identifica una conexión mediante los **cuatro datos** de la cuaterna.
4. Recordar de memoria los puertos de **HTTP, HTTPS, SSH, DNS, SMTP, FTP, RDP y SMB**.
5. Elegir entre **cliente-servidor y P2P** según tamaño, objetivo y necesidad de control.
6. Explicar por qué el P2P **mejora al crecer** y el cliente-servidor se degrada.
7. Reconocer el patrón **híbrido**: servidor para descubrirse, P2P para transferir.

---

## Conocimientos previos necesarios

| Concepto | Dónde se vio | Para qué hace falta hoy |
|---|---|---|
| TCP frente a UDP | Semana 1, Día 1 | Explica por qué DNS usa UDP |
| Direcciones IP y NAT | Semana 1, Día 4 | La IP identifica el equipo; el puerto, el programa |
| MAC frente a IP | Semana 2, Día 1 | Se completa la cadena: MAC → IP → puerto |
| Interfaz de bucle local | Semana 2, Día 1 | Distinguir lo que escucha en local de lo expuesto |

---

## Orden de la sesión

| # | Bloque | Tiempo | Material |
|---|--------|-------:|----------|
| 1 | 🧠 Repaso de los Días 1 y 2 | 15 min | Flashcards de [Día 1](../Dia_01/teoria.html#repaso) y [Día 2](../Dia_02/teoria.html#repaso) |
| 2 | 📖 Teoría + 4 checkpoints | 45 min | [teoria.html](teoria.html) |
| 3 | 🃏 Flashcards del día (15) | 10 min | [teoria.html](teoria.html#repaso) |
| 4 | ❓ Quiz cronometrado (13 preguntas) | 18 min | [teoria.html](teoria.html#quiz-inicio) |
| 5 | 🛠️ Ejercicios (5 bloques) | 55 min | [ejercicios.html](ejercicios.html) |
| 6 | 💻 Laboratorio | 45 min | [laboratorio.html](laboratorio.html) |
| 7 | 🧾 Cierre y repaso de errores | 11 min | — |
| | **Total** | **3 h 19 min** | |

---

## Conceptos nuevos de hoy

| Concepto | Se usará después en |
|---|---|
| Servicio y estado *listening* | Todo el curso: cortafuegos, servidores, diagnóstico |
| Puertos y sus rangos | Semana 37 (TCP/UDP), Mes 10 (servicios), Mes 11 (seguridad) |
| Cuaterna o *socket* | Semana 37, y para entender NAT en profundidad |
| Cliente-servidor y P2P | Semana 4 (dispositivos), Mes 10 (servicios de red) |
| Modelos híbridos | Mes 10 y Mes 11 |
| Ediciones de escritorio y servidor | Mes 12 (administración) |

---

## Cierre de la sesión

Comprueba que puedes responder sin mirar:

- ¿Qué diferencia a un cliente de un servidor? (pista: no es el hardware)
- ¿Por qué cinco pestañas a la misma web no se mezclan?
- Puertos de HTTPS, SSH, DNS y RDP.
- ¿Por qué BitTorrent va más rápido cuanta más gente descarga?
- ¿Qué diferencia hay entre escuchar en `127.0.0.1` y en `0.0.0.0`?

**Aspectos que suelen necesitar refuerzo:**

- Confundir 65535 (el puerto más alto) con 65536 (cuántos hay).
- Creer que «servidor» es un tipo de ordenador.
- Asociar P2P únicamente con descargas ilegales.

---

## Cierre de los tres primeros días

Con este día quedan vistos los **tres componentes** de una red:

| Día | Componente | Idea central |
|---|---|---|
| 1 | La **tarjeta de red** | Pone los bits en el medio y decide qué recibe |
| 2 | El **medio** | Transporta la señal, con sus límites físicos |
| 3 | El **software** | Decide quién habla, quién espera y por dónde |

Los días 4 a 7 de esta semana completarán la parte de **servidores, roles y servicios de red**, más la síntesis y el test semanal.

---

## Navegación

- ⬅️ [Día 2 — El medio físico](../Dia_02/README.md)
- 📋 [Índice de la Semana 2](../README.md)
- 🏠 [Centro de Aprendizaje](../../../web_interactiva/index.html)
