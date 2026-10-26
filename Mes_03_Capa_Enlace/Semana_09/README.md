# Semana 9 — La capa de enlace de datos

> 🚧 **En curso**: el Día 1 está publicado; los demás llegan a continuación.

---

## Tema y objetivos

Durante todo el Mes 2 los bits viajaron por un cable o por el aire. Esta semana sube un piso: esos
bits se agrupan en **tramas**, se les pone un destinatario y se comprueba que han llegado enteros.

> **La capa física mueve bits. La capa de enlace los convierte en un mensaje con destinatario.**

Al terminar deberías poder:

1. Enumerar los **problemas** que resuelve la capa de enlace y por qué existen.
2. Explicar la división en **LLC** y **MAC**, y qué hace cada subcapa.
3. Leer una dirección MAC entera: **OUI**, identificador y los bits **I/G** y **U/L**.
4. Distinguir **unicast**, **multicast** y **difusión** mirando la propia dirección.
5. Describir la **trama** campo a campo y calcular cuánto ocupa su sobrecarga.
6. Explicar cómo detecta errores el **FCS** y por qué esta capa descarta en vez de corregir.
7. Explicar qué hace **ARP** y por qué sin él la IP no llegaría a ninguna parte.

---

## Aviso sobre las fuentes de esta semana

El libro de la asignatura dedica a este tema el apartado **§5.1, Direccionamiento a nivel de enlace
de datos**, que es corto: cinco párrafos. De ahí salen las direcciones MAC de 48 bits, el reparto en
mitad de fabricante y mitad de adaptador, la dirección `FF:FF:FF:FF:FF:FF` y la analogía del cartero.

Lo demás se apoya en otros sitios:

- Los **problemas que resuelve la capa** salen de §2.1, donde el libro los presenta como los
  problemas generales del diseño de una arquitectura de red.
- **LLC y MAC** aparecen en el libro una sola vez, de pasada, al presentar la familia IEEE 802. El
  desarrollo de la semana se apoya en **IEEE 802.2** y se marca como tal en la página.
- Los **bits I/G y U/L** no están en el libro: salen de **IEEE 802** y se vieron ya en el Mes 1.

Todo lo que no procede del libro va señalado en el propio material.

---

## Conocimientos previos necesarios

| Concepto | De dónde viene |
|---|---|
| La dirección MAC y su estructura | Mes 1, Semana 2, Día 1 |
| El modelo OSI y el alcance de cada capa | Mes 1, Semana 3, Día 1 |
| Encapsulación y nombres de las PDU | Mes 1, Semana 3, Día 2 |
| Dominios de colisión y de difusión | Mes 1, Semana 4, Día 1 |
| La tabla MAC del switch y ARP | Mes 1, Semana 4, Día 2 |
| Medio compartido y colisiones | Mes 2, Semanas 5 y 7 |

---

## Conceptos nuevos

| Concepto | Día | Se usará después en |
|---|---|---|
| Los problemas que resuelve la capa de enlace | 1 | Toda la semana |
| Las subcapas LLC y MAC | 1 | Semana 10 |
| Ámbito de la MAC: el salto, no el trayecto | 1 | **Mes 6**, capa de red |
| Unicast, multicast y difusión | 1 | Semana 11 |
| Los bits I/G y U/L en la práctica | 1 | Semana 11 |
| La trama campo a campo y su sobrecarga | 2 | Semana 10 |
| Detección de errores: FCS y CRC | 2 | Semana 10 |
| Control de acceso al medio | 3 | **Semana 10**, CSMA/CD |
| Control de flujo en el enlace | 3 | Mes 10, TCP |
| ARP: de la IP a la MAC | 4 | **Mes 6**, y Mes 11 en seguridad |

---

## Distribución de los cinco días

| Día | Tema | Duración | Materiales |
|-----|------|---------:|------------|
| **[Día 1](Dia_01/README.md)** · lunes | **Qué resuelve la capa de enlace** y cómo direcciona | 4 h 22 min | [Teoría y quiz](Dia_01/teoria.html) · [Ejercicios](Dia_01/ejercicios.html) · [Laboratorio](Dia_01/laboratorio.html) |
| Día 2 · martes | **La trama**: estructura, delimitación y detección de errores | — | ⏳ |
| Día 3 · miércoles | **Acceso al medio** y control de flujo | — | ⏳ |
| Día 4 · jueves | **ARP**: unir la dirección lógica con la física | — | ⏳ |
| Día 5 · viernes | Síntesis y **test semanal** | — | ⏳ |

---

## Evaluación

- **Quiz diario** al final de cada teoría.
- **Ejercicios** autocorregibles y laboratorio con datos del propio equipo.
- **Viernes**: test semanal de 20-30 preguntas con desglose por día.

Criterios: 70 % test, 30 % ejercicios. Aprobado: 5/10.

---

[🏠 Centro de Aprendizaje](../../web_interactiva/index.html) · [Índice del mes](../README.md) · [← Semana 8](../../Mes_02_Capa_Fisica/Semana_08/README.md)
