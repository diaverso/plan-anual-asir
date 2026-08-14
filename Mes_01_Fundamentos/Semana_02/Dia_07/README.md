# Semana 2 — Día 7: Síntesis y test semanal

```text
📅 Día: Semana 2 — Día 7
⏱️ Duración prevista: 3 h 12 min
📚 Objetivo: consolidar los seis días y evaluar la semana
🛠️ Práctica: test semanal de 30 preguntas + recuperación de errores
```

---

## Este día no tiene laboratorio

Es el día de **cerrar**, no de abrir. El trabajo práctico lo sustituyen el test cronometrado y la hoja de recuperación, igual que en el Día 7 de la Semana 1.

---

## Objetivos concretos

1. Recuperar de memoria lo esencial de los **seis días**, sin releer.
2. Detectar, con el desglose del test, **qué día concreto** hay que repasar.
3. Corregir los **errores típicos** de la semana antes de que se consoliden.
4. Llegar al examen mensual con los datos de memoria fijados.

---

## Orden de la sesión

| # | Bloque | Tiempo | Material |
|---|--------|-------:|----------|
| 1 | 🧠 Repaso rápido de flashcards de los días flojos | 15 min | Los `teoria.html#repaso` de cada día |
| 2 | 📖 Síntesis de la semana | 35 min | [teoria.html](teoria.html) |
| 3 | 🃏 Mazo de 30 flashcards de toda la semana | 20 min | [teoria.html](teoria.html#repaso) |
| 4 | 📝 **Test semanal** (30 preguntas) | 45 min | [teoria.html](teoria.html#quiz-inicio) |
| 5 | 🛠️ Recuperación de errores (6 bloques) | 60 min | [ejercicios.html](ejercicios.html) |
| 6 | 🧾 Cierre y plan para la Semana 3 | 17 min | — |
| | **Total** | **3 h 12 min** | |

---

## El test semanal

- **30 preguntas · 45 minutos · aprobado 15/30.**
- Reparto: **4 por día** (días 1 a 6) + **6 de integración**, que cruzan varios días.
- El cronómetro **no corre mientras lees la síntesis**: arranca al llegar a la zona del test, al pulsar «Empezar quiz» o al marcar la primera respuesta.
- Al corregir aparece el **desglose por día**, con enlace directo al día que necesites repasar.

> Las preguntas de integración son las más difíciles a propósito: describen una situación real y hay que decidir qué dato descarta qué hipótesis. Son las que más se parecen a un examen y a un problema de trabajo.

---

## La hoja de recuperación

No es más de lo mismo: cada uno de sus **seis bloques** ataca los errores concretos de su día.

| Bloque | Ataca el error de… |
|---|---|
| 1 · Día 1 | Confundir el bit I/G con el U/L |
| 2 · Día 2 | Creer que Cat 6 da 10 Gbps a cualquier distancia, y que los latiguillos no cuentan |
| 3 · Día 3 | Los puertos de memoria, y confundir 65535 con 65536 |
| 4 · Día 4 | Calcular RAID y disponibilidad de verdad, no reconocerlos |
| 5 · Día 5 | Ir del síntoma al servicio |
| 6 · Día 6 | Contar personas en vez de tomas, y asumir riesgos sin escribirlos |

**Empieza por los bloques de los días que peor te hayan salido en el test.**

---

## Criterios de superación de la semana

| Actividad | Mínimo |
|---|---|
| Test semanal | **15/30** |
| Quizzes diarios | 50 % en cada uno |
| Ejercicios y laboratorios | 50 % |
| Proyecto del Día 6 | Autoevaluación con rúbrica |

Si el test queda por debajo de 15/30, repasa los días señalados en el desglose y **repítelo**: el progreso se recalcula y sustituye el resultado anterior, no se suma.

---

## Datos que hay que llevarse memorizados

```text
MAC              48 bits = 24 de OUI + 24 de interfaz
                 2.º dígito impar → grupo
                 2.º dígito en 2,3,6,7,A,B,E,F → local
Cobre            100 m = 90 m fijo + 10 m latiguillos
                 Cat 5e 1G/100m · Cat 6 10G solo 55m · Cat 6A 10G/100m · Cat 8 30m
Ethernet         10/100 Mbps → 2 pares ; 1 Gbps → 4 pares
Puertos          65 536 valores (0-65535) ; efímeros 49152-65535
                 22 SSH · 53 DNS · 80 HTTP · 443 HTTPS · 445 SMB · 3389 RDP
Rack             1U ≈ 4,4 cm ; armario 42U
Año              525 600 minutos
                 caída = 525 600 × (1 − disponibilidad)
                 disponibilidad = MTBF ÷ (MTBF + MTTR)
RAID             0 tolera 0 · 1 y 5 toleran 1 · 6 tolera 2
                 útil: (N−1) o (N−2) × tamaño
Arranque         red → DHCP → DNS → directorio y NTP → resto
Diagnóstico      ping a IP + ping a nombre
```

---

## Cierre de la semana

Con este día quedan cerrados los **componentes** de una red:

| Día | Componente |
|---|---|
| 1 | La tarjeta de red |
| 2 | El medio físico |
| 3 | El software |
| 4 | El servidor |
| 5 | Los servicios |
| 6 | El diseño que los junta |

**La Semana 3** da el salto conceptual más importante del curso: el **modelo OSI y TCP/IP**. Ahí descubrirás que estos seis temas no eran independientes, sino **capas** de una misma arquitectura.

---

## Navegación

- ⬅️ [Día 6 — Método de diseño](../Dia_06/README.md)
- 📋 [Índice de la Semana 2](../README.md)
- 📝 [Test de la Semana 1](../../Semana_01/Dia_07/teoria.html)
- 🏠 [Centro de Aprendizaje](../../../web_interactiva/index.html)
