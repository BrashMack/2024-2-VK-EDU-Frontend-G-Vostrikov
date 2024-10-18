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

/***/ "./chatlist.js":
/*!*********************!*\
  !*** ./chatlist.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chatlist_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatlist.css */ \"./chatlist.css\");\n/* harmony import */ var _chats_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chats.js */ \"./chats.js\");\n/* harmony import */ var _chats_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chats_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar burger = document.querySelector('.burger');\nvar lines = document.querySelectorAll('.burger-line');\nvar popupMenu = document.querySelector('.popup-menu');\nvar chatList = document.querySelector('.chat-list');\ndocument.addEventListener('DOMContentLoaded', function loadChats() {\n  var chats = [];\n  for (var i = 1; i <= localStorage.length; ++i) {\n    var chat = JSON.parse(localStorage.getItem(\"chat\".concat(i)));\n    if (chat) {\n      chats.push(chat);\n    }\n  }\n  chats.forEach(function (chat) {\n    addChat(chat.user, chat.avatar, chat.message, chat.time, chat.status.split(' '));\n  });\n  function addChat(user, avatar, message, time, status) {\n    var chatElement = document.createElement('div');\n    chatElement.classList.add('chat-item');\n    if (user === \"Дженнифер\") {\n      chatElement.setAttribute('onclick', \"window.location.href='index.html'\");\n    } else {\n      chatElement.setAttribute('onclick', 'alert(\"Этот чат пока не готов(\")');\n    }\n    var imageSrc = document.createElement('img');\n    imageSrc.classList.add('avatar');\n    imageSrc.setAttribute('src', avatar);\n    imageSrc.setAttribute('alt', 'Chat_icon');\n    chatElement.appendChild(imageSrc);\n    var userBlock = document.createElement('div');\n    userBlock.classList.add('user-block');\n    var chatName = document.createElement('h3');\n    chatName.classList.add('chat-name');\n    chatName.textContent = user;\n    var lastMessage = document.createElement('p');\n    lastMessage.classList.add('last-msg');\n    lastMessage.textContent = message;\n    userBlock.appendChild(chatName);\n    userBlock.appendChild(lastMessage);\n    chatElement.appendChild(userBlock);\n    var timeBlock = document.createElement('div');\n    timeBlock.classList.add('time-block');\n    var lastTime = document.createElement('span');\n    lastTime.classList.add('time');\n    lastTime.textContent = time;\n    timeBlock.appendChild(lastTime);\n    var lastStatus;\n    switch (status[0]) {\n      case 'read':\n        lastStatus = document.createElement('i');\n        lastStatus.classList.add('material-symbols-outlined', 'checked');\n        lastStatus.textContent = 'done_all';\n        break;\n      case 'sent':\n        lastStatus = document.createElement('i');\n        lastStatus.classList.add('material-symbols-outlined', 'checked');\n        lastStatus.textContent = 'check';\n        break;\n      case 'unread':\n        lastStatus = document.createElement('span');\n        lastStatus.classList.add(status[0]);\n        lastStatus.textContent = status[1];\n        timeBlock.appendChild(lastStatus);\n        break;\n    }\n    timeBlock.appendChild(lastStatus);\n    chatElement.appendChild(timeBlock);\n    chatList === null || chatList === void 0 || chatList.appendChild(chatElement);\n    if (chatList) {\n      chatList.scrollTop = chatList.scrollHeight;\n    }\n  }\n  burger === null || burger === void 0 || burger.addEventListener('click', function toggleBurger() {\n    lines.forEach(function (line) {\n      return line.classList.toggle('active');\n    });\n    burger.classList.contains('active') ? popupMenu.style.display = 'none' : popupMenu.style.display = 'block';\n    burger.classList.toggle('active');\n  });\n  document.addEventListener('click', function (event) {\n    if (!event.target.closest('.burger') && burger !== null && burger !== void 0 && burger.classList.contains('active')) {\n      popupMenu.style.display = 'none';\n      burger.classList.toggle('active');\n      lines.forEach(function (line) {\n        return line.classList.toggle('active');\n      });\n    }\n  });\n  var createChatButton = document.querySelector('.create-chat');\n  createChatButton === null || createChatButton === void 0 || createChatButton.addEventListener('mouseenter', function () {\n    createChatButton.style.transform = 'translateY(-5px)';\n  });\n  createChatButton === null || createChatButton === void 0 || createChatButton.addEventListener('mouseleave', function () {\n    createChatButton.style.transform = 'translateY(0)';\n  });\n});\n\n//# sourceURL=webpack:///./chatlist.js?");

/***/ }),

/***/ "./chats.js":
/*!******************!*\
  !*** ./chats.js ***!
  \******************/
/***/ (() => {

eval("var currentChats = [{\n  \"user\": \"Дженнифер\",\n  \"avatar\": \"https://avatar.iran.liara.run/public/98\",\n  \"message\": \"Джен, ты молодец!\",\n  \"time\": \"10:23\",\n  \"status\": \"read\"\n}, {\n  \"user\": \"Антон Коллега\",\n  \"avatar\": \"https://avatar.iran.liara.run/public/17\",\n  \"message\": \"Ты куда пропал?\",\n  \"time\": \"15:52\",\n  \"status\": \"unread 99\"\n}, {\n  \"user\": \"Серёга (должен 2к)\",\n  \"avatar\": \"https://avatar.iran.liara.run/public/42\",\n  \"message\": \"Серёг, где моё бабло?!\",\n  \"time\": \"15:52\",\n  \"status\": \"sent\"\n}];\nif (!localStorage.getItem('chat1')) {\n  var chatNumber = 0;\n  currentChats.forEach(function (currentChat) {\n    ++chatNumber;\n    localStorage.setItem(\"chat\".concat(chatNumber), JSON.stringify(currentChat));\n  });\n}\n\n//# sourceURL=webpack:///./chats.js?");

/***/ }),

/***/ "./chatlist.css":
/*!**********************!*\
  !*** ./chatlist.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./chatlist.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./chatlist.js");
/******/ 	
/******/ })()
;