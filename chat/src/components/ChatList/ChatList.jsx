import React, { useState, useEffect } from 'react';
import ChatItem from './ChatItem';
import NewChatModal from './NewChatModal';
import { getMockChats } from '../mocks';
import { useNavigate } from 'react-router-dom';
import styles from './ChatList.module.css';


function ChatList({ onViewChange }) {
  const [chats, setChats] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Загрузка mock-данных.  В реальном приложении здесь нужно будет получить данные с сервера.
    const mockChats = getMockChats();
    setChats(mockChats);

    //  Подписка на изменения в localStorage (опционально, для сохранения состояния между сессиями)
    //  В реальном приложении это не нужно, если все данные берутся с сервера
    // const handleStorageChange = () => {
    //     // ... логика обновления чатов из localStorage
    // };
    // window.addEventListener('storage', handleStorageChange);
    // return () => window.removeEventListener('storage', handleStorageChange);

  }, []);


  const handleChatClick = (chatId) => {
    onViewChange(chatId); // Передаём ID чата родительскому компоненту
    navigate(`/chat/${chatId}`); // Переход по маршруту
  };


  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

    // Обработка создания нового чата (данные из модального окна)
  const handleCreateChat = (newChat) => {
      // Здесь нужно добавить логику сохранения нового чата в localStorage или отправки на сервер.
      // Для примера, просто добавим новый чат в состояние
      setChats([...chats, newChat]);
      setIsModalOpen(false);
  };


  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {/*  Здесь можно добавить элементы header,  например,  поиск */}
        <h2 className={styles.appTitle}>Messenger</h2>
        <button className={styles.addChatButton} onClick={handleModalOpen}>
          +
        </button>
      </header>
      <div className={styles.chatList}>
        {chats.map((chat, index) => (
          <ChatItem
            key={chat.user}
            chat={chat}
            onClick={() => handleChatClick(index + 1)}
          />
        ))}
      </div>
      <NewChatModal isOpen={isModalOpen} onClose={handleModalClose} onCreate={handleCreateChat} />
    </div>
  );
}

export default ChatList;