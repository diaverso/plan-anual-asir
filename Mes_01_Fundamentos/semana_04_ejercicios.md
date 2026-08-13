# SEMANA 4: Ejercicios Prácticos
## Dispositivos de Red

---

## EJERCICIO 1: Clasificación de Dispositivos por Capa

### Enunciado
Completa la tabla indicando la capa OSI en la que opera cada dispositivo y qué tipo de dirección utiliza para tomar decisiones:

| Dispositivo | Capa OSI | Dirección que usa | ¿Segmenta colisiones? | ¿Segmenta broadcast? |
|-------------|----------|-------------------|-----------------------|----------------------|
| Repetidor | _______ | _______ | _______ | _______ |
| Hub | _______ | _______ | _______ | _______ |
| Bridge | _______ | _______ | _______ | _______ |
| Switch | _______ | _______ | _______ | _______ |
| Router | _______ | _______ | _______ | _______ |
| Access Point | _______ | _______ | _______ | _______ |
| Firewall | _______ | _______ | _______ | _______ |
| Gateway | _______ | _______ | _______ | _______ |

---

## EJERCICIO 2: Funcionamiento de la Tabla CAM

### Escenario
Un switch de 4 puertos arranca con la tabla CAM **vacía**. Los equipos conectados son:

| Puerto | Equipo | Dirección MAC |
|--------|--------|---------------|
| 1 | PC-A | AA:AA:AA:AA:AA:01 |
| 2 | PC-B | BB:BB:BB:BB:BB:02 |
| 3 | PC-C | CC:CC:CC:CC:CC:03 |
| 4 | PC-D | DD:DD:DD:DD:DD:04 |

### Secuencia de eventos
1. **PC-A envía una trama a PC-C**
2. **PC-C responde a PC-A**
3. **PC-B envía una trama a PC-D**
4. **PC-D responde a PC-B**

### Preguntas
Para **cada uno de los 4 pasos**, indica:

a) ¿Qué entradas tiene la tabla CAM **antes** del envío?
b) ¿El switch hace **flooding** o **envío unicast**? ¿Por qué?
c) ¿Qué equipos **reciben** la trama?
d) ¿Qué entradas tiene la tabla CAM **después**?

**Plantilla de respuesta:**

```
PASO 1: PC-A → PC-C
  Tabla antes:  (vacía)
  Acción:       ______________
  Reciben:      ______________
  Tabla después: ______________
```

---

## EJERCICIO 3: Hub vs Switch — Rendimiento

### Escenario
Una oficina tiene **8 PCs** conectados a un dispositivo de **100 Mbps**. En un momento dado, 4 parejas de PCs intercambian ficheros simultáneamente:

- PC1 ↔ PC2
- PC3 ↔ PC4
- PC5 ↔ PC6
- PC7 ↔ PC8

### Preguntas

1. **Con un HUB de 100 Mbps:**
   - ¿Cuántos dominios de colisión hay?
   - ¿Qué ancho de banda efectivo tiene cada pareja?
   - ¿Puede transmitir más de un PC a la vez? ¿Por qué?
   - ¿Es half-duplex o full-duplex?

2. **Con un SWITCH de 100 Mbps:**
   - ¿Cuántos dominios de colisión hay?
   - ¿Qué ancho de banda efectivo tiene cada pareja?
   - ¿Cuál es el throughput agregado del switch?
   - ¿Es half-duplex o full-duplex?

3. **Comparativa:** Calcula cuántas **veces más rápido** resulta el switch en este escenario.

4. **Tiempo de transferencia:** Cada pareja transfiere un fichero de **500 MB**. Calcula el tiempo aproximado en cada caso (ignora sobrecarga de protocolo).

---

## EJERCICIO 4: Análisis de Direcciones MAC

### Enunciado
Observa las siguientes direcciones MAC:

```
1) 00:1B:44:11:3A:B7
2) FF:FF:FF:FF:FF:FF
3) 01:00:5E:00:00:FB
4) 3C:22:FB:8A:11:02
5) 00:00:00:00:00:00
```

### Preguntas

1. ¿Cuántos **bits** tiene una dirección MAC? ¿Y cuántos bytes?
2. ¿Qué parte identifica al **fabricante** (OUI) y qué parte al dispositivo concreto?
3. Para la dirección 1, indica el OUI y el identificador de dispositivo.
4. ¿Qué tipo de dirección es cada una de las 5? (unicast, broadcast, multicast, nula)
5. ¿Cuántas direcciones MAC distintas pueden existir en total? Expresa el resultado como potencia de 2 y en notación decimal aproximada.
6. Busca el fabricante del OUI `3C:22:FB` (usa un buscador de OUI online).

---

## EJERCICIO 5: Selección de Equipamiento

### Escenario
Un centro educativo debe renovar su red. Datos:

- **3 plantas**, con 1 armario de comunicaciones por planta
- **Planta 0**: 20 puestos + secretaría (5 puestos) + Wi-Fi de vestíbulo
- **Planta 1**: 2 aulas de informática (25 PCs cada una)
- **Planta 2**: 15 despachos + sala de servidores (4 servidores)
- Se requiere **Wi-Fi en todo el centro**
- Se requiere **separación de tráfico**: alumnos / profesores / administración / servidores
- Salida a Internet mediante fibra 1 Gbps

### Preguntas

1. **Inventario**: Enumera el equipamiento de red necesario (tipo, cantidad y motivo).
2. **Switches**: ¿Cuántos puertos hacen falta por planta? Elige el modelo (24p o 48p) y justifica dejando margen de crecimiento.
3. **Backbone**: ¿Qué medio y velocidad usarías entre los armarios de planta? Justifica.
4. **Gestionable o no**: ¿Los switches deben ser gestionables? ¿Por qué es imprescindible aquí?
5. **Wi-Fi**: ¿Cuántos APs estimas? ¿Cómo separarías los SSID?
6. **Seguridad**: ¿Dónde colocarías el firewall? Dibuja el esquema.

---

## EJERCICIO 6: Access Point y Modos de Funcionamiento

### Enunciado
Investiga y responde:

1. Explica la diferencia entre modo **infraestructura** y modo **ad-hoc**.
2. ¿Qué diferencia hay entre un **AP** y un **router Wi-Fi doméstico**?
3. Define los siguientes términos:
   - SSID
   - BSSID
   - ESSID
   - Roaming
4. ¿Por qué un AP se considera un **bridge inalámbrico** y no un switch?
5. Completa la tabla de estándares Wi-Fi:

| Estándar | Nombre comercial | Banda | Velocidad máx. teórica |
|----------|------------------|-------|------------------------|
| 802.11b | _____________ | _____ | _____ |
| 802.11g | _____________ | _____ | _____ |
| 802.11n | _____________ | _____ | _____ |
| 802.11ac | _____________ | _____ | _____ |
| 802.11ax | _____________ | _____ | _____ |

---

## EJERCICIO 7: Dominios de Colisión y Broadcast (Avanzado)

### Enunciado
Analiza la siguiente topología:

```
                         [INTERNET]
                              |
                        [ROUTER R1]
                        /          \
                 [SWITCH SW1]   [SWITCH SW2]
                  /    |    \        |     \
               PC1   PC2   [HUB1]   PC5   [AP1]
                            /  \            |  \
                          PC3  PC4       Móvil Tablet
```

### Preguntas

1. ¿Cuántos **dominios de colisión** hay en total? Enuméralos.
2. ¿Cuántos **dominios de broadcast** hay? Enuméralos.
3. Si PC3 transmite, ¿qué equipos detectan la señal en el medio?
4. Si PC1 envía un **broadcast ARP**, ¿qué equipos lo reciben?
5. Si el Móvil envía un broadcast, ¿lo recibe PC5? ¿Y PC1?
6. Se sustituye HUB1 por un switch. ¿Cómo cambian las respuestas 1 y 3?
7. Se configuran **VLANs** en SW1 (PC1 y PC2 en VLAN 10; HUB1 en VLAN 20). ¿Cuántos dominios de broadcast hay ahora?

---

## EJERCICIO 8: Tabla de Enrutamiento

### Escenario
Un router R1 tiene la siguiente tabla de enrutamiento:

| Red destino | Máscara | Siguiente salto | Interfaz | Métrica |
|-------------|---------|-----------------|----------|---------|
| 192.168.1.0 | 255.255.255.0 | Conectada | Fa0/0 | 0 |
| 192.168.2.0 | 255.255.255.0 | Conectada | Fa0/1 | 0 |
| 10.0.0.0 | 255.0.0.0 | 192.168.2.2 | Fa0/1 | 1 |
| 0.0.0.0 | 0.0.0.0 | 192.168.1.254 | Fa0/0 | 1 |

### Preguntas

Indica por **qué interfaz y hacia qué siguiente salto** enviará el router un paquete dirigido a:

1. `192.168.1.45` → ______________________
2. `192.168.2.100` → ______________________
3. `10.5.3.20` → ______________________
4. `8.8.8.8` → ______________________
5. `172.16.0.1` → ______________________

**Además:**

6. ¿Qué significa la entrada `0.0.0.0 / 0.0.0.0`? ¿Cómo se llama comúnmente?
7. ¿Qué ocurre si un paquete no coincide con ninguna entrada **y no existe ruta por defecto**?
8. Si hubiera dos rutas válidas hacia el mismo destino, ¿qué criterio usaría el router para elegir?

---

## EJERCICIO 9: Diagnóstico de Averías

### Enunciado
Para cada avería, identifica el **dispositivo probablemente responsable**, la **capa OSI** afectada y **dos comandos o pruebas** de diagnóstico:

| Avería | Dispositivo | Capa | Diagnóstico |
|--------|-------------|------|-------------|
| Toda la red de una planta cae de golpe | ________ | ____ | ________ |
| Un solo PC no tiene conectividad; el LED del switch está apagado | ________ | ____ | ________ |
| Hay conectividad local pero no salida a Internet | ________ | ____ | ________ |
| Se detecta una tormenta de broadcast en toda la LAN | ________ | ____ | ________ |
| Los portátiles se desconectan del Wi-Fi al cambiar de planta | ________ | ____ | ________ |
| Un servidor responde a ping pero su web es inaccesible desde fuera | ________ | ____ | ________ |
| La red va muy lenta y se ven muchas colisiones | ________ | ____ | ________ |
| Dos equipos tienen la misma IP | ________ | ____ | ________ |

---

## EJERCICIO 10: Preguntas de Razonamiento

### 1. Switch de capa 3
Investiga qué es un **switch de capa 3 (multilayer switch)**.

- ¿En qué se diferencia de un switch normal?
- ¿En qué se diferencia de un router?
- ¿Cuándo conviene usar uno en lugar de un router?

### 2. Coste de la seguridad
Una empresa se plantea sustituir sus switches no gestionables por gestionables, con un sobrecoste de **4.000 EUR**.

- Enumera **4 capacidades** que aportan los gestionables.
- ¿Cómo justificarías la inversión ante la dirección en términos de negocio?

### 3. Convergencia de dispositivos
El router doméstico actual integra router, switch, AP, firewall, servidor DHCP y a veces módem.

- ¿Qué **ventajas** tiene esa integración en el hogar?
- ¿Por qué en entornos empresariales se prefieren dispositivos **separados y especializados**?
- Cita dos riesgos de depender de un único equipo integrado.

---

## SOLUCIONES

### Ejercicio 1

| Dispositivo | Capa OSI | Dirección | ¿Segmenta colisiones? | ¿Segmenta broadcast? |
|-------------|----------|-----------|-----------------------|----------------------|
| Repetidor | 1 - Física | Ninguna | No | No |
| Hub | 1 - Física | Ninguna | No | No |
| Bridge | 2 - Enlace | MAC | Sí | No |
| Switch | 2 - Enlace | MAC | Sí (uno por puerto) | No (salvo con VLAN) |
| Router | 3 - Red | IP | Sí | **Sí** |
| Access Point | 1-2 | MAC | No (medio compartido) | No |
| Firewall | 3-7 | IP / puertos / contenido | Sí | Sí (si actúa como router) |
| Gateway | 7 - Aplicación | Depende del protocolo | Sí | Sí |

---

### Ejercicio 2

```
PASO 1: PC-A → PC-C
  Tabla antes:  (vacía)
  Acción:       FLOODING — la MAC de PC-C es desconocida
  Reciben:      PC-B, PC-C, PC-D (todos menos el emisor)
  Tabla después: Puerto 1 → AA:AA:AA:AA:AA:01

PASO 2: PC-C → PC-A
  Tabla antes:  Puerto 1 → AA:...:01
  Acción:       UNICAST — la MAC de PC-A ya está aprendida (puerto 1)
  Reciben:      Solo PC-A
  Tabla después: Puerto 1 → AA:...:01
                 Puerto 3 → CC:...:03

PASO 3: PC-B → PC-D
  Tabla antes:  Puertos 1 y 3
  Acción:       FLOODING — la MAC de PC-D es desconocida
  Reciben:      PC-A, PC-C, PC-D
  Tabla después: Puerto 1 → AA:...:01
                 Puerto 3 → CC:...:03
                 Puerto 2 → BB:...:02

PASO 4: PC-D → PC-B
  Tabla antes:  Puertos 1, 2 y 3
  Acción:       UNICAST — la MAC de PC-B está en el puerto 2
  Reciben:      Solo PC-B
  Tabla después: Puerto 1 → AA:...:01
                 Puerto 2 → BB:...:02
                 Puerto 3 → CC:...:03
                 Puerto 4 → DD:...:04
```

**Conclusión**: el switch aprende la MAC **de origen** de cada trama que recibe, y hace flooding únicamente cuando desconoce la MAC de destino.

---

### Ejercicio 3

**1. Con HUB:**
- **1 dominio de colisión** (todos comparten el medio).
- 100 Mbps / 8 equipos ≈ **12,5 Mbps** por equipo; por pareja el medio está compartido, así que en la práctica cada transferencia consigue aproximadamente **25 Mbps** repartidos entre 4 parejas → ~25 Mbps de agregado real.
- **No**: si dos transmiten a la vez hay colisión y CSMA/CD obliga a retransmitir.
- **Half-duplex** obligatoriamente.

**2. Con SWITCH:**
- **8 dominios de colisión** (uno por puerto).
- **100 Mbps dedicados** por pareja (200 Mbps si se cuenta full-duplex: 100 TX + 100 RX).
- Throughput agregado: 4 parejas × 100 Mbps = **400 Mbps** (800 Mbps contando full-duplex).
- **Full-duplex**.

**3. Comparativa:** 400 / 25 = **16 veces más rápido** aproximadamente en este escenario.

**4. Tiempo de transferencia de 500 MB:**
- 500 MB = 4.000 Mb (500 × 8)
- **Hub**: 4.000 Mb / 25 Mbps = **160 segundos** (~2 min 40 s)
- **Switch**: 4.000 Mb / 100 Mbps = **40 segundos**

---

### Ejercicio 4

1. **48 bits** = **6 bytes**, representados en 12 dígitos hexadecimales.
2. Los **3 primeros bytes** son el **OUI** (Organizationally Unique Identifier), asignado por el IEEE al fabricante. Los **3 últimos** son el número de serie que asigna el fabricante a cada tarjeta.
3. Para `00:1B:44:11:3A:B7` → OUI = **00:1B:44**; identificador de dispositivo = **11:3A:B7**.
4. Tipos:
   - 1) `00:1B:44:11:3A:B7` → **Unicast**
   - 2) `FF:FF:FF:FF:FF:FF` → **Broadcast**
   - 3) `01:00:5E:00:00:FB` → **Multicast** (el prefijo 01:00:5E es multicast IPv4; corresponde a mDNS)
   - 4) `3C:22:FB:8A:11:02` → **Unicast**
   - 5) `00:00:00:00:00:00` → **Nula/no válida** (dirección no especificada)
5. 2⁴⁸ = **281.474.976.710.656** direcciones (unos 281 billones).
6. El OUI `3C:22:FB` pertenece a **Apple, Inc.**

---

### Ejercicio 5

**1. Inventario:**
- 1 router/firewall perimetral con WAN de 1 Gbps
- 1 switch de núcleo (core) gestionable con puertos de fibra
- 4 switches de acceso gestionables (ver punto 2)
- 6-8 puntos de acceso Wi-Fi gestionados por controladora
- 1 controladora Wi-Fi (o APs con gestión cloud)
- 3 racks con paneles de parcheo y SAI

**2. Puertos por planta:**
- **Planta 0**: 20 + 5 + 1 AP + margen → 1 switch de **48 puertos**
- **Planta 1**: 50 PCs + 2 APs → 2 switches de **48 puertos** (apilados)
- **Planta 2**: 15 + 4 servidores + 1 AP → 1 switch de **24 puertos** (o 48 si hay crecimiento previsto)

Se deja siempre un **20-30 % de puertos libres** para crecimiento y sustituciones.

**3. Backbone**: **fibra óptica multimodo a 10 Gbps** entre armarios de planta y el switch de núcleo. Motivo: evita cuellos de botella al agregar 50+ equipos por planta, supera la limitación de 100 m del cobre entre plantas distantes y es inmune a interferencias eléctricas.

**4. Gestionables: sí, imprescindible.** Se necesitan **VLANs** para separar alumnos, profesores, administración y servidores (requisito explícito), además de QoS, port-security, monitorización SNMP, STP y agregación de enlaces. Un switch no gestionable no puede hacer nada de esto.

**5. Wi-Fi**: aproximadamente **6-8 APs** (2-3 por planta según superficie y densidad de usuarios). SSID separados y mapeados a VLAN distintas:
- `Centro-Alumnos` → VLAN 30 (acceso solo a Internet, con filtrado)
- `Centro-Profesores` → VLAN 20 (acceso a recursos docentes)
- `Centro-Admin` → VLAN 10 (acceso a administración, con 802.1X)

**6. Firewall** entre el router perimetral y el switch de núcleo, controlando tanto el tráfico hacia Internet como el **inter-VLAN**:

```
        [Internet - Fibra 1 Gbps]
                  |
          [Router perimetral]
                  |
             [FIREWALL]
                  |
        [SWITCH NÚCLEO (10G)]
         /        |        \
   [SW P0]    [SW P1 x2]   [SW P2]
      |           |           |
  Puestos     Aulas      Despachos
  + AP        + APs      + Servidores + AP
```

---

### Ejercicio 6

1. **Infraestructura**: los clientes se comunican a través de un AP central, que actúa de intermediario y puente hacia la red cableada. **Ad-hoc**: los dispositivos se comunican directamente entre sí, sin AP, formando una red punto a punto temporal.

2. Un **AP** solo proporciona conectividad inalámbrica y actúa como puente hacia la LAN. Un **router Wi-Fi doméstico** integra además router (capa 3), switch, firewall, servidor DHCP y NAT.

3. Definiciones:
   - **SSID**: nombre lógico de la red inalámbrica (lo que ve el usuario).
   - **BSSID**: dirección MAC de la interfaz radio del AP; identifica físicamente a cada AP.
   - **ESSID**: mismo SSID compartido por varios APs, formando una red extendida que permite moverse entre ellos.
   - **Roaming**: proceso por el que un cliente cambia de AP sin perder la conexión al desplazarse.

4. Porque **no consulta una tabla de reenvío para decidir el destino**: retransmite las tramas entre el medio inalámbrico y el cableado traduciendo entre 802.11 y 802.3. Además, todos los clientes asociados comparten el mismo medio radio (un único dominio de colisión), a diferencia del switch que dedica un dominio por puerto.

5. Estándares Wi-Fi:

| Estándar | Nombre comercial | Banda | Velocidad máx. teórica |
|----------|------------------|-------|------------------------|
| 802.11b | (sin nombre Wi-Fi X) | 2,4 GHz | 11 Mbps |
| 802.11g | (sin nombre Wi-Fi X) | 2,4 GHz | 54 Mbps |
| 802.11n | **Wi-Fi 4** | 2,4 y 5 GHz | 600 Mbps |
| 802.11ac | **Wi-Fi 5** | 5 GHz | ~6,9 Gbps |
| 802.11ax | **Wi-Fi 6/6E** | 2,4, 5 y 6 GHz | ~9,6 Gbps |

---

### Ejercicio 7

1. **Dominios de colisión: 7**
   - SW1–PC1
   - SW1–PC2
   - SW1–HUB1 (incluye PC3 y PC4)
   - SW2–PC5
   - SW2–AP1 (incluye Móvil y Tablet, medio radio compartido)
   - R1–SW1
   - R1–SW2

2. **Dominios de broadcast: 2** — uno por interfaz del router: el de SW1 (PC1, PC2, PC3, PC4) y el de SW2 (PC5, AP1, Móvil, Tablet).

3. Si PC3 transmite, detectan la señal **PC4 y el propio HUB1** (que la repite por todos sus puertos), llegando también al puerto de SW1. PC1 y PC2 **no** la reciben, porque el switch solo reenvía si el destino lo requiere.

4. El broadcast ARP de PC1 lo reciben **PC2, PC3 y PC4** (todo el dominio de broadcast de SW1). R1 no lo reenvía.

5. El broadcast del Móvil **sí lo recibe PC5** (mismo dominio de broadcast, vía AP1 y SW2), pero **no lo recibe PC1**, porque el router bloquea los broadcasts entre sus interfaces.

6. Sustituyendo HUB1 por un switch:
   - Los dominios de colisión pasan a **8**: PC3 y PC4 tendrían cada uno el suyo.
   - En la pregunta 3, si PC3 transmite hacia PC4, **solo PC4** recibiría la trama (envío unicast por tabla CAM).

7. Con VLAN 10 (PC1, PC2) y VLAN 20 (HUB1 con PC3, PC4) en SW1, los dominios de broadcast pasan a ser **3**: VLAN 10, VLAN 20 y el segmento de SW2. Cada VLAN es un dominio de broadcast independiente, y para comunicarse entre ellas hace falta enrutamiento inter-VLAN.

---

### Ejercicio 8

1. `192.168.1.45` → **Fa0/0, red conectada directamente** (entrega directa, sin siguiente salto).
2. `192.168.2.100` → **Fa0/1, red conectada directamente**.
3. `10.5.3.20` → **Fa0/1, siguiente salto 192.168.2.2** (coincide con 10.0.0.0/8).
4. `8.8.8.8` → **Fa0/0, siguiente salto 192.168.1.254** (ruta por defecto).
5. `172.16.0.1` → **Fa0/0, siguiente salto 192.168.1.254** (tampoco coincide con ninguna red específica, va por defecto).

6. `0.0.0.0 / 0.0.0.0` coincide con **cualquier destino**. Es la **ruta por defecto** o *gateway of last resort*: se usa cuando ninguna otra entrada más específica encaja.

7. Sin ruta por defecto, el router **descarta el paquete** y envía al origen un mensaje ICMP *Destination Network Unreachable*.

8. Criterios, en orden:
   1. **Prefijo más largo** (*longest prefix match*): gana la ruta más específica.
   2. **Distancia administrativa**: fiabilidad de la fuente (conectada 0 < estática 1 < OSPF 110 < RIP 120).
   3. **Métrica**: dentro del mismo protocolo, la de menor coste.

---

### Ejercicio 9

| Avería | Dispositivo | Capa | Diagnóstico |
|--------|-------------|------|-------------|
| Cae toda una planta | Switch de planta / SAI | 1-2 | LEDs y alimentación del switch; `ping` al switch |
| Un PC sin conectividad, LED apagado | Cable / NIC / puerto | 1 | Probar otro latiguillo y otro puerto; `ethtool`/estado del adaptador |
| Sin salida a Internet | Router / firewall | 3 | `tracert 8.8.8.8`; `ping` al gateway |
| Tormenta de broadcast | Switch (bucle sin STP) | 2 | Revisar STP y bucles; contadores de broadcast del switch |
| Desconexión al cambiar de planta | APs / controladora | 1-2 | Cobertura y solape de canales; comprobar roaming y mismo ESSID |
| Ping sí, web no accesible desde fuera | Firewall / NAT | 4 | `telnet ip 80`; revisar reglas de port forwarding |
| Red lenta con colisiones | Hub o enlace en half-duplex | 1-2 | Contadores de colisiones; verificar negociación dúplex |
| IP duplicada | Servidor DHCP / config. manual | 3 | `arp -a`; revisar ámbito DHCP y reservas |

---

### Ejercicio 10

**1. Switch de capa 3**
- **Frente a un switch normal**: además de conmutar por MAC, puede **enrutar entre VLANs** usando direcciones IP, manteniendo tablas de enrutamiento.
- **Frente a un router**: conmuta en **hardware (ASIC)**, con throughput muy superior y latencia mínima, pero soporta menos protocolos WAN, menos interfaces de tipos distintos y funciones más limitadas (NAT, VPN, QoS avanzada).
- **Cuándo usarlo**: para **enrutamiento inter-VLAN dentro de la LAN**, donde importa la velocidad y todo el tráfico es Ethernet. El router se reserva para la frontera con la WAN/Internet.

**2. Switches gestionables**
Capacidades que aportan:
1. **VLANs** — segmentación lógica y aislamiento de tráfico sensible.
2. **STP/RSTP** — prevención de bucles y redundancia de enlaces.
3. **Port-security y 802.1X** — control de qué dispositivos pueden conectarse.
4. **QoS y monitorización SNMP** — priorización de voz/vídeo y visibilidad de la red.

**Justificación ante la dirección**: no se compra "hardware", se compra **cumplimiento normativo y continuidad de negocio**. La segmentación por VLAN es exigida por el RGPD para aislar datos personales; el port-security reduce el riesgo de intrusión interna; la monitorización acorta el tiempo de resolución de incidencias. Frente a 4.000 EUR, una sola jornada de parada de la red o una sanción por brecha de datos cuesta mucho más.

**3. Convergencia de dispositivos**
- **Ventajas en el hogar**: precio muy inferior, instalación sencilla (un solo equipo y una sola configuración), menor consumo y espacio, mantenimiento mínimo para usuarios no técnicos.
- **En empresa se separan** porque cada función necesita **capacidad, escalabilidad y disponibilidad** propias: un firewall dedicado inspecciona a velocidad de línea, los switches escalan en puertos, los APs se gestionan centralizadamente. Además permite actualizar o sustituir una pieza sin tocar el resto.
- **Riesgos del equipo integrado**: (1) **punto único de fallo** — si cae, se pierden conmutación, enrutamiento, Wi-Fi y seguridad a la vez; (2) **superficie de ataque concentrada** — una vulnerabilidad en el firmware compromete todas las funciones simultáneamente, y a menudo estos equipos reciben pocas actualizaciones.

---

## Criterios de Evaluación

| Ejercicio | Peso | Competencias |
|-----------|------|--------------|
| 1 | 10% | Clasificación de dispositivos |
| 2 | 15% | Funcionamiento del switch |
| 3 | 15% | Cálculo de rendimiento |
| 4 | 10% | Direccionamiento MAC |
| 5 | 15% | Diseño y selección de equipamiento |
| 6 | 10% | Tecnologías inalámbricas |
| 7 | 10% | Dominios de colisión y broadcast |
| 8 | 10% | Tablas de enrutamiento |
| 9-10 | 5% | Diagnóstico y razonamiento crítico |

**Nota mínima para aprobar**: 5/10

---

**Tiempo estimado**: 3-4 horas
**Fecha de entrega**: Final de Semana 4

> **Aviso**: Al terminar esta semana te corresponde el **Examen Mensual 1** (`examen_mensual.html`), que cubre las 4 semanas del Mes 1.
