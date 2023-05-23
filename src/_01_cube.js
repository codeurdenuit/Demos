import * as THREE from 'three'

const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 )
camera.position.z = 400

const scene = new THREE.Scene()

const texture = new THREE.TextureLoader().load( 'cube/diamond.jpg' )

const geometry = new THREE.BoxGeometry( 200, 200, 200 )
const material = new THREE.MeshBasicMaterial( { map: texture } )

const mesh = new THREE.Mesh( geometry, material )
scene.add( mesh )

const renderer = new THREE.WebGLRenderer( { canvas, antialias: true } )
renderer.setSize( window.innerWidth, window.innerHeight )
renderer.render( scene, camera )
animate()

function animate(){
  requestAnimationFrame( animate )
  mesh.rotation.x += 0.005
  mesh.rotation.y += 0.01
  renderer.render( scene, camera )
}
