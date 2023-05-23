
import * as THREE from 'three'
import loader from 'gltfloader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000)
camera.position.set(0, 2, 4)
camera.lookAt(0, 2, 0)

const geometry = await loader.loadGeometry('mario/mesh.glb')
const texture = await loader.loadTexture('mario/texture.png')
const material = new THREE.MeshBasicMaterial({ map: texture, shininess: 0 })

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const light1 = new THREE.AmbientLight(0x505050)
const light2 = new THREE.DirectionalLight(0xeeeeee, 0.6)
light1.position.set(100, 100, 100)
light2.target = mesh
scene.add(light1)
scene.add(light2)

const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(width, height)

const controls = new OrbitControls(camera, renderer.domElement)
controls.target.set(0.0, 2, 0)
controls.update()


renderer.render(scene, camera)

animate()

function animate() {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}


