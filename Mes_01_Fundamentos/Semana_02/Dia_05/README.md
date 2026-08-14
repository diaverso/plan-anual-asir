# Semana 2 — Día 5: Los servicios que sostienen una red

```text
📅 Día: Semana 2 — Día 5
⏱️ Duración prevista: 3 h 51 min
📚 Objetivo: qué servicios necesita una red, quién depende de quién y qué pasa cuando falla cada uno
🛠️ Práctica: descubrir quién presta cada servicio en tu propia red y medir la caché DNS
```

---

## Objetivos concretos

Al terminar la sesión debes ser capaz de:

1. Enumerar los servicios que necesita una oficina para poder trabajar, y por qué **DHCP, DNS y directorio** son distintos de los demás.
2. Decir qué entrega el DHCP además de la IP, y qué significa una dirección **169.254.x.x**.
3. Explicar que el valor real del DNS es la **indirección**, no la comodidad.
4. Justificar qué aporta un **directorio** y qué ocurre cuando se marcha un empleado sin él.
5. Explicar por qué **NTP** es crítico aunque nadie lo vea.
6. Ordenar el **arranque** de los servicios tras un corte, y detectar dependencias circulares.
7. Diagnosticar con la **prueba de los dos ping**.
8. Decidir cómo repartir los servicios entre máquinas y **cuál duplicar primero**.

---

## Conocimientos previos necesarios

| Concepto | Dónde se vio | Para qué hace falta hoy |
|---|---|---|
| Servicios, puertos y cliente-servidor | Semana 2, Día 3 | Hoy se ven los servicios concretos |
| Servidores, SPOF y virtualización | Semana 2, Día 4 | Reparto de servicios y redundancia |
| Velocidad negociada y fallos de cable | Semana 2, Día 2 | Aparece en la mesa de incidencias |
| Latencia frente a ancho de banda | Semana 1, Día 3 | Explica el efecto de un DNS lento |
| IP, máscara y puerta de enlace | Semana 1, Día 4 | Es lo que reparte el DHCP |

> **Alcance:** hoy se estudia **para qué sirve** cada servicio y de quién depende. La **configuración** de DNS, DHCP y directorio es el **Mes 10 completo**.

---

## Orden de la sesión

| # | Bloque | Tiempo | Material |
|---|--------|-------:|----------|
| 1 | 🧠 Repaso del Día 4 | 15 min | Flashcards del [Día 4](../Dia_04/teoria.html#repaso) |
| 2 | 📖 Teoría + 4 checkpoints | 50 min | [teoria.html](teoria.html) |
| 3 | 🃏 Flashcards del día (16) | 10 min | [teoria.html](teoria.html#repaso) |
| 4 | ❓ Quiz cronometrado (15 preguntas) | 20 min | [teoria.html](teoria.html#quiz-inicio) |
| 5 | 🛠️ Ejercicios (5 bloques) | 62 min | [ejercicios.html](ejercicios.html) |
| 6 | 💻 Laboratorio | 60 min | [laboratorio.html](laboratorio.html) |
| 7 | 🧾 Cierre y repaso de errores | 14 min | — |
| | **Total** | **3 h 51 min** | |

---

## Lo que hay que llevarse memorizado

```text
Orden de arranque:
   red física → DHCP → DNS → directorio y NTP → ficheros e impresión

Diagnóstico rápido:
   ping a una IP   +   ping a un nombre
   ├─ fallan las dos          → conectividad
   └─ IP sí, nombre no        → DNS

169.254.x.x  →  no hay DHCP (APIPA)
```

---

## Conceptos nuevos de hoy

| Concepto | Se usará después en |
|---|---|
| DHCP y concesiones | Mes 10 (configuración), Mes 4 (direccionamiento) |
| APIPA (169.254.x.x) | Diagnóstico durante todo el curso |
| DNS, TTL y caché | Mes 10, Semana 22 |
| DNS como punto de filtrado | Mes 11 (seguridad) |
| Directorio y directivas | Mes 10 y Mes 12 |
| NTP | Mes 10 y Mes 11 |
| Dependencias y orden de arranque | Mes 12, proyecto integrador |
| Reparto y redundancia de servicios | Mes 12, proyecto integrador |

---

## Cierre de la sesión

Comprueba que puedes responder sin mirar:

- ¿Qué significa una IP que empieza por `169.254`?
- ¿Cuál es el valor real del DNS, más allá de no memorizar direcciones?
- ¿Qué pasa cuando se marcha un empleado si no hay directorio?
- ¿Por qué un equipo con la hora descuadrada no puede iniciar sesión?
- ¿En qué orden se arranca todo tras un apagón, y por qué?
- Ping a IP funciona, ping a nombre no. ¿Qué falla?

**Aspectos que suelen necesitar refuerzo:**

- Confundir «no hay Internet» con «no funciona el DNS».
- Creer que la caída del DHCP se nota al instante.
- Olvidar que el directorio se localiza **por DNS**, y de ahí el orden de arranque.

---

## Navegación

- ⬅️ [Día 4 — Servidores](../Dia_04/README.md)
- 📋 [Índice de la Semana 2](../README.md)
- ➡️ [Día 6 — Caso práctico de diseño](../Dia_06/README.md)
- 🏠 [Centro de Aprendizaje](../../../web_interactiva/index.html)
