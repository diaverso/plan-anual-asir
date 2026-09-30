# Imágenes del curso

Diagramas que no se pueden representar bien en ASCII: señales, ondas y curvas,
pero también el **diagrama principal de cada concepto**, las proporciones, los
recorridos por varios elementos y las comparaciones lado a lado. La lista
completa de qué pide imagen está en la sección **8.5 de `CLAUDE.md`**.

## Cómo se generan

Claude no dibuja estas imágenes: **escribe el prompt** y tú lo llevas a una
herramienta generativa (Gemini, ChatGPT u otra). Después guardas el archivo
aquí con el nombre indicado.

El procedimiento completo está en la sección **8.5 de `CLAUDE.md`**.

## Nombres

`mes_semana_dia_concepto.png`, en minúsculas y sin tildes. Por ejemplo:

```text
dia_03_analogica_digital.png
m01_s03_d02_encapsulacion.png
```

Las tres primeras imágenes (Semana 1, Día 3) se nombraron antes de fijar el
prefijo de mes y semana, y se conservan así para no romper los enlaces.

## Antes de guardar: limpiar

Los PNG que devuelven estas herramientas traen ruido de color en el fondo y
pesan varias veces lo que deberían. Antes de darlos por buenos se redondea el
fondo a blanco puro y se agrupan los tonos del antialias.

El diagrama de señales pasó de **829 KB a 91 KB** sin diferencia apreciable.

## Regla importante

La imagen **acompaña** al diagrama ASCII, no lo sustituye. Si la imagen falta,
la página tiene que seguir entendiéndose.

Toda imagen insertada lleva un `alt` que describe **lo que enseña**, no lo que
es. Es lo que leerá quien no pueda verla.

---

## Pendientes

Las Semanas 1 y 2 se escribieron **antes** de ampliar la regla 8.5, cuando la
imagen se reservaba para ondas y señales. Por eso sus diagramas estructurales
—topologías, recorridos, comparaciones— se quedaron en ASCII. Las Semanas 3 y 4
ya nacieron con sus imágenes.

Auditoría del 9 de septiembre de 2026: **40 bloques ASCII con simbología de
diagrama**, de los cuales 18 piden imagen y el resto se queda como está.

Estado a 11 de septiembre de 2026: **las 18 insertadas**.

Tres se rechazaron en la primera tanda por errores que un alumno aprendería
mal, y se regeneraron con el prompt corregido: `cadena_comunicacion` (faltaban
los papeles en la fila de la petición), `directo_vs_cruzado` (TX y RX en los
cuatro pines) y `cancelacion_ruido` (un conector RJ-45 sin sentido y ondas que
no estaban en espejo).

Tres de las insertadas tienen defectos **cosméticos** que no cambian lo que
enseñan, y se pueden regenerar cuando convenga:

- `m01_s02_d02_recorrido_cableado.png`: la etiqueta «PC» sale dos veces.
- `m01_s02_d04_armario_42u.png`: la regla lateral tiene números desordenados.
- `m01_s02_d02_directo_vs_cruzado.png`: el conector derecho repite el número de cada pin.

Doce de las dieciocho llegaron como **JPEG con extensión `.png`**. Se
convirtieron a PNG real: JPEG emborrona justo las líneas finas y el texto.

Se quedan en ASCII, conforme a la regla: los desgloses de la MAC en OUI y bits
U/L e I/G, la resta que cancela el ruido en cifras, el cálculo de la MTU, la
búsqueda binaria del tamaño máximo, la lista de interfaces de `ipconfig`, el
conteo de dominios y las listas de pasos.

---

## Pendientes de la Semana 5 (Mes 2)

Doce diagramas pedidos el 17 de septiembre de 2026. **Los doce están insertados.** Cuatro necesitaron una
segunda versión y dos, una tercera:

- `parametros_senal`: primero dibujó dos ondas desplazadas y midió mal la fase.
- `manchester`: primero dibujó el sexto bit, un 1, como una bajada.
- `gigabit_4pares`: dibujó señales de dos niveles con el rótulo «2 bits por cambio» y, en la segunda
  versión, se inventó texto: «transformento», «runa».
- `relacion_senal_ruido`: llevaba los ejes en inglés y, en la segunda versión, le faltaba un rótulo.

Defectos menores que se conservan: en `modulador` la secuencia de bits tiene una muesca y no casa
exactamente con la señal modulada; en `ask_fsk_psk` los ciclos del 0 en la fila PSK salen algo más juntos.

| # | Archivo de destino | Dónde va |
|--:|---|---|
| 1 | `m02_s05_d01_parametros_senal.png` | D1 · amplitud, periodo y fase |
| 2 | `m02_s05_d01_suma_armonicos.png` | D1 · la onda cuadrada como suma de armónicos |
| 3 | `m02_s05_d01_medio_filtro.png` | D1 · el medio como filtro |
| 4 | `m02_s05_d02_niveles_rangos.png` | D2 · zonas del 1, del 0 y prohibida |
| 5 | `m02_s05_d02_nrz.png` | D2 · la secuencia 01001101 en NRZ |
| 6 | `m02_s05_d02_manchester.png` | D2 · la misma secuencia en Manchester |
| 7 | `m02_s05_d02_gigabit_4pares.png` | D2 · 1000BASE-T: 4 pares × 125 Mbaud × 2 bits |
| 8 | `m02_s05_d03_modulador.png` | D3 · moduladora + portadora → señal modulada |
| 9 | `m02_s05_d03_ask_fsk_psk.png` | D3 · los mismos bits en ASK, FSK y PSK |
| 10 | `m02_s05_d03_constelacion_qam16.png` | D3 · constelación QAM-16 |
| 11 | `m02_s05_d04_atenuacion.png` | D4 · la señal perdiendo amplitud con la distancia |
| 12 | `m02_s05_d04_relacion_senal_ruido.png` | D4 · el mismo ruido sobre una señal débil y una fuerte |

Se quedan en ASCII: la fórmula de Shannon desarrollada, la comparación de los dos límites en cifras
y los desgloses numéricos.

---

## Semana 6 — Medios cableados · completas

Siete imágenes, todas insertadas y optimizadas a la primera: ninguna hubo que rehacerla. En
conjunto pasaron de **7 160 KB a 1 426 KB**, un 80 % menos.

| # | Archivo de destino | Dónde va |
|--:|---|---|
| 1 | `m02_s06_d01_apantallamientos.png` | D1 · cortes de UTP, FTP, STP y S/STP |
| 2 | `m02_s06_d02_destrenzado.png` | D2 · destrenzado correcto frente a excesivo |
| 3 | `m02_s06_d02_par_partido.png` | D2 · par partido: continuidad correcta, cable malo |
| 4 | `m02_s06_d03_coaxial.png` | D3 · las cuatro capas del coaxial |
| 5 | `m02_s06_d03_tipos_fibra.png` | D3 · monomodo, multimodo e índice gradual |
| 6 | `m02_s06_d03_empalme_fibra.png` | D3 · los tres cortes de extremo: plano, oblicuo y pulido |
| 7 | `m02_s06_d04_arbol_decision.png` | D4 · árbol de decisión para elegir medio |

Todas se redujeron a 1 400 px de ancho, salvo el árbol de decisión, que es vertical y se dejó en
1 145 × 1 374. En esta tanda hizo falta una segunda pasada de limpieza, con el umbral de fondo en
236 y escalones de 16, porque con los valores habituales se quedaban en torno a 300 KB.

El Día 1 **reutiliza** `m01_s02_d02_cancelacion_ruido.png`, de la Semana 2 del Mes 1: el mecanismo
del trenzado es el mismo y no hacía falta una imagen nueva.

Se quedan en ASCII: el orden de pines del conector visto a contraluz, el plano de la nave del
laboratorio del Día 4 y los desgloses de decibelios.

### Semana 6 · segunda tanda, completa

Al revisar los bloques ASCII de la semana quedaron seis diagramas que también piden imagen: dos los
detectó el usuario y cuatro salieron de auditar los 22 bloques restantes. Todos correctos a la
primera. **Cuatro llegaron siendo JPEG con extensión `.png`**, como ya pasó en el Mes 1, así que la
limpieza los convirtió a PNG de verdad: esos cuatro *engordan* un poco al convertirse, y aun así
quedan por debajo de 160 KB porque venían a 1 024 px.

| # | Archivo de destino | Dónde va |
|--:|---|---|
| 1 | `m02_s06_d02_conector_punto_debil.png` | D2 · el cable protegido salvo en el conector |
| 2 | `m02_s06_d02_pines_pares.png` | D2 · qué par ocupa cada pin y por qué el 3 va partido |
| 3 | `m02_s06_d02_orientacion_conector.png` | D2 · laboratorio: cómo mirar el conector para ver el pin 1 |
| 4 | `m02_s06_d03_sistema_optico.png` | D3 · fuente, medio y detector |
| 5 | `m02_s06_d04_plano_nave.png` | D4 · laboratorio: el plano de los cuatro tramos |
| 6 | `m02_s06_d05_mapa_semana.png` | D5 · el mapa de la semana |

Se confirma que **se quedan en ASCII**: las salidas de comandos, la ficha impresa del cable, los
desgloses de decibelios, la lista de tramos medidos, los tres factores de la categoría y los
bloques de respaldo de las figuras que ya existen.

---

## Semana 7 — Medios inalámbricos · completa

Siete imágenes, todas correctas a la primera y todas en PNG de verdad, sin el problema de los JPEG
disfrazados de la tanda anterior. En conjunto pasaron de **6 559 KB a 1 079 KB**, un 84 % menos, y
ninguna supera los 212 KB.

| # | Archivo de destino | Dónde va |
|--:|---|---|
| 1 | `m02_s07_d01_espectro.png` | D1 · el espectro por bandas, de la radio a la luz |
| 2 | `m02_s07_d01_propagacion_radio.png` | D1 · onda que sigue la curvatura frente a rebote en la ionosfera |
| 3 | `m02_s07_d02_haz_microondas.png` | D2 · emisión omnidireccional frente a haz de parabólica |
| 4 | `m02_s07_d02_orbitas.png` | D2 · las órbitas GEO, MEO y LEO con sus retardos |
| 5 | `m02_s07_d03_canales_wifi.png` | D3 · los trece canales de 2,4 GHz y su solapamiento |
| 6 | `m02_s07_d04_cuatro_medios.png` | D4 · radio, microondas, infrarrojo y láser comparados |
| 7 | `m02_s07_d05_mapa_semana.png` | D5 · el mapa de la semana |

Se quedan en ASCII: los cálculos de retardo, la fórmula del horizonte, el esquema de los canales por
frecuencia, el plano del edificio del laboratorio y las salidas de comandos.

## Semana 8 — Cableado estructurado (5 imágenes) ✅

| Archivo | Qué enseña | Día |
|---|---|---|
| `m02_s08_d01_subsistemas.png` | Corte de un edificio con los seis subsistemas, el vertical, el horizontal y las acotaciones 90 + 10 | 1 |
| `m02_s08_d02_tirado.png` | Cuatro errores de instalación frente a su versión correcta: curvatura, brida, aplastamiento y ocupación | 2 |
| `m02_s08_d03_tdr.png` | Cómo el TDR convierte el tiempo del eco en distancia a la avería | 3 |
| `m02_s08_d03_next_fext.png` | La misma diafonía medida en los dos extremos: NEXT y FEXT | 3 |
| `m02_s08_d04_etiquetado.png` | El mismo identificador A-1-07 en la roseta, los dos extremos del cable y el puerto del panel | 4 |

Optimización: **4.280 KB → 725 KB (−83 %)**. Además del redondeo de fondo y el agrupado de
tonos, esta tanda se pasó por un **recorte de márgenes blancos** (`apng3.js`), que quita el
lienzo sobrante que dejan estas herramientas: la del etiquetado pasó de 1774 × 887 a
1400 × 394 sin perder nada.

## Auditoría de bloques ASCII (repaso de todo el proyecto)

Revisión de los **101 bloques ASCII** de las teorías publicadas contra la regla de la sección 8.5.
Resultado: **11 pedían imagen y no la tenían**. Ocho ya están; tres se rechazaron y están pedidas
de nuevo.

| Archivo | Qué enseña | Dónde |
|---|---|---|
| `m01_s01_d05_anillo.png` | Topología en anillo: sentido único y qué pasa si un equipo cae | M1 · S1 · D5 |
| `m01_s02_d01_anatomia_mac.png` | Los 48 bits de una MAC partidos en OUI e identificador de tarjeta | M1 · S2 · D1 |
| `m01_s02_d06_metodo_seis_pasos.png` | El método de diseño, de requisitos a riesgos | M1 · S2 · D6 |
| `m01_s02_d07_mapa_semana.png` | Mapa de la Semana 2, de la tarjeta al diseño completo | M1 · S2 · D7 |
| `m02_s07_d02_enlace_satelite.png` | Subida y bajada de un enlace GEO, con los 35.786 km acotados | M2 · S7 · D2 |
| `m02_s07_d03_plan_canales_plantas.png` | Reutilización de 1, 6 y 11 en tres plantas | M2 · S7 · D3 |
| `m02_s08_d01_estrella_jerarquica.png` | Los dos niveles de estrella y el bucle prohibido | M2 · S8 · D1 |
| `m02_s08_d01_enlace_vs_canal.png` | El mismo enlace medido como enlace permanente y como canal | M2 · S8 · D1 |

Optimización de esta tanda: **4.080 KB → 1.247 KB**. Cuatro llegaron en JPEG con extensión `.png`
y al convertirse a PNG real engordan un poco; compensa, porque el texto de un diagrama no debe
guardarse con compresión con pérdida.

### Pendientes de rehacer

| Archivo | Por qué se rechazó |
|---|---|
| `m01_s01_d06_contar_dominios.png` | Dibujaba una elipse de dominio de colisión por cada puerto del **hub**, que es justo lo contrario de lo que enseña la sección |
| `m02_s08_d02_reparto_armario.png` | La escala lateral no cuadra con las bandas y la zona libre ocupa la mitad del armario pese a rotular «20-30 %» |
| `m02_s08_d05_mapa_semana.png` | Comilla angular inventada en «DISEÑAR |

Los tres bloques ASCII correspondientes siguen en su sitio y sus páginas funcionan; el `<figure>`
se reinsertará cuando llegue la imagen corregida.

### Nota sobre el lector de dimensiones

Siete archivos de `imagenes/` son **JPEG con extensión `.png`**. Un lector que asuma PNG y lea el
IHDR en el desplazamiento fijo devuelve basura con ellos. `dims2.py` detecta el formato y busca el
marcador SOF en los JPEG; es el que hay que usar.
