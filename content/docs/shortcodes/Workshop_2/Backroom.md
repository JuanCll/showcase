# **Workshop #2: 3d webgl application**

## **Introducción**

El modelamiento 3D es una herramienta que abre un mundo de posibilidades para representar el mundo real dentro del mundo digital. Inicialmente, los modelos en 2 dimensiones se utilizaban para diseñar todo tipo de invenciones, tales como juegos, herramientas de desarrollo e incluso modelos de la vida real. Desde hace mucho tiempo, se utiliza el 2D y ha sido muy útil para los desarrolladores. Sin embargo, un mundo en 3 dimensiones es más semejante a la realidad, por lo que el modelamiento 3D desde hace ya varios años se ha convertido en una herramienta de representación de la realidad mucho más poderosa.

Para modelar y representar cosas o aspectos de nuestro entorno utilizamos aplicaciones gráficas. Estas, tanto en 2D como en 3D, abren muchas posibilidades de diseño e interacción con el mundo digital. Por esto, **WebGl** busca acercar aún más (tanto a *desarrolladores* como a los apasionados por el modelamiento y la *interacción gráfica*) a utilizar recursos básicos en nuestro entorno digital como un navegador y una librería de Javascript, y así empezar a diseñar aplicaciones gráficas interactivas en la Web e incursionar en el mundo del modelamiento digital.


![3D Sphere](https://i.imgur.com/SKVtRzn.gif)

## **Marco teórico**


## **Método**

Para el desarrollo de este taller se uso principalmete la biblioteca [P5.js](https://p5js.org/es/) y sus funciones de objetos 3D, de estos podemos destacar el moviento de cámara , de personaje, creación de ambiente (columnas, paredes, suelo y techo) y colisiones.

### **Moviento de cámara**




### **Moviento de personaje**




### **Creación de ambiente**

Para facilitar la creación de niveles y amntener la esteica de un BACKROOM tradicional, la creacion de varias estructuras es a traves de ciclos FOR, principalmente en las columnas y el techo.

### Columnas
Las columnas son una estructura para limitar las paredes y a nosotros los desarrolladores nos ayuda a ubicar puntos estrategicos en el nivel para su creación, y ayudar a crear un efecto que confunda al jugador haciendo que las habitasciones sean similares.

Dentro de la funcion `draw()` usamos un ciclo FOR anidado para crear las columnas del nivel, todas estan a la misma distacia una de la otra en el plano X y el plano Z.

```javascript
for(var i = -2.5; i < 2.5; i++){
          for(var j = -2.5; j < 2.5; j++){
          push();
          translate(i*500,1,j*500);
          rotateY(ang(90));
          fill(228,225,70);

          box(30,120,30);
          pop();
          }
        }
```
![Imagen columnas](https://imgur.com/a/0urxtRi)

### Paredes
Las paredes crean los pasillos y habitaciones del juego, se crean con la funcion `pared()` que definimos, crea un plano con la función `plane()` de P5 y le agregamos las coordenas y modifiacion en los planos X, Y y Z.

```javascript
function pared(x,y,z,dx,dy,dz,l){
        push();
        translate(x,y,z);
        rotateX(ang(dx));
        rotateY(ang(dy));
        rotateZ(ang(dz));
        fill(180,153,81);
        plane(l,110);
        pop();
```
Donnde x, y & z son las coordenadas del punto de origen de la pared, dx, dy y dz son los angulos de inclinacion del plano y l es la longitud.

![Imagen paredes](https://imgur.com/Q5VXvHQ)

## **Resultados**

### Aplicación completa.



## **Discusión**



## **Conclusiones**
Backrooms


