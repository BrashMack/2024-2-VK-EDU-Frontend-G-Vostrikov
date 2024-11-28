import React, { useState } from 'react';
import styles from './NewChatModal.module.css';


function NewChatModal({ isOpen, onClose, onCreate }) {
  const [newChat, setNewChat] = useState({
    user: '',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png', // Default avatar
    message: 'нет сообщений',
    time: '',
    status: 'no',
    online: 'в сети'
  });
  const [avatarPreview, setAvatarPreview] = useState(newChat.avatar);
  const [nameError, setNameError] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewChat({ ...newChat, [name]: value });
    setNameError(false); // Сбрасываем ошибку при изменении поля
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
        setNewChat({ ...newChat, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newChat.user.trim() === '') {
      setNameError(true);
      return;
    }
    onCreate(newChat);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h3>Создать чат</h3>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="user">Название чата:</label>
            <input
              type="text"
              id="user"
              name="user"
              value={newChat.user}
              onChange={handleChange}
              className={nameError ? styles.errorInput : ''}
            />
            {nameError && <p className={styles.error}>Название чата не может быть пустым</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="avatar">Аватар:</label>
            <input
              type="file"
              id="avatar"
              accept="image/*"
              onChange={handleAvatarChange}
            />
            <img src={avatarPreview} alt="Avatar Preview" className={styles.avatarPreview} />
          </div>
          <div className={styles.formGroup}>
            <button type="submit">Создать</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewChatModal;
