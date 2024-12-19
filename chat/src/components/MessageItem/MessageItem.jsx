import React, { useContext, useEffect } from "react";
import { UserContext } from "../../pages/Chat/Chat";
import styles from "./MessageItem.module.scss";
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';

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
            className={styles.image}
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
              <DoneAllOutlinedIcon 
                className={styles.checked}
              />
            )}
            {isUserMessage && message.status === "sent" && (
              <CheckOutlinedIcon 
                className={styles.checked}
              />
            )}
            {!isUserMessage && message.status === "unread" && (
              <CheckOutlinedIcon 
                className={styles.checked}
              />
            )}
            <span>{message.time}</span>
          </div>
        </div>
      )}
    </div>
  );
};
