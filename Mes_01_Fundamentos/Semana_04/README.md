# Semana 4 — Dispositivos de red

> ✅ **Semana completa**: los cinco días publicados, con **4 laboratorios**, test semanal y **examen mensual**.

---

## Tema y objetivos

Tres semanas de conceptos —señales, MAC, capas, encapsulación— y esta semana se convierten en **aparatos que se compran, se instalan y se configuran**.

Hay una sola idea que ordena las cuatro sesiones:

> **Un dispositivo de red se define por la capa más alta que es capaz de mirar.**

De ahí sale todo lo demás: qué información usa para decidir, qué puede hacer y qué no, cuánto cuesta y cuándo hace falta.

Al terminar deberías poder:

1. Clasificar cualquier dispositivo por su capa y **deducir** su comportamiento, en lugar de memorizarlo.
2. Explicar cómo un switch construye su tabla **sin que nadie se la configure**.
3. Contar **dominios de colisión y de broadcast** en cualquier escenario.
4. Leer una **tabla de rutas** y aplicar el **prefijo más largo**.
5. Explicar por qué el Wi-Fi vuelve a tener colisiones cuando el cable ya no las tiene.
6. **Elegir** los dispositivos de una oficina real y justificar cada decisión.

---

## Conocimientos previos necesarios

| Concepto | De dónde viene |
|---|---|
| Dominios de colisión y broadcast | Semana 1, Día 6 |
| CSMA/CD, dúplex y semidúplex | Semana 1, Día 2 |
| Topología física frente a lógica | Semana 1, Día 5 |
| MAC, OUI, difusión y bit I/G | Semana 2, Día 1 |
| Las capas de OSI y su alcance | Semana 3, Día 1 |
| Encapsulación y cabeceras | Semana 3, Día 2 |
| La familia IEEE 802 | Semana 3, Día 4 |

Esta semana **no se explica** ninguno de esos conceptos otra vez: se usan.

---

## Distribución de los cinco días

| Día | Tema | Duración | Materiales |
|-----|------|---------:|------------|
| **[Día 1](Dia_01/README.md)** · lunes | Del **repetidor al switch** · dominios | 4 h 31 min | [Teoría y quiz](Dia_01/teoria.html) · [Ejercicios](Dia_01/ejercicios.html) · [Laboratorio](Dia_01/laboratorio.html) |
| **[Día 2](Dia_02/README.md)** · martes | El **switch por dentro**: tabla MAC y ARP | 4 h 55 min | [Teoría y quiz](Dia_02/teoria.html) · [Ejercicios](Dia_02/ejercicios.html) · [Laboratorio](Dia_02/laboratorio.html) |
| **[Día 3](Dia_03/README.md)** · miércoles | El **router** y la tabla de rutas | 4 h 08 min | [Teoría y quiz](Dia_03/teoria.html) · [Ejercicios](Dia_03/ejercicios.html) · [Laboratorio](Dia_03/laboratorio.html) |
| **[Día 4](Dia_04/README.md)** · jueves | **Wi-Fi**, capas altas y cómo elegir | 4 h 41 min | [Teoría y quiz](Dia_04/teoria.html) · [Ejercicios](Dia_04/ejercicios.html) · [Laboratorio](Dia_04/laboratorio.html) |
| **[Día 5](Dia_05/README.md)** · viernes | Síntesis, **test semanal** y **examen mensual** | 3 h 52 min | [Síntesis y test](Dia_05/teoria.html) · [Recuperación](Dia_05/ejercicios.html) · [**Examen mensual**](../examen_mensual.html) |

**Semana completa: 22 h 07 min.**

---

## Los cuatro laboratorios

Esta semana los laboratorios **demuestran la teoría con números**, no la ilustran:

| Día | Laboratorio | Lo que demuestra |
|---|---|---|
| 1 | Captura sin filtro y clasificación en cuatro montones | De 1015 tramas, **0 eran de otros equipos**: el switch filtra |
| 2 | Captura de ARP y tabla de vecinos | **64 preguntas visibles pero solo 5 respuestas**, todas propias |
| 3 | Tu propia tabla de rutas | En la tabla ARP **nunca** aparece una IP de Internet, y no puede aparecer |
| 4 | Entorno inalámbrico y elección de equipos | Qué normas admite tu adaptador y cómo dimensionar una oficina real |

> ⚠️ Los tres primeros usan **Wireshark**, que se instaló en la Semana 3. El cuarto usa solo comandos nativos.

---

## Conceptos nuevos

| Concepto | Día | Se usará después en |
|---|---|---|
| Clasificación de dispositivos por capa | 1 | Todo el curso |
| Puente y origen del switch | 1 | Mes 3 |
| Recuento de dominios | 1 | Mes 3, Mes 9 |
| Tabla MAC / CAM y su aprendizaje | 2 | Mes 3, Mes 9 |
| Inundación de unicast desconocido | 2 | Mes 9 |
| ARP: petición y respuesta | 2 | Mes 6 |
| Store-and-forward y cut-through | 2 | Mes 3 |
| Tabla de rutas y prefijo más largo | 3 | **Meses 7 y 8** |
| Ruta por defecto y TTL | 3 | Meses 5, 6 y 7 |
| Rutas estáticas frente a dinámicas | 3 | Meses 7 y 8 |
| Switch de capa 3 | 3 | Mes 9 |
| CSMA/CA y medio compartido | 4 | Mes 3 (Wi-Fi) |
| Bandas, canales y SSID/BSSID | 4 | Mes 3 |
| Cortafuegos, proxy y balanceador | 4 | Mes 11 |
| Switch gestionable, VLAN y PoE | 4 | **Mes 9**, Mes 11 |

---

## Evaluación

- **Quiz diario** al final de cada teoría, con recuperación de días anteriores.
- **Ejercicios** autocorregibles, con recuento de dominios y decisiones de enrutamiento.
- **Laboratorios** con datos reales del propio equipo.
- **Viernes:** test semanal de 26 preguntas con desglose por día **y examen mensual** del Mes 1, que se abre con un **repaso de todos los fallos acumulados del mes**.

Criterios: 70 % test, 30 % ejercicios prácticos. Aprobado: 5/10.

---

## Con esto se cierra el Mes 1

| Semana | Tema | Duración |
|---|---|---:|
| 1 | Introducción a las redes | 23 h 46 min |
| 2 | Componentes de una red | 24 h 36 min |
| 3 | Arquitecturas y modelos | 21 h 35 min |
| 4 | Dispositivos de red | 22 h 07 min |
| | **Total** | **92 h 04 min** |

El **Mes 2** baja a la capa 1 con todo el detalle: señales, medios de transmisión, cableado estructurado e inalámbrico.

---

[🏠 Centro de Aprendizaje](../../web_interactiva/index.html) · [Índice del mes](../README.md) · [← Semana 3](../Semana_03/README.md)
