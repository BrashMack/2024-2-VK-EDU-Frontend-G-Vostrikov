import React from "react";
import styles from "./ChatHeader.module.scss";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

export const ChatHeader = ({ chatData, onGoBack, onGoProfile }) => {
  return (
    <header className={styles["chat-header"]}>
      <ArrowBackIosOutlinedIcon
        className={`${styles.back} ${styles.toucheble}`}
        id="back-to-list"
        title="Назад"
        onClick={onGoBack}
      />
      <div className={styles["user-block"]} onClick={onGoProfile}>
        <img
          className={styles.avatar}
          src={chatData.avatar}
          alt={`Avatar for ${chatData.user}`}
        />
        <div className={styles["data-block"]}>
          <h2 className={styles.username}>{chatData.user}</h2>
          <span>{chatData.online}</span>
        </div>
      </div>
      <div className={styles["header-right"]}></div>
    </header>
  );
};
