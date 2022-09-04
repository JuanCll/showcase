let img;
let newimg;
let d;
let sel;


function preload() {
  img = loadImage('/showcase/sketches/perro_foto.jpg');
}

function setup() { 
  createCanvas(545, 310);
  pixelDensity(1);  
}

function draw() { 
  background(225);
  image(img, 0, 0);
}
function brillo(masomenos){
  img.loadPixels();
  for (var x = 0; x < img.width; x++) {
    for (var y = 0; y < img.height; y++) {
      var index =  (y * img.width + x) * 4;
      if(masomenos){
        img.pixels[index] = constrain(img.pixels[index]*1.1,0,255);
        img.pixels[index+1] = constrain(img.pixels[index+1]*1.1,0,255);
        img.pixels[index+2] = constrain(img.pixels[index+2]*1.1,0,255);
      }
      else{
        img.pixels[index] = constrain(img.pixels[index]/1.1,0,255);
        img.pixels[index+1] = constrain(img.pixels[index+1]/1.1,0,255);
        img.pixels[index+2] = constrain(img.pixels[index+2]/1.1,0,255);
      }
    }
  }
  img.updatePixels();
  image(img, width/2, 0);
}

function keyPressed() {
  switch (key) {
    case "+":
      brillo(true); 
      break;
    case "-":
      brillo(false);
      break;
  }
}