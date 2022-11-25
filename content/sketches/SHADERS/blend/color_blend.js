let shaderb;
let shadera;
let uMaterial1;
let uMaterial2;
let brightness;
const opcionesS  = {'None': 0, 'blend':1, 'add':2,'darkest':3,'lightest':4, 'difference':5, 'burn':6};

function preload() {
  shaderb = readShader('/showcase/sketches/SHADERS/blend/color_blend.frag',
  { matrices: Tree.pmvMatrix, varyings: Tree.NONE });
  shadera = readShader('/showcase/sketches/SHADERS/blend/color_add.frag',
  { matrices: Tree.pmvMatrix, varyings: Tree.NONE });
  shaderd = readShader('/showcase/sketches/SHADERS/blend/color_darkest.frag',
  { matrices: Tree.pmvMatrix, varyings: Tree.NONE });
  shaderl = readShader('/showcase/sketches/SHADERS/blend/color_lightest.frag',
  { matrices: Tree.pmvMatrix, varyings: Tree.NONE });
  shaderdif = readShader('/showcase/sketches/SHADERS/blend/color_difference.frag',
  { matrices: Tree.pmvMatrix, varyings: Tree.NONE });
  shaderburn = readShader('/showcase/sketches/SHADERS/blend/color_burn.frag',
  { matrices: Tree.pmvMatrix, varyings: Tree.NONE });
}

function setup() {
  createCanvas(300, 300, WEBGL);
  noStroke();
  modo = createSelect();
  modo.position(215, 270);
  modo.style('width', '90px');
  modo.option('None'); 
  modo.option('blend'); 
  modo.option('add');
  modo.option('darkest');
  modo.option('ligthtest');
  modo.option('difference');
  modo.option('burn');
  
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

  if(opcionesS[modo.value()] == 1){
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
  else if(opcionesS[modo.value()] == 2){
    push();
    shader(shadera);
    beginShape();
    shadera.setUniform('uMaterial1', uMaterial1.levels);
    shadera.setUniform('uMaterial2', uMaterial2.levels);
    
    vertex(200, 260);
    vertex(100, 260);
    vertex(100, 160);
    vertex(200, 160);
    endShape();
    pop();
  }
  else if(opcionesS[modo.value()] == 3){
    push();
    shader(shaderd);
    beginShape();
    shaderd.setUniform('uMaterial1', uMaterial1.levels);
    shaderd.setUniform('uMaterial2', uMaterial2.levels);
    
    vertex(200, 260);
    vertex(100, 260);
    vertex(100, 160);
    vertex(200, 160);
    endShape();
    pop();
  }
  else if(opcionesS[modo.value()] == 4){
    push();
    shader(shaderl);
    beginShape();
    shaderl.setUniform('uMaterial1', uMaterial1.levels);
    shaderl.setUniform('uMaterial2', uMaterial2.levels);
    
    vertex(200, 260);
    vertex(100, 260);
    vertex(100, 160);
    vertex(200, 160);
    endShape();
    pop();
  }
  else if(opcionesS[modo.value()] == 5){
    push();
    shader(shaderdif);
    beginShape();
    shaderdif.setUniform('uMaterial1', uMaterial1.levels);
    shaderdif.setUniform('uMaterial2', uMaterial2.levels);
    
    vertex(200, 260);
    vertex(100, 260);
    vertex(100, 160);
    vertex(200, 160);
    endShape();
    pop();
  }
  else if(opcionesS[modo.value()] == 6){
    push();
    shader(shaderburn);
    beginShape();
    shaderburn.setUniform('uMaterial1', uMaterial1.levels);
    shaderburn.setUniform('uMaterial2', uMaterial2.levels);
    
    vertex(200, 260);
    vertex(100, 260);
    vertex(100, 160);
    vertex(200, 160);
    endShape();
    pop();
  }



}