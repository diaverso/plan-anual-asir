# MES 1: FUNDAMENTOS DE REDES
## Planificación y Administración de Redes - ASIR

---

## SEMANA 1: Introducción a las Redes

### 1.1 Conceptos Fundamentales

#### ¿Qué es una Red de Computadoras?
Una **red de computadoras** es un conjunto de dispositivos interconectados que pueden comunicarse entre sí para compartir recursos, información y servicios.

**Ventajas de las redes:**
- **Compartición de recursos**: Impresoras, archivos, conexión a Internet
- **Comunicación**: Email, mensajería instantánea, videoconferencias
- **Fiabilidad**: Redundancia de datos y servicios
- **Escalabilidad**: Fácil crecimiento según necesidades
- **Ahorro de costes**: Recursos compartidos reducen inversión

#### Historia de las Telecomunicaciones

**Evolución cronológica:**

| Año | Hito | Impacto |
|-----|------|---------|
| 1837 | Telégrafo (Samuel Morse) | Primera comunicación eléctrica a distancia |
| 1876 | Teléfono (Alexander Graham Bell) | Comunicación de voz en tiempo real |
| 1969 | ARPANET | Primera red de conmutación de paquetes (origen de Internet) |
| 1973 | Ethernet (Robert Metcalfe) | Tecnología LAN dominante |
| 1983 | TCP/IP estándar en ARPANET | Nacimiento de Internet moderno |
| 1989 | World Wide Web (Tim Berners-Lee) | Interfaz gráfica para Internet |
| 1997 | IEEE 802.11 (Wi-Fi) | Redes inalámbricas accesibles |
| 2000s | Banda ancha masiva | ADSL, cable, fibra óptica |
| 2010s | 4G/5G y Cloud Computing | Movilidad y servicios en la nube |

#### Componentes de un Sistema de Comunicación

Todo sistema de comunicación tiene 5 elementos básicos:

```
[FUENTE] → [TRANSMISOR] → [MEDIO] → [RECEPTOR] → [DESTINO]
```

1. **Fuente**: Genera la información (ordenador, teléfono, sensor)
2. **Transmisor**: Codifica y adapta la señal para su transmisión (tarjeta de red)
3. **Medio de transmisión**: Canal por donde viaja la señal (cable, aire)
4. **Receptor**: Recibe y decodifica la señal (tarjeta de red destino)
5. **Destino**: Consume la información (ordenador, servidor)

#### Modos de Transmisión

**Según la dirección:**

| Modo | Descripción | Ejemplo |
|------|-------------|---------|
| **Simplex** | Unidireccional (solo A → B) | Radio AM/FM, TV |
| **Half-duplex** | Bidireccional alternada (A ↔ B, no simultáneo) | Walkie-talkie |
| **Full-duplex** | Bidireccional simultánea (A ↔ B al mismo tiempo) | Teléfono, Ethernet |

---

### 1.2 Tipos de Señales

#### Señales Analógicas vs Digitales

**Señal Analógica:**
- Varía continuamente en el tiempo
- Infinitos valores posibles
- Ejemplo: Voz humana, ondas de radio

**Señal Digital:**
- Valores discretos (0 y 1)
- Resistente al ruido
- Fácil procesamiento por computadoras

```
Analógica:     ∿∿∿∿∿∿∿∿
Digital:       ‾|_|‾‾|_|‾
```

---

## SEMANA 2: Componentes y Tipos de Redes

### 2.1 Clasificación de Redes por Extensión Geográfica

#### PAN (Personal Area Network)
- **Alcance**: 1-10 metros
- **Uso**: Dispositivos personales
- **Tecnologías**: Bluetooth, NFC, USB
- **Ejemplos**:
  - Sincronización smartphone-smartwatch
  - Auriculares Bluetooth
  - Teclado/ratón inalámbrico

#### LAN (Local Area Network)
- **Alcance**: 10-1000 metros (edificio, campus)
- **Velocidad**: 100 Mbps - 100 Gbps
- **Tecnologías**: Ethernet (802.3), Wi-Fi (802.11)
- **Características**:
  - Propiedad privada
  - Alta velocidad
  - Baja latencia
- **Ejemplos**:
  - Red de una empresa
  - Red de un hogar
  - Red de un instituto

#### MAN (Metropolitan Area Network)
- **Alcance**: 10-50 km (ciudad)
- **Velocidad**: 10 Mbps - 10 Gbps
- **Tecnologías**: Fibra óptica, WiMAX
- **Ejemplos**:
  - Red de transporte público de una ciudad
  - Interconexión de campus universitarios
  - Red de televisión por cable

#### WAN (Wide Area Network)
- **Alcance**: 50 km - mundial
- **Velocidad**: Variable (64 Kbps - 100 Gbps)
- **Tecnologías**: Fibra, satélite, MPLS, Frame Relay
- **Ejemplos**:
  - Internet
  - Red corporativa multinacional
  - Red bancaria nacional

**Comparativa visual:**

```
PAN:  [Persona] ← Bluetooth → [Dispositivos]
       ↑________ 10 m ________↑

LAN:  [Edificio completo]
       ↑______ 1000 m ______↑

MAN:  [Ciudad entera]
       ↑______ 50 km ______↑

WAN:  [Países/Continentes]
       ↑______ ∞ km ______↑
```

---

### 2.2 Clasificación por Propietario

#### Redes Públicas
- Accesibles por cualquier usuario
- Propiedad de operadores/gobiernos
- Ejemplos: Internet, red telefónica

#### Redes Privadas
- Acceso restringido a organización
- Propiedad de empresa/institución
- Mayor seguridad y control

#### VPN (Virtual Private Network)
- Red privada sobre infraestructura pública
- Cifrado de datos (túnel)
- Combina ventajas de ambas

---

### 2.3 Topologías de Red

La **topología** es la disposición física o lógica de los dispositivos en la red.

#### Topología de Bus

```
PC1 ----+---- PC2 ----+---- PC3 ----+---- PC4
        |              |              |
    [Cable coaxial central (bus)]
```

**Características:**
- Cable único (backbone)
- Terminadores en los extremos
- Acceso CSMA/CD (Carrier Sense Multiple Access / Collision Detection)

**Ventajas:**
- Bajo coste
- Fácil instalación
- Menos cable que otras topologías

**Desventajas:**
- Si falla el cable central, cae toda la red
- Difícil localización de fallos
- Colisiones frecuentes

#### Topología de Anillo

```
    PC1
     ↓
PC4 → ● → PC2
     ↑
    PC3
```

**Características:**
- Cada dispositivo conectado a dos vecinos
- Datos circulan en una dirección (token)
- Protocolo Token Ring (IEEE 802.5)

**Ventajas:**
- Sin colisiones (token garantiza acceso)
- Rendimiento predecible

**Desventajas:**
- Si falla un nodo, cae la red (solución: doble anillo)
- Reconfiguración compleja

#### Topología de Estrella

```
        PC1
         |
PC4 --- [SWITCH] --- PC2
         |
        PC3
```

**Características:**
- Todos los dispositivos conectados a un nodo central (switch/hub)
- Comunicación a través del centro
- **Topología más común en LAN modernas**

**Ventajas:**
- Fácil detección de fallos
- Fallo de un nodo no afecta a otros
- Fácil escalabilidad

**Desventajas:**
- Punto único de fallo (switch central)
- Más cable que bus
- Coste del dispositivo central

#### Topología de Malla

```
PC1 -------- PC2
 |  \      /  |
 |    \  /    |
 |     X      |
 |   /  \     |
 | /      \   |
PC3 ------- PC4
```

**Malla Completa**: Cada nodo conectado a todos los demás
**Malla Parcial**: Algunos nodos con conexiones redundantes

**Ventajas:**
- Máxima fiabilidad (múltiples caminos)
- Sin punto único de fallo
- Alta velocidad (caminos directos)

**Desventajas:**
- Coste muy elevado
- Cableado complejo
- Difícil administración

**Número de enlaces en malla completa:**
```
N dispositivos = N × (N-1) / 2 enlaces

Ejemplo: 5 dispositivos = 5 × 4 / 2 = 10 enlaces
```

#### Topología de Árbol

```
         [Router]
            |
    ---------------
    |             |
 [Switch1]    [Switch2]
    |             |
  -----         -----
  |   |         |   |
 PC1 PC2       PC3 PC4
```

**Características:**
- Estructura jerárquica
- Raíz → Ramas → Hojas
- Común en redes empresariales

**Ventajas:**
- Escalable
- Gestión por niveles
- Fácil mantenimiento

**Desventajas:**
- Fallo en nodo superior afecta a toda la rama
- Más cable que estrella simple

#### Topología Híbrida

Combinación de dos o más topologías básicas.

**Ejemplo: Estrella-Bus**
```
[Switch1] ---BUS--- [Switch2] ---BUS--- [Switch3]
    |                   |                   |
  PCs                 PCs                 PCs
```

---

## SEMANA 3: Arquitecturas y Modelos de Red

### 3.1 Modelo de Referencia OSI

El **modelo OSI (Open Systems Interconnection)** fue desarrollado por la ISO en 1984 como estándar internacional para la comunicación de sistemas heterogéneos.

#### Las 7 Capas del Modelo OSI

| Capa | Nombre | Función | PDU | Dispositivos |
|------|--------|---------|-----|--------------|
| 7 | **Aplicación** | Interfaz con aplicaciones | Datos | Gateway |
| 6 | **Presentación** | Formato, cifrado, compresión | Datos | Gateway |
| 5 | **Sesión** | Control de diálogos | Datos | Gateway |
| 4 | **Transporte** | Entrega extremo a extremo, segmentación | Segmento | Gateway |
| 3 | **Red** | Direccionamiento lógico, enrutamiento | Paquete | Router |
| 2 | **Enlace** | Direccionamiento físico, tramas | Trama | Switch, Bridge |
| 1 | **Física** | Transmisión de bits, señales | Bits | Hub, Repetidor |

**Mnemotecnia**: "**A**ll **P**eople **S**eem **T**o **N**eed **D**ata **P**rocessing"

#### Descripción por Capas

**CAPA 7 - APLICACIÓN**
- Servicios de red para aplicaciones
- Protocolos: HTTP, FTP, SMTP, DNS, DHCP
- Ejemplos: Navegador web, cliente de correo

**CAPA 6 - PRESENTACIÓN**
- Traducción de formatos de datos
- Cifrado/descifrado (SSL/TLS)
- Compresión de datos
- Codificación de caracteres (ASCII, Unicode)

**CAPA 5 - SESIÓN**
- Establecimiento, gestión y terminación de sesiones
- Sincronización (checkpoints)
- Control de diálogo (half-duplex/full-duplex)
- Ejemplos: NetBIOS, RPC

**CAPA 4 - TRANSPORTE**
- Transporte fiable o no fiable
- Segmentación y reensamblado
- Control de flujo
- Protocolos: TCP (fiable), UDP (no fiable)
- Multiplexación por puertos (0-65535)

**CAPA 3 - RED**
- Direccionamiento lógico (IP)
- Enrutamiento de paquetes
- Fragmentación
- Protocolos: IPv4, IPv6, ICMP, OSPF, RIP

**CAPA 2 - ENLACE**
- Direccionamiento físico (MAC)
- Detección de errores (CRC)
- Control de acceso al medio (MAC)
- Sublayers: LLC y MAC
- Protocolos: Ethernet (802.3), Wi-Fi (802.11), PPP

**CAPA 1 - FÍSICA**
- Transmisión de bits por el medio
- Especificaciones eléctricas, mecánicas
- Medios: Cable UTP, fibra, radio
- Dispositivos: Hubs, repetidores

---

### 3.2 Modelo TCP/IP (DoD)

El **modelo TCP/IP** (o modelo DoD - Department of Defense) es el modelo práctico usado en Internet.

#### Las 4 Capas del Modelo TCP/IP

| Capa TCP/IP | Equivalencia OSI | Protocolos Principales |
|-------------|------------------|------------------------|
| **Aplicación** | Aplicación + Presentación + Sesión | HTTP, FTP, SMTP, DNS, DHCP, Telnet, SSH |
| **Transporte** | Transporte | TCP, UDP |
| **Internet** | Red | IP, ICMP, ARP, IGMP |
| **Acceso a Red** | Enlace + Física | Ethernet, Wi-Fi, PPP |

**Comparación OSI vs TCP/IP:**

```
    OSI                     TCP/IP

7. Aplicación    ┐
6. Presentación  ├─────→ Aplicación
5. Sesión        ┘

4. Transporte    ─────→  Transporte

3. Red           ─────→  Internet

2. Enlace        ┐
1. Física        └─────→ Acceso a Red
```

---

### 3.3 Encapsulación de Datos

Proceso de agregar encabezados en cada capa al enviar datos:

```
EMISOR:
─────────────────────────────────────────
Datos de aplicación                      │ Capa 7-5
─────────────────────────────────────────┘
[H4|Datos]  ← Segmento                   │ Capa 4
─────────────────────────────────────────┘
[H3|Segmento] ← Paquete                  │ Capa 3
─────────────────────────────────────────┘
[H2|Paquete|T2] ← Trama                  │ Capa 2
─────────────────────────────────────────┘
10110101010... ← Bits                    │ Capa 1
```

**Desencapsulación** en el receptor: proceso inverso, quitando encabezados.

---

### 3.4 Organismos de Normalización

#### ISO (International Organization for Standardization)
- Estándares internacionales en múltiples industrias
- Modelo OSI

#### IEEE (Institute of Electrical and Electronics Engineers)
- Estándares para redes LAN/MAN
- Series 802:
  - **802.3**: Ethernet
  - **802.11**: Wi-Fi
  - **802.1Q**: VLAN
  - **802.1D**: STP

#### IETF (Internet Engineering Task Force)
- Estándares de Internet
- RFC (Request for Comments):
  - RFC 791: IPv4
  - RFC 2460: IPv6
  - RFC 793: TCP

#### ITU-T (International Telecommunication Union)
- Estándares de telecomunicaciones
- Series V (módems), G (sistemas de transmisión)

#### ANSI (American National Standards Institute)
- Estándares estadounidenses
- Cables, conectores

---

## SEMANA 4: Dispositivos de Red

### 4.1 Dispositivos de Capa 1 (Física)

#### Repetidor
- Regenera y amplifica señales
- No interpreta datos
- Extiende alcance de la red
- **Obsoleto** (reemplazado por switches)

#### Hub (Concentrador)
- Multipuerto repetidor
- Transmite a **todos los puertos** (broadcast)
- **Half-duplex** (un dispositivo transmite a la vez)
- Genera **colisiones**
- Comparte ancho de banda
- **Obsoleto** (reemplazado por switches)

**Ejemplo:**
```
PC1 envía a PC2:
Hub recibe → Retransmite a PC2, PC3, PC4 (todos)
```

---

### 4.2 Dispositivos de Capa 2 (Enlace)

#### Bridge (Puente)
- Segmenta dominios de colisión
- Aprende direcciones MAC
- Filtra tráfico entre segmentos
- Pocas interfaces (2-4)

#### Switch (Conmutador)
- **Dispositivo principal en LAN modernas**
- Aprende direcciones MAC → Tabla CAM
- Envía solo al puerto destino (**unicast**)
- **Full-duplex** (transmisión simultánea)
- Segmenta dominios de colisión (uno por puerto)
- No segmenta dominios de broadcast

**Funcionamiento:**

```
Tabla CAM (Content Addressable Memory):
─────────────────────────────
Puerto | Dirección MAC
─────────────────────────────
  1    | AA:BB:CC:DD:EE:01
  2    | AA:BB:CC:DD:EE:02
  3    | AA:BB:CC:DD:EE:03
─────────────────────────────

PC1 (puerto 1) envía a PC2 (puerto 2):
Switch consulta tabla → Envía SOLO al puerto 2
```

**Aprendizaje de direcciones:**
1. Switch arranca con tabla vacía
2. Recibe trama en puerto X con MAC origen Y
3. Guarda: Puerto X ↔ MAC Y
4. Si MAC destino desconocida → **flooding** (envía a todos menos origen)
5. Cuando responde destino, aprende su MAC

---

### 4.3 Dispositivos de Capa 3 (Red)

#### Router (Enrutador)
- **Interconecta redes diferentes**
- Toma decisiones de enrutamiento
- Usa direcciones IP (capa 3)
- Segmenta dominios de broadcast
- Tabla de enrutamiento
- Protocolos: RIP, OSPF, EIGRP, BGP

**Diferencias Switch vs Router:**

| Característica | Switch | Router |
|----------------|--------|--------|
| **Capa OSI** | 2 (Enlace) | 3 (Red) |
| **Dirección** | MAC | IP |
| **Dominio broadcast** | NO segmenta | SÍ segmenta |
| **Velocidad** | Muy rápida | Más lenta |
| **Uso** | Dentro de LAN | Entre redes |

---

### 4.4 Otros Dispositivos

#### Access Point (Punto de Acceso)
- Conecta dispositivos inalámbricos a red cableada
- Bridge inalámbrico
- Protocolo: IEEE 802.11 (Wi-Fi)

#### Firewall (Cortafuegos)
- Seguridad perimetral
- Filtra tráfico según reglas
- Puede ser hardware o software
- Opera en capas 3-7

#### Gateway (Pasarela)
- Traduce entre protocolos diferentes
- Opera en capa 7
- Ejemplo: Gateway de VoIP (SIP ↔ PSTN)

---

## Resumen del Mes 1

### Conceptos Clave Aprendidos

**Semana 1:**
- Historia de las telecomunicaciones
- Componentes de un sistema de comunicación
- Modos de transmisión (simplex, half-duplex, full-duplex)

**Semana 2:**
- Tipos de redes por extensión: PAN, LAN, MAN, WAN
- Tipos por propietario: Públicas, Privadas, VPN
- Topologías: Bus, Anillo, Estrella, Malla, Árbol, Híbrida

**Semana 3:**
- Modelo OSI (7 capas)
- Modelo TCP/IP (4 capas)
- Encapsulación de datos
- Organismos de normalización (ISO, IEEE, IETF)

**Semana 4:**
- Dispositivos de capa 1: Hub, Repetidor
- Dispositivos de capa 2: Switch, Bridge
- Dispositivos de capa 3: Router
- Otros: Access Point, Firewall

---

## Glosario

- **ARPANET**: Advanced Research Projects Agency Network, precursor de Internet
- **Bandwidth**: Ancho de banda, capacidad de transmisión
- **Broadcast**: Envío a todos los dispositivos de la red
- **CAM**: Content Addressable Memory, tabla de direcciones MAC en switches
- **Collision**: Colisión, dos dispositivos transmitiendo simultáneamente
- **Flooding**: Inundación, envío a todos los puertos desconociendo destino
- **Gateway**: Pasarela entre redes o protocolos
- **Half-duplex**: Comunicación bidireccional no simultánea
- **Full-duplex**: Comunicación bidireccional simultánea
- **ISO**: International Organization for Standardization
- **LAN**: Local Area Network
- **MAN**: Metropolitan Area Network
- **OSI**: Open Systems Interconnection
- **PAN**: Personal Area Network
- **PDU**: Protocol Data Unit (unidad de datos de protocolo)
- **RFC**: Request for Comments, documentos de estándares IETF
- **Simplex**: Comunicación unidireccional
- **Switch**: Conmutador, dispositivo de capa 2
- **Unicast**: Envío a un único destinatario
- **VPN**: Virtual Private Network
- **WAN**: Wide Area Network

---

## Recursos Adicionales

### Lecturas Recomendadas
- Tanenbaum, A. (2021). *Computer Networks* (6th ed.)
- Kurose, J., Ross, K. (2020). *Computer Networking: A Top-Down Approach* (8th ed.)

### Videos Educativos
- [Crash Course Computer Science - Redes](https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo)
- [NetworkChuck - Networking Basics](https://www.youtube.com/c/NetworkChuck)

### Herramientas
- **Packet Tracer**: Descarga desde Cisco NetAcad
- **Draw.io**: Para crear diagramas de topologías

### Práctica
- Crea 5 topologías diferentes en Packet Tracer
- Dibuja el modelo OSI de memoria
- Identifica dispositivos de tu red doméstica

---

**¡Fin del Mes 1!**
**Próximo mes**: Capa Física y Medios de Transmisión
