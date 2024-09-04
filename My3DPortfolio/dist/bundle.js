/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@vapi-ai/web/dist/vapi.js":
/*!************************************************!*\
  !*** ./node_modules/@vapi-ai/web/dist/vapi.js ***!
  \************************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/mitabsany/Documents/Personal Projects/MySite/My3DPortfolio/node_modules/@vapi-ai/web/dist/vapi.js'\");\n\n//# sourceURL=webpack://dist/./node_modules/@vapi-ai/web/dist/vapi.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './styles.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _vapi_ai_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vapi-ai/web */ \"./node_modules/@vapi-ai/web/dist/vapi.js\");\n/* harmony import */ var _vapi_ai_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vapi_ai_web__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst apiKey = \"MISSING_ENV_VAR\".VAPI_API_KEY;\n\nfunction initializeAgent(buttonId, assistantId) {\n  const vapi = new (_vapi_ai_web__WEBPACK_IMPORTED_MODULE_1___default())(apiKey);\n  const button = document.getElementById(buttonId);\n  let colorState = 0;\n  let called = false;\n\n  function callVapi() {\n    console.log(`Called ${buttonId}`);\n    vapi.start(assistantId);\n    vapi.send({\n      type: \"add-message\",\n      message: {\n        role: \"system\",\n        content: `The user has pressed the ${buttonId}, say peanuts`,\n      },\n    });\n  }\n\n  function endVapi() {\n    console.log(`Called end${buttonId}`);\n    vapi.stop();\n  }\n\n  button.addEventListener(\"click\", () => {\n    if (called) {\n      endVapi();\n      called = false;\n    } else {\n      callVapi();\n      called = true;\n    }\n    colorState = (colorState + 1) % 2;\n    button.className = \"vapiButton\"; // Reset all classes\n    if (colorState === 1) {\n      button.classList.add(\"red\");\n    } else {\n      button.classList.add(\"blue\");\n    }\n  });\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  initializeAgent(\"vapiButton1\", \"MISSING_ENV_VAR\".VAPI_ASSISTANT_ID1);\n  initializeAgent(\"vapiButton2\", \"MISSING_ENV_VAR\".VAPI_ASSISTANT_ID2);\n\n  // Add more agents as needed\n  // initializeAgent(\"vapiButton3\", process.env.VAPI_ASSISTANT_ID3);\n});\n\n // Three.js scene setup\n const scene = new THREE.Scene();\n const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });\n renderer.setSize(window.innerWidth, window.innerHeight);\n document.getElementById('scene-container').appendChild(renderer.domElement);\n\n // Create a galaxy of particles\n const particlesGeometry = new THREE.BufferGeometry();\n const particlesCount = 5000;\n const posArray = new Float32Array(particlesCount * 3);\n\n for (let i = 0; i < particlesCount * 3; i++) {\n   posArray[i] = (Math.random() - 0.5) * 5;\n }\n\n particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));\n\n const particlesMaterial = new THREE.PointsMaterial({\n   size: 0.005,\n   color: 0x00ffff,\n });\n\n const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);\n scene.add(particlesMesh);\n\n camera.position.z = 3;\n\n // Animation loop\n function animate() {\n   requestAnimationFrame(animate);\n   particlesMesh.rotation.y += 0.001;\n   renderer.render(scene, camera);\n }\n animate();\n\n // Responsive design\n window.addEventListener('resize', () => {\n   camera.aspect = window.innerWidth / window.innerHeight;\n   camera.updateProjectionMatrix();\n   renderer.setSize(window.innerWidth, window.innerHeight);\n });\n\n // Parallax effect\n document.addEventListener('mousemove', (event) => {\n   const mouseX = event.clientX / window.innerWidth - 0.5;\n   const mouseY = event.clientY / window.innerHeight - 0.5;\n   particlesMesh.rotation.y = mouseX * 0.1;\n   particlesMesh.rotation.x = mouseY * 0.1;\n });\n\n\n//  hamburger icon \n\ndocument.getElementById('hamburger-button').addEventListener('click', function () {\n  var menu = document.getElementById('navbar-mobile');\n  menu.classList.toggle('hidden');\n});\n\n//# sourceURL=webpack://dist/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;