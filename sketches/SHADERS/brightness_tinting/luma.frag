precision mediump float;

// uniforms are defined and sent by the sketch
uniform sampler2D texture;
uniform int brightnessO;
uniform int opcionS;
uniform vec4 color_tinte;
uniform bool tinte_a;

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

vec4 blend(vec4 texel){
  return color_tinte * texel;
}

vec4 add(vec4 texel){
  return color_tinte + texel;
}

vec4 difference(vec4 texel){
  return max(texel, color_tinte) - min(texel, color_tinte);
}

vec4 lightest(vec4 texel){
  return max(color_tinte, texel);
}

vec4 darkest(vec4 texel){
  return min(color_tinte, texel);
}
vec4 burn(vec4 texel){
  return max((1.0-((1.0-color_tinte)/texel)),0.0);
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

  if (tinte_a){
    if (opcionS == 1){
      texel = blend(texel);
    }
    else if (opcionS == 2){
      texel = add(texel);
    }
    else if (opcionS == 3) {
      texel = difference(texel);
    }
    else if (opcionS == 4){
      texel = lightest(texel);
    }
    else if (opcionS == 5){
      texel = darkest(texel);
    }
    else if (opcionS == 6){
      texel = burn(texel);
    }
  }


  gl_FragColor = texel;
}