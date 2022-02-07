// import { useSelector } from "react-redux";
import UserMenu from "../UserMenu/UserMenu";
// import { getIsAuth } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo-header.png";
import styles from "./headers.module.scss";

export default function Header() {
  // const isAuth = useSelector(getIsAuth);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavLink to="/" className={styles.logoLink}>
          <img src={logo} alt="" width="90" className={styles.logo} />
        </NavLink>
        {/* {isAuth ? <UserMenu /> : <></>} */}
        <UserMenu></UserMenu>
      </header>
    </div>
  );
}
