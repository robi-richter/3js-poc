import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, 0, 40);
camera.lookAt(new THREE.Vector3(10, 10, 0));

const container = document.getElementById('app');

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( 1280, 960 );
container.appendChild( renderer.domElement );


const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff01 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );


const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });

const lineGeometry = new THREE.Geometry();
lineGeometry.vertices.push(new THREE.Vector3(-10, 0, 0));
lineGeometry.vertices.push(new THREE.Vector3(0, 10, 0));
lineGeometry.vertices.push(new THREE.Vector3(10, 0, 0));

const line = new THREE.Line(lineGeometry, lineMaterial);

scene.add(line);

function animate() {
  requestAnimationFrame( animate );
  render();
}

function render() {
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
  renderer.render( scene, camera );
}

animate();
