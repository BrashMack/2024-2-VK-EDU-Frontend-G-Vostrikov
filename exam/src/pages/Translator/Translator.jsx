import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { languages } from "../../languages.js";
import styles from "./Translator.module.scss";
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';

export const Translator = () => {
  const [options, setOptions] = useState([]);
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [language1, setLanguage1] = useState(null);
  const [language2, setLanguage2] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const parsedOptions = Object.entries(languages).map(([value, label]) => ({
      value,
      label,
    }));
    setOptions(parsedOptions)
  }, []);

  const goToHistory = () => {
    navigate("/history");
  };

  const handleChange1 = (selectedLanguage) => {
    setLanguage1(selectedLanguage);
  };

  const handleChange2 = (selectedLanguage) => {
    setLanguage2(selectedLanguage);
  };

  const handleText1 = (e) => {
    setText1(e.target.value);
  };

  const handleText2 = (e) => {
    setText2(e.target.value);
  };

  const handleSwap = () => {
    if (language1?.label !== "Autodetect") {
      const tmp = language1;
      setLanguage1(language2)
      setLanguage2(tmp);
    }
    else {
      setLanguage1(language2)
      setLanguage2(null);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Select
          className={styles["chat-menu-apply"]}
          value={language1}
          onChange={handleChange1}
          options={options}
          title="Исходный язык"
          placeholder="Исходный язык"
          isSearchable
        />
        <SwapHorizOutlinedIcon 
          className={styles.swap}
          onClick={handleSwap}
        />
        <Select
          className={styles["chat-menu-apply"]}
          value={language2}
          onChange={handleChange2}
          options={options}
          title="Конечный язык"
          placeholder="Конечный язык"
          isSearchable
        />
      </header>
      <div className={styles.translatorTextBlock}>
        <textarea
          className={styles["chat-list"]}
          value={text1}
          onChange={handleText1}
          placeholder="Введите исходный текст..."
        />
        <textarea
          className={styles["chat-list"]}
          value={text2}
          onChange={handleText2}
          placeholder="Переведённый текст..."
        />
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
