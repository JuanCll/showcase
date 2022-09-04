let img;
let newimg;
let d;
let sel;


function preload() {
  img = loadImage('/showcase/sketches/escudo_unal.jpg');
}

function setup() {
  //Creacion del menu para seleccionar kernel
  sel = createSelect();
  //sel.position(10, 10);
  sel.option('Identity');
  sel.option('Ridge detection');
  sel.option('Sharpen');
  sel.option('Blur');
  sel.option('Convolution');
  sel.option('Unsharp masking');
  
  //Creation of canvas and a new empty image 
  createCanvas(430, 300);
  pixelDensity(1);
  newimg = createImage(img.width, img.width);
  
}

function draw() {
  
  background(225);
  image(img, 0, 0);
  
  let sizem = 3;
  
  newimg.loadPixels();
  img.loadPixels();
  /*xm = mouseX;
  ym = mouseY;
  */
  if (sel.value() !== 'Identity') {
    
    matrix = selection(sel.value());
    for (var x = 0; x < newimg.width; x++) {
      for (var y = 0; y < newimg.height; y++) {
        let c = convolution(img, x, y, matrix, sizem);
        var index =  (y * newimg.width + x) * 4;

        newimg.pixels[index] = c[0];
        newimg.pixels[index + 1] = c[1];
        newimg.pixels[index + 2] = c[2];
        newimg.pixels[index + 3] = 255;

      }
    }
    
    newimg.updatePixels();
    image(newimg, width/2, 0);
  } else {
    image(img, width/2, 0);
    
  }
  
}

function convolution(img, x, y, matrix, sizem) {
  let r = 0.0;
  let g = 0.0;
  let b = 0.0;
  
  for (var i = -1; i < sizem - 1; i++) {
    for (var j = -1; j < sizem - 1; j++) {
      let px = x + i;
      let py = y + j;
      
      let index = (px + img.width * py)*4;
      
      index = constrain(index, 0, img.pixels.length - 1);
      
      r += img.pixels[index] * matrix[i+1][j+1];
      g += img.pixels[index + 1] * matrix[i+1][j+1];
      b += img.pixels[index + 2] * matrix[i+1][j+1];
      
      
    }
  }
  return [r,g,b];
}

function selection(value) {
  switch (value) {
    case 'Ridge detection':
      matrix = [ [ -1, -1, -1 ],
                 [ -1,  8, -1 ],
                 [ -1, -1, -1 ] ]; 
      break;
    case 'Sharpen':
      matrix = [ [ 0, -1, 0 ],
                 [ -1,  5, -1 ],
                 [ 0, -1, 0 ] ]; 
      break;
    case 'Blur':
      matrix = [ [ 1/9, 1/9, 1/9 ],
                 [ 1/9,  1/9, 1/9 ],
                 [ 1/9, 1/9, 1/9 ] ]; 
      break;
    case 'Convolution':
      matrix = [ [ -1, -1, -1 ],
                 [ -1,  9, -1 ],
                 [ -1, -1, -1 ] ];    
      break;
    case 'Unsharp masking':
      matrix = [ [ -1, -1, -1 ],
                 [ -1,  9, -1 ],
                 [ -1, -1, -1 ] ];    
      break;
    default:
      matrix = [ [ -1, -1, -1 ],
                 [ -1,  9, -1 ],
                 [ -1, -1, -1 ] ]; 
      break;
  }
  return matrix
}