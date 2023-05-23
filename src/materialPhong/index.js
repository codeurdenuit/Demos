import * as THREE from 'three'
import vertex from './vertex.glsl'
import pixel from './pixel.glsl'

const vertShader = vertex

const fragShader = pixel

const uniforms = THREE.UniformsUtils.merge([
  THREE.UniformsLib['lights']
]);

uniforms.map = { type: 't', value: 0 }

const material = new THREE.RawShaderMaterial({
  uniforms: uniforms,
  vertexShader: vertShader,
  fragmentShader: fragShader,
  transparent: true,
  lights: true
});

export default material;
