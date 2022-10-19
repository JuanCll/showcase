# **Workshop #2: 3d webgl application**

## **Introducción**

El modelamiento 3D es una herramienta que abre un mundo de posibilidades para representar el mundo real dentro del mundo digital. Inicialmente, los modelos en 2 dimensiones se utilizaban para diseñar todo tipo de invenciones, tales como: juegos, herramientas de desarrollo e incluso modelos de la vida real. Desde hace mucho tiempo, se utiliza el 2D y ha sido muy útil para los desarrolladores. Sin embargo, un mundo en 3 dimensiones es más semejante a la realidad, por lo que el modelamiento 3D desde hace ya varios años se ha convertido en una herramienta de representación de la realidad mucho más poderosa.

Para modelar y representar cosas o aspectos de nuestro entorno utilizamos aplicaciones gráficas. Estas, tanto en 2D como en 3D, abren muchas posibilidades de diseño e interacción con el mundo digital. Por esto, **WebGl** busca acercar aún más (tanto a *desarrolladores* como a los apasionados por el modelamiento y la *interacción gráfica*) a utilizar recursos básicos en nuestro entorno digital como un navegador y una librería de Javascript, y así empezar a diseñar aplicaciones gráficas interactivas en la Web e incursionar en el mundo del modelamiento digital.


![3D Sphere](https://i.imgur.com/SKVtRzn.gif)

## **Marco teórico**
Para el desarrollo del presenta taller, es necesario entender los conceptos que los envuelven. El primero de ellos es [WebGL](https://www.khronos.org/api/webgl), una *especificación estándar que define una API implementada en JavaScript para la renderización de gráficos en 3D dentro de cualquier navegador web*, el cual permite la combinación con todos los estándares web del navegador, permitiendo el procesamiento de *canvas* y la combinación con diferentes elementos de HTML. Es un [motor de rasterización](https://webglfundamentals.org/webgl/lessons/webgl-fundamentals.html), el cual se ejecuta en la GPU de la computadora del desarrollador y que dibuja líneas, puntos y triángulos basados en el código suministrado. Adicionalmente, las instrucciones dadas son proporcionadas por WebGL en forma de pares de funciones, el *sombreador de vértices* y el *sombreador de fragmentos*, los cuales calculan las posiciones de vértices y calculan un color para cada píxel de lo primitivo que se está dibujando, respectivamente.

Un componente fundamental de WebGL para el presente proyecto, es el de [cámara](https://webglfundamentals.org/webgl/lessons/webgl-3d-camera.html), el cual utiliza propiedades matriciales y la aplicación de la matemática para visualización de imágenes según es requerido por el usuario. Las principales funcionalidades se encuentran en la rotación, movimiento e inversión de la visión del usuario, las cuales tienen múltiples aplicaciones en los campos de geografía y videojuegos, facilitando la inmersión en un campo de tres dimensiones.

El último de los conceptos importantes, es el de *Backroom*, siendo este la base del proyecto desarrollado. Los [*Backrooms*](https://es.wikipedia.org/wiki/The_Backrooms) es una leyenda urbana originada en un tablón de *4Chan* en el año 2019, el cual inicialmente describe una habitación inquietante de origen y propósitos desconocidos.
![Image Backrooms](https://i.imgur.com/XxYxOOQ.png)
El impacto que generó la publicación permitió la extensión de este universo, que ahora describe un mundo alterno que se encuentra compuesto por una gran cantidad de niveles laberínticos y entidades que habitan allí, los cuales interactúan con las personas que accidentalmente caen allí. 

## **Método**

Para el desarrollo de este taller se uso principalmete la biblioteca [P5.js](https://p5js.org/es/) y sus funciones de objetos 3D, de estos podemos destacar el moviento de cámara , de personaje, creación de ambiente (columnas, paredes, suelo y techo) y colisiones.

### **Movimiento de cámara**
Para generar la sensación de movimiento en primera persona se desplaza la cámara utilizando las teclas, y se rota la dirección en la que apunta utilizando el movimiento del mouse.
Para lograr esto se utilizaron las funciones dispuestas en P5 para creacion y manipulación de la cámara.
```javascript
function draw(){
          background(0);
          noStroke();
          cam.pan(ang(-D.cx));
          cam.tilt(ang(D.cy));
          D.r-=(mx*sensitivityX);
          yAng-=(my*sensitivityY);

          cam.setPosition(D.x,-D.y,D.z);
```
### Corrección de cámara

La cámara para mantenerla dentro de la ventana cuando se deja de mover el mouse después de un movimiento suave devuelve sus variables D.x, D.y y D.z a 0.

```javascript
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
```
Al hacer un movimiento fuerte y prolongado de la cámara giraría sin control, pero colocamos este limitador para que no suceda.

```javascript
//Evitar que la camara gire sin control
        if(mx>30 || mx <-30){
          mx=0;
        }
```

### **Movimiento de "personaje"**
Para desplazar la cámara se desplazan las coordenadas de la cámara a una velocidad definida.
```javascript
          D.cx=mx*sensitivityX;
          D.cy=my*sensitivityY;
          //Moviviento adelante
          if(keys[87] && keyIsDown(16)){
            playerSpeed=5;
            D.z-=cos(ang(D.r))*playerSpeed;
            D.x-=sin(ang(D.r))*playerSpeed;
          }
          if(keys[87]){
              D.z-=cos(ang(D.r))*playerSpeed;
              D.x-=sin(ang(D.r))*playerSpeed;  
          }
         //Moviviento atras
          if(keys[83]){
              D.z+=cos(ang(D.r))*(playerSpeed-0.7);
              D.x+=sin(ang(D.r))*(playerSpeed-0.7);  
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

```



### **Creación de ambiente**

Para facilitar la creación de niveles y mantener la escencia de un BACKROOM tradicional, la creación de varias estructuras es a traves de ciclos FOR, principalmente en las columnas, suelo y el techo.

### Columnas
Las columnas son una estructura para limitar las paredes y a nosotros los desarrolladores nos ayuda a ubicar puntos estrategicos en el nivel para su creación, y ayudar a crear un efecto que confunda al jugador haciendo que las habitasciones sean similares.

Dentro de la funcion `draw()` usamos un ciclo FOR anidado para crear las columnas del nivel, todas estan a la misma distacia una de la otra en el plano X y el plano Z.

```javascript
for(var i = -2.5; i < 2.5; i++){
          for(var j = -2.5; j < 2.5; j++){
          push();
          translate(i*500,1,j*500);
          rotateY(ang(90));
          //fill(228,225,70);
          texture(walls);
          box(30,120,30);
          pop();
          }
        }
```
![Imagen columnas](https://i.imgur.com/UzQRwyr.png)

### Paredes
Las paredes crean los pasillos y habitaciones del juego, se crean con la funcion `pared()` que definimos y crea un plano con la función `plane()` de P5 ademas le agregamos las coordenas y modifiacion en los planos X, Y y Z.

```javascript
function pared(x,y,z,dx,dy,dz,l){
        push();
        translate(x,y,z);
        rotateX(ang(dx));
        rotateY(ang(dy));
        rotateZ(ang(dz));
        texture(walls);
        fill(180,153,81);
        plane(l,110);
        pop();
```
Donnde x, y & z son las coordenadas del punto de origen de la pared, dx, dy y dz son los angulos de inclinacion del plano y l es la longitud.

![Imagen paredes](https://i.imgur.com/Q5VXvHQ.png)

### Techo y suelo

Igual que las columnas se crean con un ciclo FOR y ayudan a limitar las habitaciones y pasillos en el juego.

```javascript
//Suelo
        for(var k = -20; k < 20; k++){
          for(var l = -20; l < 20; l++){
            push();
            translate(k*100,50,l*100);
            rotateX(ang(90));
            fill(100);
            texture(floor);
            plane(100);
            pop();
          }
        }

        //Piso del piso
        push();
        translate(0,100,0);
        rotateX(ang(90));
        //fill(167, 164, 61);
        texture(floor);
        plane(10000);
        pop();

        //Techo
        for(var k = -5; k < 5; k++){
          for(var l = -5; l < 5; l++){
            push();
            translate(k*500,-90,l*500);
            rotateX(ang(90));
            fill(100);
            texture(roof);
            plane(500);
            pop();
          }
        }
```

### Texturas
Para añadir las texturas a los techos se utilizó la funcion de P5 texture() y las imágenes de las texturas.
```javascript
function preload() {
        roof = loadImage('assets/images/techo.png');
        walls = loadImage('assets/images/walls.png');
        floor = loadImage('assets/images/floor.png');
        }
```

### **Colisiones**

Al no tener una función definida para las colisiones limitaciones de movimiento al llegar a una pared con condicionales para que el jugador no pueda atravesarlas, es la creación de la habitación con sus coordenadas y mover al jugador a una posición atrás para dar la sensación de que no se puede avanzar más.

```javascript
if(D.z>=230){
        D.z=229
      }
      if(D.x>=230){
        D.x=229
      }
      if(D.z<=-1230){
        D.z= -1229
      }
      if(D.x<=-230 && D.x>=-260 && D.z>=-730 ){
        D.x=-229
      }
      if(D.x<-250 && D.z>=-770 ){
        D.z=-769;
      }
      if(D.x<-1230 ){
        D.x=0;
        D.z=100;
      
      }
```

## **Resultados**

### Aplicación completa.
La aplicación completa se puede visualizar en el siguiente link al repositorio donde está el código de la aplicación [BACKROOM](https://sansanchezmo.github.io/BACKROOM/)
O clonando el repositorio y ejecutandolo de manera local.


## **Discusión**
Teniendo como inspiración o idea fuente el concepto de las leyendas urbanas sobre los “Backrooms”, se discutió acerca de las características qué debe cumplir la aplicación para lograr transmitir un tipo de idea, en este caso, el del terror y suspenso causado por lo extraño del ambiente. Se consultaron fuentes referentes al tema del uso de la rotación y desplazamiento de la cámara y el uso de los colores y de las texturas en los objetos.

Teniendo en cuenta lo mencionado anteriormente en el [marco teórico](#marco-teórico), también se discutieron las aplicaciones del uso de la cámara en entornos digitales como videojuegos o distintas aplicaciones interactivas. De la misma manera, se conversó acerca de la importancia de aspectos como la disposición e interacciones de la cámara, junto a la ambientación, para simular situaciones o generar emociones en los usuarios y espectadores.

## **Conclusiones**
Se puede concluir que el uso de la cámara, su rotación y desplazamiento, depende del propósito que se quiera lograr. En el caso del presente proyecto el uso de una cámara que se mantenga en primera persona dio mejores resultados para adaptarse al concepto original. Así como se puede considerar la cámara en tercera persona mejor para otros propósitos.

Además, que la creación de una habitación y/o pasillo es en esencia el uso de traslación y rotaciones, que se adaptaron para crear este ambiente de *Backroom*, el uso de planos similares y repetitivos gracias a los ciclos FOR dan un toque tétrico que fue siempre el objetivo.

Se pudo notar, adicionalmente, la importancia de librerías y aplicaciones preexistentes de diferentes funcionalidades, las cuales permiten un aprendizaje más eficiente de las diferentes posibilidades que tiene, en este caso, WebGL y P5.

