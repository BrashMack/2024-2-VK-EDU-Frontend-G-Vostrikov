import './chatlist.css';
import './chats.js';

const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
const chatList = document.querySelector('.chat-list');
let chats = [];

document.addEventListener('DOMContentLoaded', function loadChats() {
    for (let i = 1; i <= localStorage.length; ++i) {
        let chat = JSON.parse(localStorage.getItem(`chat${i}`));
        if (chat) {
            chats.push(chat);
        }
    }
    chats.forEach((chat) => {
    addChat(chat.user, chat.avatar, chat.message, chat.time, chat.status.split(' '));
    });
});   

function addChat(user, avatar, message, time, status) {
    const chatElement = document.createElement('div');
    chatElement.classList.add('chat-item');
    chatElement.setAttribute('onclick', "window.location.href='index.html'");

    const imageSrc = document.createElement('img');
    imageSrc.classList.add('avatar');
    imageSrc.setAttribute('src', avatar);
    imageSrc.setAttribute('alt', 'Chat_icon');
    chatElement.appendChild(imageSrc);

    const userBlock = document.createElement('div');
    userBlock.classList.add('user-block');
    const chatName = document.createElement('h3');
    chatName.textContent = user;
    const lastMessage = document.createElement('p');
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

    chatList.appendChild(chatElement);
    chatList.scrollTop = chatList.scrollHeight;
}

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  header.classList.toggle('active');
});

const createChatButton = document.querySelector('.create-chat');

createChatButton.addEventListener('mouseenter', () => {
  createChatButton.style.transform = 'translateY(-5px)';
});

createChatButton.addEventListener('mouseleave', () => {
  createChatButton.style.transform = 'translateY(0)';
});
