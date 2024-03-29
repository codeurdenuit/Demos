
import * as THREE from 'three'
import GLTFLoader from 'gltfloader'
import material from './materialDiffuse'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const width = window.innerWidth
const height = window.innerHeight

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000)
camera.position.set(0, 1, 3)
camera.lookAt(0, 1, 0)

const geometry = await GLTFLoader.loadGeometry('link/mesh.glb')

const texture = await GLTFLoader.loadTexture('link/texture.png')
material.uniforms.map.value = texture
const mesh = new THREE.Mesh(geometry, material)

const lightAmbient = new THREE.AmbientLight(0x303030)
const lightDir = new THREE.DirectionalLight(0x808080, 0.6)
lightDir.position.set(100, 100, 300)


scene.add(lightDir)
scene.add(lightAmbient)
scene.add(mesh)

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)

const controls = new OrbitControls(camera, renderer.domElement)
controls.target.set(0.0, 1, 0)
controls.update()
renderer.render(scene, camera)

animate()

function animate() {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}


