let angle = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  // stroke('black');
  noStroke();
}

function draw() {
  background(252, 255, 216);

  push();
  translate(200, 200);
  rotate(angle);
  fill(17, 0, 255);
  rectMode(CENTER);
  rect(0, 0, 200, 200);
  angle = angle + 3;
  pop();

  if (!mouseIsPressed) {
    rectMode(CORNER);
    fill(255, 153, 55);
    rect(0, 0, 180, 180);
    rect(220, 0, 180, 180);
    rect(0, 220, 180, 180);
    rect(220, 220, 180, 180);
  }
}