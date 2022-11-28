# **Ejercicios: Photomosaic*

## **ASCII art**

**Marco teórico**

- Un [fotomosaico](https://fotomosaico.com/diseno-fotomosaico/) es una foto compuesta de una colección de imágenes más pequeñas, las cuales son ordenadas de tal manera en que presenten una imagen más grande.
- El [Arte ASCII](https://es.wikipedia.org/wiki/Arte_ASCII) es un medio artítico donde se utilizan los caracteres que componen al código [ASCII](https://elcodigoascii.com.ar/) para la construcción de imágenes. Este ha sido utilizado cuando no es posible la transmisión de imágenes en dispositivos computarizados que no cuentan con los recursos necesarios, como lo son tarjetas de proceso gráfico.  

{{<hint info>}}
**Exercise**

Implement a mosaic (or/and ascii art) visual application.
{{</hint>}}


{{< p5-iframe sketch="/showcase/sketches/SHADERS/Photomosaic/basic_photomosaic.js" width="325" height="325" >}}

{{< details title="photomosaic.js" open=false >}}
{{< highlight js >}}


const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';
let image;

function preload() {
  image = loadImage("./ahh.jpg");
}

function setup() {
  createCanvas(400, 400); 
}

function draw() {
  background(0);
  
  let w = width / image.width;
  
  let h = height / image.height;
  image.loadPixels();
  for (let i = 0; i < image.width; i++) {
    for (let j = 0; j < image.height; j++) {
      const pixelIndex = (i + j * image.width) * 4;
      const r = image.pixels[pixelIndex + 0];
      const g = image.pixels[pixelIndex + 1];
      const b = image.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      
      noStroke();
      fill(255);
      
      const len = density.length;
      const charIndex = floor(map(avg,0,255,len,0));
      
      textSize(w);
      textAlign(CENTER, CENTER);
      text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);
      
      
    }
  }
  
  
}
{{< /highlight >}}
{{< /details >}}


**Conclusiones**

- Existen múltiples maneras de transmitir información en forma de imágenes, a pesar de no contar con los medios visuales usualmente utilizados para este fin.
- 

{{<hint warning>}}
### **Referencias**
- https://visualcomputing.github.io/docs/shaders/texturing/
- https://github.com/jamieowen/glsl-blend
{{</hint>}}
