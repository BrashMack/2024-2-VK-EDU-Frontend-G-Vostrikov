import React from "react";
import styles from "./HistoryItem.module.scss";
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

export const HistoryItem = ({ translation }) => {

  return (
    <div className={styles.historyBlock}>
      <div className={styles.historyContent}>
        <div className={styles.langLine}>
          <div className={styles.language}>
            <span>{translation.originLang}</span>
          </div>
          <ArrowRightAltOutlinedIcon
            className={styles.arrow}
            title="Переведено на этот язык"
          />
          <div className={styles.language}>
            <span>{translation.finalLang}</span>
          </div>
        </div>
        <div className={styles.textOrig}>
          <span>{translation.originText}</span>
        </div>
        <div className={styles.textFinal}>
          <span>{translation.finalText}</span>
        </div>
      </div>
    </div>
  );
};
