# SEMANA 3: Ejercicios Prácticos
## Arquitecturas y Modelos de Red

---

## EJERCICIO 1: Las 7 Capas del Modelo OSI

### Parte A: Tabla de memoria
Completa la tabla **sin consultar los apuntes**:

| Nº | Capa | Función principal | PDU | Dispositivo típico |
|----|------|-------------------|-----|--------------------|
| 7 | __________ | __________ | __________ | __________ |
| 6 | __________ | __________ | __________ | __________ |
| 5 | __________ | __________ | __________ | __________ |
| 4 | __________ | __________ | __________ | __________ |
| 3 | __________ | __________ | __________ | __________ |
| 2 | __________ | __________ | __________ | __________ |
| 1 | __________ | __________ | __________ | __________ |

### Parte B: Mnemotecnia
1. Escribe la mnemotecnia en inglés que ayuda a recordar el orden **de arriba abajo**.
2. Inventa una mnemotecnia **en español** para recordar las 7 capas de abajo arriba.

---

## EJERCICIO 2: Asignación de Protocolos a Capas

### Enunciado
Indica en qué capa del modelo OSI opera cada protocolo o elemento:

| Protocolo / Elemento | Capa OSI (número y nombre) |
|----------------------|----------------------------|
| HTTP | ______________________ |
| TCP | ______________________ |
| IP | ______________________ |
| Ethernet (802.3) | ______________________ |
| Cable UTP Cat6 | ______________________ |
| UDP | ______________________ |
| ARP | ______________________ |
| SSL/TLS (cifrado) | ______________________ |
| Dirección MAC | ______________________ |
| Dirección IP | ______________________ |
| DNS | ______________________ |
| ICMP | ______________________ |
| Wi-Fi (802.11) | ______________________ |
| Conector RJ45 | ______________________ |
| SMTP | ______________________ |
| OSPF | ______________________ |

---

## EJERCICIO 3: Correspondencia OSI ↔ TCP/IP

### Parte A: Equivalencias
Completa la correspondencia entre modelos:

| Capa TCP/IP | Capas OSI equivalentes | Protocolos |
|-------------|------------------------|------------|
| Aplicación | __________________ | __________________ |
| Transporte | __________________ | __________________ |
| Internet | __________________ | __________________ |
| Acceso a Red | __________________ | __________________ |

### Parte B: Comparativa
Responde:

1. ¿Cuántas capas tiene cada modelo?
2. ¿Qué capas OSI se fusionan en la capa de Aplicación de TCP/IP?
3. ¿Qué capas OSI se fusionan en la capa de Acceso a Red?
4. ¿Cuál de los dos modelos se usa realmente en Internet? ¿Y cuál es principalmente teórico/didáctico?
5. Cita **dos ventajas** del modelo OSI como herramienta de estudio y diagnóstico.

---

## EJERCICIO 4: Encapsulación Paso a Paso

### Escenario
Un usuario escribe `https://www.ejemplo.com` en su navegador. La petición HTTP tiene **420 bytes** de datos.

### Parte A: Recorrido descendente
Completa la tabla siguiendo la encapsulación en el equipo emisor:

| Capa | Nombre de la PDU | Cabecera que se añade | Tamaño aproximado |
|------|------------------|-----------------------|-------------------|
| 7-5 Aplicación | __________ | (ninguna) | 420 bytes |
| 4 Transporte | __________ | Cabecera TCP (20 bytes) | ______ bytes |
| 3 Red | __________ | Cabecera IP (20 bytes) | ______ bytes |
| 2 Enlace | __________ | Cabecera Ethernet (14 B) + FCS (4 B) | ______ bytes |
| 1 Física | __________ | (ninguna) | ______ bits |

### Parte B: Preguntas
1. ¿Cómo se llama el proceso **inverso** que ocurre en el receptor?
2. ¿Qué información contiene la cabecera de capa 4 que no está en la de capa 3?
3. ¿Qué información contiene la cabecera de capa 3 que no está en la de capa 2?
4. ¿Por qué la trama Ethernet añade información **al final** (FCS) además de al principio?
5. Si la MTU de la red es de **1500 bytes**, ¿cabe esta trama sin fragmentar? Justifica.

---

## EJERCICIO 5: Fragmentación y MTU

### Enunciado
Un equipo debe enviar **4.000 bytes de datos de aplicación** por una red Ethernet con **MTU = 1500 bytes**.

**Datos:**
- Cabecera IP: 20 bytes
- Cabecera TCP: 20 bytes
- La MTU limita el tamaño del **paquete IP completo** (cabecera IP + datos)

### Preguntas

1. ¿Cuántos bytes de datos útiles caben en cada paquete IP? (MTU - cabecera IP)
2. ¿Cuántos paquetes IP se necesitan para los 4.000 bytes + cabecera TCP?
3. ¿Cuántos bytes de datos lleva el **último** fragmento?
4. Calcula la **eficiencia** (bytes útiles / bytes totales transmitidos) considerando solo cabeceras IP.
5. ¿Qué ocurriría si la MTU fuera de **9000 bytes** (jumbo frames)? ¿Mejora la eficiencia? Justifica.

---

## EJERCICIO 6: Diagnóstico por Capas

### Enunciado
Aplica el modelo OSI como herramienta de diagnóstico. Para cada síntoma, indica la **capa más probable** del fallo y **una prueba** que lo confirme:

| Síntoma | Capa probable | Prueba de diagnóstico |
|---------|---------------|-----------------------|
| El LED del puerto de red está apagado | _______ | _______________________ |
| `ping 8.8.8.8` funciona, pero `ping google.com` falla | _______ | _______________________ |
| El PC tiene IP 169.254.x.x (APIPA) | _______ | _______________________ |
| El navegador da "ERR_CERT_AUTHORITY_INVALID" | _______ | _______________________ |
| Dos PCs de la misma VLAN no se ven, pero el cable está bien | _______ | _______________________ |
| La web carga, pero el servidor FTP del mismo host no responde | _______ | _______________________ |
| El cable está conectado pero hay muchísimos errores CRC | _______ | _______________________ |
| No hay ruta hacia otra subred | _______ | _______________________ |

---

## EJERCICIO 7: Organismos de Normalización

### Parte A: Asignación
Relaciona cada estándar con el organismo que lo publica (ISO, IEEE, IETF, ITU-T, ANSI):

| Estándar | Organismo |
|----------|-----------|
| Modelo OSI | __________ |
| 802.3 (Ethernet) | __________ |
| RFC 791 (IPv4) | __________ |
| 802.11 (Wi-Fi) | __________ |
| RFC 793 (TCP) | __________ |
| Serie G (transmisión) | __________ |
| 802.1Q (VLAN) | __________ |
| RFC 2460 (IPv6) | __________ |
| 802.1D (STP) | __________ |

### Parte B: Investigación
1. ¿Qué significa exactamente **RFC** y por qué se llama así?
2. Busca en qué año se publicó la **RFC 791** y quién la escribió.
3. ¿Qué diferencia hay entre un estándar **de facto** y uno **de iure**? Da un ejemplo de cada uno en redes.
4. ¿Por qué el modelo OSI, siendo un estándar oficial ISO, perdió frente a TCP/IP?

---

## EJERCICIO 8: Análisis de una Trama Real

### Enunciado
Se ha capturado la siguiente trama simplificada con Wireshark:

```
Ethernet II
  Destination: 00:1A:2B:3C:4D:5E
  Source:      00:0C:29:AA:BB:CC
  Type:        IPv4 (0x0800)

Internet Protocol Version 4
  Source Address:      192.168.1.50
  Destination Address: 172.217.16.206
  Protocol:            TCP (6)
  TTL:                 64

Transmission Control Protocol
  Source Port:      54321
  Destination Port: 443
  Flags:            SYN

  [Sin datos de aplicación]
```

### Preguntas

1. ¿Qué capa OSI corresponde a cada uno de los tres bloques?
2. ¿Cuál es la dirección **física** del emisor? ¿Y la **lógica**?
3. ¿Qué servicio se está solicitando en el destino? (pista: puerto 443)
4. ¿Qué significa el flag **SYN**? ¿En qué fase de la comunicación estamos?
5. ¿Por qué el campo *Type* de Ethernet vale `0x0800`?
6. Si esta trama atraviesa un router, ¿qué campos **cambiarán** y cuáles se mantendrán? Justifica.

---

## EJERCICIO 9: Puertos y Multiplexación

### Enunciado
La capa de transporte permite que varias aplicaciones usen la red simultáneamente mediante **puertos**.

### Parte A: Puertos conocidos
Completa:

| Servicio | Puerto | Protocolo (TCP/UDP) |
|----------|--------|---------------------|
| HTTP | _____ | _____ |
| HTTPS | _____ | _____ |
| FTP (control) | _____ | _____ |
| SSH | _____ | _____ |
| Telnet | _____ | _____ |
| SMTP | _____ | _____ |
| DNS | _____ | _____ |
| DHCP (servidor) | _____ | _____ |

### Parte B: Multiplexación
Un usuario tiene abiertos simultáneamente: una web HTTPS, un cliente de correo y una descarga FTP.

1. ¿Cómo distingue el sistema operativo a qué aplicación pertenece cada segmento que llega?
2. ¿Qué rango de puertos usa el **cliente** para sus conexiones salientes?
3. Define **socket** e indica los 4 elementos que lo forman.

---

## EJERCICIO 10: Preguntas de Razonamiento

### 1. Utilidad del modelo en capas
¿Por qué dividir la comunicación en capas facilita el desarrollo y el mantenimiento? Explica el concepto de **independencia entre capas** con un ejemplo: sustituir Wi-Fi por Ethernet sin cambiar el navegador.

### 2. Modelo híbrido
Muchos libros usan un modelo de **5 capas** (Aplicación, Transporte, Red, Enlace, Física). ¿Por qué crees que se ha impuesto ese modelo mixto en la enseñanza frente al OSI puro o al TCP/IP puro?

### 3. Encapsulación y sobrecarga
Un paquete de VoIP transporta solo **20 bytes** de audio, pero arrastra cabeceras RTP (12 B) + UDP (8 B) + IP (20 B) + Ethernet (18 B).

- Calcula la **eficiencia** de la transmisión.
- ¿Por qué se acepta esa sobrecarga en telefonía IP?
- ¿Qué técnica existe para reducirla en enlaces lentos?

---

## SOLUCIONES

### Ejercicio 1

**Parte A:**

| Nº | Capa | Función principal | PDU | Dispositivo |
|----|------|-------------------|-----|-------------|
| 7 | Aplicación | Interfaz con las aplicaciones | Datos | Gateway |
| 6 | Presentación | Formato, cifrado, compresión | Datos | Gateway |
| 5 | Sesión | Control de diálogos y sincronización | Datos | Gateway |
| 4 | Transporte | Entrega extremo a extremo, segmentación | Segmento | Gateway / Firewall L4 |
| 3 | Red | Direccionamiento lógico y enrutamiento | Paquete | Router |
| 2 | Enlace | Direccionamiento físico, tramas, CRC | Trama | Switch, Bridge |
| 1 | Física | Transmisión de bits y señales | Bits | Hub, Repetidor |

**Parte B:**
1. "**A**ll **P**eople **S**eem **T**o **N**eed **D**ata **P**rocessing" (Aplicación → Física).
2. Ejemplo de abajo arriba: "**F**ísica **E**s **R**ed **T**an **S**encilla **P**ara **A**prender" (Física, Enlace, Red, Transporte, Sesión, Presentación, Aplicación).

---

### Ejercicio 2

| Protocolo / Elemento | Capa OSI |
|----------------------|----------|
| HTTP | 7 - Aplicación |
| TCP | 4 - Transporte |
| IP | 3 - Red |
| Ethernet (802.3) | 2 - Enlace (y 1 en su parte física) |
| Cable UTP Cat6 | 1 - Física |
| UDP | 4 - Transporte |
| ARP | 2/3 - Enlace-Red (resuelve IP → MAC) |
| SSL/TLS | 6 - Presentación (5-6 en la práctica) |
| Dirección MAC | 2 - Enlace |
| Dirección IP | 3 - Red |
| DNS | 7 - Aplicación |
| ICMP | 3 - Red |
| Wi-Fi (802.11) | 1 y 2 - Física y Enlace |
| Conector RJ45 | 1 - Física |
| SMTP | 7 - Aplicación |
| OSPF | 3 - Red |

---

### Ejercicio 3

**Parte A:**

| Capa TCP/IP | Capas OSI | Protocolos |
|-------------|-----------|------------|
| Aplicación | 7, 6, 5 | HTTP, FTP, SMTP, DNS, DHCP, SSH, Telnet |
| Transporte | 4 | TCP, UDP |
| Internet | 3 | IP, ICMP, ARP, IGMP |
| Acceso a Red | 2, 1 | Ethernet, Wi-Fi, PPP |

**Parte B:**
1. OSI tiene **7** capas; TCP/IP tiene **4**.
2. Aplicación, Presentación y Sesión (7, 6 y 5).
3. Enlace y Física (2 y 1).
4. En Internet se usa **TCP/IP**; **OSI** es fundamentalmente teórico y didáctico.
5. Ventajas del OSI: (a) separa con precisión responsabilidades, lo que permite **diagnosticar por capas** de forma sistemática; (b) es **independiente del fabricante**, sirviendo como lenguaje común para describir cualquier tecnología de red.

---

### Ejercicio 4

**Parte A:**

| Capa | PDU | Cabecera | Tamaño |
|------|-----|----------|--------|
| 7-5 | Datos | (ninguna) | 420 bytes |
| 4 | **Segmento** | TCP (20 B) | **440 bytes** |
| 3 | **Paquete** | IP (20 B) | **460 bytes** |
| 2 | **Trama** | Ethernet (14 B) + FCS (4 B) | **478 bytes** |
| 1 | **Bits** | (ninguna) | **3.824 bits** (478 × 8) |

**Parte B:**
1. **Desencapsulación**: cada capa retira su cabecera y entrega el contenido a la capa superior.
2. Los **puertos** de origen y destino (multiplexación de aplicaciones), números de secuencia y flags de control.
3. Las **direcciones IP** de origen y destino, que son globales y permiten el enrutamiento entre redes distintas; la MAC solo tiene validez en el enlace local.
4. El **FCS (Frame Check Sequence)** se calcula sobre toda la trama, por lo que solo puede añadirse al final. Permite al receptor detectar errores de transmisión y descartar tramas corruptas.
5. **Sí cabe**: la carga del paquete IP es de 460 bytes, muy por debajo de los 1500 bytes de MTU, así que no hay fragmentación.

---

### Ejercicio 5

1. **1500 - 20 = 1.480 bytes** de datos útiles por paquete IP.
2. Datos totales a transportar: 4.000 + 20 (cabecera TCP) = 4.020 bytes.
   4.020 / 1.480 = 2,71 → **3 paquetes IP**.
3. Los dos primeros llevan 1.480 bytes cada uno = 2.960.
   Último fragmento: 4.020 - 2.960 = **1.060 bytes**.
4. Bytes totales transmitidos = 4.020 + (3 × 20 de cabecera IP) = 4.080.
   Eficiencia = 4.000 / 4.080 = **98,04 %**.
5. Con **MTU 9000** cabría todo en **un solo paquete** (4.020 < 8.980). Eficiencia = 4.000 / 4.040 = **99,01 %**. Mejora porque se reduce el número de cabeceras y el procesamiento por paquete, aunque el aumento es modesto ya que la sobrecarga ya era pequeña.

---

### Ejercicio 6

| Síntoma | Capa | Prueba |
|---------|------|--------|
| LED apagado | **1 - Física** | Comprobar cable/puerto, probar otro latiguillo, `ethtool` |
| `ping` a IP sí, a nombre no | **7 - Aplicación (DNS)** | `nslookup google.com`, revisar `/etc/resolv.conf` |
| IP 169.254.x.x (APIPA) | **3 - Red (DHCP)** | `ipconfig /renew`, comprobar servidor DHCP |
| Error de certificado | **6 - Presentación (TLS)** | Revisar fecha del sistema y cadena de certificados |
| Misma VLAN, no se ven | **2 - Enlace** | `arp -a`, revisar tabla CAM y configuración de VLAN |
| Web sí, FTP no | **4 - Transporte** | `telnet host 21`, revisar reglas de firewall por puerto |
| Muchos errores CRC | **1/2 - Física-Enlace** | Contadores de errores del switch, certificar el cable |
| Sin ruta a otra subred | **3 - Red** | `traceroute`, `route print`, revisar gateway |

---

### Ejercicio 7

**Parte A:**

| Estándar | Organismo |
|----------|-----------|
| Modelo OSI | **ISO** |
| 802.3 | **IEEE** |
| RFC 791 | **IETF** |
| 802.11 | **IEEE** |
| RFC 793 | **IETF** |
| Serie G | **ITU-T** |
| 802.1Q | **IEEE** |
| RFC 2460 | **IETF** |
| 802.1D | **IEEE** |

**Parte B:**
1. **RFC** = *Request for Comments*, "petición de comentarios". Se llama así porque nacieron como documentos abiertos a la discusión de la comunidad antes de convertirse en estándar.
2. **RFC 791** (IPv4): publicada en **septiembre de 1981**, editada por **Jon Postel**.
3. **De iure**: aprobado formalmente por un organismo (OSI por ISO). **De facto**: se impone por uso masivo (TCP/IP, o Ethernet antes de su estandarización IEEE).
4. TCP/IP ya estaba **implementado y funcionando** (ARPANET, UNIX BSD gratuito) cuando OSI aún se debatía. OSI resultó **complejo, lento de definir y caro de implementar**, mientras TCP/IP era simple, libre y probado. Ganó la implementación real frente al diseño teórico.

---

### Ejercicio 8

1. Ethernet II → **capa 2 (Enlace)**; IPv4 → **capa 3 (Red)**; TCP → **capa 4 (Transporte)**.
2. Física del emisor: **00:0C:29:AA:BB:CC** (MAC). Lógica: **192.168.1.50** (IP).
3. Puerto **443** → **HTTPS** (web cifrada con TLS).
4. **SYN** solicita el establecimiento de conexión: es el **primer paso del three-way handshake** (SYN → SYN-ACK → ACK). Aún no se han transferido datos.
5. `0x0800` es el **EtherType** que identifica que la carga útil de la trama es un paquete **IPv4**, permitiendo a la capa 2 entregarlo al módulo correcto de capa 3.
6. Al atravesar un router:
   - **Cambian**: las direcciones MAC de origen y destino (se reescriben para el nuevo enlace) y el **TTL** (se decrementa en 1); en consecuencia se recalculan el checksum IP y el FCS.
   - **Se mantienen**: las **direcciones IP** de origen y destino y los **puertos** TCP — son extremo a extremo. (Salvo que haya NAT, que sí modificaría IP y puerto de origen.)

---

### Ejercicio 9

**Parte A:**

| Servicio | Puerto | Protocolo |
|----------|--------|-----------|
| HTTP | 80 | TCP |
| HTTPS | 443 | TCP |
| FTP (control) | 21 | TCP |
| SSH | 22 | TCP |
| Telnet | 23 | TCP |
| SMTP | 25 | TCP |
| DNS | 53 | UDP (y TCP en transferencias de zona) |
| DHCP (servidor) | 67 | UDP |

**Parte B:**
1. Por el **puerto de destino** del segmento: el sistema mantiene una tabla que asocia cada puerto abierto con el proceso correspondiente. Eso es la **demultiplexación**.
2. Puertos **efímeros o dinámicos: 49152 - 65535** (en la práctica, muchos sistemas usan desde 32768).
3. Un **socket** es el punto final de una comunicación. Lo forman 4 elementos: **IP origen, puerto origen, IP destino y puerto destino** (a lo que se suma el protocolo de transporte).

---

### Ejercicio 10

**1. Independencia entre capas**
Cada capa ofrece un servicio a la superior y se apoya en la inferior mediante interfaces bien definidas, sin conocer su implementación interna. Al pasar de Wi-Fi a Ethernet solo cambian las capas 1 y 2; el navegador (capa 7), TCP (capa 4) e IP (capa 3) siguen funcionando **sin modificar una sola línea de código**. Esto permite desarrollar, sustituir y depurar cada nivel por separado.

**2. Modelo híbrido de 5 capas**
Porque combina lo mejor de ambos: mantiene la **separación clara entre Enlace y Física** del modelo OSI, que es imprescindible para entender switches, cableado y colisiones, pero **fusiona las capas 5, 6 y 7** en una sola Aplicación, tal como ocurre realmente en la pila TCP/IP. Es fiel a la realidad sin perder capacidad explicativa.

**3. Sobrecarga en VoIP**
- Total transmitido = 20 + 12 + 8 + 20 + 18 = **78 bytes**.
  Eficiencia = 20 / 78 = **25,6 %** (casi el 75 % son cabeceras).
- Se acepta porque la voz exige **latencia muy baja**: paquetes pequeños y frecuentes (uno cada 20 ms) reducen el retardo de paquetización. Agrupar más audio por paquete mejoraría la eficiencia pero degradaría la conversación.
- Técnica de reducción: **cRTP (compressed RTP)**, que comprime las cabeceras RTP/UDP/IP de 40 a 2-4 bytes en enlaces WAN lentos.

---

## Criterios de Evaluación

| Ejercicio | Peso | Competencias |
|-----------|------|--------------|
| 1-2 | 20% | Memorización y ubicación de capas |
| 3 | 10% | Correspondencia entre modelos |
| 4-5 | 20% | Encapsulación y cálculo |
| 6 | 15% | Diagnóstico por capas |
| 7 | 10% | Normalización |
| 8 | 15% | Análisis de tramas reales |
| 9 | 5% | Puertos y multiplexación |
| 10 | 5% | Razonamiento crítico |

**Nota mínima para aprobar**: 5/10

---

**Tiempo estimado**: 3-4 horas
**Fecha de entrega**: Final de Semana 3
