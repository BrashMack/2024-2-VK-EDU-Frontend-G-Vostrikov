import React, { useEffect, useRef } from "react";
import styles from "./BurgerMenu.module.css";

export const BurgerMenu = ({ isOpen, onClose }) => {
  const burgerRef = useRef(null);

  useEffect(() => {
    const clickOutsideBurger = (e) => {
      if (burgerRef.current && !burgerRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", clickOutsideBurger);
    } else {
      document.removeEventListener("mousedown", clickOutsideBurger);
    }

    return () => {
      document.removeEventListener("mousedown", clickOutsideBurger);
    };
  }, [isOpen, onClose]);

  const toggleBurger = () => {
    return isOpen
      ? `${styles["burger-line"]} ${styles.cross}`
      : styles["burger-line"];
  };

  const toggleMenu = () => {
    return isOpen
      ? `${styles["menu-item"]} ${styles.active}`
      : styles["menu-item"];
  };

  return (
    <div ref={burgerRef}>
      <div
        className={isOpen ? `${styles.burger} ${styles.active}` : styles.burger}
        aria-expanded="false"
        aria-controls="list"
        onClick={onClose}
      >
        <div className={toggleBurger()} />
        <div className={toggleBurger()} />
        <div className={toggleBurger()} />
      </div>
      <ul className={styles.menu} id="list" aria-hidden="true">
        <li className={toggleMenu()}>
          <a href="#" className={styles["menu-link"]} tabIndex={-1}>
            Профиль
          </a>
        </li>
        <li className={toggleMenu()}>
          <a href="#" className={styles["menu-link"]} tabIndex={-1}>
            Настройки
          </a>
        </li>
        <li className={toggleMenu()}>
          <a href="#" className={styles["menu-link"]} tabIndex={-1}>
            Выход
          </a>
        </li>
      </ul>
    </div>
  );
};
