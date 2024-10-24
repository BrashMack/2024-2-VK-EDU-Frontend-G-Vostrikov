import './chatlist.css';
import './chats.js';

const workflow = document.querySelector('.workflow');
const burger = document.querySelector('.burger');
const lines = document.querySelectorAll('.burger-line');
const popupMenu = document.querySelector('.popup-menu');
const createChats = document.querySelector('.create-chats');
const chatMenu = document.querySelector('.newchat-menu');
const cancelBtn = document.querySelector('.nocreate-chat');
const applyBtn = document.querySelector('.create-chat');
const chatList = document.querySelector('.chat-list');
const name = document.querySelector('#chat-name');
const url = document.querySelector('#chat-avatar');

document.addEventListener('DOMContentLoaded', function loadChats() {
    let chats = [];
    for (let i = 1; i <= localStorage.length; ++i) {
        let chat = JSON.parse(localStorage.getItem(`chat${i}`));
        if (chat) {
            chats.push(chat);
        }
    }
    chats.forEach((chat) => {
    addChat(chat.user, chat.avatar, chat.message, chat.time, chat.status.split(' '));
    });
   

    function addChat(user, avatar, message, time, status) {
        const chatElement = document.createElement('div');
        chatElement.classList.add('chat-item');
        if (user === "Дженнифер") {
            chatElement.setAttribute('onclick', "window.location.href='index.html'");
        }
        else {
            chatElement.setAttribute('onclick', 'alert("Этот чат пока не готов(")');
        }

        const imageSrc = document.createElement('img');
        imageSrc.classList.add('avatar');
        imageSrc.setAttribute('src', avatar);
        imageSrc.setAttribute('alt', 'Chat_icon');
        chatElement.appendChild(imageSrc);

        const userBlock = document.createElement('div');
        userBlock.classList.add('user-block');
        const chatName = document.createElement('h3');
        chatName.classList.add('chat-name');
        chatName.textContent = user;
        const lastMessage = document.createElement('p');
        lastMessage.classList.add('last-msg');
        lastMessage.textContent = message;
        userBlock.appendChild(chatName);
        userBlock.appendChild(lastMessage);
        chatElement.appendChild(userBlock);

        const timeBlock = document.createElement('div');
        timeBlock.classList.add('time-block');
        const lastTime = document.createElement('span');
        lastTime.classList.add('time');
        lastTime.textContent = time;
        timeBlock.appendChild(lastTime);
        let lastStatus;
        switch (status[0]) {
            case 'read':
                lastStatus = document.createElement('i');
                lastStatus.classList.add('material-symbols-outlined', 'checked');
                lastStatus.textContent = 'done_all';
                break;
            case 'sent':
                lastStatus = document.createElement('i');
                lastStatus.classList.add('material-symbols-outlined', 'checked');
                lastStatus.textContent = 'check';
                break;
            case 'unread':
                lastStatus = document.createElement('span');
                lastStatus.classList.add(status[0]);
                lastStatus.textContent = status[1];
                break;
            default:
                lastStatus = document.createElement('i');
                lastStatus.classList.add('material-symbols-outlined', 'checked');
                lastStatus.textContent = '';
                break;
        }
        timeBlock.appendChild(lastStatus);
        chatElement.appendChild(timeBlock);

        chatList?.appendChild(chatElement);
        if (chatList) {
            chatList.scrollTop = chatList.scrollHeight;
        }
    }

    burger?.addEventListener('click', function toggleBurger() {
        lines.forEach((line) => line.classList.toggle('active'));
        burger.classList.contains('active') ? popupMenu.style.display = 'none' : popupMenu.style.display = 'block';
        burger.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.burger') && burger?.classList.contains('active')) {
            popupMenu.style.display = 'none';
            burger.classList.toggle('active');
            lines.forEach((line) => line.classList.toggle('active'));
        }
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.newchat-menu') && !event.target.closest('.create-chats') && chatMenu?.style.display === 'block') {
            workflow.classList.remove('inactive');
            chatMenu.style.display = 'none';
            name.value = '';
            url.value = '';
        }
    });

    createChats?.addEventListener('click', function toggleMenu() {
        workflow.classList.add('inactive');
        chatMenu.style.display = 'block';
    });

    cancelBtn?.addEventListener('click', () => {
        const name = document.querySelector('#chat-name');
        const url = document.querySelector('#chat-avatar');
        name.value = '';
        url.value = '';
        chatMenu.style.display = 'none';
        workflow.classList.remove('inactive');
    });

    applyBtn?.addEventListener('click', handleChatCreate);
    
    function handleChatCreate() {
        if (name.value !== '') {
            if (url.value === '') {
                url.value = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';
            }
            chats.push({ user: name.value, avatar: url.value, message: 'нет сообщений', time: '', status: 'no' });
            localStorage.setItem(`chat${localStorage.length + 1}`, JSON.stringify(chats[chats.length - 1]));
            addChat(name.value, url.value, 'нет сообщений', '', 'no');
        }
        else if (chatMenu?.style.display === 'block') {
            alert('Название чата не может быть пустым');
        }
        name.value = '';
        url.value = '';
        chatMenu.style.display = 'none';
        workflow.classList.remove('inactive');
    };

    name?.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            handleChatCreate();
        }
    });

    url?.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            handleChatCreate();
        }
    });
});
