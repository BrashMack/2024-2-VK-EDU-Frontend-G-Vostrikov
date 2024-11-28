import React from 'react';
import styles from './ChatItem.module.css';


function ChatItem({ chat, onClick }) {
  // Добавим обработку статуса "unread" с помощью условного рендеринга
  const unreadCount = chat.status.split(' ')[1] || 0;
  const hasUnreadMessages = parseInt(unreadCount, 10) > 0; //проверка на число unread сообщений

  return (
    <div className={styles.chatItem} onClick={onClick}>
      <img src={chat.avatar} alt={`Avatar for ${chat.user}`} className={styles.avatar} />
      <div className={styles.chatInfo}>
        <h3 className={styles.chatName}>{chat.user}</h3>
        <p className={styles.lastMessage}>{chat.message}</p>
      </div>
      <div className={styles.chatMeta}>
        <p className={styles.chatTime}>{chat.time}</p>
        {hasUnreadMessages && (
          <span className={styles.unreadCount}>{unreadCount}</span>
        )}
      </div>
    </div>
  );
}

export default ChatItem;
