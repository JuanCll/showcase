function setup() {
    createCanvas(420, 420);
  }
  
  function draw() {
    background("white");
    
    for(var i=0; i < 400;) {
      for(var j=0; j<400; ){
        rect(i, j, 20, 10);
        rect(i, j+20, 20, 10);  
        j+=30
      }
      
      fill("black");
      i+=30
    }
  }