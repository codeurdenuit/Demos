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
  varying vec3 vViewDir;

  
  void main(void) {

    vec3 lightDirection = directionalLights[ 0 ].direction;
    vec3 lightColor = directionalLights[ 0 ].color;
    float shininess = 150.0;

    vec3 color = texture2D( map, vUv ).xyz;

    float diffuse =  max(0.0,dot(lightDirection,  vNormal));

    vec3 halfVector = normalize(lightDirection + vViewDir);
    float NdotH = dot(vNormal, halfVector);
    float specular = pow(max(0.0, NdotH), shininess);

    vec3 directionalLight = (diffuse + specular) * lightColor;
    
    vec3 colorFinal = color*( directionalLight+ambientLightColor );
    gl_FragColor = vec4(colorFinal,1.0);
  }