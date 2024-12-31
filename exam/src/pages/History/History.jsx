import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HistoryItem } from "../../components/HistoryItem/HistoryItem";
import styles from "./History.module.scss";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

export const History = () => {
  const navigate = useNavigate();
  const [translations, setTranslations] = useState([]);

  const handleGoBack = () => {
    navigate("/");
  };

  useEffect(() => {
    setTranslations(() => {
      let storedRecords = [];
      for (let i = 1; i <= localStorage.length; ++i) {
        let record = JSON.parse(localStorage.getItem(`translation${i}`));
        if (record) {
          storedRecords.push(record);
        }
      }
      return storedRecords;
    });
  }, []);

  const handleClear = () => {
    setTranslations([]);
    localStorage.clear();
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <ArrowBackIosOutlinedIcon
          className={`${styles.back} ${styles.toucheble}`}
          onClick={handleGoBack}
          title="Назад"
        />
        <h2 className={styles.nameHeader}>История</h2>
        <div className={styles.headerRight}>
          <button
            className={styles.clearButton}
            title="Очистить историю"
            onClick={handleClear}
          >
            Очистить историю
          </button>
        </div>
      </header>
      <div className={styles.historyBody}>
        {translations.map((translation, index) => (
        <HistoryItem
          key={translations.length - 1 - index}
          translation={translation}
        />
        )).reverse()}
      </div>
    </div>
  );
};
