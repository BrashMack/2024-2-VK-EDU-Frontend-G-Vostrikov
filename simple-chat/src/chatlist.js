import './chatlist.css';
import './chats.js';

const burger = document.querySelector('.burger');
const lines = document.querySelectorAll('.burger-line');
const popupMenu = document.querySelector('.popup-menu');
const chatList = document.querySelector('.chat-list');

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
                lastStatus.textContent = status[1]
                timeBlock.appendChild(lastStatus);
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

    const createChatButton = document.querySelector('.create-chat');

    createChatButton?.addEventListener('mouseenter', () => {
    createChatButton.style.transform = 'translateY(-5px)';
    });

    createChatButton?.addEventListener('mouseleave', () => {
    createChatButton.style.transform = 'translateY(0)';
    });
});