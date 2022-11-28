
const density = 'ABCDEFGHIJKLMNOPQRSTUV@+-=_.   ';
let imagen;

function preload() {
  imagen = loadImage("/showcase/sketches/image.jpg");
}

function setup() {
  createCanvas(400, 400); 
  //ascii = createCheckbox('ascii', false);
}

function draw() {
  background(0);
  
  let w = width / imagen.width;
  
  let h = height / imagen.height;
  imagen.loadPixels();
  //image(imagen, 0, 0, imagen.width * 9, imagen.height * 9);
  image(imagen,0,0);

  for (let i = 0; i < imagen.width; i++) {
    for (let j = 0; j < imagen.height; j++) {
      const pixelIndex = (i + j * imagen.width) * 4;
      const r = imagen.pixels[pixelIndex + 0];
      const g = imagen.pixels[pixelIndex + 1];
      const b = imagen.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      
      noStroke();
      fill(255);
      
      const len = density.length;
      const charIndex = floor(map(avg,0,255,len,0));
      
      textSize(w);
      textAlign(CENTER, CENTER);
      fill(r,g,b);
      text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);

    }
  }
}
