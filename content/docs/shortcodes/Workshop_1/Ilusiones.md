# Workshop 1

Primer taller

## Ilusión lineas rectas

{{<hint info>}} 
Únicamente con lineas rectas se consigue generar aparentes curvas.
Se denomina curvas de Bézier a un sistema que se desarrolló hacia los años 1960 para el trazado de dibujos técnicos, en el diseño aeronáutico y en el de automóviles. Su denominación es en honor a Pierre Bézier, quien ideó un método de descripción matemática de las curvas que se comenzó a utilizar con éxito en los programas de CAD.
Las curvas de Bézier han sido ampliamente usadas en los gráficos generados por ordenador para modelado de curvas suaves.   -[Articulo de Wikipedia](https://es.wikipedia.org/wiki/Curva_de_Bézier)
{{</hint >}}

{{< details title="p5-lines" open=false >}}
{{< highlight html >}}
{{</* p5-iframe sketch="/showcase/sketches/illusion_lines.js" width="525" height="525" */>}}

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
{{< /highlight >}}
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/illusion_lines.js" width="525" height="525" >}}

## Ilusión de cuadricula
{{< hint info >}}
Ilusión psicológica en la cual se ven puntos en las intersecciones que aparecen y desaparecen.
La ilusión de la cuadrícula de Hermann fue observada por Ludimar Hermann en 1870. Es muy similar a la anterior, cuando se mira un dibujo con una cuadrícula blanca sobre un fondo negro, se tiene la impresión de que surgen manchas "fantasmas" en las intersecciones de las líneas. Las manchas desaparecen cuando se observa directamente la intersección. Eso explica por qué se ven puntos en la intersección.
-[Articulo de Wikipedia](https://es.wikipedia.org/wiki/Ilusión_de_la_cuadrícula)

Aunque no hay una respuesta definitiva, se cree que ocurre por un proceso de inhibición neural lateral, en el que no interviene una sola célula o receptor en el campo visual, sino todo un conjunto de células que reaccionan ante los estímulos que se presentan.    -[Psicoactiva](https://www.psicoactiva.com/blog/ilusion-optica-de-la-cuadricula/)

{{</hint>}}

{{< details title="p5-grid" open=false >}}
{{< highlight js >}}
{{</* p5-iframe sketch="/showcase/sketches/illusion_Grid.js" width="445" height="445" */>}}

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
{{< /highlight >}}
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/illusion_Grid.js" width="445" height="445" >}}

## Ilusión de paralelas

{{<hint info>}}
La ilusión de la pared de la cafetería es un tipo de ilusión óptico-geométrica, en la que líneas rectas paralelas  que dividien líneas entre filas formadas por baldosas blancas y negras alternas y escalonadas, aparentan estar inclinadas.

La ilusión fue atribuida en gran parte al fenómeno de la irradiación, y a la dispersión de la luz entre zonas oscuras y zonas brillantes en la imagen retinal.

La primera vez que se reporto esta ilusion fue en una pared de una cafetería, e incluso la fachada de un edificio en Melbourne utiliza esta ilusión.      -[Articulo de Wikipedia](https://es.wikipedia.org/wiki/Ilusión_de_la_pared_de_la_cafetería)
{{</hint>}}

{{< details title="p5-paralelas" open=false >}}
{{< highlight js >}}
{{</* p5-iframe sketch="/showcase/sketches/illusion_paralelas.js" width="420" height="425" */>}}

function setup() {
    createCanvas(400, 400);
  }
  function draw() {
    background("white");
    for (var i = 0; i < 400; i+=20) {
     line(0,20+i,400,20+i)
    }
    for (var j = 0; j < 50; j+=10) {
      for (var k = 0; k < 400; k+=50) {
        rect(0+(k+j/5), 20+j+j, 25, 20);
        rect(0+(k+10-j/5), 120+j+j, 25, 20);
        rect(0+(k+j/5), 220+j+j, 25, 20);
        rect(0+(k+10-j/5), 320+j+j, 25, 20);
        line(0,10,400,10)
        stroke("gray")
      fill("black")
      }
    }
  }
{{< /highlight >}}
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/illusion_paralelas.js" width="420" height="425" >}}

{{< hint warning >}}
El efecto desaparece cuando el blanco y el negro son reemplazados por colores diferentes, pero del mismo brillo.
{{</hint>}}

{{< p5-iframe sketch="/showcase/sketches/no_illusion_paralelas.js" width="420" height="425" >}}


## Ilusión cuadrado que "respira"

{{< hint info >}}
Ilusión óptica en la cual por la rotación y la visión limitada sobre el cuadrado pareciera que el tamaño de este mismo cambia.
La falta de información del objeto completo hace que las imagenes rotando tengan un efecto de pulsaciones generado por la habilidad que tiene el cerebro de realizar interpolaciones de objetos en el espacio.

-[Breathing Square](https://michaelbach.de/ot/mot-breathingSquare/)
{{</hint>}}

{{< details title="p5-square" open=false >}}
{{< highlight js >}}
{{</* p5-iframe sketch="/showcase/sketches/breathing_square.js" width="425" height="425" */>}}

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
{{< /highlight >}}
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/breathing_square.js" width="425" height="425" >}}

## Ilusión cuadrados rotando
{{< hint info >}}
En este caso despues de observar el punto en el centro de los cuadrados rotanto durante un tiempo, una vez pausado se produce una sensación de movimiento en sentido contrario y mucho más lento.
En este caso relacionamos este efecto al fenomeno de afterimage, que si bien no es exactamente igual puede tener similitudes en como funciona.
Ademas se pueden relaconar a ilusiones en las que se encuentran gran cantidad de figuras geometricas iguales y tonalidades de color distintas, lo que hace que el cerebro reciba mucha información simultanea y de lugar a estos efectos.
{{< /hint >}}


{{< details title="p5-squares" open=false >}}
{{< highlight js >}}
{{</* p5-iframe sketch="/showcase/sketches/squares_rotating.js" width="625" height="625" */>}}

function setup() {
  createCanvas(600, 600);
  // rectMode(CENTER);
  x_0 = 0;
  y_0 = 255;
  a = true;
}
function draw() {
  background(0);
  push();
  translate(width / 2, height / 2);
  for (let x = 420; x >= 40; x = x / 1.08) {
    noStroke();
    rotate(radians(frameCount / 2));
    fill(y_0, 40);
    rect(0, 0, x, x);
  }
  pop();
  point(300, 300);
  stroke("blue"); 
  strokeWeight(10); 
}
function mousePressed() {
  if (a == false) {
    noLoop();
    a = true;
  } else {
    loop();
    a = false;
  }
}
{{< /highlight >}}
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/squares_rotating.js" width="625" height="625" >}}


