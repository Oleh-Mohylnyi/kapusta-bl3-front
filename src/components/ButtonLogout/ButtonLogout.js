import styles from "./ButtonLogout.module.scss";

export default function button({ title, handleClick, type }) {
  return (
    <button
      type={type}
      className={styles.button}
      // onClick={handleClick()}
    >
      {title}
    </button>
  );
}
