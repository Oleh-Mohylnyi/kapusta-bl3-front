import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../redux/auth/operations";
import Modal from "../Modal/Modal";
import sprite from "../../images/sprite.svg";
import { authSelectors } from "../../redux/auth";
import styles from "./userMenu.module.scss";

export default function UserMenu() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const name = useSelector(authSelectors.getUserEmail);
  const userName = name.split("@")[0];
  const userAvatar = name.substring(0, 1).toUpperCase();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.item}>
      <div className={styles.personalInf}>
        <span className={styles.avatar}>
          <span>{userAvatar}</span>
        </span>
        <span className={styles.name}>{userName}</span>
        <span className={styles.vector}>|</span>
      </div>

      <div className={styles.icon_container} onClick={toggleModal}>
        <svg width="16" height="16" className={styles.icon}>
          <use href={`${sprite}#logout-icon`}></use>
        </svg>
      </div>

      <button type="button" className={styles.button} onClick={toggleModal}>
        Выйти
      </button>
      {showModal && (
        <Modal onClose={toggleModal} okClick={handleLogout}>
          <p className={styles.text}>Вы действительно хотите выйти?</p>
        </Modal>
      )}
    </div>
  );
}
