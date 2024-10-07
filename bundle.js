/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n\nvar form = document.querySelector('form');\nvar input = document.querySelector('.form-input');\nvar chatBody = document.querySelector('.chat-body');\nvar sendButton = document.querySelector('.submit');\nvar messages = JSON.parse(localStorage.getItem('messages')) || [];\nfunction addMessage(message, isUser) {\n  var messageElement = document.createElement('div');\n  messageElement.classList.add('chat-message');\n  messageElement.classList.add(isUser ? 'user' : 'other');\n  var messageContent = document.createElement('div');\n  messageContent.classList.add('message-content');\n  messageContent.textContent = message;\n  var messageTime = document.createElement('div');\n  var timeSpan = document.createElement('span');\n  var checkIcon = document.createElement('i');\n  messageTime.classList.add('message-time');\n  messageTime.classList.add(isUser ? 'user' : '');\n  timeSpan.textContent = new Date().toLocaleTimeString([], {\n    hour: '2-digit',\n    minute: '2-digit'\n  });\n  checkIcon.classList.add('material-symbols-outlined', 'checked');\n  checkIcon.textContent = 'check';\n  messageTime.appendChild(checkIcon);\n  messageTime.appendChild(timeSpan);\n  messageContent.appendChild(messageTime);\n  messageElement.appendChild(messageContent);\n  chatBody.appendChild(messageElement);\n  chatBody.scrollTop = chatBody.scrollHeight;\n}\nmessages.forEach(function (message) {\n  addMessage(message.text, message.isUser);\n});\nform.addEventListener('submit', function (event) {\n  event.preventDefault();\n  var messageText = input.value.trim();\n  if (messageText) {\n    messages.push({\n      text: messageText,\n      isUser: true\n    });\n    localStorage.setItem('messages', JSON.stringify(messages));\n    input.value = '';\n    addMessage(messageText, true);\n  }\n});\ninput.addEventListener('keyup', function (event) {\n  if (event.key === 'Enter') {\n    form.dispatchEvent(new Event('submit'));\n  }\n});\nsendButton.addEventListener('mouseup', function (event) {\n  form.dispatchEvent(new Event('submit'));\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./index.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;