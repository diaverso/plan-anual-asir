# MES 5: DIRECCIONAMIENTO IP AVANZADO
## VLSM, CIDR, FLSM, Classful vs Classless

---

## SEMANA 17: VLSM (Variable Length Subnet Mask)

### 17.1 Introducción a VLSM

#### ¿Qué es VLSM?

**VLSM (Variable Length Subnet Mask)** es una técnica que permite dividir una red en subredes de **diferentes tamaños**, asignando máscaras de longitud variable según las necesidades de cada subred.

**Problema con FLSM (Fixed Length Subnet Mask):**

```
Red 192.168.1.0/24 dividida con FLSM (/26):

Subred 1: 192.168.1.0/26    → 62 hosts útiles
Subred 2: 192.168.1.64/26   → 62 hosts útiles
Subred 3: 192.168.1.128/26  → 62 hosts útiles
Subred 4: 192.168.1.192/26  → 62 hosts útiles

Escenario real:
- Oficina A necesita 50 hosts → /26 OK (desperdicia 12)
- Oficina B necesita 10 hosts → /26 desperdicia 52 hosts
- Enlace WAN necesita 2 hosts → /26 desperdicia 60 hosts

DESPERDICIO TOTAL: 124 direcciones IP
```

**Solución con VLSM:**

```
Red 192.168.1.0/24 dividida con VLSM:

Oficina A (50 hosts): 192.168.1.0/26    → /26 (62 hosts)
Oficina B (10 hosts): 192.168.1.64/28   → /28 (14 hosts)
Enlace WAN (2 hosts): 192.168.1.80/30   → /30 (2 hosts)

DESPERDICIO: Solo 24 direcciones (vs 124 con FLSM)
```

---

### 17.2 Requisitos para VLSM

#### Protocolos que Soportan VLSM

**SOPORTAN VLSM (Classless):**
- RIPv2
- OSPF
- EIGRP
- IS-IS
- BGP

**NO SOPORTAN VLSM (Classful):**
- RIPv1
- IGRP

**¿Por qué?** Los protocolos classless incluyen la máscara de subred en sus actualizaciones de enrutamiento.

---

### 17.3 Metodología VLSM

#### Pasos para Dividir una Red con VLSM

**1. Ordenar requisitos de mayor a menor**

```
Ejemplo: Red 192.168.10.0/24

Requisitos:
- LAN A: 100 hosts
- LAN B: 50 hosts
- LAN C: 25 hosts
- WAN 1: 2 hosts (enlace punto a punto)
- WAN 2: 2 hosts

ORDEN: 100 → 50 → 25 → 2 → 2
```

**2. Calcular la máscara necesaria para cada subred**

| Subred | Hosts requeridos | Hosts útiles (2^n - 2) | Bits host (n) | Máscara | CIDR |
|--------|------------------|------------------------|---------------|---------|------|
| LAN A | 100 | 126 | 7 | 255.255.255.128 | /25 |
| LAN B | 50 | 62 | 6 | 255.255.255.192 | /26 |
| LAN C | 25 | 30 | 5 | 255.255.255.224 | /27 |
| WAN 1 | 2 | 2 | 2 | 255.255.255.252 | /30 |
| WAN 2 | 2 | 2 | 2 | 255.255.255.252 | /30 |

**Fórmula:**
```
Hosts útiles = 2^n - 2
Donde n = número de bits de host
```

**3. Asignar direcciones consecutivamente (sin solapar)**

```
Red base: 192.168.10.0/24

LAN A: 192.168.10.0/25
  - Rango: 192.168.10.0 - 192.168.10.127
  - Red: 192.168.10.0
  - Primera útil: 192.168.10.1
  - Última útil: 192.168.10.126
  - Broadcast: 192.168.10.127
  - Tamaño: 128 direcciones (2^7)

LAN B: 192.168.10.128/26  (empieza donde termina LAN A)
  - Rango: 192.168.10.128 - 192.168.10.191
  - Tamaño: 64 direcciones (2^6)

LAN C: 192.168.10.192/27
  - Rango: 192.168.10.192 - 192.168.10.223
  - Tamaño: 32 direcciones (2^5)

WAN 1: 192.168.10.224/30
  - Rango: 192.168.10.224 - 192.168.10.227
  - Tamaño: 4 direcciones (2^2)

WAN 2: 192.168.10.228/30
  - Rango: 192.168.10.228 - 192.168.10.231
  - Tamaño: 4 direcciones
```

**4. Verificar que no hay solapamiento**

```
Tabla de verificación:

| Subred | Inicio | Fin | Tamaño |
|--------|--------|-----|--------|
| LAN A | .0 | .127 | 128 |
| LAN B | .128 | .191 | 64 |
| LAN C | .192 | .223 | 32 |
| WAN 1 | .224 | .227 | 4 |
| WAN 2 | .228 | .231 | 4 |

Total usado: 232 direcciones
Disponible: 24 direcciones (192.168.10.232 - 192.168.10.255)
```

---

### 17.4 Tabla de Referencia Rápida VLSM

| CIDR | Máscara | Wildcard | Hosts útiles | Tamaño | Uso típico |
|------|---------|----------|--------------|--------|------------|
| /30 | 255.255.255.252 | 0.0.0.3 | 2 | 4 | Enlace WAN punto a punto |
| /29 | 255.255.255.248 | 0.0.0.7 | 6 | 8 | LAN muy pequeña |
| /28 | 255.255.255.240 | 0.0.0.15 | 14 | 16 | LAN pequeña |
| /27 | 255.255.255.224 | 0.0.0.31 | 30 | 32 | LAN mediana |
| /26 | 255.255.255.192 | 0.0.0.63 | 62 | 64 | LAN grande |
| /25 | 255.255.255.128 | 0.0.0.127 | 126 | 128 | LAN muy grande |
| /24 | 255.255.255.0 | 0.0.0.255 | 254 | 256 | Red clase C completa |

**Mnemotecnia para /30:**
```
/30 = 252 = 11111100 (binario)
Hosts útiles: 2 (perfecto para WAN router-router)
Direcciones: Red, Host1, Host2, Broadcast
```

---

### 17.5 Ejercicio Práctico VLSM

#### Problema

Una empresa tiene la red **172.16.0.0/16** y necesita crear las siguientes subredes:

| Departamento | Hosts requeridos |
|--------------|------------------|
| Ventas | 500 |
| IT | 200 |
| Marketing | 100 |
| RRHH | 50 |
| Enlace R1-R2 | 2 |
| Enlace R2-R3 | 2 |

**Tarea:** Diseñar el esquema VLSM completo.

#### Solución

**Paso 1: Ordenar (mayor a menor)**
```
500 → 200 → 100 → 50 → 2 → 2
```

**Paso 2: Calcular máscaras**

| Subred | Hosts req. | 2^n - 2 ≥ req. | n | Máscara CIDR |
|--------|------------|----------------|---|--------------|
| Ventas | 500 | 2^9 - 2 = 510 | 9 | /23 (32-9) |
| IT | 200 | 2^8 - 2 = 254 | 8 | /24 |
| Marketing | 100 | 2^7 - 2 = 126 | 7 | /25 |
| RRHH | 50 | 2^6 - 2 = 62 | 6 | /26 |
| WAN1 | 2 | 2^2 - 2 = 2 | 2 | /30 |
| WAN2 | 2 | 2^2 - 2 = 2 | 2 | /30 |

**Paso 3: Asignar direcciones**

```
Red base: 172.16.0.0/16

1. Ventas: 172.16.0.0/23
   - Rango: 172.16.0.0 - 172.16.1.255
   - Tamaño: 512 direcciones (2^9)
   - Red: 172.16.0.0
   - Primera útil: 172.16.0.1
   - Última útil: 172.16.1.254
   - Broadcast: 172.16.1.255

2. IT: 172.16.2.0/24
   - Rango: 172.16.2.0 - 172.16.2.255
   - Tamaño: 256 direcciones

3. Marketing: 172.16.3.0/25
   - Rango: 172.16.3.0 - 172.16.3.127
   - Tamaño: 128 direcciones

4. RRHH: 172.16.3.128/26
   - Rango: 172.16.3.128 - 172.16.3.191
   - Tamaño: 64 direcciones

5. WAN R1-R2: 172.16.3.192/30
   - Rango: 172.16.3.192 - 172.16.3.195
   - IPs útiles: .193 (R1), .194 (R2)

6. WAN R2-R3: 172.16.3.196/30
   - Rango: 172.16.3.196 - 172.16.3.199
   - IPs útiles: .197 (R2), .198 (R3)
```

**Diagrama de asignación:**

```
172.16.0.0/16 (65536 direcciones)
├── 172.16.0.0/23   [Ventas - 512]
├── 172.16.2.0/24   [IT - 256]
├── 172.16.3.0/25   [Marketing - 128]
├── 172.16.3.128/26 [RRHH - 64]
├── 172.16.3.192/30 [WAN1 - 4]
└── 172.16.3.196/30 [WAN2 - 4]

Total usado: 968 direcciones
Disponible: 64,568 direcciones para crecimiento futuro
```

---

## SEMANA 18: CIDR (Classless Inter-Domain Routing)

### 18.1 ¿Qué es CIDR?

**CIDR (Classless Inter-Domain Routing)** es un método de asignación de direcciones IP que reemplaza el sistema de clases (A, B, C) por notación de **prefijo de red variable**.

#### Notación CIDR

```
Formato: <dirección IP>/<longitud de prefijo>

Ejemplo: 192.168.1.0/24

Donde:
- 192.168.1.0 = Dirección de red
- /24 = Los primeros 24 bits son de red (máscara 255.255.255.0)
```

---

### 18.2 Classful vs Classless

#### Direccionamiento Classful (Antiguo)

```
Clase A: /8  (255.0.0.0)
  - Rango: 1.0.0.0 - 126.255.255.255
  - Hosts por red: 16,777,214
  - Problema: Demasiados hosts, desperdicio masivo

Clase B: /16 (255.255.0.0)
  - Rango: 128.0.0.0 - 191.255.255.255
  - Hosts por red: 65,534
  - Problema: Muchas empresas no necesitan 65k hosts

Clase C: /24 (255.255.255.0)
  - Rango: 192.0.0.0 - 223.255.255.255
  - Hosts por red: 254
  - Problema: Muy pocos hosts para empresas medianas
```

**Limitaciones del sistema Classful:**

1. **Desperdicio de direcciones**
   - Empresa con 300 hosts: Clase B desperdiciaría 65,234 IPs
   - Empresa con 500 hosts: Clase C insuficiente (necesitaría 2)

2. **Agotamiento de IPv4**
   - Solo 256 redes Clase A
   - Solo 16,384 redes Clase B
   - Asignación ineficiente

3. **Tablas de enrutamiento enormes**
   - Cada red Clase C requiere entrada en tabla

#### Direccionamiento Classless (CIDR)

```
Cualquier prefijo: /1 a /32

Ejemplos:
- 10.0.0.0/8        → 16,777,216 hosts
- 172.16.0.0/12     → 1,048,576 hosts
- 192.168.1.0/24    → 256 hosts
- 192.168.1.0/25    → 128 hosts
- 192.168.1.0/30    → 4 hosts (ideal para WAN)
```

**Ventajas de CIDR:**

1. **Eficiencia**: Asignación ajustada a necesidades reales
2. **Agregación de rutas** (supernetting)
3. **Reducción de tablas de enrutamiento**
4. **Retrasa agotamiento de IPv4**

---

### 18.3 Conversión Classful a CIDR

#### Ejercicio

Convierte las siguientes direcciones classful a notación CIDR:

| Dirección Classful | Clase | Máscara | CIDR |
|--------------------|-------|---------|------|
| 10.0.0.0 | A | 255.0.0.0 | **10.0.0.0/8** |
| 150.100.0.0 | B | 255.255.0.0 | **150.100.0.0/16** |
| 192.168.1.0 | C | 255.255.255.0 | **192.168.1.0/24** |

---

### 18.4 Cálculo de Bloques CIDR

#### Fórmula General

```
Número de direcciones = 2^(32 - prefijo)

Ejemplos:
- /24: 2^(32-24) = 2^8 = 256 direcciones
- /23: 2^(32-23) = 2^9 = 512 direcciones
- /30: 2^(32-30) = 2^2 = 4 direcciones
```

#### Tabla de Referencia CIDR

| CIDR | Máscara | Hosts totales | Hosts útiles | Equivalencia Classful |
|------|---------|---------------|--------------|----------------------|
| /8 | 255.0.0.0 | 16,777,216 | 16,777,214 | Clase A |
| /16 | 255.255.0.0 | 65,536 | 65,534 | Clase B |
| /24 | 255.255.255.0 | 256 | 254 | Clase C |
| /25 | 255.255.255.128 | 128 | 126 | 1/2 Clase C |
| /26 | 255.255.255.192 | 64 | 62 | 1/4 Clase C |
| /27 | 255.255.255.224 | 32 | 30 | 1/8 Clase C |
| /28 | 255.255.255.240 | 16 | 14 | 1/16 Clase C |
| /29 | 255.255.255.248 | 8 | 6 | 1/32 Clase C |
| /30 | 255.255.255.252 | 4 | 2 | 1/64 Clase C |

---

### 18.5 Ejercicio CIDR

#### Problema

Un ISP tiene el bloque **200.100.50.0/22** y quiere asignarlo a clientes.

**Pregunta 1:** ¿Cuántas direcciones totales tiene el bloque?

**Solución:**
```
/22 → 32 - 22 = 10 bits de host
2^10 = 1024 direcciones
```

**Pregunta 2:** ¿Cuál es el rango de direcciones?

**Solución:**
```
/22 = 255.255.252.0

Máscara en binario:
11111111.11111111.11111100.00000000

Dirección inicial: 200.100.50.0
Dirección final: 200.100.53.255

Rango completo:
200.100.50.0 - 200.100.53.255
```

**Cálculo rápido:**
```
Tercer octeto: 50 en binario = 00110010
Máscara tercer octeto: 252 = 11111100

Parte de red (6 bits): 001100 = 12
Incremento: 2^2 = 4

Rango: 200.100.[48-51].x

Pero como empezamos en .50:
- Inicio: 200.100.50.0
- Fin: 200.100.50.0 + 1023 = 200.100.53.255
```

**Pregunta 3:** Dividir el bloque en 4 subredes iguales.

**Solución:**
```
Bloque original: /22 (1024 direcciones)
4 subredes = /24 cada una (256 direcciones)

Subredes:
1. 200.100.50.0/24  (200.100.50.0 - 200.100.50.255)
2. 200.100.51.0/24  (200.100.51.0 - 200.100.51.255)
3. 200.100.52.0/24  (200.100.52.0 - 200.100.52.255)
4. 200.100.53.0/24  (200.100.53.0 - 200.100.53.255)
```

---

## SEMANA 19: SUPERNETTING (Agregación de Rutas)

### 19.1 ¿Qué es Supernetting?

**Supernetting** (o **agregación de rutas**) es el proceso inverso al subnetting: **combinar múltiples redes pequeñas en un bloque más grande** para reducir el tamaño de las tablas de enrutamiento.

#### Problema que resuelve

```
Sin Supernetting (tabla de enrutamiento):

192.168.0.0/24   → Router A
192.168.1.0/24   → Router A
192.168.2.0/24   → Router A
192.168.3.0/24   → Router A
...
192.168.255.0/24 → Router A

256 entradas en la tabla de enrutamiento
```

```
Con Supernetting:

192.168.0.0/16   → Router A

1 sola entrada (ahorro de memoria y tiempo de búsqueda)
```

---

### 19.2 Requisitos para Supernetting

1. **Redes contiguas** (direcciones consecutivas)
2. **Mismo destino** (mismo router next-hop)
3. **Número de redes = potencia de 2** (1, 2, 4, 8, 16...)

---

### 19.3 Metodología de Supernetting

#### Paso 1: Convertir a binario

```
Ejemplo: Agregar estas 4 redes:

192.168.0.0/24
192.168.1.0/24
192.168.2.0/24
192.168.3.0/24

En binario (tercer octeto):
192.168.00000000.0/24
192.168.00000001.0/24
192.168.00000010.0/24
192.168.00000011.0/24
```

#### Paso 2: Identificar bits comunes

```
Tercer octeto:
00000000
00000001
00000010
00000011

Bits comunes (de izquierda a derecha): 000000 (6 bits)
Bits variables: 2 bits (00, 01, 10, 11)
```

#### Paso 3: Calcular nueva máscara

```
Máscara original: /24 = 255.255.255.0

Bits fijos en tercer octeto: 6
Nueva máscara tercer octeto: 11111100 = 252

Nueva máscara: 255.255.252.0 = /22
```

#### Paso 4: Red agregada

```
Superred: 192.168.0.0/22

Rango: 192.168.0.0 - 192.168.3.255
Contiene las 4 redes /24
```

---

### 19.4 Fórmula Rápida

```
N redes contiguas /X → 1 red /(X - log2(N))

Ejemplo:
4 redes /24 → /24 - log2(4) = /24 - 2 = /22
8 redes /24 → /24 - log2(8) = /24 - 3 = /21
```

---

### 19.5 Ejercicio Completo de Supernetting

#### Problema

Un ISP tiene asignadas estas 8 redes Clase C contiguas:

```
200.10.16.0/24
200.10.17.0/24
200.10.18.0/24
200.10.19.0/24
200.10.20.0/24
200.10.21.0/24
200.10.22.0/24
200.10.23.0/24
```

**Tarea:** Agregarlas en una sola ruta.

#### Solución

**Paso 1: Verificar contiguidad**
```
16, 17, 18, 19, 20, 21, 22, 23 → CONTIGUAS ✓
```

**Paso 2: Contar redes**
```
8 redes = 2^3
```

**Paso 3: Calcular nueva máscara**
```
/24 - 3 = /21

o manualmente:

Tercer octeto en binario:
16 = 00010000
17 = 00010001
18 = 00010010
19 = 00010011
20 = 00010100
21 = 00010101
22 = 00010110
23 = 00010111

Bits comunes: 00010 (5 bits fijos)
Máscara: 11111111.11111111.11111000.00000000 = /21
```

**Paso 4: Red agregada**
```
Superred: 200.10.16.0/21

Máscara: 255.255.248.0

Rango: 200.10.16.0 - 200.10.23.255

Verificación:
2^(32-21) = 2^11 = 2048 direcciones
8 redes × 256 = 2048 ✓
```

---

## SEMANA 20: COMPARATIVA COMPLETA

### 20.1 Classful vs Classless

| Característica | Classful | Classless (CIDR) |
|----------------|----------|------------------|
| **Máscaras permitidas** | Solo /8, /16, /24 | Cualquier /1 a /32 |
| **Eficiencia** | Baja (mucho desperdicio) | Alta (ajustada) |
| **Protocolos** | RIPv1, IGRP | RIPv2, OSPF, EIGRP, BGP |
| **Máscara en updates** | NO | SÍ |
| **Subnetting** | Limitado | Completo (VLSM) |
| **Supernetting** | NO | SÍ |
| **Agotamiento IPv4** | Rápido | Más lento |

---

### 20.2 FLSM vs VLSM

| Característica | FLSM | VLSM |
|----------------|------|------|
| **Definición** | Todas las subredes mismo tamaño | Subredes de tamaños variables |
| **Desperdicio** | Alto | Bajo |
| **Complejidad** | Simple | Moderada |
| **Flexibilidad** | Baja | Alta |
| **Cálculo** | Fácil | Requiere planificación |
| **Uso típico** | Redes pequeñas homogéneas | Empresas, ISPs |

**Ejemplo visual:**

```
FLSM (192.168.1.0/24 dividida en /26):
┌──────────┬──────────┬──────────┬──────────┐
│ .0/26    │ .64/26   │ .128/26  │ .192/26  │
│ 62 hosts │ 62 hosts │ 62 hosts │ 62 hosts │
└──────────┴──────────┴──────────┴──────────┘
Todas iguales (inflexible)

VLSM (192.168.1.0/24 optimizada):
┌─────────────┬──────┬────┬─┬─┬─────────────┐
│ .0/25       │.128/│.192│ │ │  Reservado  │
│ 126 hosts   │ /27 │/28 │ │ │             │
│             │30 h │14h │ │ │             │
└─────────────┴─────┴────┴─┴─┴─────────────┘
Adaptada a necesidades reales
```

---

### 20.3 Cuándo Usar Cada Técnica

#### FLSM (Fixed Length Subnet Mask)

**Usar cuando:**
- Todas las subredes tienen similar cantidad de hosts
- Simplicidad es prioritaria
- Redes pequeñas y homogéneas

**Ejemplo:**
```
Campus con 8 aulas, cada una con 25 PCs:
10.0.0.0/24 dividida en 8 subredes /27 (FLSM)
```

#### VLSM (Variable Length Subnet Mask)

**Usar cuando:**
- Subredes de tamaños muy diferentes
- Necesitas eficiencia máxima
- Redes empresariales complejas

**Ejemplo:**
```
Empresa con:
- Sede central: 500 hosts
- Sucursales: 50 hosts cada una
- Enlaces WAN: 2 hosts

VLSM permite asignar /23, /26 y /30 respectivamente
```

#### CIDR/Supernetting

**Usar cuando:**
- Eres ISP asignando bloques a clientes
- Quieres agregar rutas en tablas de enrutamiento
- Necesitas resumir múltiples redes

---

### 20.4 Ejercicio Integrador Final

#### Escenario Completo

Una empresa multinacional tiene el bloque **10.0.0.0/8** y necesita:

**Requisitos:**

| Ubicación | Tipo | Hosts |
|-----------|------|-------|
| Sede Madrid | LAN | 2000 |
| Sucursal Barcelona | LAN | 500 |
| Sucursal Valencia | LAN | 250 |
| Oficina Sevilla | LAN | 100 |
| Oficina Bilbao | LAN | 50 |
| Enlace Madrid-Barcelona | WAN | 2 |
| Enlace Madrid-Valencia | WAN | 2 |
| Enlace Madrid-Sevilla | WAN | 2 |
| Enlace Madrid-Bilbao | WAN | 2 |

**Tareas:**

1. Diseñar esquema VLSM completo
2. Asignar direcciones IP a cada subred
3. Crear tabla de enrutamiento agregada en router Madrid

#### Solución

**1. Ordenar y calcular máscaras**

| Subred | Hosts req. | 2^n-2 | n | CIDR |
|--------|------------|-------|---|------|
| Madrid | 2000 | 2046 | 11 | /21 |
| Barcelona | 500 | 510 | 9 | /23 |
| Valencia | 250 | 254 | 8 | /24 |
| Sevilla | 100 | 126 | 7 | /25 |
| Bilbao | 50 | 62 | 6 | /26 |
| WAN M-B | 2 | 2 | 2 | /30 |
| WAN M-V | 2 | 2 | 2 | /30 |
| WAN M-S | 2 | 2 | 2 | /30 |
| WAN M-Bi | 2 | 2 | 2 | /30 |

**2. Asignación de direcciones**

```
Base: 10.0.0.0/8

1. Madrid: 10.0.0.0/21
   Rango: 10.0.0.0 - 10.0.7.255 (2048 direcciones)

2. Barcelona: 10.0.8.0/23
   Rango: 10.0.8.0 - 10.0.9.255 (512 direcciones)

3. Valencia: 10.0.10.0/24
   Rango: 10.0.10.0 - 10.0.10.255 (256 direcciones)

4. Sevilla: 10.0.11.0/25
   Rango: 10.0.11.0 - 10.0.11.127 (128 direcciones)

5. Bilbao: 10.0.11.128/26
   Rango: 10.0.11.128 - 10.0.11.191 (64 direcciones)

6. WAN Madrid-Barcelona: 10.0.11.192/30
   IPs: .193 (Madrid), .194 (Barcelona)

7. WAN Madrid-Valencia: 10.0.11.196/30
   IPs: .197 (Madrid), .198 (Valencia)

8. WAN Madrid-Sevilla: 10.0.11.200/30
   IPs: .201 (Madrid), .202 (Sevilla)

9. WAN Madrid-Bilbao: 10.0.11.204/30
   IPs: .205 (Madrid), .206 (Bilbao)
```

**3. Tabla de enrutamiento en Router Madrid (con agregación)**

```
Destino            Máscara           Next Hop        Interface
───────────────────────────────────────────────────────────────
10.0.0.0/21        255.255.248.0     Conectada       Fa0/0 (LAN Madrid)
10.0.8.0/22        255.255.252.0     —               — (Agregación)
  ├─ 10.0.8.0/23                     .194            S0/0 (Barcelona)
  ├─ 10.0.10.0/24                    .198            S0/1 (Valencia)
  └─ 10.0.11.0/25                    .202            S0/2 (Sevilla)
10.0.11.128/26     255.255.255.192   .206            S0/3 (Bilbao)
0.0.0.0/0          0.0.0.0           ISP             — (Internet)
```

**Agregación:**
```
10.0.8.0/23, 10.0.10.0/24, 10.0.11.0/25
→ Pueden agregarse como 10.0.8.0/22 en anuncios BGP externos
```

---

## Resumen del Mes 5

### Conceptos Clave

**VLSM:**
- Subredes de tamaño variable
- Máxima eficiencia
- Requiere protocolos classless

**CIDR:**
- Notación /prefijo
- Reemplaza sistema de clases
- Permite cualquier máscara

**Supernetting:**
- Agregación de rutas
- Reduce tablas de enrutamiento
- Redes contiguas → 1 bloque

**Classful vs Classless:**
- Classful: /8, /16, /24 (obsoleto)
- Classless: Cualquier máscara (actual)

**FLSM vs VLSM:**
- FLSM: Subredes iguales (simple)
- VLSM: Subredes variables (eficiente)

---

## Glosario

- **CIDR**: Classless Inter-Domain Routing
- **FLSM**: Fixed Length Subnet Mask
- **VLSM**: Variable Length Subnet Mask
- **Agregación**: Combinar rutas en una sola entrada
- **Classful**: Sistema de clases A/B/C
- **Classless**: Sin restricción de clases
- **Prefijo**: Longitud de la parte de red (/X)
- **Supernetting**: Sumarización de rutas
- **Wildcard**: Máscara inversa (0=fijo, 1=variable)

---

**¡Fin del Mes 5!**
**Próximo mes**: Capa de Red y Protocolos (ARP, ICMP, IPv6)
