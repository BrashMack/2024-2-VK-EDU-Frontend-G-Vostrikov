import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./History.module.scss";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

export const History = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className={styles["chat-container"]}>
      <header className={styles["chat-header"]}>
        <ArrowBackIosOutlinedIcon
          className={`${styles.back} ${styles.toucheble}`}
          id="back-to-list"
          onClick={handleGoBack}
          title="Назад"
        />
        <h2 className={styles["username"]}>История</h2>
        <div className={styles["header-right"]}>
          <button
            className={styles["chat-menu-apply"]}
            title="Очистить историю"
          >
            Очистить историю
          </button>
        </div>
      </header>
      <div>
        История!
      </div>
    </div>
  );
};
