/*vec3 noise(vec3 p)
{
    return 1.0 - 2.0 * abs(0.5 - textureLod(iChannel0, p, 0.0).xyz);
}

vec3 r(vec3 n)
{
    return pow(n, vec3(6.0, 4.0, 9.0));
}

vec3 cnoise(vec3 p)
{
    vec3 size = 1.0 / vec3(textureSize(iChannel0, 0));
	vec3 n0 = noise(p * size * 1.0);
    vec3 n1 = noise(p * size * 2.0);
    vec3 n2 = noise(p * size * 4.0);
    vec3 n3 = noise(p * size * 8.0);
    return (
                       r(n0) * 0.5 +
        n0 *           r(n1) * 0.25 +
        n0 * n1 *      r(n2) * 0.125 +
        n0 * n1 * n2 * r(n3) * 0.0625) * 1.06667;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 uv = 5.0 * fragCoord / iResolution.y;
    vec3 n = cnoise(vec3(uv, 0.45 * iTime));

    fragColor = vec4(
        vec3(0.3, 0.0, 0.0) +
        vec3(0.7, 0.2, 0.2) * n.x + 
        vec3(0.1, 0.2, 0.1) * n.y + 
        vec3(1.0, 1.0, 3.0) * n.z,
        1.0);
}*/