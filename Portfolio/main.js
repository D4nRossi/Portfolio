//Código Default
/*import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))*/

//Formatado
import * as TRHEE from 'https://unpkg.com/three@0.126.1/build/three.module.js';

const scene = new TRHEE.Scene();
//Camera arguments - field of view, scene aspect ratio, clipping plan
const camera = new TRHEE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
//Renderer
const renderer = new TRHEE.WebGLRenderer()
console.log(scene);
console.log(camera);
console.log(renderer);

//Arguments - width, height
renderer.setSize(innerWidth, innerHeight);
//Definindo o tamnho
renderer.setPixelRatio(devicePixelRatio);

document.body.appendChild(renderer.domElement);
//Arguments - width, length, hight
const boxGeometry = new TRHEE.BoxGeometry(1, 1, 1);
console.log(boxGeometry);

//Arguments - hex color
const material = new TRHEE.MeshBasicMaterial({
  color: 0x00FF00
});
console.log(material);

//Junção do Geometry e do Material
const mesh = new TRHEE.Mesh(boxGeometry, material);
console.log(mesh);

//Adicionando o Mesh a Scene
scene.add(mesh);
//Posicionamento para ver o que vai ser renderizado
camera.position.z = 5;

function animate(){
  requestAnimationFrame(animate);
  //Renderizando a Scene, varias vezes
  renderer.render(scene, camera);
  //Adicionando movimentos aos eixos
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
}

animate();

