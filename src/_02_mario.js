
import * as THREE from 'three'
import GLTFLoader from 'gltfloader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const width = window.innerWidth
const height = window.innerHeight

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000)
camera.position.set(0, 1.3, 4)
camera.lookAt(0, 1.3, 0)

const geometry = await GLTFLoader.loadGeometry('mario/mesh.glb')

const texture = await GLTFLoader.loadTexture('mario/texture.png')
//const material = new THREE.MeshBasicMaterial()
//const material = new THREE.MeshPhongMaterial()
const material = new THREE.MeshPhongMaterial({ map: texture, shininess: 0 })


const mesh = new THREE.Mesh(geometry, material)

const lightAmbient = new THREE.AmbientLight(0x505050)
const lightDir = new THREE.DirectionalLight(0xeeeeee, 0.6)
lightDir.position.set(100, 100, 100)


scene.add(lightDir)
scene.add(lightAmbient)
scene.add(mesh)

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)

const controls = new OrbitControls(camera, renderer.domElement)
controls.target.set(0.0, 1.3, 0)
controls.update()


renderer.render(scene, camera)

const test = document.getElementById('test')
test.innerHTML = "<h1>HELLLLO</h1>"

animate()


function animate() {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}


