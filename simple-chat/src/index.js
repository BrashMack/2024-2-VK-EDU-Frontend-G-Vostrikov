import './index.css';
import { renderChatList } from './components/chatlist/chatlist.js';
import { renderChat } from './components/chat/chat.js';

let currentView = 'chatlist';

export function switchView(view) {
    currentView = view;
    render();
}

function render() {
    switch (currentView) {
        case 'chatlist':
            renderChatList();
            break;
        case 'chat':
            renderChat();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    switchView(currentView);
});