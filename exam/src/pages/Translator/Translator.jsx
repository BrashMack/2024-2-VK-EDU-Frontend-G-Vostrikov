import React, { useState, useEffect, useRef } from "react";
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
  const [language1, setLanguage1] = useState(localStorage.getItem("originLang") ? JSON.parse(localStorage.getItem("originLang")) : null);
  const [language2, setLanguage2] = useState(localStorage.getItem("finalLang") ? JSON.parse(localStorage.getItem("finalLang")) : null);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const parsedOptions = Object.entries(languages).map(([value, label]) => ({
      value,
      label,
    }));
    setOptions(parsedOptions)
  }, []);

  const getLanguageName = (code) => {
    const foundOption = options.find(option => option.value.startsWith(code));
    return foundOption ? foundOption.label : code;
  }

  useEffect(() => {
    if (timerRef.current) {
        clearTimeout(timerRef.current);
    }

    if(!text1 || !language1 || !language2){
        setText2("");
        return;
    }

    setText2("");

    timerRef.current = setTimeout(() => {
      const api = `https://api.mymemory.translated.net/get?q=${text1}&langpair=${language1.value}|${language2.value}`;
      fetch(api).then(response => response.json()).then((data) => {
        setText2(data.responseData.translatedText);
        localStorage.setItem(`translation${localStorage.length + 1}`, JSON.stringify({
          "originLang": language1.label === "Autodetect" ? getLanguageName(data.responseData.detectedLanguage) : language1.label,
          "finalLang": language2.label,
          "originText": text1,
          "finalText": data.responseData.translatedText,
        }));
      });
    }, 2000);

    return () => {
      if (timerRef.current) {
          clearTimeout(timerRef.current);
      }
    };
  }, [text1, language1, language2]);

  const goToHistory = () => {
    navigate("/history");
  };

  const handleChange1 = (selectedLanguage) => {
    setLanguage1(selectedLanguage);
    updateLangHistory(true, selectedLanguage);
  };

  const handleChange2 = (selectedLanguage) => {
    setLanguage2(selectedLanguage);
    updateLangHistory(false, selectedLanguage);
  };

  const handleText1 = (e) => {
    setText1(e.target.value);
  };

  const handleSwap = () => {
    if (language1?.label !== "Autodetect") {
      const tmp = language1;
      setLanguage1(language2)
      updateLangHistory(true, language2);
      setLanguage2(tmp);
      updateLangHistory(false, tmp);
    }
    else {
      setLanguage1(language2)
      updateLangHistory(true, language2);
      setLanguage2(null);
      updateLangHistory(false, null);
    }
  };

  const updateLangHistory = (origin, lang) => {
    origin ? localStorage.setItem("originLang", JSON.stringify(lang))
    : localStorage.setItem("finalLang", JSON.stringify(lang))
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Select
          className={styles.selectLanguage}
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
          className={styles.selectLanguage}
          value={language2}
          onChange={handleChange2}
          options={options.slice(1)}
          title="Конечный язык"
          placeholder="Конечный язык"
          isSearchable
        />
      </header>
      <div className={styles.translatorTextBlock}>
        <textarea
          className={styles.originText}
          value={text1}
          onChange={handleText1}
          autoFocus
          placeholder="Введите исходный текст..."
        />
        <textarea
          className={styles.finalText}
          value={text2}
          readOnly
          placeholder="Переведённый текст..."
        />
      </div>
      
      <div>
        <div
          className={styles.historyButton}
          title="История"
          onClick={goToHistory}
        >
          <HistoryOutlinedIcon 
            className={styles.historyIcon}
          />
        </div>
      </div>
    </div>
  );
};
