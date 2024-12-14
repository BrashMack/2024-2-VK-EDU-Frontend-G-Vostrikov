import React, { useState } from "react";
import styles from "./ChatFooter.module.scss";
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import SendIcon from '@mui/icons-material/Send';

export const ChatFooter = ({ onSendMessage }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== "") {
      const timestamp = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      onSendMessage({
        text: newMessage,
        time: timestamp,
        isUser: true,
        img: "",
        status: "sent",
        new: true,
      });
      setNewMessage("");
    }
  };

  return (
    <footer className={styles["chat-footer"]}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles["form-input"]}
          name="message-text"
          type="text"
          placeholder="Сообщение"
          value={newMessage}
          onChange={handleInputChange}
        />
        <AttachFileOutlinedIcon
          className={`${styles.attach}`}
          title="Прикрепить файл"
        />
        <div className={styles.submit}>
          <SendIcon
            className={`${styles.send} ${styles.toucheble}`}
            title="Отправить"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </footer>
  );
};
