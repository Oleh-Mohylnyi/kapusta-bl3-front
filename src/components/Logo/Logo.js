import styles from "./Logo.module.scss";
import sprite from "../../images/sprite.svg";

export default function IconLogout() {
  return (
    <div className={styles.logoHeader}>
      <svg width="33" height="26" className={styles.logoLight}>
        <use href={`${sprite}#logo-light`}></use>
      </svg>
      <svg width="33" height="26" className={styles.logoDark}>
        <use href={`${sprite}#logo-dark`}></use>
      </svg>
      <svg width="70" height="17" className={styles.iconHeader}>
        <use href={`${sprite}#icon-header`}></use>
      </svg>
    </div>
  );
}
