# **Workshop #1: Ilusiones Ópticas**

## **Introducción**
Una ilusión óptica es una distorsión de la realidad que es percibida por el sentido de la vista. Este tipo de fenómeno ha permitido el estudio de cómo los seres humanos procesan la información, adicionalmente, a lo largo de la historia se ha buscado recrear y experimentar con los sentidos de esta manera. Lo anterior, es el objetivo del siguiente informe, obteniendo una aproximación, no solo de cómo programar y experimentar con diferentes ilusiones, si no también entender el trasfondo científico que sustentan este comportamiento, consiguiendo la apropiada introducción a la computación visual.

## **Marco teórico**

A lo largo de la historia se han descubierto mucho tipos de distorsiones que el cerebro humano genera con el fin de poder entender su entorno, como lo son las ilusiones auditivas y las ilusiones ópticas. Para el presente taller, se abordará el estudio de las ilusiones óptivas o visuales.\
Una ilusión, según la [RAE](https://dle.rae.es/ilusi%C3%B3n), se refiere a:
 > El concepto imagen o representación sin verdadera realidad, sugeridos por la imaginación o causados por engaño de los sentidos.
En el caso de las ilusiones ópticas, este engaño de los sentidos se da debido a los siguientes factores:
- Organización perceptual: hace referencia a la forma en la que el cerebro organiza las sensaciones entrantes de información.
- Percepción de profundidad: se basa en cómo la mente intenta dar un sentido de profundidad a imágenes usualmente bidimensionales.
- Color y brillo: donde el humano, según la iluminación y la constancia del color, percibe la totalidad de un objeto.
- Objeto: se refiere a cómo el ser humano, mientras los objetos conocidos tienen una forma o tamaño consistentes independientemente de su perspectiva, los desconocidos pueden generar cambios inesperados según el punto de vista.
- Percepción futura: Se teoriza que una razón de las ilusiones ópticas son el retraso neuronal causado por el tiempo en el que tarda en llegar la luz a la retina, esto siendo compensado por el cerebro generando imágenes de, lo que cree, puee ocurrir en milésimas de segundo en el futuro.\

-[Artículo de Wikipedia](https://es.wikipedia.org/wiki/Ilusi%C3%B3n_%C3%B3ptica#Ilusiones_visuales_patol%C3%B3gicas)

Adicionalmente, se ha hecho una clasificación de estas ilusiones de esta manera:
 - Ilusiones ópticas fisiológicas: Se asocian a los efectos de una excesiva estimulación en los ojos, dadas por el color, el brillo y el movimiento.
 - Ilusiones ópticas cognitivas: Se refieren a las relacionadas con una vulnerabilidad de la visión que exige al cerebro el entendimiento de algo que no se considera claro.
    - Ilusiones de ambiguedad: Son figuras que presentan dos alternativas de percepción no simultáneas.
    - Ilusiones de distorsión: Se basan en los errores de percepción de un objeto o imagen.
    - Ilusiones paradójicas: Presentan objetos imposibles.
    - Ilusiones ficticias: Son aquellas que inducen al cerebro a la alucinación, debido a la inducción de alteraciones mentales.\
    
-[Artículo de Blog XCARET](https://blog.xcaret.com/es/que-son-las-ilusiones-opticas-y-por-que-nos-gustan-tanto/) 

## **Método**


## **Resultados**


### Ilusión lineas rectas

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

### Ilusión de cuadricula
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

### Ilusión de paralelas

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


### Ilusión cuadrado que "respira"

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

### Ilusión cuadrados rotando
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

## **Discusión**
A partir de los resultados obtenidos, se discutieron los siguientes puntos:
- Las aplicaciones de las ilusiones ópticas:\
    Según lo visto en la sección [marco teórico](#marco-teórico), se inició una discusión alrededor de las aplicaciones de las ilusiones ópticas. De ella y de la consulta de información al respecto, se obtuvo que las ilusiones ópticas funcionan como un recurso para el entendimiento del cerebro y cómo varían las conexiones neuronales entre persona y persona, hallando que no todas las personas perciben dichas ilusiones de la misma manera. - [Presentación sobre ilusiones ópticas](https://iiep-baires.econ.uba.ar/uploads/eventos/377/archivos/1.pdf)
- La creación de nuevas ilusiones ópticas:\
    El desarrollo del taller, junto con la experimentación y aprendizaje del lenguaje [p5.js](https://p5js.org/es/), permitió la creación de una [ilusión visual](#ilusión-cuadrados-rotando) que no se encontró durante la investigación del tema. Una vez encontrada la distorsión de la imagen, se comenzó una experimentación con la misma, lo cual permitió aprender de manera experimental la forma en la que los integrantes del grupo reaccionamos ante diferentes estímulos como lo son: la luz, el color, la forma y la velocidad de los elementos involucrados. Adicionalmente, se generó una consulta sobre ilusiones ópticas creadas recientemente, encontrando una gran cantidad de ilusiones y de concursos que se enfocan en esta área. - [Concurso de ilusiones ópticas](https://www.bbc.com/mundo/noticias-45884520)


## **Conclusiones**
Se puede concluir del presente informe, que la realización y entendimiento de las ilusiones ópticas, permite la experimentación con aspectos visuales como lo son la iluminación, el color, la sombra y el movimiento, los cuales son tópicos fundamentales en el estudio de todo lo relacionado a lo visual, en este caso a la programación enfocada a este campo. Finalmente, se pudo observar a lo largo del desarrollo del taller, las implicaciones a nivel mental y físico que las ilusiones ópticas generan, no solo a nivel experimental, sino desde el aspecto académico.


