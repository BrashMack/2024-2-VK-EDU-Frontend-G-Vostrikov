import React, { useState, useEffect, createContext, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChatHeader } from "./ChatHeader";
import { ChatBody } from "./ChatBody";
import { ChatFooter } from "./ChatFooter";
import { AttachModal } from "./AttachModal";
import styles from "./Chat.module.scss";

export const UserContext = createContext("undefined");

export const Chat = () => {
  const { chatId } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [image, setImage] = useState(null);
  const chatBodyRef = useRef(null);

  const chat = JSON.parse(localStorage.getItem(`chat${chatId}`));
  const user = chat.user;

  useEffect(() => {
    setMessages(loadLocalMessages());
    if (chat.status.split(" ")[0] === "unread") {
      localStorage.setItem(
        `chat${chatId}`,
        JSON.stringify({ ...chat, status: "u_read" })
      );
    }
  }, [chatId]);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const loadLocalMessages = () => {
    let storedMessages = [];
    for (let i = 1; i <= localStorage.length; ++i) {
      let message = JSON.parse(localStorage.getItem(`${user}${i}`));
      if (message) {
        storedMessages.push([message, i]);
      }
    }
    return storedMessages;
  };

  const handleGoBack = () => {
    navigate("/");
  };

  const handleSendMessage = (newMessage) => {
    const messageId = messages.length !== 0 ? messages.at(-1)[1] + 1 : 1;
    setMessages([...messages, [newMessage, messageId]]);
    localStorage.setItem(`${user}${messageId}`, JSON.stringify(newMessage));
    isModalOpen && handleModalToggle();
    updateChatPreview(newMessage.img ? `[Изображение] ${newMessage.text}` : newMessage.text, newMessage.time, newMessage.status);
  };

  const updateChatPreview = (text, time, status) => {
    localStorage.setItem(
      `chat${chatId}`,
      JSON.stringify({ ...chat, message: text, time: time, status: status })
    );
  };

  const handleModalToggle = (e) => {
    if (!isModalOpen) {
      const file = e.target.files[e.target.files.length - 1];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => setImage(reader.result);
        reader.readAsDataURL(file);
        e.target.files = null;
        e.target.value = "";
      }
    }
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles["chat-container"]}>
      <div className={
          isModalOpen
            ? `${styles.workflow} ${styles.inactive}`
            : styles.workflow
        }
      >
        <ChatHeader chatData={chat} onGoBack={handleGoBack} />
        <UserContext.Provider value={user}>
          <ChatBody messages={messages} chatBodyRef={chatBodyRef} />
        </UserContext.Provider>
        <ChatFooter onSendMessage={handleSendMessage} onAttach={handleModalToggle} />
      </div>
      <AttachModal
        isOpen={isModalOpen}
        imageChosen={image}
        onClose={handleModalToggle}
        onSend={handleSendMessage}
      />
    </div>
  );
};
