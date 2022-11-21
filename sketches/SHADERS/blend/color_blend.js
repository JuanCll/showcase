let shaderb;
let uMaterial1;
let uMaterial2;
let brightness;

function preload() {
  shaderb = readShader('/showcase/sketches/SHADERS/blend/color_blend.frag',
  { matrices: Tree.pmvMatrix, varyings: Tree.NONE });
  
}

function setup() {
  createCanvas(300, 300, WEBGL);
  noStroke();
  
  
  colorPicker1 = createColorPicker('blue');
  colorPicker1.position(0, 0);
  colorPicker2 = createColorPicker('yellow');
  colorPicker2.position(250, 0);

  slider = createSlider(0, 1, 0.5, 0.01);
  slider.position(10, 270);
  slider.style('width', '80px');
  
}

function draw() {
 
  translate(-150,-150);

  push();
  
  uMaterial1 = colorPicker1.color()
  fill(uMaterial1);

  beginShape();
  
  vertex(30, 40);
  vertex(130, 40);
  vertex(130, 140);
  vertex(30, 140);
  endShape();
  
  uMaterial2 = colorPicker2.color()
  fill(uMaterial2);
  beginShape();
  
  vertex(270, 40);
  vertex(170, 40);
  vertex(170, 140);
  vertex(270, 140);
  endShape();
  pop();

  push();
  shader(shaderb);
  
  beginShape();
  
  shaderb.setUniform('uMaterial1', uMaterial1.levels);
  shaderb.setUniform('uMaterial2', uMaterial2.levels);
  shaderb.setUniform('brightness', slider.value());
  
  vertex(200, 260);
  vertex(100, 260);
  vertex(100, 160);
  vertex(200, 160);
  endShape();
  pop();


}