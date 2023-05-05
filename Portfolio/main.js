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
const renderer = new TRHEE.WebGLRenderer();

//Arguments - width, height
renderer.setSize(innerWidth, innerHeight);
//Definindo o tamnho
renderer.setPixelRatio(devicePixelRatio);

document.body.appendChild(renderer.domElement);

//Posicionamento para ver o que vai ser renderizado
camera.position.z = 5;

//Criando o plano geometrico
const planeGeometry = new TRHEE.PlaneGeometry(5, 5, 10, 10);
//Definindo a cor, com iluminação
const planeMaterial = new TRHEE.MeshPhongMaterial({
  color: 0xFF0000,
  side: TRHEE.DoubleSide //Deixando os dois lados visiveis
});
//Criando o Mesh do plano
const planeMesh = new TRHEE.Mesh(planeGeometry, planeMaterial)
//Adicionando na Scene
scene.add(planeMesh);

//Adicionando Iluminação - Cor e intensidade
const light = new TRHEE.DirectionalLight(0xffffff, 1)
//Posicionando a luz eixos x y z
light.position.set(0, 0, 1);
//Adicionando a luz a scene
scene.add(light);

function animate(){
  requestAnimationFrame(animate);
  //Renderizando a Scene, varias vezes
  renderer.render(scene, camera);
}

animate();

