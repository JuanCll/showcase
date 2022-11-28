# **Ejercicios: Photomosaic*

## **ASCII art**

**Marco teórico**

- Un [fotomosaico](https://fotomosaico.com/diseno-fotomosaico/) es una foto compuesta de una colección de imágenes más pequeñas, las cuales son ordenadas de tal manera en que presenten una imagen más grande.
- El [Arte ASCII](https://es.wikipedia.org/wiki/Arte_ASCII) es un medio artítico donde se utilizan los caracteres que componen al código [ASCII](https://elcodigoascii.com.ar/) para la construcción de imágenes. Este ha sido utilizado cuando no es posible la transmisión de imágenes en dispositivos computarizados que no cuentan con los recursos necesarios, como lo son tarjetas de proceso gráfico.  

{{<hint info>}}
**Exercise**

Implement a mosaic (or/and ascii art) visual application.
{{</hint>}}


{{< p5-iframe sketch="/showcase/sketches/SHADERS/Photomosaic/basic_photomosaic.js" width="425" height="435" >}}

{{< details title="photomosaic.js" open=false >}}
{{< highlight js >}}

const density = 'ABCDEFGHIJKLMNOPQRSTUV@+-=_.   ';
let imagen;

function preload() {
  imagen = loadImage("/showcase/sketches/image.jpg");
}

function setup() {
  createCanvas(400, 400); 
  //ascii = createCheckbox('ascii', false);
}

function draw() {
  //background(0);
  
  let w = width / imagen.width;
  
  let h = height / imagen.height;
  imagen.loadPixels();
  //image(imagen, 0, 0, imagen.width * 9, imagen.height * 9);
  image(imagen,0,0);

  for (let i = 0; i < imagen.width; i++) {
    for (let j = 0; j < imagen.height; j++) {
      const pixelIndex = (i + j * imagen.width) * 4;
      const r = imagen.pixels[pixelIndex + 0];
      const g = imagen.pixels[pixelIndex + 1];
      const b = imagen.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      
      noStroke();
      fill(255);
      
      const len = density.length;
      const charIndex = floor(map(avg,0,255,len,0));
      
      textSize(w);
      textAlign(CENTER, CENTER);
      fill(r,g,b);
      text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);

    }
  }
}

{{< /highlight >}}
{{< /details >}}


**Conclusiones**

- Existen múltiples maneras de transmitir información en forma de imágenes, a pesar de no contar con los medios visuales usualmente utilizados para este fin.
- El arte ASCII se puede utilizar para mostrar imágenes añadiéndoles diferentes efectos según la intención, y para ocultar o censurar algunos detalles de la imagen.

{{<hint warning>}}
### **Referencias**
- https://visualcomputing.github.io/docs/shaders/texturing/
- https://github.com/jamieowen/glsl-blend
{{</hint>}}
