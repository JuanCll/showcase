# **Workshop #1: Masking**

## **Introducción**
El _visual masking_ o enmascaramiento se puede entender como un paradigma, herramienta o fenómeno de percepción visual, el cual es utilizado para la cambiar la apariencia de una imagen mediante una máscara. Para el siguiente informe, teniendo como objetivo el entendimiento y profundización de este concepto como una base de la computación visual, se experimentó con los distintos componentes dados y se propusieron algoritmos que los implementen de forma eficiente.


## **Marco teórico**
### Image Kernels
{{< hint info >}}
En procesamiento de imágenes un kernel, matriz de convolución o _mask_ es una matriz utilizada para realizar ciertos cambio en una imagen. Esto, se consigue haciendo una convolución entre la imagen y el kernel.\
Una convolución es un proceso matemático, en el cual cada elemento de la imagen se suma con sus vecinos y se opera con la matriz.  -[Articulo de Wikipedia](https://en.wikipedia.org/wiki/Kernel_%28image_processing%29#Convolution)\
La convolución puede ser aplicada a dos funciones cualesquiera de tiempo o espacio (u otras variables) para arrojar una tercera función: la salida de la convolución. -[Energy Glossary](https://glossary.slb.com/es/terms/c/convolution#:~:text=Una%20operación%20matemática%20con%20dos,la%20salida%20de%20la%20convolución.)\
{{< /hint >}}

{{< p5-iframe sketch="/showcase/sketches/kernel_images.js" width="530" height="355" >}}


### Lightness
{{< hint info >}}
La luminosidad, también llamada claridad, es una propiedad de los colores. Ella da una indicación sobre el aspecto luminoso del color estudiado: cuanto más oscuro es el color, la luminosidad es más débil.
Sin embargo, se le puede dar más de una definición, una de las más simples, por ejemplo, es el promedio aritmético entre sus tres componentes en el modelo RGB.
-[Articulo de Wikipedia](https://en.wikipedia.org/wiki/HSL_and_HSV#Lightness)
{{< /hint >}}

{{< hint warning >}}
Para aumentar el brillo utilice la tecla "+", para disminuirlo utilice la tecla "-"
{{< /hint >}}

{{< p5-iframe sketch="/showcase/sketches/lightness.js" width="570" height="335" >}}

### Image Histogram
{{< hint info >}}
Un histograma de imagen es un tipo de histograma que actúa como una representación gráfica de la distribución tonal de una imagen digital.
El eje horizontal representa las variaciones tonales, mientras que el eje vertical representa el número total de pixeles en un tono en particular.
En la parte izquierda del eje horizontal se encuentran las áreas más oscuras y en la parte derecha las más luminosas.
Estos histogramas tienen diferentes aplicaciones en edición y procesamiento de imágenes.
-[Articulo de Wikipedia](https://en.wikipedia.org/wiki/Image_histogram)
{{< /hint >}}

{{< p5-iframe sketch="/showcase/sketches/histograms.js" width="390" height="475" >}}

## **Método**
### Image Kernels
Para el desarrollo de esta parte del taller, se usaron 5 funciones:
- Para cargar la imagen seleccionada a procesar:
{{< details title="preload()" open=false >}}
    function preload() {
        img = loadImage('Images/images11.jpg');
    }
{{< /details >}}

- Para inicializar el canvas y los elementos del programa
{{< details title="setup()" open=false >}}
    function setup() {

        //Creation of the selection dropdown, to choose the kernel
        sel = createSelect();
        //sel.position(10, 10);
        sel.option('Identity');
        sel.option('Ridge detection');
        sel.option('Sharpen');
        sel.option('Blur');
        sel.option('Convolution');
        sel.option('Unsharp masking');
        
        //Creation of canvas and a new empty image 
        createCanvas(400, 200);
        pixelDensity(1);
        newimg = createImage(img.width, img.width);

    }
{{< /details >}}

- Para crear y recorrer la imagen:
{{< details title="draw()" open=false >}}
    function draw() {
        //Gray empty canvas
        background(225);
        image(img, 0, 0);
        
        //Load original and new empy image
        newimg.loadPixels();
        img.loadPixels();
        
        if (sel.value() !== 'Identity') {
            //Establish the values of the wanted matrix
            matrix = selection(sel.value())[0];
            
            //Establish the size of the kernel
            let sizem = selection(sel.value())[1];
            
            //Loop through the image matrix
            for (var x = 0; x < newimg.width; x++) {
                for (var y = 0; y < newimg.height; y++) {
                    
                    //Get the colors resulting from the convolution
                    let c = convolution(img, x, y, matrix, sizem);
                    
                    //Get the index from the matrix with pixelDensity = 1
                    var index =  (y * newimg.width + x) * 4;
                    
                    //Set the new colors to the corresponding pixels
                    newimg.pixels[index] = c[0];
                    newimg.pixels[index + 1] = c[1];
                    newimg.pixels[index + 2] = c[2];
                    newimg.pixels[index + 3] = 255;

                }
            }
            //Update de image
            newimg.updatePixels();
            
            //Create a new image in the right half of the canvas
            image(newimg, width/2, 0);
            
        } else { //If the option is identity there's no need to loop the image
            image(img, width/2, 0);
        }
        
    }
{{< /details >}}
{{< hint info >}}
Vale la pena resaltar la fórmula para hallar el índice del pixel que se está evaluando:

`index = (x + img.width * y)*4`

Esto, debido a que la matriz es la ventana de visualización x4, lo que implica que los primeros 4 índices, corresponderán a los valores R, G, B, A del píxel (0,0) (Esto asumiendo que la densidad del pixel será de 1), avanzando por pixel de 4 en 4.
{{< /hint >}}
- Para realizar la convolución:
{{< details title="convolution(img, x, y, matrix, sizem)" open=false >}}
    function convolution(img, x, y, matrix, sizem) {
        //Funcion that multiplies the current values with the kernel chosen
        
        //Declare de variables
        let r = 0.0;
        let g = 0.0;
        let b = 0.0;
        
        //Loop through the kernel
        for (var i = -1; i < sizem - 1; i++) {
            for (var j = -1; j < sizem - 1; j++) {

                let px = x + i;
                let py = y + j;
                
                //Calculate the index
                let index = (px + img.width * py)*4;
                
                //Make sure the index stays inside the range
                index = constrain(index, 0, img.pixels.length - 1);
                
                //Multiply the corresponding pixels with the kernel
                r += img.pixels[index] * matrix[i+1][j+1];
                g += img.pixels[index + 1] * matrix[i+1][j+1];
                b += img.pixels[index + 2] * matrix[i+1][j+1];
            
            }
        }
        return [r,g,b];
    }
{{< /details >}}

- Para seleccionar un kernel:
{{< details title="selection(value)" open=false >}}
    function selection(value) {
        //Function that returns the chosen kernel and its size
        
        switch (value) {
            case 'Ridge detection':
                matrix = [ [ -1, -1, -1 ],
                            [ -1,  8, -1 ],
                            [ -1, -1, -1 ] ]; 
                sizem = 3;
                break;
            case 'Sharpen':
                matrix = [  [ 0, -1, 0 ],
                            [ -1,  5, -1 ],
                            [ 0, -1, 0 ] ];
                sizem = 3;
                break;
            case 'Blur':
                matrix = [  [ 1/9, 1/9, 1/9 ],
                            [ 1/9,  1/9, 1/9 ],
                            [ 1/9, 1/9, 1/9 ] ]; 
                sizem = 3;
                break;
            case 'Convolution':
                matrix = [  [ -1, -1, -1 ],
                            [ -1,  9, -1 ],
                            [ -1, -1, -1 ] ];
                sizem = 3;
                break;
            case 'Unsharp masking':
                matrix = [  [ -1/256, -4/256, -6/256, -4/256, -1/256 ],
                            [ -4/256, -16/256, -24/256, -16/256, -4/256 ],
                            [ -6/256, -24/256, 476/256, -24/256, -6/256], 
                            [ -4/256, -16/256, -24/256, -16/256, -4/256 ],
                            [ -1/256, -4/256, -6/256, -4/256, -1/256 ]]; 
                sizem = 5;
                break;
            default:
                matrix = [  [ -1, -1, -1 ],
                            [ -1,  9, -1 ],
                            [ -1, -1, -1 ] ];
                sizem = 3;
                break;
        }
        return [matrix, sizem]
    }
{{< /details >}}

### Lightness and Image Histogram
A partir del desarrollo de la [sección anterior](#image-kernels-1), se pudo lograr el segundo y tercer ítem. Se cambiaron y agregaron los siguientes componentes:
- Para crear y establecer el histograma de la imagen:
{{< details title="draw()" open=false >}}
    function draw() { 
        var rango = 256;
        image(img, 0, 0);
        var histogram = new Array(rango);
        for (i = 0; i <= rango; i++) {
            histogram[i] = 0;
        }

        loadPixels();
        
        for (var x = 0; x < img.width; x+=5) {
            for (var y = 0; y < img.height; y+=5) {
                var indice = (x + y * img.width) * 4;
                var a = pixels[indice];
                var a2 = pixels[indice + 1];
                var a3 = pixels[indice + 2];
                var a4 = pixels[indice + 3];
                b = int(a3);
                histogram[b]++;
            }
        }
        image(img, 0, 0);
        stroke(250,20,200);
        push();
        translate(10,0)
        for (x = 0; x <= rango; x++) {
            index = histogram[x];

            y1=int(map(index, 0, max(histogram), height, height-200));
            y2 = height;
            xPos = map(x,0,rango,0, width-20);
            line(xPos, y1, xPos, y2);
        }
        pop();
    }
{{< /details >}}
- Para cambiar el brillo de la imagen:
{{< details title="brillo(masomenos)" open=false >}}
    function brillo(masomenos){
        img.loadPixels();
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
{{< /details >}}

- Configurar el las teclas _+_ y _-_ para ajustar el brillo:
{{< details title="keyPressed()" open=false >}}
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
{{< /details >}}

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
Se discutió principalmente del uso del _visual masking_ hoy en día, como una herramienta en la edición de fotografías y videos de formato digital y todo en base a cálculos matemáticos, visto en [Image Kernels](#image-kernels), y del uso que también se le puede dar para el análisis de la composición de las imágenes al aplicar una marcara y usar en conjunto oras herramientas como el [Image Histogram] (#image-histogram).

## **Conclusiones**
