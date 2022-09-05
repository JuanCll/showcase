# **Workshop #1: Masking**

## **Introducción**

## **Marco teórico**
### Image Kernels
{{< hint info >}}
En procesamiento de imágenes un kernel, matriz de convolución o mask es una matriz utilizada para realizar ciertos cambio en una imágen. Esto se consigue haciendo una convolucion entre la imagen y el kernel.
Una convolución es un proceso matemático en el cual cada elemento de la imágen se suma con sus vecinos y se opera con la matriz.  -[Articulo de Wikipedia](https://en.wikipedia.org/wiki/Kernel_%28image_processing%29#Convolution)
La convolución puede ser aplicada a dos funciones cualesquiera de tiempo o espacio (u otras variables) para arrojar una tercera función, la salida de la convolución. -[Energy Glossary](https://glossary.slb.com/es/terms/c/convolution#:~:text=Una%20operación%20matemática%20con%20dos,la%20salida%20de%20la%20convolución.)
{{< /hint >}}


{{< p5-iframe sketch="/showcase/sketches/kernel_images.js" width="530" height="355" >}}


### Lightness
{{< hint info >}}
La luminosidad, también llamada claridad, es una propiedad de los colores. Ella da una indicación sobre el aspecto luminoso del color estudiado: cuanto más oscuro es el color, la luminosidad es más débil.
Sin embargo la se le puede dar más de una definición, una de las más simples por ejemplo el promedio aritmético entre sus tres componentes en el modelo RGB.
-[Articulo de Wikipedia](https://en.wikipedia.org/wiki/HSL_and_HSV#Lightness)
{{< /hint >}}

{{< hint warning >}}
Para aumentar el brillo utilice la tecla "+", para disminuirlo utilice la tecla "-"
{{< /hint >}}

{{< p5-iframe sketch="/showcase/sketches/lightness.js" width="570" height="335" >}}

### Image Histogram
{{< hint info >}}
Un histograma de imágen es un tipo de histograma que actua como una representación gráfica de la distribución tonal de una imágen digital.
El eje horizontal representa las variaciones tonales, mientras que el eje vertical representa el número total de pixeles en un tono en particular.
En la parte izquierda del eje horizontal se encuentran las áreas mas oscuras y en la parte derecha las más luminosas.
Estos histogramas tienen diferentes aplicaciones en edición  y procesamiento de imágenes.
-[Articulo de Wikipedia](https://en.wikipedia.org/wiki/Image_histogram)
{{< /hint >}}

{{< p5-iframe sketch="/showcase/sketches/histograms.js" width="390" height="475" >}}

## **Método**


## **Resultados**
### Aplicación con todos los casos anteriores juntos

{{< details title="p5-kernel image processing" open=false >}}
{{< highlight js >}}
let img;
let newimg;
let d;
let sel;
function preload() {
  img = loadImage('/showcase/sketches/perro_foto_dim.jpg');
}
function setup() {
  //Creacion del menu para seleccionar kernel
  sel = createSelect();
  sel.option('Identity');
  sel.option('Ridge detection');
  sel.option('Sharpen');
  sel.option('Blur');
  sel.option('Convolution');
  sel.option('Unsharp masking');
  createCanvas(500, 410);
  pixelDensity(1);
  newimg = createImage(img.width, img.width); 
}
function draw() {
  background(225);
  image(img, 0, 0);
  let sizem = 3;
  newimg.loadPixels();
  img.loadPixels();
  /*xm = mouseX;
  ym = mouseY;
  */
  if (sel.value() !== 'Identity') {  
    matrix = selection(sel.value());
    for (var x = 0; x < newimg.width; x++) {
      for (var y = 0; y < newimg.height; y++) {
        let c = convolution(img, x, y, matrix, sizem);
        var index =  (y * newimg.width + x) * 4;

        newimg.pixels[index] = c[0];
        newimg.pixels[index + 1] = c[1];
        newimg.pixels[index + 2] = c[2];
        newimg.pixels[index + 3] = 255;
      }
    }
    newimg.updatePixels();
    image(newimg, width/2, 0);
  } else {
    image(img, width/2, 0); 
  }
  var rango = 256
  image(newimg, 0, 0);
  var histogram = new Array(rango);
  for (i = 0; i <= rango; i++) {
    histogram[i] = 0
  }
  loadPixels();
  for (var x1 = 0; x1 < newimg.width; x1+=5) {
    for (var y1 = 0; y1 < newimg.height; y1+=5) {
      var indice = (x1 + y1 * newimg.width) * 4;
      var a = pixels[indice];
      var a2 = pixels[indice + 1];
      var a3 = pixels[indice + 2];
      var a4 = pixels[indice + 3];
      b = int(a3);
      histogram[b]++
    }
  }
  image(img, 0, 0);
  stroke(250,20,200)
  push()
  translate(10,0)
  for (x1 = 0; x1 <= rango; x1++) {
    index2 = histogram[x1];
    y2=int(map(index2, 0, max(histogram), height, height-200));
		y3 = height
    xPos = map(x1,0,rango,0, width-20)
    line(xPos, y2, xPos, y3);
  }
  pop()
}
function convolution(img, x, y, matrix, sizem) {
  let r = 0.0;
  let g = 0.0;
  let b = 0.0;
  for (var i = -1; i < sizem - 1; i++) {
    for (var j = -1; j < sizem - 1; j++) {
      let px = x + i;
      let py = y + j;   
      let index = (px + img.width * py)*4; 
      index = constrain(index, 0, img.pixels.length - 1);
      r += img.pixels[index] * matrix[i+1][j+1];
      g += img.pixels[index + 1] * matrix[i+1][j+1];
      b += img.pixels[index + 2] * matrix[i+1][j+1];          
    }
  }
  return [r,g,b];
}
function selection(value) {
  switch (value) {
    case 'Ridge detection':
      matrix = [ [ -1, -1, -1 ],
                 [ -1,  8, -1 ],
                 [ -1, -1, -1 ] ]; 
      break;
    case 'Sharpen':
      matrix = [ [ 0, -1, 0 ],
                 [ -1,  5, -1 ],
                 [ 0, -1, 0 ] ]; 
      break;
    case 'Blur':
      matrix = [ [ 1/9, 1/9, 1/9 ],
                 [ 1/9,  1/9, 1/9 ],
                 [ 1/9, 1/9, 1/9 ] ]; 
      break;
    case 'Convolution':
      matrix = [ [ -1, -1, -1 ],
                 [ -1,  9, -1 ],
                 [ -1, -1, -1 ] ];    
      break;
    case 'Unsharp masking':
      matrix = [ [ -1/256, -4/256, -6/256, -4/256, -1/256 ],
                 [ -4/256, -16/256, -24/256, -16/256, -4/256 ],
                 [ -6/256, -24/256, 476/256, -24/256, -6/256], 
                 [ -4/256, -16/256, -24/256, -16/256, -4/256 ],
                 [ -1/256, -4/256, -6/256, -4/256, -1/256 ]]; 
      sizem = 5;    
      break;
    default:
      matrix = [ [ -1, -1, -1 ],
                 [ -1,  9, -1 ],
                 [ -1, -1, -1 ] ]; 
      break;
  }
  return matrix
}
function brillo(masomenos){
  newimg.loadPixels();
  for (var x = 0; x < img.width; x++) {
    for (var y = 0; y < img.height; y++) {
      var index =  (y * img.width + x) * 4;
      if(masomenos){
        img.pixels[index] = constrain(img.pixels[index]*1.1,0,255);
        img.pixels[index+1] = constrain(img.pixels[index+1]*1.1,0,255);
        img.pixels[index+2] = constrain(img.pixels[index+2]*1.1,0,255);
      }
      else{
        img.pixels[index] = constrain(img.pixels[index]/1.1,0,255);
        img.pixels[index+1] = constrain(img.pixels[index+1]/1.1,0,255);
        img.pixels[index+2] = constrain(img.pixels[index+2]/1.1,0,255);
      }
    }
  }
  img.updatePixels();
  image(img, width/2, 0);
}
function keyPressed() {
  switch (key) {
    case "+":
      brillo(true); 
      break;
    case "-":
      brillo(false);
      break;
  }
}
{{< /highlight >}}
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/todo_kernel.js" width="530" height="465" >}}


## **Discusión**

## **Conclusiones**
