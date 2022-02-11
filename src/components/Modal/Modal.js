import { useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";
import sprite from "../../images/sprite.svg";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onClose, onLogout, children }) {
  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleOverlay = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.Overlay} onClick={handleOverlay}>
      <div className={s.Modal}>
        <div className={s.closeButton} onClick={onClose}>
          <svg width="14" height="14" className={s.icon}>
            <use href={`${sprite}#icon-close`}></use>
          </svg>
        </div>

        <div>{children}</div>

        <div className={s.buttonWrapper}>
          <button className={s.confirmButton} onClick={onLogout}>
            Да
          </button>
          <button className={s.declineButton} onClick={onClose}>
            Нет
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}
