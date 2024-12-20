import React, { useState, useEffect } from "react";
import styles from "./AttachModal.module.scss";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export const AttachModal = ({ isOpen, imageChosen, onClose, onSend }) => {
  const [image, setImage] = useState(imageChosen);
  const [caption, setCaption] = useState("");

  useEffect(() => {
    setImage(imageChosen);
  }, [imageChosen]); // проблема

  const handleChange = (e) => {
    setCaption(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[e.target.files.length - 1];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const resetModal = () => {
    setCaption("");
    setImage("");
    imageChosen = null; // спорно
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
    if (image) {
        const timestamp = new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
        resetModal();
        onSend({
            text: caption,
            time: timestamp,
            isUser: true,
            img: image,
            status: "sent",
            new: true,
        });
    }
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles["newchat-menu"]}>
      <div className={styles["chatmenu-header"]}>
        <h3 className={styles["chatmenu-title"]}>Отправить изображение</h3>
        <div className={styles["nocreate-chat"]}>
          <CloseOutlinedIcon
            className={styles["chat-menu-cancel"]}
            title="Отмена"
            onClick={handleClose}
          />
        </div>
      </div>
      <div className={styles["chat-menu-blocks"]}>
        <input
          type="file"
          id="image-input"
          accept="image/*"
          onChange={handleImageChange}
        />
        <label
          htmlFor="image-input"
          className={styles["avatar-label"]}
          title="Изображение"
        >
          <img
            src={image}
            id="avatar-placeholder"
            className={styles["avatar-selected"]}
            alt="Изображение"
          />
        </label>
      </div>
      <div className={styles["chat-menu-blocks"]}>
        <input
          type="text"
          className={styles["chatmenu-lines"]}
          id="chat-name"
          value={caption}
          placeholder="Подпись"
          onChange={handleChange}
          onKeyUp={handleEnter}
        />
      </div>
      <div className={styles["chat-menu-blocks"]}>
        <button
          className={styles["chat-menu-apply"]}
          title="Подтвердить"
          onClick={handleSubmit}
        >
          Отправить
        </button>
      </div>
    </div>
  );
};
