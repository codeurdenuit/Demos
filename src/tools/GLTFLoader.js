import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
const loaderGlb = new GLTFLoader()

export default {
  loadGeometry: function loadGeometry(path) {
    return new Promise((resolve, reject) => {
      loaderGlb.load(path,
        function(gltf) {
          const geometries = gltf.scene.children
            .filter(child => child.type === 'Mesh')
            .map(mesh => mesh.geometry)
          if (geometries.length > 1) {
            resolve(geometries)
          } else {
            resolve(geometries[0])
          }
        }, undefined, function(e) {
          console.error(e)
          reject(e)
        })
    })
  },
  loadScene: function loadScene(path) {
    return new Promise((resolve, reject) => {
      loaderGlb.load(path,
        function(gltf) {
          resolve(gltf.scene)
        },
        undefined, function(e) {
          console.error(e)
          reject(e)
        })
    })
  }
}


