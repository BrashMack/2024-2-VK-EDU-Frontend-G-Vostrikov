import React, { useState, useEffect, createContext, useRef } from "react";
//import { useParams, useNavigate } from "react-router-dom";
import { ChatHeader } from "./ChatHeader";
import { ChatBody } from "./ChatBody";
import { ChatFooter } from "./ChatFooter";
import styles from "./Chat.module.css";

export const UserContext = createContext("undefined");

export const Chat = ({ onViewChange, chatId }) => {
  //const { chatId } = useParams();
  //const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
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
    onViewChange(null);
    //navigate("/"); // Переход на главную страницу
  };

  const handleSendMessage = (newMessage) => {
    const messageId = messages.at(-1)[1] + 1;
    setMessages([...messages, [newMessage, messageId]]);
    localStorage.setItem(`${user}${messageId}`, JSON.stringify(newMessage));
  };

  return (
    <div className={styles["chat-container"]}>
      <ChatHeader chatData={chat} onGoBack={handleGoBack} />
      <UserContext.Provider value={user}>
        <ChatBody messages={messages} chatBodyRef={chatBodyRef} />
      </UserContext.Provider>
      <ChatFooter onSendMessage={handleSendMessage} />
    </div>
  );
};
