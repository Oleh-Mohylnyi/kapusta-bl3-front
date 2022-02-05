import { useSelector } from "react-redux";
import UserMenu from "../UserMenu/UserMenu";
import { getIsAuth } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import styles from "./headers.module.css";
import logo from "../../images/logo-header.png";

export default function Header() {
  const isAuth = useSelector(getIsAuth);

  return (
    <div>
      <header className={styles.header}>
        <NavLink to="/" className={styles.logo}>
          <img src={logo} alt="" width="90" />
        </NavLink>
        {/* {isAuth ? <UserMenu /> : <></>} */}
        {/* <UserMenu></UserMenu> */}
      </header>
    </div>
  );
}
