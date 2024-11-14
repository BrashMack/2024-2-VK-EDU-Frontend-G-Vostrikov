import './chats.js';
import { switchView } from '../../index.js';

export function renderChatList() {
    document.querySelector('#root').innerHTML = '';
    document.querySelector('#root').insertAdjacentHTML('afterbegin', `
        <div class="container">
            <div class="workflow">
                <header class="header">
                    <div class="burger" aria-expanded="false" aria-controls="list">
                        <div class="burger-line"></div>
                        <div class="burger-line"></div>
                        <div class="burger-line"></div>
                    </div>
                    <ul class="menu" id="list" aria-hidden="true">
                        <li class="menu-item">
                            <a href="#" class="menu-link" tabindex="-1">Профиль</a>
                        </li>
                        <li class="menu-item">
                            <a href="#" class="menu-link" tabindex="-1">Настройки</a>
                        </li>
                        <li class="menu-item">
                            <a href="#" class="menu-link" tabindex="-1">Выход</a>
                        </li>
                    </ul>
                    <h2 class="app">Messenger</h2>
                    <div class="search">
                    </div>
                </header>
                <div class="chat-list">
                </div>
                <div>
                    <div class="create-chats" title="Создать чат">
                        <i class="material-symbols-outlined icon-plus">add</i>
                    </div>
                </div>
            </div>
            <div class="newchat-menu">
                <div class="chatmenu-header">
                    <h3 class="chatmenu-title">Создать чат</h3>
                    <div class="nocreate-chat">
                        <i class="material-symbols-outlined chat-menu-cancel" title="Отмена">close</i>
                    </div>
                </div>
                <div class="chat-menu-blocks">
                    <input type="text" class="chatmenu-lines" id="chat-name" placeholder="Название чата">
                </div>
                <div class="chat-menu-blocks">
                    <input type="file" id="avatar-input" accept="image/*">
                    <label for="avatar-input" class="avatar-label" title="Аватар чата">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                            id="avatar-placeholder" class="avatar-selected" alt="Аватар чата">
                    </label>
                </div>
                <div class="chat-menu-blocks">
                    <button class="chat-menu-apply material-symbols-outlined" title="Подтвердить">
                        Создать
                    </button>
                </div>
            </div>
        </div>
    `);

    const workflow = document.querySelector('.workflow');
    const chatList = document.querySelector('.chat-list');

    const burger = document.querySelector('.burger');
    const lines = document.querySelectorAll('.burger-line');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu-link');
    const menuItems = document.querySelectorAll('.menu-item');

    const createChats = document.querySelector('.create-chats');
    const chatMenu = document.querySelector('.newchat-menu');
    const cancelBtn = document.querySelector('.nocreate-chat');
    const applyBtn = document.querySelector('.chat-menu-apply');
    const name = document.querySelector('#chat-name');
    const avatarInput = document.querySelector('#avatar-input');
    const avatarPreview = document.querySelector('#avatar-placeholder');
    const baseURL = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';
    let avatarURL = null;

    let chats = [];
    for (let i = 1; i <= localStorage.length; ++i) {
        let chat = JSON.parse(localStorage.getItem(`chat${i}`));
        if (chat) {
            chats.push(chat);
        }
    }

    for (let i = 0; i < chats.length; ++i) {
        addChat(chats[i].user, chats[i].avatar, chats[i].message, chats[i].time, chats[i].status.split(' '), i+1);
    }

    function addChat(user, avatar, message, time, status, number) {
        const chatElement = document.createElement('div');
        const fragment = document.createDocumentFragment();
        chatElement.classList.add('chat-item');

        chatElement.addEventListener('click', () => {
            switchView(number);
        });

        const imageSrc = document.createElement('img');
        imageSrc.classList.add('avatar');
        imageSrc.setAttribute('src', avatar);
        imageSrc.setAttribute('alt', 'Chat_icon');
        fragment.appendChild(imageSrc);

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
        fragment.appendChild(userBlock);

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
                lastStatus.classList.add('material-symbols-outlined', 'u-read');
                lastStatus.textContent = 'check';
                break;
        }
        timeBlock.appendChild(lastStatus);
        fragment.appendChild(timeBlock);
        chatElement.appendChild(fragment)
        chatList?.appendChild(chatElement);
        if (chatList) {
            chatList.scrollTop = chatList.scrollHeight;
        }
    }

    burger?.addEventListener('click', function toggleBurger() {
        lines.forEach((line) => line.classList.toggle('cross'));
        burger.classList.toggle('active');
        menuItems.forEach((item) => item.classList.toggle('active'));

        if (burger.classList.contains('active')) {
            burger.setAttribute('aria-expanded', 'true')
            menu.setAttribute('aria-hidden', 'false')
            menuLinks.forEach((link) => link.setAttribute('tabindex', '0'))
        }
        else {
            burger.setAttribute('aria-expanded', 'false')
            menu.setAttribute('aria-hidden', 'true')
            menuLinks.forEach((link) => link.setAttribute('tabindex', '-1'))
        }
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.burger') && burger?.classList.contains('active')) {
            burger.classList.toggle('active');
            menuItems.forEach((item) => item.classList.toggle('active'));
            lines.forEach((line) => line.classList.toggle('cross'));
        }
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.newchat-menu') && !event.target.closest('.create-chats') && chatMenu?.style.display === 'block') {
            workflow.classList.toggle('inactive');
            chatMenu.classList.toggle('modal-popup');
            chatMenu.style.display = 'none';
            name.value = '';
            name.placeholder = 'Название чата';
            name.classList.remove('warning');
            avatarURL = null;
            avatarPreview.src = baseURL;
        }
    });

    createChats?.addEventListener('click', function toggleMenu() {
        workflow.classList.toggle('inactive');
        chatMenu.style.display = 'block';
        chatMenu.classList.toggle('modal-popup');
    });

    cancelBtn?.addEventListener('click', () => {
        const name = document.querySelector('#chat-name');
        name.value = '';
        name.placeholder = 'Название чата';
        name.classList.remove('warning');
        avatarURL = null;
        avatarPreview.src = baseURL;
        chatMenu.classList.toggle('modal-popup');
        chatMenu.style.display = 'none';
        workflow.classList.toggle('inactive');
    });

    applyBtn?.addEventListener('click', handleChatCreate);

    avatarInput?.addEventListener('change', handleFiles, false);

    function handleFiles() {
        const file = this.files[this.files.length - 1];
        avatarURL = window.URL.createObjectURL(file);
        avatarPreview.src = avatarURL ? avatarURL : baseURL;
        avatarPreview.onload = () => {
            window.URL.revokeObjectURL(this.src);
        }
        this.files = null;
        this.value = '';
    }

    function handleChatCreate() {
        if (name.value !== '') {
            if (!avatarURL) {
                avatarURL = baseURL;
            }
            chats.push({ user: name.value, avatar: avatarURL, message: 'нет сообщений', time: '', status: 'no', online: 'в сети' });
            localStorage.setItem(`chat${chats.length}`, JSON.stringify(chats[chats.length - 1]));
            addChat(name.value, avatarURL, 'нет сообщений', '', 'no', chats.length);
            name.value = '';
            name.placeholder = 'Название чата';
            name.classList.remove('warning');
            avatarURL = null;
            avatarPreview.src = baseURL;
            chatMenu.classList.toggle('modal-popup');
            chatMenu.style.display = 'none';
            workflow.classList.toggle('inactive');
        }
        else if (chatMenu?.style.display === 'block') {
            name.placeholder = 'Название чата не может быть пустым';
            name.classList.add('warning');
        }
    };

    name?.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            handleChatCreate();
        }
    });
}
