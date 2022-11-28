# **Lighting**

Gracias a la [iluminación en la computación grafica](https://en.wikipedia.org/wiki/Computer_graphics_lighting) se puede llegar a dar más detalle a los materiales, imágenes y figuras recreadas en un programa.

Existen dos principales modelos de iluminación, _Object oriented lighting_ (iluminación directa) y _Global illumination_ (iluminación indirecta), el primero se define como el usar una iluminación para un solo objeto, mientras en la segunda da luz a toda la _escena_.

![Imagen columnas](https://imgur.com/YHWZPJt.png)

{{<hint info>}}
**Exercise Colored Ambient light**

Implement a scene having the following lighting equation: $\mathbf{a} = ambient \, ambient4a=ambientambient4$, where _ambient4ambient4_ is the ambient light color.
{{</hint>}}


{{< p5-iframe sketch="/showcase/sketches/SHADERS/Lighting/AL.js" width="430" height="430" >}}

{{< details title="ambient.js" open=false >}}
{{< highlight js >}}

let shaderAL;
let Slider1,Slider2;
let ColorPicker1,ColorPicker2;
let Figures;
let r;

function preload() {
  shaderAL = readShader("/showcase/sketches/SHADERS/Lighting/AL.frag", {
    varyings: Tree.NONE,
  });
}

function setup() {
  createCanvas(400, 400, WEBGL);
  noLights();
  colorMode(RGB, 1);
  Figures = [];
  for (let i = 0; i < 100; i++) {
    Figures.push({
      position: createVector(
        (random() * 2 - 1) * 85,
        (random() * 2 - 1) * 85,
        (random() * 2 - 1) * 85
      ),
      size: random() * 20 + 8,
      color: color(random(), random(), random()),
    });
  }

  Slider2 = createSlider(1, Figures.length, int(Figures.length / 2), 1);
  Slider2.position(10, 35);
  Slider1 = createSlider(0, 1, 1, 0.05);
  Slider1.position(10,55);
  Slider1.input(() => {
    shaderAL.setUniform("ambient", Slider1.value());
  });

  ColorPicker1 = createColorPicker("#FFFFFF");
  ColorPicker1.position(350,35);
  ColorPicker1.input(() => {
 
    shaderAL.setUniform("lightColor", [
      red(ColorPicker1.color()) / 255,
      green(ColorPicker1.color()) / 255,
      blue(ColorPicker1.color()) / 255,
      1,
    ]);
  });

  ColorPicker2 = createColorPicker("#FFFFFF");
  ColorPicker2.position(350,65);

  shader(shaderAL);
  shaderAL.setUniform("ambient", Slider1.value());
  shaderAL.setUniform("lightColor", [1, 1, 1, 1]);
}

function draw() {
  orbitControl();
  background(ColorPicker2.color());
  resetShader();
  push();
  stroke("BLACK");
  axes();
  grid();
  pop();
  shader(shaderAL);
  for (let i = 0; i < Slider2.value(); i++) {
    push();
    noStroke();
    fill(Figures[i].color);
    translate(Figures[i].position);
    r = Figures[i].size / 2;
    i % 3 === 0
      ? box(r * 2)
      : i % 3 === 1
      ? sphere(r)
      : torus(r, r / 4);
    pop();
  }
}

{{< /highlight >}}
{{< /details >}}

{{< details title="ambient.frag" open=false >}}
{{< highlight js >}}

precision mediump float;

// emitted by p5 color-group commands
// https://p5js.org/reference/#group-Color
uniform vec4 uMaterialColor;
uniform vec4 lightColor;
uniform float ambient;

void main() {
  vec4 ambient4 = lightColor * ambient;
  gl_FragColor = ambient * ambient4 * uMaterialColor;
}

{{< /highlight >}}
{{< /details >}}


**Conclusión**

- La iluminación es un complemento muy poderoso al momento de crear un escenario gráfico y, dependiendo de la forma de su implementación, se pueden generar diferentes efectos, como una luz tenue puede crear un ambiente terrorífico, mientras que una iluminación potente en el mismo escenario podría dar la impresión de una temática diferente.

{{<hint warning>}}
### **Referencias**
- https://en.wikipedia.org/wiki/Computer_graphics_lighting#Object_oriented_lighting
- https://colinbarrebrisebois.com/2015/11/06/finding-next-gen-part-i-the-need-for-robust-and-fast-global-illumination-in-games/
- https://visualcomputing.github.io/docs/shaders/lighting/
{{</hint>}}

