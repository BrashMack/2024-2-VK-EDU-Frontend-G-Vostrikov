import React from "react";
import styles from "./ChatHeader.module.css";

export const ChatHeader = ({ chatData, onGoBack }) => {
  return (
    <header className={styles["chat-header"]}>
      <i
        className={`material-symbols-outlined ${styles.back} ${styles.toucheble}`}
        id="back-to-list"
        title="Назад"
        onClick={onGoBack}
      >
        arrow_back_ios_new
      </i>
      <img
        className={styles.avatar}
        src={chatData.avatar}
        alt={`Avatar for ${chatData.user}`}
      />
      <div className={styles["user-block"]}>
        <h2 className={styles["username"]}>{chatData.user}</h2>
        <span>{chatData.online}</span>
      </div>
      <div className={styles["header-right"]}></div>
    </header>
  );
};
