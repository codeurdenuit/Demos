  
  
  precision highp float;
  precision highp int;
  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  attribute vec3 position;
  attribute vec3 normal;
  attribute vec2 uv;
  varying vec3 vNormal;
  varying vec2 vUv;
  varying vec3 vViewDir;
  void main() {
    vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
    vec4 viewPosition = viewMatrix * worldPosition;
    vUv = uv;
    vNormal = (modelMatrix * vec4(normal, 0.0)).xyz;
    vViewDir = normalize(-viewPosition.xyz);
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  } 
  