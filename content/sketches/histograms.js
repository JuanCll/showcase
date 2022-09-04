function preload() {
  img = loadImage("/showcase/sketches/perro_foto_dim.jpg"); 
}

function setup() {
  createCanvas(365, 450);
  background(255);
  img.resize(0,400);
}

function draw(){
  var rango = 256
  image(img, 0, 0);
  var histogram = new Array(rango);
  for (i = 0; i <= rango; i++) {
    histogram[i] = 0
  }

  loadPixels();
  
  for (var x = 0; x < img.width; x+=5) {
    for (var y = 0; y < img.height; y+=5) {
      var indice = (x + y * img.width) * 4;
      var a = pixels[indice];
      var a2 = pixels[indice + 1];
      var a3 = pixels[indice + 2];
      var a4 = pixels[indice + 3];
      b = int(a3);
      histogram[b]++
    }
  }
  image(img, 0, 0);
  stroke(250,20,200)
  push()
  translate(10,0)
  for (x = 0; x <= rango; x++) {
    index = histogram[x];

    y1=int(map(index, 0, max(histogram), height, height-200));
		y2 = height
    xPos = map(x,0,rango,0, width-20)
    line(xPos, y1, xPos, y2);
  }
  pop()
  
}