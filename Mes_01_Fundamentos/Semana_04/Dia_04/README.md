# Semana 4 — Día 4 (jueves)

```text
📅 Día: Semana 4 — Día 4
⏱️ Duración prevista: 4 h 41 min
📚 Objetivo: Wi-Fi, punto de acceso y dispositivos de capas altas · cómo elegir
🛠️ Práctica: Laboratorio «Tu entorno inalámbrico y la elección de equipos»
```

---

## De qué va hoy

Se completan las cuatro filas de la tabla del lunes: el **punto de acceso** en la capa 2 y los aparatos de las **capas 4 a 7**. Y el día termina con lo que de verdad se pregunta en un trabajo: **cuál comprar y por qué**.

La pregunta de calentamiento de ayer era si se puede acabar con las colisiones del Wi-Fi como hizo el switch con el cable. La respuesta es **no**, y esa imposibilidad explica casi todo lo que tiene de particular una red inalámbrica.

---

## Objetivos concretos

- Situar el **punto de acceso** en su capa y explicar en qué se parece a un switch y en qué a un hub.
- Explicar por qué Wi-Fi usa **CSMA/CA** y no CSMA/CD.
- Justificar por qué el rendimiento real ronda la **mitad** de la velocidad nominal.
- Explicar por qué **un cliente lento perjudica a todos**.
- Comparar **2,4 y 5 GHz** y saber que solo hay **3 canales** sin solapar en 2,4.
- Distinguir **SSID** de **BSSID**, y saber que ocultar el SSID no protege nada.
- Situar **cortafuegos, proxy y balanceador** en sus capas.
- Justificar cuándo hace falta un switch **gestionable**, y qué es **PoE**.

---

## Conocimientos previos necesarios

| Concepto | De dónde viene |
|---|---|
| Dominios de colisión y el problema del hub | Día 1 |
| MAC flooding y port security | Día 2 |
| Router, VLAN y dominios de broadcast | Día 3 |
| CSMA/CD y semidúplex | Semana 1, Día 2 |
| La familia IEEE 802 y las marcas | Semana 3, Día 4 |

---

## Orden de la sesión

| Bloque | Tiempo | Material |
|---|---:|---|
| 🧠 Repaso de lo fallado ayer | 20 min | Aparece solo al inicio de la teoría |
| 📖 Teoría con 3 paradas de escritura | 62 min | [teoria.html](teoria.html) |
| 🃏 Flashcards (15 tarjetas) | 12 min | Al final de la teoría |
| ❓ Quiz cronometrado (15 preguntas) | 24 min | Al final de la teoría |
| 🛠️ Ejercicios (6 bloques) | 76 min | [ejercicios.html](ejercicios.html) |
| 💻 Laboratorio: Wi-Fi y elección de equipos | 72 min | [laboratorio.html](laboratorio.html) |
| 🧾 Cierre y preparación del viernes | 15 min | — |
| | **281 min** | **4 h 41 min** |

---

## El laboratorio de hoy

Dos partes muy distintas.

**Tu entorno inalámbrico:** qué normas 802.11 admite tu adaptador —en el equipo de referencia salen las seis, de 802.11b a **802.11ax**, o sea Wi-Fi 6— y qué canales usan las redes de alrededor.

> ⚠️ En **Windows 11**, `netsh wlan show networks` **falla si no tienes activados los servicios de ubicación**, con un mensaje que despista porque parece un problema de permisos de administrador. Es normal: las redes cercanas permiten deducir dónde estás, así que Windows lo trata como un dato de ubicación. El laboratorio lo explica y funciona igual si prefieres no activarlo.

**La elección de equipos:** vuelve la Gestoría Ribera de la Semana 2, ahora en una oficina de dos plantas con 34 puestos, cámaras en techos sin enchufe y la obligación de separar los datos de clientes de la red de visitas. Hay que decidir qué comprar y justificarlo.

---

## Cierre de la sesión

Mañana es **viernes doble**: test semanal **y** examen mensual. Repasa sobre todo:

- La tabla de **dispositivos por capa**, ya completa.
- El **recuento de dominios** de colisión y broadcast.
- Las tres funciones del switch **gestionable**.

---

## Mañana

**Día 5 — viernes de evaluación doble.** Síntesis de la semana, **test semanal** de 26 preguntas y, además, el **examen mensual** del Mes 1, que integra las cuatro semanas.

---

[🏠 Centro de Aprendizaje](../../../web_interactiva/index.html) · [Índice de la semana](../README.md) · [← Día 3](../Dia_03/README.md)
