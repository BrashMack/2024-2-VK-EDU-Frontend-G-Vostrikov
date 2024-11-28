import React from 'react';
import styles from './ChatHeader.module.css';

function ChatHeader({ chatData, onGoBack }) {
  return (
    <header className={styles.chatHeader}>
      <button className={styles.backButton} onClick={onGoBack}>
        &lt; Назад
      </button>
      <img src={chatData.avatar} alt={`Avatar for ${chatData.user}`} className={styles.avatar} />
      <div className={styles.userInfo}>
        <h2 className={styles.userName}>{chatData.user}</h2>
        <p className={styles.userStatus}>{chatData.online}</p>
      </div>
      {/*  Здесь можно добавить другие элементы заголовка, например,  кнопки */}
    </header>
  );
}

export default ChatHeader;
