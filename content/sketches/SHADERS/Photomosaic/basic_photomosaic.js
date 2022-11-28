
const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';
let image;

function preload() {
  image = loadImage("./ahh.jpg");
}

function setup() {
  createCanvas(400, 400); 
}

function draw() {
  background(0);
  
  let w = width / image.width;
  
  let h = height / image.height;
  image.loadPixels();
  for (let i = 0; i < image.width; i++) {
    for (let j = 0; j < image.height; j++) {
      const pixelIndex = (i + j * image.width) * 4;
      const r = image.pixels[pixelIndex + 0];
      const g = image.pixels[pixelIndex + 1];
      const b = image.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      
      noStroke();
      fill(255);
      
      const len = density.length;
      const charIndex = floor(map(avg,0,255,len,0));
      
      textSize(w);
      textAlign(CENTER, CENTER);
      text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);
      
      
    }
  }
  
  
}
