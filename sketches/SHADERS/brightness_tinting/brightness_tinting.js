//'use strict';
let lumaShader;
let img;
let grey_scale;
let hsv_scale;
let brightnessO;
const brightnessD  = {'None': 0, 'Luma':1, 'HSV':2, 'HSL':3};

function preload() {
  lumaShader = readShader('/showcase/sketches/SHADERS/brightness_tinting/luma.frag',{varyings: Tree.texcoords2 });
  
  img = loadImage('/showcase/sketches/perro_foto.jpg');
  
}

function setup() {
  createCanvas(700, 500, WEBGL);
  noStroke();
  textureMode(NORMAL);
  shader(lumaShader);
  //brightnessTool = 'None'

  brightnessO = createSelect();
  brightnessO.position(15, 15);
  brightnessO.style('width', '90px');

  brightnessO.option('None'); 
  brightnessO.option('Luma'); 
  brightnessO.option('HSV');
  brightnessO.option('HSL');

  lumaShader.setUniform('texture', img);
}

function draw() {
  background(255);
  lumaShader.setUniform('brightnessO', brightnessD[brightnessO.value()]);
  
  quad(-width / 2, -height / 2, width / 2, -height / 2,
        width / 2, height / 2, -width / 2, height / 2);
  
}
