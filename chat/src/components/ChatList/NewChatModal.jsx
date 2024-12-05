import React, { useState, useEffect, useRef } from "react";
import styles from "./NewChatModal.module.css";

const placeholder =
  "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";

export const NewChatModal = ({ isOpen, onClose, onCreate }) => {
  const [user, setUser] = useState("");
  const [avatar, setAvatar] = useState(placeholder);
  const [nameError, setNameError] = useState(false);

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        resetModal();
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    setUser(e.target.value);
    setNameError(false); // Сбрасываем ошибку при изменении поля
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[e.target.files.length - 1];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const resetModal = () => {
    setNameError(false);
    setUser("");
    setAvatar(placeholder);
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (user === "") {
      setNameError(true);
      return;
    }
    resetModal();
    onCreate({
      user: user,
      avatar: avatar,
      message: "нет сообщений",
      time: "",
      status: "no",
      online: "в сети",
    });
  };

  if (!isOpen) return null;

  return (
    <div ref={modalRef} className={styles["newchat-menu"]}>
      <div className={styles["chatmenu-header"]}>
        <h3 className={styles["chatmenu-title"]}>Создать чат</h3>
        <div className={styles["nocreate-chat"]}>
          <i
            className={`material-symbols-outlined ${styles["chat-menu-cancel"]}`}
            title="Отмена"
            onClick={handleClose}
          >
            close
          </i>
        </div>
      </div>
      <div className={styles["chat-menu-blocks"]}>
        <input
          type="file"
          id="avatar-input"
          accept="image/*"
          onChange={handleAvatarChange}
        />
        <label
          htmlFor="avatar-input"
          className={styles["avatar-label"]}
          title="Аватар чата"
        >
          <img
            src={avatar}
            id="avatar-placeholder"
            className={styles["avatar-selected"]}
            alt="Аватар чата"
          />
        </label>
      </div>
      <div className={styles["chat-menu-blocks"]}>
        <input
          type="text"
          className={
            nameError
              ? `${styles["chatmenu-lines"]} ${styles.warning}`
              : styles["chatmenu-lines"]
          }
          id="chat-name"
          value={user}
          placeholder={
            nameError ? "Название чата не может быть пустым" : "Название чата"
          }
          onChange={handleChange}
          onKeyUp={handleEnter}
        />
      </div>
      <div className={styles["chat-menu-blocks"]}>
        <button
          className={`material-symbols-outlined ${styles["chat-menu-apply"]}`}
          title="Подтвердить"
          onClick={handleSubmit}
        >
          Создать
        </button>
      </div>
    </div>
  );
};
