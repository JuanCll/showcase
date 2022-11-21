let colorShader;
let cmy;
let v1, v2, v3;

function preload() {

  colorShader = readShader('/showcase/sketches/SHADERS/blend/CMYt.frag',
                          { matrices: Tree.NONE, varyings: Tree.color4 });
}

function setup() {
  createCanvas(300, 300, WEBGL);
  shader(colorShader);
  randomizeTriangle();
}

function draw() {
  background(0);

  beginShape(TRIANGLES);
  fill('red');
  vertex(v1.x, v1.y);
  fill('green');
  vertex(v2.x, v2.y);
  fill('blue');
  vertex(v3.x, v3.y);
  endShape();
}


function randomizeTriangle() {
  v1 = p5.Vector.random2D();
  v2 = p5.Vector.random2D();
  v3 = p5.Vector.random2D();
}

function keyPressed() {
  if (key == 'c') {
    cmy = !cmy;

    colorShader.setUniform('cmy', cmy);
  }
  if (key == 'r') {
    randomizeTriangle();
  }
}