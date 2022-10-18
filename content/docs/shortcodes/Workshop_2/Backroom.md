# **Workshop #2: 3d webgl application**

## **Introducción**

Prueba de actualización de tiempos. Un poquito de **negrilla** y tal. 

## **Marco teórico**


## **Método**

Para el desarrollo de este taller se uso principalmete la biblioteca [P5.js](https://p5js.org/es/) y sus funciones de objetos 3D, de estos podemos destacar el moviento de cámara , de personaje, creación de ambiente (columnas, paredes, suelo y techo) y colisiones.

### **Moviento de cámara**




### **Moviento de personaje**




### **Creación de ambiente**

Para facilitar la creación de niveles y amntener la esteica de un BACKROOM tradicional, la creacion de varias estructuras es a traves de [ciclos FOR](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for), principalmente en las columnas y el techo.

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
![Imagen de las columnas](/content/sketches/Columnas.png)
## **Resultados**

### Aplicación completa.



## **Discusión**



## **Conclusiones**
Backrooms


