let shaderAL;
let Slider1,Slider2;
let ColorPicker1;
let Figures;
let r;

function preload() {
  shaderAL = readShader("showcase/sketches/SHADERS/Lighting/AL.frag", {
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

  shader(shaderAL);
  shaderAL.setUniform("ambient", Slider1.value());
  shaderAL.setUniform("lightColor", [1, 1, 1, 1]);
}

function draw() {
  orbitControl();
  background("WHITE");
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
