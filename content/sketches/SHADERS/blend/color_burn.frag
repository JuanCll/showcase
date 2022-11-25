precision mediump float;

uniform vec4 uMaterial1;
uniform vec4 uMaterial2;

void main() {
  gl_FragColor = max((1.0-((1.0-uMaterial1)/uMaterial2)),0.0);
}