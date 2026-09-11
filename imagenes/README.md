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

Estado a 10 de septiembre de 2026: **15 insertadas, 3 por regenerar**.

Las tres rechazadas se revisaron a ojo y tienen errores que un alumno
aprendería mal. **No se suben al repositorio** hasta tener la versión buena:

| Archivo | Fallo |
|---|---|
| `m01_s01_d02_cadena_comunicacion.png` | Los papeles (fuente, transmisor…) solo aparecen en la fila de la respuesta, y hay texto superpuesto en «Navegador» |
| `m01_s02_d02_directo_vs_cruzado.png` | TX y RX asignados a los cuatro pines; en el cruzado las líneas convergen en un punto en vez de cruzar dos pares |
| `m01_s02_d02_cancelacion_ruido.png` | La tercera viñeta copia un conector RJ-45 con TX/RX que no pinta nada; las ondas +1 y −1 no están en espejo |

Dos de las insertadas tienen defectos **cosméticos** que no cambian lo que
enseñan, y se pueden regenerar cuando convenga:

- `m01_s02_d02_recorrido_cableado.png`: la etiqueta «PC» sale dos veces.
- `m01_s02_d04_armario_42u.png`: la regla lateral tiene números desordenados.

Doce de las dieciocho llegaron como **JPEG con extensión `.png`**. Se
convirtieron a PNG real: JPEG emborrona justo las líneas finas y el texto.

Se quedan en ASCII, conforme a la regla: los desgloses de la MAC en OUI y bits
U/L e I/G, la resta que cancela el ruido en cifras, el cálculo de la MTU, la
búsqueda binaria del tamaño máximo, la lista de interfaces de `ipconfig`, el
conteo de dominios y las listas de pasos.
