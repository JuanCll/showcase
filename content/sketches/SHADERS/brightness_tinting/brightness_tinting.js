let lumaShader;
let img;
let img2;
let grey_scale;
let hsv_scale;
let brightnessO;
let opcionS;
let modo_tinte;
let fotoS;
const brightnessD  = {'None': 0, 'Luma':1, 'HSV':2, 'HSL':3};
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
