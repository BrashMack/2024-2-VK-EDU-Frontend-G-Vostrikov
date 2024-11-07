import { mocksRender } from './mocks.js';
import { switchView } from '../../index.js';

export function renderChat(number) {
    const chat = JSON.parse(localStorage.getItem(`chat${number}`));
    const user = chat.user;

    document.querySelector('#root').innerHTML = `
        <div class="chat-container">
            <div class="chat-header">
                <i class="material-symbols-outlined back toucheble" id="back-to-list" title="Назад">arrow_back_ios_new</i>
                <img class="avatar" src="${chat.avatar}" alt="Аватар">
                <div class="user-block">
                    <h2 class="username">${user}</h2>
                    <span>${chat.online}</span>
                </div>
                <div class="header-right">
                </div>
            </div>
            <div class="chat-body">
            </div>
            <form class="form">
                <div class="chat-footer">
                    <input class="form-input" name="message-text" type="text" placeholder="Сообщение">
                    <i class="material-symbols-outlined attach" title="Прикрепить файл">attach_file</i>
                    <div class="submit">
                        <i class="material-symbols-outlined send toucheble" title="Отправить">send</i>
                    </div>
                </div>
            </form>
        </div>
    `;

    document.querySelector('#back-to-list').addEventListener('click', () => {
        switchView('chatlist');
    });

    mocksRender(user);

    const form = document.querySelector('form');
    const input = document.querySelector('.form-input');
    const chatBody = document.querySelector('.chat-body');
    const sendButton = document.querySelector('.submit');
    let messages = [];

    function hhMM() {
        return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    for (let i = 1; i <= localStorage.length; ++i) {
        let message = JSON.parse(localStorage.getItem(`${user}${i}`));
        if (message) {
            messages.push(message);
        }
    }
    messages.forEach((message) => {
        addMessage(message.text, message.time, message.isUser, message.img, message.status);
    });

    function addMessage(message, time, isUser, img, status) {
        const messageElement = document.createElement('div');
        const fragment = document.createDocumentFragment();
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
            status === 'sent' ? checkIcon.textContent = 'check' : checkIcon.textContent = 'done_all';
            messageTime.appendChild(checkIcon);
        }
        else {
            if (chat.status.split(' ')[0] === 'unread') {
                chat.status = 'u_read';
                localStorage.setItem(`chat${number}`, JSON.stringify(chat));
            }
        }
        messageTime.appendChild(timeSpan);

        messageContent.appendChild(messageTime);
        fragment.appendChild(messageContent);
        messageElement.appendChild(fragment);
        chatBody?.appendChild(messageElement);
        if (chatBody) {
            chatBody.scrollTop = chatBody.scrollHeight;
        }
    }

    form?.addEventListener('submit', handleSubmit);

    function handleSubmit(event) {
        event.preventDefault();
        const messageText = input.value.trim();

        if (messageText) {
            messages.push({ text: messageText, time: hhMM(), isUser: true, img: "", status: "sent" });
            localStorage.setItem(`${user}${messages.length}`, JSON.stringify(messages[messages.length - 1]));
            input.value = '';
            addMessage(messageText, hhMM(), true, "", 'sent');

            updateLastMessage(messageText, hhMM(), '');
        }
    };

    input?.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            handleSubmit(event);
        }
    });

    sendButton?.addEventListener('mouseup', (event) => {
        handleSubmit(event);
    });

    function updateLastMessage(text, time) {
        chat.message = text;
        chat.time = time;
        chat.status = 'sent';
        localStorage.setItem(`chat${number}`, JSON.stringify(chat));
    }
}