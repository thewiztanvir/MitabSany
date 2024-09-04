import "./styles.css";
import Vapi from "@vapi-ai/web";

const apiKey = process.env.VAPI_API_KEY;

function initializeAgent(buttonId, assistantId) {
  const vapi = new Vapi(apiKey);
  const button = document.getElementById(buttonId);
  let colorState = 0;
  let called = false;

  function callVapi() {
    console.log(`Called ${buttonId}`);
    vapi.start(assistantId);
    vapi.send({
      type: "add-message",
      message: {
        role: "system",
        content: `The user has pressed the ${buttonId}, say peanuts`,
      },
    });
  }

  function endVapi() {
    console.log(`Called end${buttonId}`);
    vapi.stop();
  }

  button.addEventListener("click", () => {
    if (called) {
      endVapi();
      called = false;
    } else {
      callVapi();
      called = true;
    }
    colorState = (colorState + 1) % 2;
    button.className = "vapiButton"; // Reset all classes
    if (colorState === 1) {
      button.classList.add("red");
    } else {
      button.classList.add("blue");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initializeAgent("vapiButton1", process.env.VAPI_ASSISTANT_ID1);
  initializeAgent("vapiButton2", process.env.VAPI_ASSISTANT_ID2);

  // Add more agents as needed
  // initializeAgent("vapiButton3", process.env.VAPI_ASSISTANT_ID3);
});

 // Three.js scene setup
 const scene = new THREE.Scene();
 const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
 const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
 renderer.setSize(window.innerWidth, window.innerHeight);
 document.getElementById('scene-container').appendChild(renderer.domElement);

 // Create a galaxy of particles
 const particlesGeometry = new THREE.BufferGeometry();
 const particlesCount = 5000;
 const posArray = new Float32Array(particlesCount * 3);

 for (let i = 0; i < particlesCount * 3; i++) {
   posArray[i] = (Math.random() - 0.5) * 5;
 }

 particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

 const particlesMaterial = new THREE.PointsMaterial({
   size: 0.005,
   color: 0x00ffff,
 });

 const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
 scene.add(particlesMesh);

 camera.position.z = 3;

 // Animation loop
 function animate() {
   requestAnimationFrame(animate);
   particlesMesh.rotation.y += 0.001;
   renderer.render(scene, camera);
 }
 animate();

 // Responsive design
 window.addEventListener('resize', () => {
   camera.aspect = window.innerWidth / window.innerHeight;
   camera.updateProjectionMatrix();
   renderer.setSize(window.innerWidth, window.innerHeight);
 });

 // Parallax effect
 document.addEventListener('mousemove', (event) => {
   const mouseX = event.clientX / window.innerWidth - 0.5;
   const mouseY = event.clientY / window.innerHeight - 0.5;
   particlesMesh.rotation.y = mouseX * 0.1;
   particlesMesh.rotation.x = mouseY * 0.1;
 });


//  hamburger icon 

document.getElementById('hamburger-button').addEventListener('click', function () {
  var menu = document.getElementById('navbar-mobile');
  menu.classList.toggle('hidden');
});