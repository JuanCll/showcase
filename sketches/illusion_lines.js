function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
    background(220);
    
    
    for(var i1=0;i1<500;){
      line(0, i1, 50+i1, 500);
      i1+=50;
    }
    
    for(var i2=0;i2<500;){
      line(500, 50+i2, i2, 0);
      i2+=50;
    }
    
    
    for(var i3=0;i3<500;){
      line(0, 500-i3, 50+i3, 0);
      i3+=50;
    }

  }