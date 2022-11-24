precision mediump float;

// uniforms are defined and sent by the sketch
uniform sampler2D texture;
uniform int brightnessO;

// interpolated texcoord (same name and type as in vertex shader)
varying vec2 texcoords2;

// returns luma of given texel
float luma(vec3 texel) {
  return 0.299 * texel.r + 0.587 * texel.g + 0.114 * texel.b;
}
float hsv(vec3 texel){
  return max(max(texel.r, texel.g), texel.b);
}
float hsl(vec3 texel){
  float maxColor = max(max(texel.r, texel.g), texel.b);
  float minColor = min(min(texel.r, texel.g), texel.b);

  return (maxColor + minColor)/2.0;
}

void main() {
  // texture2D(texture, texcoords2) samples texture at texcoords2 
  // and returns the normalized texel color
  vec4 texel = texture2D(texture, texcoords2);
  
  if (brightnessO == 0){
    texel = texel;
  }
  else if (brightnessO == 1){
    texel = vec4((vec3(luma(texel.rgb))), 1.0);
  }
  else if (brightnessO == 2){
    texel = vec4((vec3(hsv(texel.rgb))), 1.0);
  }
  else if (brightnessO == 3){
    texel = vec4((vec3(hsl(texel.rgb))), 1.0);
  }
  gl_FragColor = texel;
}