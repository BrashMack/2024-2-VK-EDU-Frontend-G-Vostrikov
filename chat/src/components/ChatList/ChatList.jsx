import React, { useState, useEffect } from "react";
import { ChatItem } from "./ChatItem.jsx";
import { NewChatModal } from "./NewChatModal.jsx";
import { BurgerMenu } from "./BurgerMenu.jsx";
import { useNavigate } from "react-router-dom";
import styles from "./ChatList.module.css";

export const ChatList = () => {
  const [chats, setChats] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setChats(loadLocalChats());
  }, []);

  const loadLocalChats = () => {
    let storedChats = [];
    for (let i = 1; i <= localStorage.length; ++i) {
      let chat = JSON.parse(localStorage.getItem(`chat${i}`));
      if (chat) {
        storedChats.push(chat);
      }
    }
    return storedChats;
  };

  const handleChatClick = (chatId) => {
    navigate(`/chat/${chatId}`);
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleBurgerToggle = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const handleCreateChat = (newChat) => {
    setChats([...chats, newChat]);
    localStorage.setItem(`chat${chats.length + 1}`, JSON.stringify(newChat));
    handleModalToggle();
  };

  return (
    <div className={styles.container}>
      <div
        className={
          isModalOpen
            ? `${styles.workflow} ${styles.inactive}`
            : styles.workflow
        }
      >
        <header className={styles.header}>
          <BurgerMenu isOpen={isBurgerOpen} onClose={handleBurgerToggle} />
          <h2 className={styles.app}>Messenger</h2>
          <div className={styles.search}></div>
        </header>
        <div className={styles["chat-list"]}>
          {chats.map((chat, index) => (
            <ChatItem
              key={chat.user}
              chat={chat}
              onClick={() => handleChatClick(index + 1)}
            />
          ))}
        </div>
        <div>
          <div
            className={styles["create-chats"]}
            title="Создать чат"
            onClick={handleModalToggle}
          >
            <i className={`material-symbols-outlined ${styles["icon-plus"]}`}>
              add
            </i>
          </div>
        </div>
      </div>
      <NewChatModal
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        onCreate={handleCreateChat}
      />
    </div>
  );
};
