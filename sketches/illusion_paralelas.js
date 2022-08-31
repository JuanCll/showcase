function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
  for (var i = 0; i < 400; i+=20) {
     line(0,20+i,400,20+i)
  }
    for (var j = 0; j < 50; j+=10) {
      for (var k = 0; k < 400; k+=50) {
     rect(0+(k+j/5), 20+j+j, 25, 20);
     rect(0+(k+10-j/5), 120+j+j, 25, 20);
     rect(0+(k+j/5), 220+j+j, 25, 20);
     rect(0+(k+10-j/5), 320+j+j, 25, 20);
     fill("black")
  }}
  }