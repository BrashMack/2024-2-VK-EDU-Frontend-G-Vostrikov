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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chatlist_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatlist.css */ \"./chatlist.css\");\n/* harmony import */ var _chats_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chats.js */ \"./chats.js\");\n/* harmony import */ var _chats_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chats_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar workflow = document.querySelector('.workflow');\nvar burger = document.querySelector('.burger');\nvar lines = document.querySelectorAll('.burger-line');\nvar popupMenu = document.querySelector('.popup-menu');\nvar createChats = document.querySelector('.create-chats');\nvar chatMenu = document.querySelector('.newchat-menu');\nvar cancelBtn = document.querySelector('.nocreate-chat');\nvar applyBtn = document.querySelector('.create-chat');\nvar chatList = document.querySelector('.chat-list');\nvar name = document.querySelector('#chat-name');\nvar url = document.querySelector('#chat-avatar');\ndocument.addEventListener('DOMContentLoaded', function loadChats() {\n  var chats = [];\n  for (var i = 1; i <= localStorage.length; ++i) {\n    var chat = JSON.parse(localStorage.getItem(\"chat\".concat(i)));\n    if (chat) {\n      chats.push(chat);\n    }\n  }\n  chats.forEach(function (chat) {\n    addChat(chat.user, chat.avatar, chat.message, chat.time, chat.status.split(' '));\n  });\n  function addChat(user, avatar, message, time, status) {\n    var chatElement = document.createElement('div');\n    chatElement.classList.add('chat-item');\n    if (user === \"Дженнифер\") {\n      chatElement.setAttribute('onclick', \"window.location.href='index.html'\");\n    } else {\n      chatElement.setAttribute('onclick', 'alert(\"Этот чат пока не готов(\")');\n    }\n    var imageSrc = document.createElement('img');\n    imageSrc.classList.add('avatar');\n    imageSrc.setAttribute('src', avatar);\n    imageSrc.setAttribute('alt', 'Chat_icon');\n    chatElement.appendChild(imageSrc);\n    var userBlock = document.createElement('div');\n    userBlock.classList.add('user-block');\n    var chatName = document.createElement('h3');\n    chatName.classList.add('chat-name');\n    chatName.textContent = user;\n    var lastMessage = document.createElement('p');\n    lastMessage.classList.add('last-msg');\n    lastMessage.textContent = message;\n    userBlock.appendChild(chatName);\n    userBlock.appendChild(lastMessage);\n    chatElement.appendChild(userBlock);\n    var timeBlock = document.createElement('div');\n    timeBlock.classList.add('time-block');\n    var lastTime = document.createElement('span');\n    lastTime.classList.add('time');\n    lastTime.textContent = time;\n    timeBlock.appendChild(lastTime);\n    var lastStatus;\n    switch (status[0]) {\n      case 'read':\n        lastStatus = document.createElement('i');\n        lastStatus.classList.add('material-symbols-outlined', 'checked');\n        lastStatus.textContent = 'done_all';\n        break;\n      case 'sent':\n        lastStatus = document.createElement('i');\n        lastStatus.classList.add('material-symbols-outlined', 'checked');\n        lastStatus.textContent = 'check';\n        break;\n      case 'unread':\n        lastStatus = document.createElement('span');\n        lastStatus.classList.add(status[0]);\n        lastStatus.textContent = status[1];\n        break;\n      default:\n        lastStatus = document.createElement('i');\n        lastStatus.classList.add('material-symbols-outlined', 'checked');\n        lastStatus.textContent = '';\n        break;\n    }\n    timeBlock.appendChild(lastStatus);\n    chatElement.appendChild(timeBlock);\n    chatList === null || chatList === void 0 || chatList.appendChild(chatElement);\n    if (chatList) {\n      chatList.scrollTop = chatList.scrollHeight;\n    }\n  }\n  burger === null || burger === void 0 || burger.addEventListener('click', function toggleBurger() {\n    lines.forEach(function (line) {\n      return line.classList.toggle('active');\n    });\n    burger.classList.contains('active') ? popupMenu.style.display = 'none' : popupMenu.style.display = 'block';\n    burger.classList.toggle('active');\n  });\n  document.addEventListener('click', function (event) {\n    if (!event.target.closest('.burger') && burger !== null && burger !== void 0 && burger.classList.contains('active')) {\n      popupMenu.style.display = 'none';\n      burger.classList.toggle('active');\n      lines.forEach(function (line) {\n        return line.classList.toggle('active');\n      });\n    }\n  });\n  document.addEventListener('click', function (event) {\n    if (!event.target.closest('.newchat-menu') && !event.target.closest('.create-chats') && (chatMenu === null || chatMenu === void 0 ? void 0 : chatMenu.style.display) === 'block') {\n      workflow.classList.remove('inactive');\n      chatMenu.style.display = 'none';\n      name.value = '';\n      url.value = '';\n    }\n  });\n  createChats === null || createChats === void 0 || createChats.addEventListener('click', function toggleMenu() {\n    workflow.classList.add('inactive');\n    chatMenu.style.display = 'block';\n  });\n  cancelBtn === null || cancelBtn === void 0 || cancelBtn.addEventListener('click', function () {\n    var name = document.querySelector('#chat-name');\n    var url = document.querySelector('#chat-avatar');\n    name.value = '';\n    url.value = '';\n    chatMenu.style.display = 'none';\n    workflow.classList.remove('inactive');\n  });\n  applyBtn === null || applyBtn === void 0 || applyBtn.addEventListener('click', handleChatCreate);\n  function handleChatCreate() {\n    if (name.value !== '') {\n      if (url.value === '') {\n        url.value = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';\n      }\n      chats.push({\n        user: name.value,\n        avatar: url.value,\n        message: 'нет сообщений',\n        time: '',\n        status: 'no'\n      });\n      localStorage.setItem(\"chat\".concat(localStorage.length + 1), JSON.stringify(chats[chats.length - 1]));\n      addChat(name.value, url.value, 'нет сообщений', '', 'no');\n    } else if ((chatMenu === null || chatMenu === void 0 ? void 0 : chatMenu.style.display) === 'block') {\n      alert('Название чата не может быть пустым');\n    }\n    name.value = '';\n    url.value = '';\n    chatMenu.style.display = 'none';\n    workflow.classList.remove('inactive');\n  }\n  ;\n  name === null || name === void 0 || name.addEventListener('keyup', function (event) {\n    if (event.key === 'Enter') {\n      handleChatCreate();\n    }\n  });\n  url === null || url === void 0 || url.addEventListener('keyup', function (event) {\n    if (event.key === 'Enter') {\n      handleChatCreate();\n    }\n  });\n});\n\n//# sourceURL=webpack:///./chatlist.js?");

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