function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  
  
  for(var i1=0;i1<500;){
    line(0, i1, 10+i1, 500);
    i1+=10;
  }
  
  for(var i2=0;i2<500;){
    line(500, 10+i2, i2, 0);
    i2+=10;
  }
  
  
  for(var i3=0;i3<500;){
    line(0, 500-i3, 10+i3, 0);
    i3+=10;
  }
  
  for(var i4=0;i4<500;){
    line(500-i4, 500, 500, i4);
    i4+=10;
  }	
  
}