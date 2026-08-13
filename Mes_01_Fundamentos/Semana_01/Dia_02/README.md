# Día 2 — Semana 1

```text
📅 Día: Semana 1 — Día 2
⏱️ Duración prevista: 3 h 32 min
📚 Objetivo: Componentes de un sistema de comunicación y modos de transmisión
🛠️ Práctica: Laboratorio de dúplex, latencia y tamaño de trama
```

## Distribución del tiempo

| Bloque | Actividad | Tiempo |
|--------|-----------|-------:|
| 🧠 Repaso | Recuperación activa del Día 1 | 15 min |
| 📖 Teoría | [teoria.html](teoria.html) — lectura + **4 paradas de escritura** | 45 min |
| 🃏 Flashcards | Al final de `teoria.html` — 13 tarjetas | 10 min |
| ❓ Quiz | Al final de `teoria.html` — 14 preguntas cronometradas | 20 min |
| 🛠️ Ejercicios | [ejercicios.html](ejercicios.html) — 5 ejercicios con pistas | 55 min |
| 💻 Laboratorio | [laboratorio.html](laboratorio.html) — mediciones reales | 55 min |
| 🧠 Cierre | Recuperación activa y resumen | 12 min |
| | **TOTAL** | **212 min (3 h 32 min)** |

## Repaso inicial (15 min)

Antes de abrir la teoría de hoy, responde **de memoria**:

1. Define red de computadoras y explica qué es un protocolo.
2. ¿Cuándo conviene UDP y cuándo TCP? Un ejemplo de cada uno.
3. Ordena: Ethernet, WWW, ARPANET, TCP/IP, telégrafo, teléfono.
4. ¿Qué aportó ARPANET? ¿Cuál fue su primer mensaje real?
5. Explica en una frase la diferencia entre Internet y la Web.

Comprueba después con [../Dia_01/teoria.html](../Dia_01/teoria.html). Los fallos que tengas aquí son tus **conceptos a reforzar**.

## Lo que hace largo este día

La teoría se lee en unos 25 minutos. El resto del tiempo es **trabajo**:

- **4 paradas obligatorias** en las que escribes tu respuesta antes de ver la del profesor.
- Una **simulación de colisiones**: verás en directo el porcentaje de tramas destruidas con un hub y cómo cae a cero con un switch.
- Un **laboratorio de medición real**: velocidad y dúplex negociados de tu enlace, comparativa cable/Wi-Fi y efecto del tamaño de trama.
- **Ejercicios con pistas progresivas** en lugar de saltar a la solución.

## Requisitos del laboratorio

- **PowerShell** en Windows (el comando de dúplex no existe en `cmd`) o `ethtool` en Linux.
- Ideal: poder conectarte **por cable y por Wi-Fi** para comparar. Si solo tienes uno, razona el otro caso y anótalo como pendiente.

## Cierre del día

```text
⏱️ Tiempo previsto: 3 h 32 min
📚 Contenido completado:
🛠️ Ejercicios completados:
💻 Laboratorio completado:  sí / no
🧠 Conceptos a reforzar:
❓ Resultado del quiz:        / 14
```

### Recuperación activa (12 min)

Sin mirar la teoría:

1. Enumera los 5 componentes de un sistema de comunicación en orden.
2. Pon un ejemplo de cada modo: simplex, half-duplex y full-duplex.
3. ¿Por qué una conexión Ethernet con switch es full-duplex y con hub no?
4. ¿Qué diferencia hay entre *fuente* y *transmisor*?
5. ¿Qué velocidad y dúplex negoció tu enlace, y qué significaría ver colisiones en él?
6. ¿Por qué las redes transmiten en serie y no en paralelo?

---

**Navegación**: [🏠 Centro de Aprendizaje](../../../web_interactiva/index.html) · [← Día 1](../Dia_01/README.md) · [Índice de la semana](../README.md) · [Día 3 →](../Dia_03/README.md)
