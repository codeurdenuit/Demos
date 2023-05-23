
import * as THREE from 'three'
import loader from 'gltfloader'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000)
camera.position.set(0, 2, 4)
camera.lookAt(0, 2, 0)

const geometry = await loader.loadGeometry('mesh.glb')
const texture = await loader.loadTexture('mario/texture.png')
const material = new THREE.MeshPhongMaterial({ map: texture, shininess: 0 })

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const light1 = new THREE.AmbientLight(0x505050)
const light2 = new THREE.DirectionalLight(0xeeeeee, 0.6)
light1.position.set(100, 100, 100)
scene.add(light1)
scene.add(light2)

const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(width, height)

renderer.render(scene, camera)

animate()
