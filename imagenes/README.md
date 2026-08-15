# Imágenes del curso

Diagramas que no se pueden representar bien en ASCII: señales, ondas, curvas,
recorridos físicos y cualquier cosa con matices visuales.

## Cómo se generan

Claude no dibuja estas imágenes: **escribe el prompt** y tú lo llevas a una
herramienta generativa (Gemini, ChatGPT u otra). Después guardas el archivo
aquí con el nombre indicado.

El procedimiento completo está en la sección **8.5 de `CLAUDE.md`**.

## Nombres

`mes_semana_dia_concepto.png`, en minúsculas y sin tildes. Por ejemplo:

```text
dia_03_analogica_digital.png
```

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
