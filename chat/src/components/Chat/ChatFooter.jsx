import React, { useState } from "react";
import styles from "./ChatFooter.module.css";

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
        <i
          className={`material-symbols-outlined ${styles.attach}`}
          title="Прикрепить файл"
        >
          attach_file
        </i>
        <div className={styles.submit}>
          <i
            className={`material-symbols-outlined ${styles.send} ${styles.toucheble}`}
            title="Отправить"
            onClick={handleSubmit}
          >
            send
          </i>
        </div>
      </form>
    </footer>
  );
};
