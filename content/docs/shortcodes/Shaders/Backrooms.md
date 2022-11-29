# **Backrooms**

**Marco teórico**

Se utilizaron dos _fragment shaders_ para incluir dos nuevos modelos de iluminación dentro de los _Backrooms_. 

{{< details title="sketch3.frag" open=false >}}
{{< highlight js >}}

// precision mediump float;

// // emitted by p5 color-group commands
// // https://p5js.org/reference/#group-Color
// uniform vec4 uMaterialColor;
// uniform vec4 ambient4;

// uniform float ambient;

// void main() {
//   // Ambient Light 
//   // gl_FragColor = (ambient + ambient4) * uMaterialColor;
//   gl_FragColor = (ambient) * uMaterialColor;
// }

precision mediump float;

uniform float ambient;
uniform vec4 uMaterialColor;
// uLightPosition is given in eye space
uniform vec3 uLightPosition;
// both, normal3 and position4 are given in eye space as well
varying vec3 normal3;
varying vec3 position4;

void main() {
  // solve the diffuse light equation discarding negative values
  // see: https://thebookofshaders.com/glossary/?search=max
  // see: https://thebookofshaders.com/glossary/?search=dot
  float diffuse = dot(uLightPosition, vec3(0.01,0.01,0.01)) / 10.0;
  gl_FragColor = (ambient + diffuse) * uMaterialColor;
}

{{< /highlight >}}
{{< /details >}}

{{< details title="sketch4.frag" open=false >}}
{{< highlight js >}}

precision mediump float;

// emitted by p5 color-group commands
// https://p5js.org/reference/#group-Color
uniform vec4 uMaterialColor;
uniform vec4 lightColor;
uniform float ambient;

void main() {
  vec4 ambient4 = lightColor * ambient;
  gl_FragColor = ambient * ambient4 * uMaterialColor;
}

{{< /highlight >}}
{{< /details >}}

**Resultados**

Enlace a los Backrooms:  [INSIDE THE BACKROOMS](https://sansanchezmo.github.io/SHADERS/BACKROOMS/index.html)

**Conclusiones**
- A partir de la experimetación realizada en este proyecto, pueden verse algunas aplicaciones de _shaders_, con el fin de mejorar y terminar el ambiente creado previamente.
- La interpretación o percepción que puede tenerse sobre cualquier tipo de contenido visual o audiovisual puede ser fácilmente manipulado si se tienen en cuenta aspectos importantes como lo son la iluminación, el movimiento y la dinámica de la composición.
