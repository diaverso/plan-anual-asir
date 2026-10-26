# Mes 3 — Capa de Enlace y Ethernet

**Plan Anual ASIR · Planificación y Administración de Redes** · Mes 3 de 12 (Semanas 9-12)

---

## Objetivos del mes

El Mes 2 terminó con los bits viajando por un cable o por el aire. Pero un bit suelto no sirve de
nada: hay que agruparlo, saber a quién va, y comprobar que ha llegado entero. De eso se ocupa la
**capa de enlace**, y es el tema de este mes.

Al terminar deberías poder:

- Explicar **qué problemas resuelve** la capa de enlace y por qué se divide en **LLC** y **MAC**.
- Leer una **dirección MAC** y saber qué dice cada parte, incluidos los dos bits de control.
- Describir la **trama** Ethernet campo a campo y calcular su sobrecarga.
- Explicar cómo se **detectan errores** con el FCS y por qué no se corrigen en esta capa.
- Entender **CSMA/CD** y por qué dejó de hacer falta al llegar el switch y el full-dúplex.
- Explicar el funcionamiento interno de un **switch**: tabla CAM, aprendizaje, inundación y STP.
- Configurar y asegurar una red **Wi-Fi** con criterio.

## Conocimientos previos

Del **Mes 1**, y conviene tenerlos frescos:

| Concepto | De dónde viene |
|---|---|
| La dirección MAC: OUI, formatos y los bits U/L e I/G | Semana 2, Día 1 |
| El modelo OSI y qué hace cada capa | Semana 3, Día 1 |
| Encapsulación y PDU: trama, paquete, segmento | Semana 3, Día 2 |
| Hub, puente y switch; dominios de colisión y difusión | Semana 4, Días 1 y 2 |
| La tabla MAC del switch y el papel de ARP | Semana 4, Día 2 |

Del **Mes 2**:

| Concepto | De dónde viene |
|---|---|
| Codificación: cómo se marcan los bits en el medio | Semana 5, Día 2 |
| El medio compartido y las colisiones | Semana 5 y Semana 7 |
| Categorías, distancias y certificación del cableado | Semanas 6 y 8 |

## Competencias que se adquieren

| Competencia | Semana |
|---|---|
| Comprensión de la capa de enlace y su direccionamiento | 9 |
| Dominio del estándar Ethernet y sus variantes | 10 |
| Configuración y diagnóstico de conmutadores | 11 |
| Despliegue y aseguramiento de redes inalámbricas | 12 |

---

## Semanas del mes

| Semana | Tema | Estado |
|---|---|---|
| **[Semana 9](Semana_09/README.md)** | Capa de enlace: direcciones MAC, tramas y LLC | 🚧 En curso |
| Semana 10 | Ethernet (IEEE 802.3): CSMA/CD, estándares, Fast y Gigabit | ⏳ Pendiente |
| Semana 11 | Switches: funcionamiento, tabla CAM y STP | ⏳ Pendiente |
| Semana 12 | Redes inalámbricas (IEEE 802.11): Wi-Fi y seguridad WPA2/WPA3 | ⏳ Pendiente |

---

## Herramientas necesarias

| Herramienta | Para qué | Cuándo |
|---|---|---|
| **Navegador web** | Teoría, quizzes y ejercicios | Todo el mes |
| **Terminal** (PowerShell o Linux) | Ver direcciones MAC, tabla ARP y adaptadores | Semana 9 |
| **Wireshark** | Capturar tramas y leerlas campo a campo | Semanas 9 y 10 |
| **Cisco Packet Tracer** | Conmutadores, VLAN y STP | Semanas 11 y 12 |
| Calculadora | Sobrecarga de la trama y eficiencia | Semanas 9 y 10 |

---

## Evaluación del mes

| Instrumento | Cuándo | Peso en la nota del mes |
|---|---|---:|
| Quizzes diarios | Al final de cada `teoria.html` | Autoevaluación (0 %) |
| Ejercicios y laboratorios | En cada día | Autoevaluación (0 %) |
| Tests semanales | Viernes de cada semana | **50 %** |
| Examen mensual | Viernes de la Semana 12 | **50 %** |

**Nota mínima para superar el mes**: 5/10

---

[🏠 Centro de Aprendizaje](../web_interactiva/index.html) · [← Mes 2](../Mes_02_Capa_Fisica/README.md) · [Semana 9 →](Semana_09/README.md)
