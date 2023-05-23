  precision highp float;
  precision highp int;

  struct DirectionalLight {
    vec3 direction;
    vec3 color;
  };

  uniform sampler2D map;
  uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
  uniform vec3 ambientLightColor;

  varying vec2 vUv;
  varying vec3 vNormal;


  void main(void) {

    vec3 lightDirection = directionalLights[ 0 ].direction;
    vec3 lightColor = directionalLights[ 0 ].color;

    vec3 color = texture2D( map, vUv ).xyz;

    float diffuse =  max(0.0,dot(lightDirection,  vNormal));

    vec3 light = diffuse * lightColor + ambientLightColor;
    
    vec3 colorFinal = color * light;
    //vec3 colorFinal = vec3(1.0, 1.0, 1.0) * light;
    //vec3 colorFinal = vec3(1.0,1.0,1.0);
    gl_FragColor = vec4(colorFinal,1.0);
  }