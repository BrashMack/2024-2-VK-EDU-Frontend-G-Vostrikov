import React, { useState } from 'react';
import styles from './ChatFooter.module.css';

function ChatFooter({ onSendMessage }) {
  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessageClick = () => {
    if (newMessage.trim() !== '') {
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      onSendMessage({ text: newMessage, time: timestamp, isUser: true, img: null, status: 'sent' });
      setNewMessage(''); // Очищаем поле ввода после отправки
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessageClick();
    }
  };

  return (
    <footer className={styles.chatFooter}>
      <input
        type="text"
        className={styles.messageInput}
        placeholder="Сообщение"
        value={newMessage}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button className={styles.sendButton} onClick={handleSendMessageClick}>
        Отправить
      </button>
    </footer>
  );
}

export default ChatFooter;
