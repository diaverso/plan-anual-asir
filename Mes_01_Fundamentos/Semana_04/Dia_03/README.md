# Semana 4 — Día 3 (miércoles)

```text
📅 Día: Semana 4 — Día 3
⏱️ Duración prevista: 4 h 08 min
📚 Objetivo: El router — tabla de rutas y separación de redes
🛠️ Práctica: Laboratorio «Tu propia tabla de rutas»
```

---

## De qué va hoy

Dos días con el mismo límite: el switch resuelve el rendimiento y la privacidad, pero **la difusión llega a todos** y todos los equipos siguen estando en la misma red.

Hoy aparece el aparato que rompe eso. Y con él, la respuesta a la pregunta de calentamiento de ayer: **no**, un router no puede aprender su tabla escuchando como hace el switch, y entender por qué es entender la diferencia entre las dos capas.

---

## Objetivos concretos

- Explicar por qué el switch trabaja **dentro** de una red y el router **entre** redes.
- Justificar por qué el router **sí** separa dominios de broadcast.
- Leer una **tabla de rutas**: destino, siguiente salto, interfaz y métrica.
- Explicar qué es `0.0.0.0/0` y por qué tu equipo no necesita conocer Internet.
- Aplicar la regla del **prefijo más largo**, y saber que va **antes** que la métrica.
- Describir los pasos que da un router con cada paquete, y de ahí deducir por qué **la MAC cambia y la IP no**.
- Explicar para qué sirve el **TTL**.
- Distinguir rutas **estáticas** de **dinámicas**.
- Saber qué es un **switch de capa 3** y qué hay dentro del router de casa.

---

## Conocimientos previos necesarios

| Concepto | De dónde viene |
|---|---|
| Dominios de broadcast y el límite del switch | Días 1 y 2 |
| ARP y cómo se resuelve una MAC | Día 2 |
| Direcciones IP, máscara y puerta de enlace | Semana 1, Día 4 |
| Encapsulación y cabeceras | Semana 3, Día 2 |
| La MAC cambia en cada salto, la IP no | Semana 3, Día 2 |

---

## Orden de la sesión

| Bloque | Tiempo | Material |
|---|---:|---|
| 🧠 Repaso de lo fallado ayer | 18 min | Aparece solo al inicio de la teoría |
| 📖 Teoría con 3 paradas de escritura | 56 min | [teoria.html](teoria.html) |
| 🃏 Flashcards (14 tarjetas) | 12 min | Al final de la teoría |
| ❓ Quiz cronometrado (14 preguntas) | 22 min | Al final de la teoría |
| 🛠️ Ejercicios (6 bloques) | 70 min | [ejercicios.html](ejercicios.html) |
| 💻 Laboratorio: tu tabla de rutas | 60 min | [laboratorio.html](laboratorio.html) |
| 🧾 Cierre y anotación de dudas | 10 min | — |
| | **248 min** | **4 h 08 min** |

---

## El laboratorio de hoy

Los routers no son los únicos que tienen tabla de rutas: **tu equipo también**, y con las mismas reglas.

La lees con `Get-NetRoute`, identificas la ruta por defecto y las redes directamente conectadas, y aplicas el prefijo más largo a mano — comprobando después con `Find-NetRoute` si acertaste.

El cierre es la observación más interesante: **en tu tabla ARP no aparece ni una sola dirección de Internet**, por muchas horas que lleves navegando. No puede aparecer, porque ARP pregunta con una difusión y la difusión se detiene en el router. Es la definición práctica de «el alcance de la capa 2 es un salto».

---

## Cierre de la sesión

Comprueba que puedes, sin mirar:

- Decir qué gana entre una ruta `/24` con métrica 100 y una `/0` con métrica 1, y por qué.
- Explicar qué le hace un router a cada cabecera.
- Contar dominios de colisión y broadcast en un escenario con router y switches.

---

## Mañana

**Día 4 — Wi-Fi y el resto de dispositivos.** El punto de acceso, por qué el Wi-Fi vuelve a tener colisiones cuando el cable ya no las tiene, y los aparatos de las capas 4 a 7: cortafuegos, proxy y balanceador. Más cómo **elegir** cada uno.

*Tarea de calentamiento:* el switch acabó con las colisiones dando un cable a cada equipo. ¿Puede hacerse lo mismo con el Wi-Fi?

---

[🏠 Centro de Aprendizaje](../../../web_interactiva/index.html) · [Índice de la semana](../README.md) · [← Día 2](../Dia_02/README.md)
