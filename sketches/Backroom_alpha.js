var $ = function(prop){
    return document.querySelector(prop);  
  };
      var ang = function(a){
          return a*(Math.PI/180);
      };
      var playerSpeed = 3.2;
      var sensitivityX = 0.07;
      var sensitivityY = 0.07;
      var mx = 0, my = 0;
      var keys = [];
      var cam;
      var yAng = 0;
      var floorTexture, wallTexture;
      document.body.addEventListener("mousemove",function(e){
          mx = e.movementX;
          my = e.movementY;
      });
      var D = {
          cx:0,
          cy:0,
          cz:0,
          x:0,
          y:0,
          z:200,
          r:0,
        r2:0,
      }
  
      function setup(){
          createCanvas(window.innerWidth,window.innerHeight,WEBGL);
          cam = createCamera();
  
      
      } 
      function draw(){
          background(0);
          noStroke();
          cam.pan(ang(-D.cx));
          cam.tilt(ang(D.cy));
          D.r-=(mx*sensitivityX);
          yAng-=(my*sensitivityY);
          
          cam.setPosition(D.x,-D.y,D.z);
  
          for(var i = -2.5; i < 2.5; i++){
            for(var j = -2.5; j < 2.5; j++){
            push();
            translate(i*500,1,j*500);
            rotateY(ang(90));
            fill((i+10)*20,(j+10)*20,(i+j)*20);
  
            
            box(100);
            pop();
            }
          }
          for(var k = -5; k < 5; k++){
            for(var l = -5; l < 5; l++){
              push();
          translate(k*500,50,l*500);
          rotateX(ang(90));
          fill(100);
          plane(500);
          pop();
            }
          }
  
          
          D.cx=mx*sensitivityX;
          D.cy=my*sensitivityY;
          //Moviviento adelante
          if(keys[87] && keyIsDown(16)){
            playerSpeed=5.5;
            D.z-=cos(ang(D.r))*playerSpeed;
            D.x-=sin(ang(D.r))*playerSpeed;
          }
          if(keys[87]){
              D.z-=cos(ang(D.r))*playerSpeed;
              D.x-=sin(ang(D.r))*playerSpeed;  
          }
         //Moviviento atras
          if(keys[83]){
               D.z+=cos(ang(D.r))*playerSpeed;
              D.x+=sin(ang(D.r))*playerSpeed;  
          }
        //Moviviento izq
          if(keys[65]){
              D.z-=cos(ang(D.r+90))*playerSpeed;
              D.x-=sin(ang(D.r+90))*playerSpeed;  
          }
          //Moviviento derecha
          if(keys[68]){
              D.z+=cos(ang(D.r+90))*playerSpeed;
              D.x+=sin(ang(D.r+90))*playerSpeed;  
          }
          if(mx > 0){
              mx--;
          }
          if(mx < 0){
              mx++;
          }
          if(my > 0){
              my--;
          }
          if(my < 0){
              my++;
          }
        if(yAng < -30){
            if(my > 0){
                sensitivityY = 0;
            }if(my < 0){
                sensitivityY = 0.15;
            }
        }
        if(yAng > 30){
            if(my < 0){
                sensitivityY = 0;
            }if(my > 0){
                sensitivityY = 0.15;
            }
        }
      }
      function keyPressed(){
          keys[keyCode] = true;
      }
      function keyReleased(){
          keys[keyCode] = false;
      }
      function mouseClicked(){
          //got this stuff from Willard's Minecraft
          if (canvas.requestPointerLock) {
              canvas.requestPointerLock();
          }
      }