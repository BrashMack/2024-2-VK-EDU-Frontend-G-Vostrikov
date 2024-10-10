import './index.css';
import './mocks.js';

const form = document.querySelector('form');
const input = document.querySelector('.form-input');
const chatBody = document.querySelector('.chat-body');
const sendButton = document.querySelector('.submit');
let messages = JSON.parse(localStorage.getItem('messages')) || [];

function hhMM() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function addMessage(message, time, isUser, img) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.classList.add(isUser ? 'user' : 'other');

    const messageContent = document.createElement('div');
    if (!img) {
        messageContent.classList.add('message-content');
        messageContent.textContent = message;
    }
    else {
        messageContent.classList.add('message-img');
        const imageSrc = document.createElement('img');
        imageSrc.classList.add('img');
        imageSrc.setAttribute('src', img);
        imageSrc.setAttribute('alt', 'Отправленное изображение');
        messageContent.appendChild(imageSrc);
    }

    const messageTime = document.createElement('div');
    const timeSpan = document.createElement('span');
    messageTime.classList.add('message-time');
    timeSpan.textContent = time;
    if (isUser) {
        const checkIcon = document.createElement('i');
        checkIcon.classList.add('material-symbols-outlined', 'checked');
        if (time < hhMM()) {
            checkIcon.textContent = 'done_all';
        }
        else {
            checkIcon.textContent = 'check';
        }
        messageTime.appendChild(checkIcon);
    }
    messageTime.appendChild(timeSpan);

    messageContent.appendChild(messageTime);
    messageElement.appendChild(messageContent);
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;
}

messages.forEach(message => {
    addMessage(message.text, message.time, message.isUser, message.img);
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const messageText = input.value.trim();

    if (messageText) {
        messages.push({ text: messageText, time: hhMM(), isUser: true, img: "" });
        localStorage.setItem('messages', JSON.stringify(messages));
        input.value = '';
        addMessage(messageText, hhMM(), true, "");
    }
});

input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        form.dispatchEvent(new Event('submit'));
    }
});

sendButton.addEventListener('mouseup', () => {
    form.dispatchEvent(new Event('submit'));
});