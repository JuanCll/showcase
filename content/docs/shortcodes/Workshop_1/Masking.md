## Image Kernels
{{< hint info >}}
En procesamiento de imágenes un kernel, matriz de convolución o mask es una matriz utilizada para realizar ciertos cambio en una imágen. Esto se consigue haciendo una convolucion entre la imagen y el kernel.
Una convolución es un proceso matemático en el cual cada elemento de la imágen se suma con sus vecinos y se opera con la matriz.  -[Articulo de Wikipedia](https://en.wikipedia.org/wiki/Kernel_%28image_processing%29#Convolution)
La convolución puede ser aplicada a dos funciones cualesquiera de tiempo o espacio (u otras variables) para arrojar una tercera función, la salida de la convolución. -[Energy Glossary](https://glossary.slb.com/es/terms/c/convolution#:~:text=Una%20operación%20matemática%20con%20dos,la%20salida%20de%20la%20convolución.)
{{< /hint >}}


{{< p5-iframe sketch="/showcase/sketches/kernel_images.js" width="530" height="355" >}}


## Lightness
{{< hint info >}}
La luminosidad, también llamada claridad, es una propiedad de los colores. Ella da una indicación sobre el aspecto luminoso del color estudiado: cuanto más oscuro es el color, la luminosidad es más débil.
Sin embargo la se le puede dar más de una definición, una de las más simples por ejemplo el promedio aritmético entre sus tres componentes en el modelo RGB.
-[Articulo de Wikipedia](https://en.wikipedia.org/wiki/HSL_and_HSV#Lightness)
{{< /hint >}}

{{< hint warning >}}
Para aumentar el brillo utilice la tecla "+", para disminuirlo utilice la tecla "-"
{{< /hint >}}

{{< p5-iframe sketch="/showcase/sketches/lightness.js" width="570" height="335" >}}

## Image Histogram
{{< hint info >}}
Un histograma de imágen es un tipo de histograma que actua como una representación gráfica de la distribución tonal de una imágen digital.
El eje horizontal representa las variaciones tonales, mientras que el eje vertical representa el número total de pixeles en un tono en particular.
En la parte izquierda del eje horizontal se encuentran las áreas mas oscuras y en la parte derecha las más luminosas.
Estos histogramas tienen diferentes aplicaciones en edición  y procesamiento de imágenes.
-[Articulo de Wikipedia](https://en.wikipedia.org/wiki/Image_histogram)
{{< /hint >}}

{{< p5-iframe sketch="/showcase/sketches/histograms.js" width="390" height="475" >}}


### Aplicación con todos los casos anteriores juntos
{{< p5-iframe sketch="/showcase/sketches/todo_kernel.js" width="530" height="465" >}}