import styles from "./IconLogout.module.scss";
import sprite from "../../images/sprite.svg";

export default function IconLogout({ handleClick }) {
  return (
    <>
      <svg
        width="16"
        height="16"
        className={styles.icon}
        onClick={handleClick()}
      >
        <use href={`${sprite}#logout-icon`}></use>
      </svg>
    </>
  );
}
