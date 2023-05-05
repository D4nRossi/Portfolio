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
renderer.setSize(innerWidth, innerHeight)
document.body.appendChild(renderer.domElement)
Scenes, Cameras, and Renderers