import styles from "./IconLogout.module.scss";
import sprite from "../../images/sprite.svg";

export default function IconLogout({ handleClick }) {
  return (
    <>
      <div className={styles.icon_container} onClick={handleClick()}>
        <svg width="16" height="16" className={styles.icon}>
          <use href={`${sprite}#logout-icon`}></use>
        </svg>
      </div>
    </>
  );
}
