import React, { useContext, useEffect } from "react";
import { UserContext } from "./Chat";
import styles from "./MessageItem.module.scss";

export const MessageItem = ({ message, messageId }) => {
  const isUserMessage = message.isUser;
  const messageClasses = isUserMessage ? styles.user : styles.other;
  const user = useContext(UserContext);

  useEffect(() => {
    if (!isUserMessage && message.status === "unread") {
      localStorage.setItem(
        `${user}${messageId}`,
        JSON.stringify({ ...message, status: "", new: false })
      );
    } else if (isUserMessage && message.new) {
      localStorage.setItem(
        `${user}${messageId}`,
        JSON.stringify({ ...message, new: false })
      );
    }
  }, []);

  return (
    <div
      className={
        message.new
          ? `${styles["chat-message"]} ${messageClasses} ${styles["new-popup"]}`
          : `${styles["chat-message"]} ${messageClasses}`
      }
    >
      {message.img ? (
        <div className={styles["message-img"]}>
          <img
            src={message.img}
            alt="Отправленное изображение"
            className={styles.img}
          />
          <div className={styles["message-time"]}>
            <span>{message.time}</span>
          </div>
        </div>
      ) : (
        <div
          className={
            message.status === "unread"
              ? `${styles["message-content"]} ${styles["new-message"]}`
              : styles["message-content"]
          }
        >
          {message.text}
          <div className={styles["message-time"]}>
            {isUserMessage && message.status === "read" && (
              <i className={`material-symbols-outlined ${styles.checked}`}>
                done_all
              </i>
            )}
            {isUserMessage && message.status === "sent" && (
              <i className={`material-symbols-outlined ${styles.checked}`}>
                check
              </i>
            )}
            {!isUserMessage && message.status === "unread" && (
              <i className={`material-symbols-outlined ${styles.checked}`}>
                check
              </i>
            )}
            <span>{message.time}</span>
          </div>
        </div>
      )}
    </div>
  );
};
