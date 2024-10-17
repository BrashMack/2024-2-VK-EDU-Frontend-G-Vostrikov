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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _mocks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mocks.js */ \"./mocks.js\");\n/* harmony import */ var _mocks_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mocks_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar form = document.querySelector('form');\nvar input = document.querySelector('.form-input');\nvar chatBody = document.querySelector('.chat-body');\nvar sendButton = document.querySelector('.submit');\nvar chatId = 1;\nvar messages = [];\ndocument.addEventListener('DOMContentLoaded', function loadMessages() {\n  for (var i = 1; i <= localStorage.length; ++i) {\n    var message = JSON.parse(localStorage.getItem(\"message\".concat(i)));\n    if (message) {\n      messages.push(message);\n    }\n  }\n  messages.forEach(function (message) {\n    addMessage(message.text, message.time, message.isUser, message.img);\n  });\n});\nfunction hhMM() {\n  return new Date().toLocaleTimeString([], {\n    hour: '2-digit',\n    minute: '2-digit'\n  });\n}\nfunction addMessage(message, time, isUser, img) {\n  var messageElement = document.createElement('div');\n  messageElement.classList.add('chat-message');\n  messageElement.classList.add(isUser ? 'user' : 'other');\n  var messageContent = document.createElement('div');\n  if (!img) {\n    messageContent.classList.add('message-content');\n    messageContent.textContent = message;\n  } else {\n    messageContent.classList.add('message-img');\n    var imageSrc = document.createElement('img');\n    imageSrc.classList.add('img');\n    imageSrc.setAttribute('src', img);\n    imageSrc.setAttribute('alt', 'Отправленное изображение');\n    messageContent.appendChild(imageSrc);\n  }\n  var messageTime = document.createElement('div');\n  var timeSpan = document.createElement('span');\n  messageTime.classList.add('message-time');\n  timeSpan.textContent = time;\n  if (isUser) {\n    var checkIcon = document.createElement('i');\n    checkIcon.classList.add('material-symbols-outlined', 'checked');\n    if (time < hhMM()) {\n      checkIcon.textContent = 'done_all';\n    } else {\n      checkIcon.textContent = 'check';\n    }\n    messageTime.appendChild(checkIcon);\n  }\n  messageTime.appendChild(timeSpan);\n  messageContent.appendChild(messageTime);\n  messageElement.appendChild(messageContent);\n  chatBody.appendChild(messageElement);\n  chatBody.scrollTop = chatBody.scrollHeight;\n}\nform.addEventListener('submit', handleSubmit);\nfunction handleSubmit(event) {\n  event.preventDefault();\n  var messageText = input.value.trim();\n  if (messageText) {\n    messages.push({\n      text: messageText,\n      time: hhMM(),\n      isUser: true,\n      img: \"\"\n    });\n    localStorage.setItem(\"message\".concat(localStorage.length + 1), JSON.stringify(messages[messages.length - 1]));\n    input.value = '';\n    addMessage(messageText, hhMM(), true, \"\");\n    updateLastMessage(messageText, hhMM());\n  }\n}\n;\ninput.addEventListener('keyup', function (event) {\n  if (event.key === 'Enter') {\n    handleSubmit(event);\n  }\n});\nsendButton.addEventListener('mouseup', function (event) {\n  handleSubmit(event);\n});\nfunction updateLastMessage(text, time) {\n  var chat = JSON.parse(localStorage.getItem(\"chat\".concat(chatId)));\n  chat.message = text;\n  chat.time = time;\n  chat.status = 'sent';\n  localStorage.setItem(\"chat\".concat(chatId), JSON.stringify(chat));\n}\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./mocks.js":
/*!******************!*\
  !*** ./mocks.js ***!
  \******************/
/***/ (() => {

eval("var currentMessages = [{\n  \"text\": \"Я тут кое-что нарисовала! Посмотри как будет время!\",\n  \"time\": \"10:23\",\n  \"isUser\": false,\n  \"img\": \"\"\n}, {\n  \"text\": \"Тебе нравится как я нарисовала?\",\n  \"time\": \"10:23\",\n  \"isUser\": false,\n  \"img\": \"\"\n}, {\n  \"text\": \"\",\n  \"time\": \"10:23\",\n  \"isUser\": false,\n  \"img\": \"https://loremflickr.com/320/240/landscape,drawing/all\"\n}, {\n  \"text\": \"Горжусь тобой! Ты крутая!\",\n  \"time\": \"10:23\",\n  \"isUser\": true,\n  \"img\": \"\"\n}, {\n  \"text\": \"Джен, ты молодец!\",\n  \"time\": \"10:23\",\n  \"isUser\": true,\n  \"img\": \"\"\n}];\nif (!localStorage.getItem('message1')) {\n  var messageNumber = 0;\n  currentMessages.forEach(function (currentMessage) {\n    ++messageNumber;\n    localStorage.setItem(\"message\".concat(messageNumber), JSON.stringify(currentMessage));\n  });\n}\n\n//# sourceURL=webpack:///./mocks.js?");

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;