import styles from "./Title.module.scss";
import DesktopTitle from "../../images/title/title-desktop.svg";
import TabletTitle from "../../images/title/title-tablet.svg";
import MobileTitle from "../../images/title/title-mobile.svg";

function Title() {
  const screenWidth = window.screen.width;
  return (
    <div className={styles.container}>
      {screenWidth < 768 && (
        <img
          src={MobileTitle}
          className={styles.title}
          alt="app mobile version title"
        />
      )}
      {screenWidth >= 768 && screenWidth < 1280 && (
        <img
          src={TabletTitle}
          className={styles.title}
          alt="app tablet version title"
        />
      )}
      {screenWidth >= 1280 && (
        <img
          src={DesktopTitle}
          className={styles.title}
          alt="app desktop version title"
        />
      )}
      {/* <img src={AppTitle} className={styles.title} alt="app title"/> */}
      <h2 className={styles.subtitle}>Smart Finance</h2>
    </div>
  );
}

export default Title;
