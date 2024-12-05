import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMockMessages } from "../../mocks.js";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import styles from "./Chat.module.css";

function Chat({ onViewChange }) {
  const { chatId } = useParams();
  const navigate = useNavigate();
  const [chatData, setChatData] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Загрузка данных о чате и сообщениях.  В реальном приложении здесь нужно будет получить данные с сервера.
    const mockChats = getMockChats();
    if (chatId && mockChats[parseInt(chatId) - 1]) {
      setChatData(mockChats[parseInt(chatId) - 1]);
      setMessages(getMockMessages(mockChats[parseInt(chatId) - 1].user));
    }
  }, [chatId]);

  const handleGoBack = () => {
    onViewChange(null); // Передаём null, чтобы вернуться к списку чатов
    navigate("/"); // Переход на главную страницу
  };

  const handleSendMessage = (newMessage) => {
    //  Здесь нужно добавить логику отправки нового сообщения на сервер
    //  Для примера, просто добавим сообщение в массив сообщений
    setMessages([...messages, newMessage]);
  };

  if (!chatData) return <div>Загрузка чата...</div>; // Отображение сообщения о загрузке

  return (
    <div className={styles.chatContainer}>
      <ChatHeader chatData={chatData} onGoBack={handleGoBack} />
      <ChatBody messages={messages} />
      <ChatFooter onSendMessage={handleSendMessage} />
    </div>
  );
}

export default Chat;
