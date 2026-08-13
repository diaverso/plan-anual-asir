# SEMANA 2: Ejercicios Prácticos
## Componentes y Tipos de Redes

---

## EJERCICIO 1: Clasificación por Extensión Geográfica

### Enunciado
Clasifica cada escenario según el tipo de red (PAN, LAN, MAN, WAN) e indica una tecnología adecuada:

| Escenario | Tipo de red | Tecnología |
|-----------|-------------|------------|
| Auriculares inalámbricos conectados al móvil | _________ | _________ |
| Red de un instituto con 3 aulas de informática | _________ | _________ |
| Red que une 8 sedes municipales de una ciudad | _________ | _________ |
| Conexión entre la sede de Madrid y la de Tokio | _________ | _________ |
| Impresora compartida en una oficina de 15 PCs | _________ | _________ |
| Smartwatch sincronizando pasos con el smartphone | _________ | _________ |
| Red de cámaras de tráfico de un área metropolitana | _________ | _________ |
| Internet | _________ | _________ |

---

## EJERCICIO 2: Cálculo de Enlaces en Malla

### Enunciado
Recuerda la fórmula de una malla completa:

```
Nº enlaces = N × (N - 1) / 2
```

### Parte A: Cálculos
Calcula el número de enlaces necesarios para una malla completa de:

1. 4 dispositivos → ______ enlaces
2. 6 dispositivos → ______ enlaces
3. 10 dispositivos → ______ enlaces
4. 15 dispositivos → ______ enlaces
5. 20 dispositivos → ______ enlaces

### Parte B: Interfaces por dispositivo
En una malla completa, ¿cuántas interfaces de red necesita **cada** dispositivo si hay 10 nodos?

### Parte C: Razonamiento
Una empresa quiere conectar 30 sedes en malla completa.

1. ¿Cuántos enlaces necesitaría?
2. Si cada enlace de fibra cuesta 2.000 EUR/año, ¿cuál es el coste anual?
3. ¿Por qué en la práctica se usa **malla parcial** en lugar de completa? Da dos razones.

---

## EJERCICIO 3: Comparativa de Topologías

### Enunciado
Completa la siguiente tabla comparativa:

| Topología | Coste | Tolerancia a fallos | Facilidad de diagnóstico | Escalabilidad | Uso actual |
|-----------|-------|---------------------|--------------------------|---------------|------------|
| Bus | _____ | _____ | _____ | _____ | _____ |
| Anillo | _____ | _____ | _____ | _____ | _____ |
| Estrella | _____ | _____ | _____ | _____ | _____ |
| Malla | _____ | _____ | _____ | _____ | _____ |
| Árbol | _____ | _____ | _____ | _____ | _____ |

Usa los valores: **Muy bajo / Bajo / Medio / Alto / Muy alto** y **Obsoleta / Poco usada / Muy usada**.

---

## EJERCICIO 4: Diagnóstico de Fallos

### Enunciado
Para cada topología, indica qué ocurre cuando falla el elemento señalado:

#### a) Topología de Bus
1. Se rompe el cable central en el punto medio → ______________________
2. Falla la tarjeta de red de un PC → ______________________
3. Se pierde un terminador del extremo → ______________________

#### b) Topología de Anillo (simple)
1. Falla un nodo intermedio → ______________________
2. Se corta el cable entre dos nodos → ______________________
3. ¿Qué solución existe para mitigar esto? → ______________________

#### c) Topología de Estrella
1. Falla el switch central → ______________________
2. Falla el cable de un PC → ______________________
3. Falla la NIC de un PC → ______________________

#### d) Topología de Árbol
1. Falla el switch de una rama intermedia → ______________________
2. Falla el router raíz → ______________________

---

## EJERCICIO 5: Diseño de Red para un Escenario Real

### Escenario
Una clínica dental ocupa **una planta de 400 m²** y necesita conectar:

- 3 PCs de recepción
- 4 PCs en consultas (uno por gabinete)
- 1 servidor con historiales clínicos
- 2 impresoras de red
- 1 equipo de radiografía digital
- Wi-Fi para pacientes (zona de espera)
- Wi-Fi para el personal (tablets en consulta)

### Preguntas

1. **Tipo de red**: ¿Qué clasificación por extensión corresponde? Justifica.

2. **Topología**: ¿Qué topología recomiendas? Justifica en 3 líneas.

3. **Dispositivos**: Enumera el equipamiento de red necesario (cantidad y tipo).

4. **Segmentación**: ¿Por qué la Wi-Fi de pacientes NO debería estar en la misma red que el servidor de historiales? (Piensa en protección de datos / LOPD).

5. **Diagrama**: Dibuja la topología resultante indicando dispositivos y medios.

---

## EJERCICIO 6: Redes Públicas, Privadas y VPN

### Parte A: Clasificación
Indica si cada red es **pública (Pu)**, **privada (Pr)** o **VPN (V)**:

1. [ ] Internet
2. [ ] La red interna de un banco
3. [ ] Un teletrabajador que accede a los ficheros de la empresa cifrando el tráfico
4. [ ] La red Wi-Fi de una cafetería
5. [ ] La red de gestión de un hospital
6. [ ] La red telefónica conmutada (RTC)
7. [ ] Túnel IPSec entre dos sedes de una empresa a través de Internet

### Parte B: Análisis
Una empresa con 4 sedes valora dos opciones para interconectarlas:

- **Opción 1**: Línea dedicada de fibra punto a punto entre sedes (red privada)
- **Opción 2**: VPN cifrada sobre Internet

Completa:

| Criterio | Línea dedicada | VPN sobre Internet |
|----------|----------------|--------------------|
| Coste mensual | _____ | _____ |
| Seguridad | _____ | _____ |
| Ancho de banda garantizado | _____ | _____ |
| Tiempo de despliegue | _____ | _____ |
| Escalabilidad (añadir sede 5) | _____ | _____ |

¿Cuál recomendarías para una PYME? ¿Y para un banco? Justifica.

---

## EJERCICIO 7: Cálculo de Cableado

### Enunciado
Una oficina en planta rectangular de **30 m × 20 m** tiene el armario de comunicaciones (rack) en una esquina. Hay que cablear **24 puestos** distribuidos uniformemente.

**Datos:**
- Distancia media rack → puesto: **22 metros**
- Margen adicional por puesto (subida a canaleta, holgura): **4 metros**
- Cable UTP Cat6: **0,45 EUR/metro**
- Latiguillos (2 por puesto): **2,50 EUR cada uno**
- Rosetas RJ45: **3,20 EUR cada una**

### Preguntas

1. **Metros totales** de cable horizontal necesarios.
2. **Coste del cable** horizontal.
3. **Coste de latiguillos y rosetas**.
4. **Coste total** del cableado (sin electrónica de red).
5. ¿Se respeta la **distancia máxima de 100 m** del estándar para UTP? Justifica.
6. Si un puesto quedara a 115 m del rack, ¿qué solución adoptarías?

---

## EJERCICIO 8: Topología Física vs Topología Lógica

### Enunciado
Es habitual confundir ambos conceptos. Investiga y responde:

1. **Define** topología física y topología lógica con tus palabras.

2. Completa la tabla:

| Tecnología | Topología física | Topología lógica |
|------------|------------------|------------------|
| Ethernet con hub | _____________ | _____________ |
| Ethernet con switch | _____________ | _____________ |
| Token Ring con MAU | _____________ | _____________ |
| Wi-Fi en modo infraestructura | _____________ | _____________ |

3. **Explica** por qué una red Ethernet con hub tiene topología física de estrella pero lógica de bus.

---

## EJERCICIO 9: Dominios de Colisión y Broadcast

### Enunciado
Observa la siguiente red:

```
                    [ROUTER]
                    /       \
             [SWITCH1]      [SWITCH2]
              /  |  \          |    \
           PC1  PC2 [HUB]     PC5   PC6
                    /   \
                  PC3   PC4
```

### Preguntas

1. ¿Cuántos **dominios de colisión** hay? Enuméralos.
2. ¿Cuántos **dominios de broadcast** hay? Enuméralos.
3. Si PC3 envía datos a PC4, ¿qué equipos reciben la señal?
4. Si PC1 envía un broadcast, ¿qué equipos lo reciben?
5. Si sustituimos el HUB por un switch, ¿cómo cambian las respuestas 1 y 3?

---

## EJERCICIO 10: Preguntas de Razonamiento

### 1. Elección de topología
Un centro de datos que aloja servicios bancarios críticos elige **malla parcial** en lugar de estrella pese al sobrecoste. Explica por qué, considerando disponibilidad, SLA y coste de una caída.

### 2. Topología en el hogar
Describe la topología de tu red doméstica: dispositivos, medios y clasificación. ¿Es realmente una estrella pura? ¿Por qué el router doméstico es un caso híbrido?

### 3. Escalado
Una startup pasa de 10 a 120 empleados en un año. Su red actual es una estrella con un único switch de 24 puertos.

- ¿Qué problemas aparecerán?
- ¿A qué topología deberían migrar?
- ¿Qué ventaja aporta la jerarquía (núcleo / distribución / acceso)?

---

## SOLUCIONES

### Ejercicio 1

| Escenario | Tipo de red | Tecnología |
|-----------|-------------|------------|
| Auriculares inalámbricos | **PAN** | Bluetooth |
| Instituto con 3 aulas | **LAN** | Ethernet 802.3 / Wi-Fi 802.11 |
| 8 sedes municipales | **MAN** | Fibra óptica / WiMAX |
| Madrid ↔ Tokio | **WAN** | Fibra submarina / MPLS |
| Impresora en oficina | **LAN** | Ethernet |
| Smartwatch ↔ smartphone | **PAN** | Bluetooth LE |
| Cámaras de tráfico metropolitanas | **MAN** | Fibra óptica |
| Internet | **WAN** | Múltiples (fibra, satélite, MPLS) |

---

### Ejercicio 2

**Parte A:**
1. 4 dispositivos → 4 × 3 / 2 = **6 enlaces**
2. 6 dispositivos → 6 × 5 / 2 = **15 enlaces**
3. 10 dispositivos → 10 × 9 / 2 = **45 enlaces**
4. 15 dispositivos → 15 × 14 / 2 = **105 enlaces**
5. 20 dispositivos → 20 × 19 / 2 = **190 enlaces**

**Parte B:** Cada dispositivo necesita **N - 1 = 9 interfaces** (una por cada nodo restante).

**Parte C:**
1. 30 × 29 / 2 = **435 enlaces**
2. 435 × 2.000 = **870.000 EUR/año**
3. Razones para malla parcial:
   - **Coste**: crece de forma cuadrática (O(N²)); inasumible a partir de pocas decenas de nodos.
   - **Complejidad**: cableado, número de interfaces por equipo y administración se disparan; la redundancia útil se consigue con muchos menos enlaces bien elegidos.

---

### Ejercicio 3

| Topología | Coste | Tolerancia a fallos | Diagnóstico | Escalabilidad | Uso actual |
|-----------|-------|---------------------|-------------|---------------|------------|
| Bus | Muy bajo | Muy baja | Muy difícil | Baja | Obsoleta |
| Anillo | Medio | Baja (alta con doble anillo) | Medio | Baja | Obsoleta |
| Estrella | Medio | Media | Muy fácil | Alta | Muy usada |
| Malla | Muy alto | Muy alta | Medio | Baja (coste) | Poco usada (backbone/DC) |
| Árbol | Alto | Media | Fácil | Muy alta | Muy usada (empresa) |

---

### Ejercicio 4

**a) Bus**
1. **Cae toda la red**: se pierden los terminadores efectivos y se generan reflexiones; ambos segmentos quedan inoperativos.
2. Solo ese PC pierde conectividad; el resto sigue funcionando.
3. Aparecen **reflexiones de señal** → errores masivos y red inutilizable.

**b) Anillo simple**
1. **Se rompe el anillo**: el token no circula y cae toda la red.
2. Igual: la red completa deja de funcionar.
3. **Doble anillo** (FDDI) con sentido contrario, o *bypass* automático del nodo caído.

**c) Estrella**
1. **Cae toda la red** (punto único de fallo). Se mitiga con switches redundantes/apilados.
2. Solo ese PC queda aislado.
3. Solo ese PC queda aislado.

**d) Árbol**
1. Cae **toda la rama** que cuelga de ese switch; el resto sigue operativo.
2. Se pierde la comunicación **entre ramas** y la salida a Internet; dentro de cada rama la comunicación local continúa.

---

### Ejercicio 5

1. **LAN**: todos los equipos están en un mismo edificio y planta, propiedad privada, alta velocidad.

2. **Estrella** (o estrella extendida). Es la topología estándar en LAN modernas: fácil diagnóstico, el fallo de un puesto no afecta al resto, y permite crecer añadiendo puertos. La superficie (400 m²) queda holgadamente dentro de los 100 m de UTP.

3. **Equipamiento:**
   - 1 switch de 24 puertos gestionable (10 equipos cableados + AP + crecimiento)
   - 2 puntos de acceso Wi-Fi (o 1 con soporte multi-SSID)
   - 1 router/firewall con salida a Internet
   - 1 rack con panel de parcheo y SAI
   - Cableado UTP Cat6 + rosetas

4. **Segmentación**: los historiales clínicos son **datos de salud (categoría especial del RGPD)**. Un paciente conectado a la Wi-Fi de invitados no debe tener ninguna ruta hacia el servidor. Se separa mediante **VLAN** distintas y reglas de firewall, evitando que un dispositivo comprometido acceda a datos sensibles.

5. **Diagrama:**
```
                [Internet]
                    |
            [Router / Firewall]
                    |
              [Switch 24p]
        /      /    |    \      \
  Recepción Consultas Servidor Impresoras
   (3 PC)    (4 PC)    (1)      (2)
                    |
              [AP Wi-Fi]
              /        \
      SSID Personal  SSID Invitados
       (VLAN 20)      (VLAN 99)
```

---

### Ejercicio 6

**Parte A:**
1. [Pu] Internet
2. [Pr] Red interna de un banco
3. [V] Teletrabajador con tráfico cifrado
4. [Pu] Wi-Fi de cafetería
5. [Pr] Red de gestión hospitalaria
6. [Pu] RTC
7. [V] Túnel IPSec entre sedes

**Parte B:**

| Criterio | Línea dedicada | VPN sobre Internet |
|----------|----------------|--------------------|
| Coste mensual | Alto | Bajo |
| Seguridad | Muy alta (medio no compartido) | Alta (depende del cifrado) |
| Ancho de banda garantizado | Sí (SLA) | No (best effort) |
| Tiempo de despliegue | Semanas/meses | Horas |
| Escalabilidad | Baja (nuevo circuito) | Alta (nuevo túnel) |

- **PYME**: VPN sobre Internet — coste muy inferior y seguridad suficiente con IPSec/WireGuard.
- **Banco**: línea dedicada (o MPLS) — necesita ancho de banda garantizado, latencia estable y cumplimiento normativo estricto.

---

### Ejercicio 7

1. **Metros totales**: (22 + 4) × 24 = **624 metros**
2. **Coste cable**: 624 × 0,45 = **280,80 EUR**
3. **Latiguillos**: 24 × 2 × 2,50 = 120,00 EUR
   **Rosetas**: 24 × 3,20 = 76,80 EUR
   **Subtotal**: **196,80 EUR**
4. **Coste total**: 280,80 + 196,80 = **477,60 EUR**
5. **Sí**: el enlace más largo es de 26 m, muy por debajo del límite de 100 m (90 m de cable horizontal + 10 m de latiguillos según TIA/EIA-568).
6. Con 115 m se supera el límite. Soluciones:
   - Instalar un **switch intermedio** (rack secundario) más cercano al puesto.
   - Usar **fibra óptica** para ese tramo con conversor de medios.

---

### Ejercicio 8

1. **Topología física**: cómo están dispuestos y cableados realmente los equipos.
   **Topología lógica**: cómo circulan realmente los datos entre ellos, independientemente del cableado.

2.

| Tecnología | Topología física | Topología lógica |
|------------|------------------|------------------|
| Ethernet con hub | Estrella | **Bus** |
| Ethernet con switch | Estrella | Estrella (conmutada, punto a punto) |
| Token Ring con MAU | Estrella | **Anillo** |
| Wi-Fi infraestructura | Estrella (en torno al AP) | Bus (medio compartido) |

3. El hub **no conmuta**: cada bit que entra por un puerto se repite por todos los demás. Aunque el cableado dibuje una estrella, eléctricamente todos los equipos comparten el mismo medio, con un único dominio de colisión y acceso CSMA/CD — exactamente el comportamiento de un bus.

---

### Ejercicio 9

1. **Dominios de colisión: 5**
   - SWITCH1–PC1
   - SWITCH1–PC2
   - SWITCH1–HUB (incluye PC3 y PC4: el hub no segmenta)
   - SWITCH2–PC5
   - SWITCH2–PC6

   *(Además, cada enlace router–switch es su propio dominio; si se cuentan, serían 7.)*

2. **Dominios de broadcast: 2** — uno por cada interfaz del router: el de SWITCH1 (PC1–PC4) y el de SWITCH2 (PC5, PC6).

3. Reciben la señal **PC4 y todos los equipos del hub** (PC3, PC4) **y el switch**; el hub repite por todos sus puertos. PC1, PC2, PC5 y PC6 **no** la reciben porque el switch solo la reenviaría si fuera necesario.

4. El broadcast de PC1 llega a **PC2, PC3, PC4** (todo el dominio de broadcast de SWITCH1). El router **no lo reenvía**, así que PC5 y PC6 no lo reciben.

5. Sustituyendo el hub por un switch:
   - Los dominios de colisión pasan a **7** (uno por enlace punto a punto: PC3 y PC4 tendrían el suyo).
   - En la pregunta 3, solo **PC4** recibiría la trama: el switch consulta su tabla CAM y la envía únicamente al puerto destino.

---

### Ejercicio 10

**1. Malla parcial en centro de datos bancario**
La disponibilidad exigida (99,99 % ≈ 52 min de caída al año) impide un punto único de fallo. La malla parcial ofrece **rutas alternativas** ante el fallo de un enlace o switch, permitiendo convergencia en milisegundos. El coste extra de enlaces es irrelevante comparado con el de una caída: multas por incumplimiento de SLA, operaciones perdidas y daño reputacional pueden suponer cientos de miles de euros por hora.

**2. Red doméstica**
Físicamente es una **estrella** en torno al router. Sin embargo, ese router integra varios dispositivos: switch (puertos LAN), punto de acceso Wi-Fi, router (capa 3) y firewall. Es **híbrido** porque combina una estrella cableada con una zona inalámbrica de medio compartido, y actúa como frontera entre la LAN doméstica y la WAN del ISP.

**3. Escalado de 10 a 120 empleados**
- **Problemas**: puertos insuficientes (24 < 120), saturación del enlace ascendente, un único dominio de broadcast enorme (tormentas de broadcast), punto único de fallo y diagnóstico inmanejable.
- **Migración**: topología en **árbol jerárquico** con VLAN por departamento.
- **Ventaja de la jerarquía**: el nivel de **acceso** conecta usuarios, el de **distribución** agrega y aplica políticas/enrutamiento inter-VLAN, y el **núcleo** conmuta a alta velocidad. Cada nivel escala por separado, se limitan los dominios de broadcast y los fallos quedan contenidos en su rama.

---

## Criterios de Evaluación

| Ejercicio | Peso | Competencias |
|-----------|------|--------------|
| 1 | 10% | Clasificación de redes |
| 2 | 10% | Cálculo y razonamiento cuantitativo |
| 3-4 | 20% | Comprensión de topologías |
| 5 | 15% | Diseño de red |
| 6 | 10% | Redes públicas/privadas/VPN |
| 7 | 15% | Cálculo de cableado |
| 8-9 | 15% | Análisis técnico avanzado |
| 10 | 5% | Razonamiento crítico |

**Nota mínima para aprobar**: 5/10

---

**Tiempo estimado**: 3-4 horas
**Fecha de entrega**: Final de Semana 2
