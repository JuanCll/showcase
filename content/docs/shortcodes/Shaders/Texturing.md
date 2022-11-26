# **Ejerecicios: Texturing**

## **UV Visualization**
{{<hint info>}}
**Exercise**

Redefine the shape texture coordinates to turn the above image upside down.
{{</hint>}}


{{< p5-iframe sketch="/showcase/sketches/SHADERS/UV_v/UV_visualization.js" width="325" height="325" >}}

{{<hint info>}}
**Exercise**

Include the blue channel in the uv visualization (e.g., use blue with red or green channels).
{{</hint>}}
{{< p5-iframe sketch="/showcase/sketches/SHADERS/UV_v/UV_3D.js" width="335" height="345" >}}

## **Texture Sampling**
HSL( hue, saturation, lightness) y HSV ( hue, saturation, value o HSB con brightness) son formas alternativas de representar el modelo de color RGB.

- Hue (Tono): Es el color mismo, definido físicamente por una longitud de onda.
- Saturation (Saturación): Es qué tan puro o intenso es ese matiz. Entre menos intenso fuera este tono, el resultado sería que el color percibido tendería al gris.
- Lightness (Luminosidad): Es la intensidad lumínica. Una gran intensidad es muy brillante y la percibimos como blanco y, si no hay intensidad o luz, se vuelve negro.
- Value (Valor):Representa la altura en el eje blanco-negro. Los valores posibles van del 0 al 100%. 0 siempre es negro.

Luma: es el promedio ponderado de los valores RGB, basado en su contribución a la luminosidad percibida. Este se ha utilizado frecuentemente en la televisión.

Component average: es el promedio de los valores RGB.


{{< p5-iframe sketch="/showcase/sketches/SHADERS/brightness_tinting/brightness_tinting.js" width="725" height="525" >}}

**Conclusiones**

- El uso de diferentes herramientas de brillo y el tintado se pueden utilizar al tiempo para realizar diferentes cambios a una imagen.
- Utilizar, ademas de los anteriores, los distintos modos de mezcla de color permite que las imágenes generen o trasmitan diferentes sensaciones.

{{<hint warning>}}
### **Referencias**
- https://visualcomputing.github.io/docs/shaders/texturing/
- https://github.com/jamieowen/glsl-blend
{{</hint>}}