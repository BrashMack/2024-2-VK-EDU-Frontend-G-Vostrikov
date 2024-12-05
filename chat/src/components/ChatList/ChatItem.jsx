import React from "react";
import styles from "./ChatItem.module.css";

export const ChatItem = ({ chat, onClick }) => {
  const status = chat.status.split(" ");
  const noStatus = () => {
    if (
      status[0] !== "read" &&
      status[0] !== "sent" &&
      status[0] !== "unread"
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className={styles["chat-item"]} onClick={onClick}>
      <img
        src={chat.avatar}
        alt={`Avatar for ${chat.user}`}
        className={styles.avatar}
      />
      <div className={styles["user-block"]}>
        <h3 className={styles["chat-name"]}>{chat.user}</h3>
        <p className={styles["last-msg"]}>{chat.message}</p>
      </div>
      <div className={styles["time-block"]}>
        <span className={styles.time}>{chat.time}</span>
        {status[0] === "unread" && (
          <span className={styles.unread}>{status[1]}</span>
        )}
        {status[0] === "read" && (
          <i className={`material-symbols-outlined ${styles.checked}`}>
            done_all
          </i>
        )}
        {status[0] === "sent" && (
          <i className={`material-symbols-outlined ${styles.checked}`}>check</i>
        )}
        {noStatus() && (
          <i className={`material-symbols-outlined ${styles["u-read"]}`}>
            check
          </i>
        )}
      </div>
    </div>
  );
};
