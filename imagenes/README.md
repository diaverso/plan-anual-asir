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

Doce diagramas pedidos el 17 de septiembre de 2026. **Ocho insertados y cuatro por regenerar**, que no se
suben al repositorio hasta tener la versión buena:

- **1** `parametros_senal`: dibuja dos ondas desplazadas en lugar de una, y la flecha de fase no mide
  la distancia entre picos equivalentes.
- **6** `manchester`: el sexto bit, un 1, está dibujado como una bajada; la flecha de debajo sí dice 1.
- **7** `gigabit_4pares`: dibuja señales de dos niveles con el rótulo «2 bits por cambio», que es
  justo lo que dos niveles no pueden llevar.
- **12** `relacion_senal_ruido`: los ejes llevan el texto «Amplitude», en inglés.

Defectos menores en dos de las insertadas: en `modulador` la secuencia de bits tiene una muesca y no casa
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
