import './index.css';

const form = document.querySelector('form');
const input = document.querySelector('.form-input');
const chatBody = document.querySelector('.chat-body');
const sendButton = document.querySelector('.submit');
let messages = JSON.parse(localStorage.getItem('messages')) || [];

function addMessage(message, isUser) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.classList.add(isUser ? 'user' : 'other');

    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.textContent = message;

    const messageTime = document.createElement('div');
    const timeSpan = document.createElement('span');
    const checkIcon = document.createElement('i');
    messageTime.classList.add('message-time');
    messageTime.classList.add(isUser ? 'user' : '');
    timeSpan.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    checkIcon.classList.add('material-symbols-outlined', 'checked');
    checkIcon.textContent = 'check';
    messageTime.appendChild(checkIcon);
    messageTime.appendChild(timeSpan);

    messageContent.appendChild(messageTime);
    messageElement.appendChild(messageContent);
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;
}

messages.forEach(message => {
    addMessage(message.text, message.isUser);
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const messageText = input.value.trim();

    if (messageText) {
        messages.push({ text: messageText, isUser: true });
        localStorage.setItem('messages', JSON.stringify(messages));
        input.value = '';
        addMessage(messageText, true);
    }
});

input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        form.dispatchEvent(new Event('submit'));
    }
});

sendButton.addEventListener('mouseup', (event) => {
    form.dispatchEvent(new Event('submit'));
});