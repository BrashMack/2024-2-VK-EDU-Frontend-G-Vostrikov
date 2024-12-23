import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import { Select } from "react-select";
import styles from "./Translator.module.scss";
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';

export const Translator = () => {
  const [chats, setChats] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
  }, []);

  const goToHistory = () => {
    navigate("/history");
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button
          className={styles["chat-menu-apply"]}
          title="Определить язык"
        >
          Определить язык
        </button>
        <SwapHorizOutlinedIcon 
          className={styles.swap}
        />
        <button
          className={styles["chat-menu-apply2"]}
          title="Язык"
        >
          Язык
        </button>
      </header>
      <div className={styles.translatorTextBlock}>
        <div className={styles["chat-list"]}>
          Исходный текст
        </div>
        <div className={styles["chat-list"]}>
          Перевод
        </div>
      </div>
      
      <div>
        <div
          className={styles["create-chats"]}
          title="История"
          onClick={goToHistory}
        >
          <HistoryOutlinedIcon 
            className={styles["icon-plus"]}
          />
        </div>
      </div>
    </div>
  );
};
