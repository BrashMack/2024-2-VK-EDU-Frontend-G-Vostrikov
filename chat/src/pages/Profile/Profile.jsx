import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import styles from "./Profile.module.scss";

export const Profile = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useState({});
  const [nameError, setNameError] = useState(false);

  useEffect(() => {
    let userData = {};
    if (parseInt(userId) !== 0) {
      userData = JSON.parse(localStorage.getItem(`chat${userId}`));
    } 
    else {
      userData = JSON.parse(localStorage.getItem("user"));
    }
    setUser(userData);
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleNameChange = (e) => {
    setUser({ ...user, user: e.target.textContent });
  };

  const handleDescriptionChange = (e) => {
    setUser({ ...user, description: e.target.textContent });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[e.target.files.length - 1];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setUser({ ...user, avatar: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    if (user.user.trim() == "") {
      setNameError(true);
      return;
    }
    localStorage.setItem("user", JSON.stringify(user));
    setIsEdit(false);
  };

  return (
    <div className={styles["container"]}>
      <header className={styles.header}>
        <ArrowBackIosOutlinedIcon
          className={styles.back}
          title="Назад"
          onClick={handleGoBack}
        />
        <div className={styles["user-block"]}>
          <h2 className={styles["username"]}>{isEdit ? "Edit Profile" : "Profile"}</h2>
        </div>
        <div className={styles["header-right"]} title={isEdit ? "Подвердить" : ""}>
          {isEdit && (
            <CheckOutlinedIcon 
              className={styles.checked}
              onClick={handleSaveChanges}
            />
          )}
        </div>
      </header>
      <div className={styles.workflow}>
        <div className={styles.profile}>
          <div className={styles["chat-menu-blocks"]}>
            <input
              type="file"
              id="profile-avatar"
              accept="image/*"
              onChange={handleAvatarChange}
              disabled={isEdit ? false : true}
            />
            <label
              htmlFor="profile-avatar"
              className={`${styles["avatar-label"]} ${isEdit && styles.active}`}
              title="Аватар пользователя"
            >
              <img
                src={user.avatar}
                className={styles["avatar-selected"]}
                alt="Аватар пользователя"
              />
            </label>
          </div>
          <div className={styles["chat-menu-blocks"]}>
            <fieldset className={`${styles["chatmenu-lines"]} ${nameError && styles.error}`}>
              <legend className={styles.label}>
                Имя пользователя
              </legend>
              <div
                className={`${styles.text} ${isEdit && styles.edit}`} 
                contentEditable={isEdit ? true : false} 
                suppressContentEditableWarning={true}
                onBlur={handleNameChange}
                onInput={() => setNameError(false)}
              >
                {user.user}
              </div>
            </fieldset>
            <fieldset className={styles["chatmenu-lines"]}>
              <legend className={styles.label}>
                О себе
              </legend>
              <div
                className={isEdit ? `${styles.text} ${styles.edit}` : styles.text}
                contentEditable={isEdit ? true : false}
                suppressContentEditableWarning={true}
                onBlur={handleDescriptionChange}
              >
                {user.description}
              </div>
            </fieldset>
          </div>
          { !parseInt(userId) && (
            <div className={styles["chat-menu-blocks"]}>
              <button
                className={styles["chat-menu-apply"]}
                title="Редактировать"
                onClick={() => { setIsEdit(true) }}
                disabled={isEdit ? true : false}
              >
                Редактировать
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
