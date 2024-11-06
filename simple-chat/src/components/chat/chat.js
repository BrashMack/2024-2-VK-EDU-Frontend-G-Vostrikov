import './mocks.js';
import { switchView } from '../../index.js';

export function renderChat() {
    document.querySelector('#root').innerHTML = `
        <div class="chat-container">
            <div class="chat-header">
                <i class="material-symbols-outlined back toucheble" id="back-to-list" title="Назад">arrow_back_ios_new</i>
                <img class="avatar" src="https://avatar.iran.liara.run/public/98" alt="Аватар">
                <div class="user-block">
                    <h2 class="username">Дженнифер</h2>
                    <span>в сети</span>
                </div>
                <div class="header-right">
                    <i class="material-symbols-outlined toucheble icons" title="Поиск">search</i>
                    <i class="material-symbols-outlined toucheble icons" title="Дополнительно">more_vert</i>
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

    const form = document.querySelector('form');
    const input = document.querySelector('.form-input');
    const chatBody = document.querySelector('.chat-body');
    const sendButton = document.querySelector('.submit');
    let chatId = 1;
    let messages = [];

    function hhMM() {
        return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    for (let i = 1; i <= localStorage.length; ++i) {
        let message = JSON.parse(localStorage.getItem(`message${i}`));
        if (message) {
            messages.push(message);
        }
    }
    messages.forEach((message) => {
        addMessage(message.text, message.time, message.isUser, message.img);
    });

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
            messages.push({ text: messageText, time: hhMM(), isUser: true, img: "" });
            localStorage.setItem(`message${localStorage.length + 1}`, JSON.stringify(messages[messages.length - 1]));
            input.value = '';
            addMessage(messageText, hhMM(), true, "");

            updateLastMessage(messageText, hhMM());
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
        const chat = JSON.parse(localStorage.getItem(`chat${chatId}`));
        chat.message = text;
        chat.time = time;
        chat.status = 'sent';
        localStorage.setItem(`chat${chatId}`, JSON.stringify(chat));
    }
}