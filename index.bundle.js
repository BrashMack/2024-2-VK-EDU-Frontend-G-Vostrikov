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

/***/ "./components/chat/chat.js":
/*!*********************************!*\
  !*** ./components/chat/chat.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderChat: () => (/* binding */ renderChat)\n/* harmony export */ });\n/* harmony import */ var _mocks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mocks.js */ \"./components/chat/mocks.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index.js */ \"./index.js\");\n\n\nfunction renderChat(number) {\n  var chat = JSON.parse(localStorage.getItem(\"chat\".concat(number)));\n  var user = chat.user;\n  document.querySelector('#root').innerHTML = '';\n  document.querySelector('#root').insertAdjacentHTML('afterbegin', \"\\n        <div class=\\\"chat-container\\\">\\n            <div class=\\\"chat-header\\\">\\n                <i class=\\\"material-symbols-outlined back toucheble\\\" id=\\\"back-to-list\\\" title=\\\"\\u041D\\u0430\\u0437\\u0430\\u0434\\\">arrow_back_ios_new</i>\\n                <img class=\\\"avatar\\\" src=\\\"\".concat(chat.avatar, \"\\\" alt=\\\"\\u0410\\u0432\\u0430\\u0442\\u0430\\u0440\\\">\\n                <div class=\\\"user-block\\\">\\n                    <h2 class=\\\"username\\\">\").concat(user, \"</h2>\\n                    <span>\").concat(chat.online, \"</span>\\n                </div>\\n                <div class=\\\"header-right\\\">\\n                </div>\\n            </div>\\n            <div class=\\\"chat-body\\\">\\n            </div>\\n            <form class=\\\"form\\\">\\n                <div class=\\\"chat-footer\\\">\\n                    <input class=\\\"form-input\\\" name=\\\"message-text\\\" type=\\\"text\\\" placeholder=\\\"\\u0421\\u043E\\u043E\\u0431\\u0449\\u0435\\u043D\\u0438\\u0435\\\">\\n                    <i class=\\\"material-symbols-outlined attach\\\" title=\\\"\\u041F\\u0440\\u0438\\u043A\\u0440\\u0435\\u043F\\u0438\\u0442\\u044C \\u0444\\u0430\\u0439\\u043B\\\">attach_file</i>\\n                    <div class=\\\"submit\\\">\\n                        <i class=\\\"material-symbols-outlined send toucheble\\\" title=\\\"\\u041E\\u0442\\u043F\\u0440\\u0430\\u0432\\u0438\\u0442\\u044C\\\">send</i>\\n                    </div>\\n                </div>\\n            </form>\\n        </div>\\n    \"));\n  document.querySelector('#back-to-list').addEventListener('click', function () {\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.switchView)('chatlist');\n  });\n  (0,_mocks_js__WEBPACK_IMPORTED_MODULE_0__.mocksRender)(user);\n  var form = document.querySelector('form');\n  var input = document.querySelector('.form-input');\n  var chatBody = document.querySelector('.chat-body');\n  var sendButton = document.querySelector('.submit');\n  var messages = [];\n  function hhMM() {\n    return new Date().toLocaleTimeString([], {\n      hour: '2-digit',\n      minute: '2-digit'\n    });\n  }\n  for (var i = 1; i <= localStorage.length; ++i) {\n    var message = JSON.parse(localStorage.getItem(\"\".concat(user).concat(i)));\n    if (message) {\n      messages.push(message);\n    }\n  }\n  for (var _i = 0; _i < messages.length; ++_i) {\n    addMessage(messages[_i].text, messages[_i].time, messages[_i].isUser, messages[_i].img, messages[_i].status, _i + 1, false);\n  }\n  function addMessage(message, time, isUser, img, status, message_number, animate) {\n    var messageElement = document.createElement('div');\n    var fragment = document.createDocumentFragment();\n    messageElement.classList.add('chat-message');\n    messageElement.classList.add(isUser ? 'user' : 'other');\n    if (animate) {\n      messageElement.classList.add('new-popup');\n    }\n    var messageContent = document.createElement('div');\n    if (!img) {\n      messageContent.classList.add('message-content');\n      messageContent.textContent = message;\n    } else {\n      messageContent.classList.add('message-img');\n      var imageSrc = document.createElement('img');\n      imageSrc.classList.add('img');\n      imageSrc.setAttribute('src', img);\n      imageSrc.setAttribute('alt', 'Отправленное изображение');\n      messageContent.appendChild(imageSrc);\n    }\n    var messageTime = document.createElement('div');\n    var timeSpan = document.createElement('span');\n    messageTime.classList.add('message-time');\n    timeSpan.textContent = time;\n    if (isUser) {\n      var checkIcon = document.createElement('i');\n      checkIcon.classList.add('material-symbols-outlined', 'checked');\n      status === 'sent' ? checkIcon.textContent = 'check' : checkIcon.textContent = 'done_all';\n      messageTime.appendChild(checkIcon);\n    } else {\n      if (chat.status.split(' ')[0] === 'unread' || status === 'unread') {\n        messageContent.classList.add('new-message');\n        chat.status = 'u_read';\n        localStorage.setItem(\"chat\".concat(number), JSON.stringify(chat));\n        var statusChange = JSON.parse(localStorage.getItem(\"\".concat(user).concat(message_number)));\n        statusChange.status = '';\n        localStorage.setItem(\"\".concat(user).concat(message_number), JSON.stringify(statusChange));\n      }\n    }\n    messageTime.appendChild(timeSpan);\n    messageContent.appendChild(messageTime);\n    fragment.appendChild(messageContent);\n    messageElement.appendChild(fragment);\n    chatBody === null || chatBody === void 0 || chatBody.appendChild(messageElement);\n    if (chatBody) {\n      chatBody.scrollTop = chatBody.scrollHeight;\n    }\n  }\n  form === null || form === void 0 || form.addEventListener('submit', handleSubmit);\n  function handleSubmit(event) {\n    event.preventDefault();\n    var messageText = input.value.trim();\n    if (messageText) {\n      messages.push({\n        text: messageText,\n        time: hhMM(),\n        isUser: true,\n        img: \"\",\n        status: \"sent\"\n      });\n      localStorage.setItem(\"\".concat(user).concat(messages.length), JSON.stringify(messages[messages.length - 1]));\n      input.value = '';\n      addMessage(messageText, hhMM(), true, \"\", 'sent', messages.length, true);\n      updateLastMessage(messageText, hhMM(), '');\n    }\n  }\n  ;\n  input === null || input === void 0 || input.addEventListener('keyup', function (event) {\n    if (event.key === 'Enter') {\n      handleSubmit(event);\n    }\n  });\n  sendButton === null || sendButton === void 0 || sendButton.addEventListener('mouseup', function (event) {\n    handleSubmit(event);\n  });\n  function updateLastMessage(text, time) {\n    chat.message = text;\n    chat.time = time;\n    chat.status = 'sent';\n    localStorage.setItem(\"chat\".concat(number), JSON.stringify(chat));\n  }\n}\n\n//# sourceURL=webpack:///./components/chat/chat.js?");

/***/ }),

/***/ "./components/chat/mocks.js":
/*!**********************************!*\
  !*** ./components/chat/mocks.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mocksRender: () => (/* binding */ mocksRender)\n/* harmony export */ });\nfunction mocksRender(name) {\n  var currentMessages = [];\n  switch (name) {\n    case 'Дженнифер':\n      currentMessages = [{\n        \"text\": \"Я тут кое-что нарисовала! Посмотри как будет время!\",\n        \"time\": \"10:23\",\n        \"isUser\": false,\n        \"img\": \"\",\n        \"status\": \"\"\n      }, {\n        \"text\": \"Тебе нравится как я нарисовала?\",\n        \"time\": \"10:23\",\n        \"isUser\": false,\n        \"img\": \"\",\n        \"status\": \"\"\n      }, {\n        \"text\": \"\",\n        \"time\": \"10:23\",\n        \"isUser\": false,\n        \"img\": \"https://loremflickr.com/320/240/landscape,drawing/all\",\n        \"status\": \"\"\n      }, {\n        \"text\": \"Горжусь тобой! Ты крутая!\",\n        \"time\": \"10:23\",\n        \"isUser\": true,\n        \"img\": \"\",\n        \"status\": \"read\"\n      }, {\n        \"text\": \"Джен, ты молодец!\",\n        \"time\": \"10:23\",\n        \"isUser\": true,\n        \"img\": \"\",\n        \"status\": \"read\"\n      }];\n      break;\n    case 'Антон Коллега':\n      currentMessages = [{\n        \"text\": \"Как же меня достала эта работа!\",\n        \"time\": \"2:45\",\n        \"isUser\": true,\n        \"img\": \"\",\n        \"status\": \"read\"\n      }, {\n        \"text\": \"Привет, ты где?! Тебя начальник обыскался.\",\n        \"time\": \"8:50\",\n        \"isUser\": false,\n        \"img\": \"\",\n        \"status\": \"unread\"\n      }, {\n        \"text\": \"Ты куда пропал?\",\n        \"time\": \"15:52\",\n        \"isUser\": false,\n        \"img\": \"\",\n        \"status\": \"unread\"\n      }];\n      break;\n    case 'Серёга (должен 2к)':\n      currentMessages = [{\n        \"text\": \"Серёг, где моё бабло?!\",\n        \"time\": \"15:52\",\n        \"isUser\": true,\n        \"img\": \"\",\n        \"status\": \"sent\"\n      }];\n      break;\n  }\n  if (!localStorage.getItem(\"\".concat(name, \"1\"))) {\n    var messageNumber = 0;\n    currentMessages.forEach(function (currentMessage) {\n      ++messageNumber;\n      localStorage.setItem(\"\".concat(name).concat(messageNumber), JSON.stringify(currentMessage));\n    });\n  }\n  return;\n}\n\n//# sourceURL=webpack:///./components/chat/mocks.js?");

/***/ }),

/***/ "./components/chatlist/chatlist.js":
/*!*****************************************!*\
  !*** ./components/chatlist/chatlist.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderChatList: () => (/* binding */ renderChatList)\n/* harmony export */ });\n/* harmony import */ var _chats_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chats.js */ \"./components/chatlist/chats.js\");\n/* harmony import */ var _chats_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chats_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index.js */ \"./index.js\");\n\n\nfunction renderChatList() {\n  document.querySelector('#root').innerHTML = '';\n  document.querySelector('#root').insertAdjacentHTML('afterbegin', \"\\n        <div class=\\\"container\\\">\\n            <div class=\\\"workflow\\\">\\n                <header class=\\\"header\\\">\\n                    <div class=\\\"burger\\\" aria-expanded=\\\"false\\\" aria-controls=\\\"list\\\">\\n                        <div class=\\\"burger-line\\\"></div>\\n                        <div class=\\\"burger-line\\\"></div>\\n                        <div class=\\\"burger-line\\\"></div>\\n                    </div>\\n                    <ul class=\\\"menu\\\" id=\\\"list\\\" aria-hidden=\\\"true\\\">\\n                        <li class=\\\"menu-item\\\">\\n                            <a href=\\\"#\\\" class=\\\"menu-link\\\" tabindex=\\\"-1\\\">\\u041F\\u0440\\u043E\\u0444\\u0438\\u043B\\u044C</a>\\n                        </li>\\n                        <li class=\\\"menu-item\\\">\\n                            <a href=\\\"#\\\" class=\\\"menu-link\\\" tabindex=\\\"-1\\\">\\u041D\\u0430\\u0441\\u0442\\u0440\\u043E\\u0439\\u043A\\u0438</a>\\n                        </li>\\n                        <li class=\\\"menu-item\\\">\\n                            <a href=\\\"#\\\" class=\\\"menu-link\\\" tabindex=\\\"-1\\\">\\u0412\\u044B\\u0445\\u043E\\u0434</a>\\n                        </li>\\n                    </ul>\\n                    <h2 class=\\\"app\\\">Messenger</h2>\\n                    <div class=\\\"search\\\">\\n                    </div>\\n                </header>\\n                <div class=\\\"chat-list\\\">\\n                </div>\\n                <div>\\n                    <div class=\\\"create-chats\\\" title=\\\"\\u0421\\u043E\\u0437\\u0434\\u0430\\u0442\\u044C \\u0447\\u0430\\u0442\\\">\\n                        <i class=\\\"material-symbols-outlined icon-plus\\\">add</i>\\n                    </div>\\n                </div>\\n            </div>\\n            <div class=\\\"newchat-menu\\\">\\n                <div class=\\\"chatmenu-header\\\">\\n                    <h3 class=\\\"chatmenu-title\\\">\\u0421\\u043E\\u0437\\u0434\\u0430\\u0442\\u044C \\u0447\\u0430\\u0442</h3>\\n                    <div class=\\\"nocreate-chat\\\">\\n                        <i class=\\\"material-symbols-outlined chat-menu-cancel\\\" title=\\\"\\u041E\\u0442\\u043C\\u0435\\u043D\\u0430\\\">close</i>\\n                    </div>\\n                </div>\\n                <div class=\\\"chat-menu-blocks\\\">\\n                    <input type=\\\"text\\\" class=\\\"chatmenu-lines\\\" id=\\\"chat-name\\\" placeholder=\\\"\\u041D\\u0430\\u0437\\u0432\\u0430\\u043D\\u0438\\u0435 \\u0447\\u0430\\u0442\\u0430\\\">\\n                </div>\\n                <div class=\\\"chat-menu-blocks\\\">\\n                    <input type=\\\"file\\\" id=\\\"avatar-input\\\" accept=\\\"image/*\\\">\\n                    <label for=\\\"avatar-input\\\" class=\\\"avatar-label\\\" title=\\\"\\u0410\\u0432\\u0430\\u0442\\u0430\\u0440 \\u0447\\u0430\\u0442\\u0430\\\">\\n                        <img src=\\\"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png\\\"\\n                            id=\\\"avatar-placeholder\\\" class=\\\"avatar-selected\\\" alt=\\\"\\u0410\\u0432\\u0430\\u0442\\u0430\\u0440 \\u0447\\u0430\\u0442\\u0430\\\">\\n                    </label>\\n                </div>\\n                <div class=\\\"chat-menu-blocks\\\">\\n                    <button class=\\\"chat-menu-apply material-symbols-outlined\\\" title=\\\"\\u041F\\u043E\\u0434\\u0442\\u0432\\u0435\\u0440\\u0434\\u0438\\u0442\\u044C\\\">\\n                        \\u0421\\u043E\\u0437\\u0434\\u0430\\u0442\\u044C\\n                    </button>\\n                </div>\\n            </div>\\n        </div>\\n    \");\n  var workflow = document.querySelector('.workflow');\n  var chatList = document.querySelector('.chat-list');\n  var burger = document.querySelector('.burger');\n  var lines = document.querySelectorAll('.burger-line');\n  var menu = document.querySelector('.menu');\n  var menuLinks = document.querySelectorAll('.menu-link');\n  var menuItems = document.querySelectorAll('.menu-item');\n  var createChats = document.querySelector('.create-chats');\n  var chatMenu = document.querySelector('.newchat-menu');\n  var cancelBtn = document.querySelector('.nocreate-chat');\n  var applyBtn = document.querySelector('.chat-menu-apply');\n  var name = document.querySelector('#chat-name');\n  var avatarInput = document.querySelector('#avatar-input');\n  var avatarPreview = document.querySelector('#avatar-placeholder');\n  var baseURL = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';\n  var avatarURL = null;\n  var chats = [];\n  for (var i = 1; i <= localStorage.length; ++i) {\n    var chat = JSON.parse(localStorage.getItem(\"chat\".concat(i)));\n    if (chat) {\n      chats.push(chat);\n    }\n  }\n  for (var _i = 0; _i < chats.length; ++_i) {\n    addChat(chats[_i].user, chats[_i].avatar, chats[_i].message, chats[_i].time, chats[_i].status.split(' '), _i + 1);\n  }\n  function addChat(user, avatar, message, time, status, number) {\n    var chatElement = document.createElement('div');\n    var fragment = document.createDocumentFragment();\n    chatElement.classList.add('chat-item');\n    chatElement.addEventListener('click', function () {\n      (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.switchView)(number);\n    });\n    var imageSrc = document.createElement('img');\n    imageSrc.classList.add('avatar');\n    imageSrc.setAttribute('src', avatar);\n    imageSrc.setAttribute('alt', 'Chat_icon');\n    fragment.appendChild(imageSrc);\n    var userBlock = document.createElement('div');\n    userBlock.classList.add('user-block');\n    var chatName = document.createElement('h3');\n    chatName.classList.add('chat-name');\n    chatName.textContent = user;\n    var lastMessage = document.createElement('p');\n    lastMessage.classList.add('last-msg');\n    lastMessage.textContent = message;\n    userBlock.appendChild(chatName);\n    userBlock.appendChild(lastMessage);\n    fragment.appendChild(userBlock);\n    var timeBlock = document.createElement('div');\n    timeBlock.classList.add('time-block');\n    var lastTime = document.createElement('span');\n    lastTime.classList.add('time');\n    lastTime.textContent = time;\n    timeBlock.appendChild(lastTime);\n    var lastStatus;\n    switch (status[0]) {\n      case 'read':\n        lastStatus = document.createElement('i');\n        lastStatus.classList.add('material-symbols-outlined', 'checked');\n        lastStatus.textContent = 'done_all';\n        break;\n      case 'sent':\n        lastStatus = document.createElement('i');\n        lastStatus.classList.add('material-symbols-outlined', 'checked');\n        lastStatus.textContent = 'check';\n        break;\n      case 'unread':\n        lastStatus = document.createElement('span');\n        lastStatus.classList.add(status[0]);\n        lastStatus.textContent = status[1];\n        break;\n      default:\n        lastStatus = document.createElement('i');\n        lastStatus.classList.add('material-symbols-outlined', 'u-read');\n        lastStatus.textContent = 'check';\n        break;\n    }\n    timeBlock.appendChild(lastStatus);\n    fragment.appendChild(timeBlock);\n    chatElement.appendChild(fragment);\n    chatList === null || chatList === void 0 || chatList.appendChild(chatElement);\n    if (chatList) {\n      chatList.scrollTop = chatList.scrollHeight;\n    }\n  }\n  burger === null || burger === void 0 || burger.addEventListener('click', function toggleBurger() {\n    lines.forEach(function (line) {\n      return line.classList.toggle('cross');\n    });\n    burger.classList.toggle('active');\n    menuItems.forEach(function (item) {\n      return item.classList.toggle('active');\n    });\n    if (burger.classList.contains('active')) {\n      burger.setAttribute('aria-expanded', 'true');\n      menu.setAttribute('aria-hidden', 'false');\n      menuLinks.forEach(function (link) {\n        return link.setAttribute('tabindex', '0');\n      });\n    } else {\n      burger.setAttribute('aria-expanded', 'false');\n      menu.setAttribute('aria-hidden', 'true');\n      menuLinks.forEach(function (link) {\n        return link.setAttribute('tabindex', '-1');\n      });\n    }\n  });\n  document.addEventListener('click', function (event) {\n    if (!event.target.closest('.burger') && burger !== null && burger !== void 0 && burger.classList.contains('active')) {\n      burger.classList.toggle('active');\n      menuItems.forEach(function (item) {\n        return item.classList.toggle('active');\n      });\n      lines.forEach(function (line) {\n        return line.classList.toggle('cross');\n      });\n    }\n  });\n  document.addEventListener('click', function (event) {\n    if (!event.target.closest('.newchat-menu') && !event.target.closest('.create-chats') && (chatMenu === null || chatMenu === void 0 ? void 0 : chatMenu.style.display) === 'block') {\n      workflow.classList.toggle('inactive');\n      chatMenu.classList.toggle('modal-popup');\n      chatMenu.style.display = 'none';\n      name.value = '';\n      name.placeholder = 'Название чата';\n      name.classList.remove('warning');\n      avatarURL = null;\n      avatarPreview.src = baseURL;\n    }\n  });\n  createChats === null || createChats === void 0 || createChats.addEventListener('click', function toggleMenu() {\n    workflow.classList.toggle('inactive');\n    chatMenu.style.display = 'block';\n    chatMenu.classList.toggle('modal-popup');\n  });\n  cancelBtn === null || cancelBtn === void 0 || cancelBtn.addEventListener('click', function () {\n    var name = document.querySelector('#chat-name');\n    name.value = '';\n    name.placeholder = 'Название чата';\n    name.classList.remove('warning');\n    avatarURL = null;\n    avatarPreview.src = baseURL;\n    chatMenu.classList.toggle('modal-popup');\n    chatMenu.style.display = 'none';\n    workflow.classList.toggle('inactive');\n  });\n  applyBtn === null || applyBtn === void 0 || applyBtn.addEventListener('click', handleChatCreate);\n  avatarInput === null || avatarInput === void 0 || avatarInput.addEventListener('change', handleFiles, false);\n  function handleFiles() {\n    var _this = this;\n    var file = this.files[this.files.length - 1];\n    avatarURL = window.URL.createObjectURL(file);\n    avatarPreview.src = avatarURL ? avatarURL : baseURL;\n    avatarPreview.onload = function () {\n      window.URL.revokeObjectURL(_this.src);\n    };\n    this.files = null;\n    this.value = '';\n  }\n  function handleChatCreate() {\n    if (name.value !== '') {\n      if (!avatarURL) {\n        avatarURL = baseURL;\n      }\n      chats.push({\n        user: name.value,\n        avatar: avatarURL,\n        message: 'нет сообщений',\n        time: '',\n        status: 'no',\n        online: 'в сети'\n      });\n      localStorage.setItem(\"chat\".concat(chats.length), JSON.stringify(chats[chats.length - 1]));\n      addChat(name.value, avatarURL, 'нет сообщений', '', 'no', chats.length);\n      name.value = '';\n      name.placeholder = 'Название чата';\n      name.classList.remove('warning');\n      avatarURL = null;\n      avatarPreview.src = baseURL;\n      chatMenu.classList.toggle('modal-popup');\n      chatMenu.style.display = 'none';\n      workflow.classList.toggle('inactive');\n    } else if ((chatMenu === null || chatMenu === void 0 ? void 0 : chatMenu.style.display) === 'block') {\n      name.placeholder = 'Название чата не может быть пустым';\n      name.classList.add('warning');\n    }\n  }\n  ;\n  name === null || name === void 0 || name.addEventListener('keyup', function (event) {\n    if (event.key === 'Enter') {\n      handleChatCreate();\n    }\n  });\n}\n\n//# sourceURL=webpack:///./components/chatlist/chatlist.js?");

/***/ }),

/***/ "./components/chatlist/chats.js":
/*!**************************************!*\
  !*** ./components/chatlist/chats.js ***!
  \**************************************/
/***/ (() => {

eval("var currentChats = [{\n  \"user\": \"Дженнифер\",\n  \"avatar\": \"https://avatar.iran.liara.run/public/98\",\n  \"message\": \"Джен, ты молодец!\",\n  \"time\": \"10:23\",\n  \"status\": \"read\",\n  \"online\": \"в сети\"\n}, {\n  \"user\": \"Антон Коллега\",\n  \"avatar\": \"https://avatar.iran.liara.run/public/17\",\n  \"message\": \"Ты куда пропал?\",\n  \"time\": \"15:52\",\n  \"status\": \"unread 2\",\n  \"online\": \"был 10 мин назад\"\n}, {\n  \"user\": \"Серёга (должен 2к)\",\n  \"avatar\": \"https://avatar.iran.liara.run/public/42\",\n  \"message\": \"Серёг, где моё бабло?!\",\n  \"time\": \"15:52\",\n  \"status\": \"sent\",\n  \"online\": \"был недавно\"\n}];\nif (!localStorage.getItem('chat1')) {\n  var chatNumber = 0;\n  currentChats.forEach(function (currentChat) {\n    ++chatNumber;\n    localStorage.setItem(\"chat\".concat(chatNumber), JSON.stringify(currentChat));\n  });\n}\n\n//# sourceURL=webpack:///./components/chatlist/chats.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   switchView: () => (/* binding */ switchView)\n/* harmony export */ });\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _components_chatlist_chatlist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/chatlist/chatlist.js */ \"./components/chatlist/chatlist.js\");\n/* harmony import */ var _components_chat_chat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/chat/chat.js */ \"./components/chat/chat.js\");\n\n\n\nvar currentView = 'chatlist';\nfunction switchView(view) {\n  currentView = view;\n  render();\n}\nfunction render() {\n  switch (currentView) {\n    case 'chatlist':\n      (0,_components_chatlist_chatlist_js__WEBPACK_IMPORTED_MODULE_1__.renderChatList)();\n      break;\n    default:\n      (0,_components_chat_chat_js__WEBPACK_IMPORTED_MODULE_2__.renderChat)(currentView);\n  }\n}\ndocument.addEventListener('DOMContentLoaded', function () {\n  switchView(currentView);\n});\n\n//# sourceURL=webpack:///./index.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;