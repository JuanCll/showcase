# **Ejercicios: Texturing**

## **UV Visualization**
{{<hint info>}}
**Exercise**

Redefine the shape texture coordinates to turn the above image upside down.
{{</hint>}}


{{< p5-iframe sketch="/showcase/sketches/SHADERS/UV_v/UV_visualization.js" width="325" height="325" >}}

{{<hint info>}}
**Exercise**

Include the blue channel in the uv visualization (e.g., use blue with red or green channels).
{{</hint>}}
{{< p5-iframe sketch="/showcase/sketches/SHADERS/UV_v/UV_3D.js" width="335" height="345" >}}

## **Texture Sampling**
HSL( hue, saturation, lightness) y HSV ( hue, saturation, value o HSB con brightness) son formas alternativas de representar el modelo de color RGB.

- Hue (Tono): Es el color mismo, definido físicamente por una longitud de onda.
- Saturation (Saturación): Es qué tan puro o intenso es ese matiz. Entre menos intenso fuera este tono, el resultado sería que el color percibido tendería al gris.
- Lightness (Luminosidad): Es la intensidad lumínica. Una gran intensidad es muy brillante y la percibimos como blanco y, si no hay intensidad o luz, se vuelve negro.
- Value (Valor): Representa la altura en el eje blanco-negro. Los valores posibles van del 0 al 100%. 0 siempre es negro.
- Luma: es el promedio ponderado de los valores RGB, basado en su contribución a la luminosidad percibida. Este se ha utilizado frecuentemente en la televisión.
- Component average: es el promedio de los valores RGB.

{{< details title="texture sampling js" open=false >}}
{{< highlight js >}}

let lumaShader;
let img;
let img2;
let grey_scale;
let hsv_scale;
let brightnessO;
let opcionS;
let modo_tinte;
let fotoS;
const brightnessD  = {'None': 0, 'Luma':1, 'HSV':2, 'HSL':3, 'Average':4};
const opcionesS  = {'None': 0, 'blend':1, 'add':2,'darkest':3,'lightest':4, 'difference':5, 'burn':6};

function preload() {
  lumaShader = readShader('/showcase/sketches/SHADERS/brightness_tinting/luma.frag',{varyings: Tree.texcoords2 });
  
  img = loadImage('/showcase/sketches/perro_foto.jpg');
  img2 = loadImage('/showcase/sketches/pirotecniaA.jpg');
  
}

function setup() {
  createCanvas(700, 500, WEBGL);
  noStroke();
  textureMode(NORMAL);
  shader(lumaShader);

  brightnessO = createSelect();
  brightnessO.position(15, 15);
  brightnessO.style('width', '90px');
  brightnessO.option('None'); 
  brightnessO.option('Luma'); 
  brightnessO.option('HSV');
  brightnessO.option('HSL');
  brightnessO.option('Average');

  fotoS = createSelect();
  fotoS.position(15, 45);
  fotoS.style('width', '90px');
  fotoS.option('perro'); 
  fotoS.option('pirotecnia'); 
  
  colorPicker1 = createColorPicker('blue');
  colorPicker1.position(15,70);
  

  tinte = createCheckbox('Tint', false);
  tinte.style('color', 'white');
  tinte.position(15,105);

  modo = createSelect();
  modo.position(15, 135);
  modo.style('width', '90px');
  modo.option('None'); 
  modo.option('blend'); 
  modo.option('add');
  modo.option('darkest');
  modo.option('ligthtest');
  modo.option('difference');
  modo.option('burn');

  //modo.changed(modo_tinte_S);

  //lumaShader.setUniform('texture', img);
}

function draw() {
  background(255);
  color1=colorPicker1.color()
  if(fotoS.value()=='perro'){
    lumaShader.setUniform('texture', img);
  }
  else if(fotoS.value()=='pirotecnia'){
    lumaShader.setUniform('texture', img2);
  }
  
  lumaShader.setUniform('brightnessO', brightnessD[brightnessO.value()]);
  lumaShader.setUniform('color_tinte', color1.levels);
  lumaShader.setUniform('tinte_a', tinte.checked());
  lumaShader.setUniform('opcionS', opcionesS[modo.value()]);
  
  quad(-width / 2, -height / 2, width / 2, -height / 2,
        width / 2, height / 2, -width / 2, height / 2);
  
}

{{< /highlight >}}
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/SHADERS/brightness_tinting/brightness_tinting.js" width="725" height="525" >}}

**Conclusiones**

- El uso de diferentes herramientas de brillo y el tintado se pueden utilizar al tiempo para realizar diferentes cambios a una imagen.
- Utilizar, ademas de los anteriores, los distintos modos de mezcla de color permite que las imágenes generen o trasmitan diferentes sensaciones.

{{<hint warning>}}
### **Referencias**
- https://visualcomputing.github.io/docs/shaders/texturing/
- https://github.com/jamieowen/glsl-blend
{{</hint>}}
