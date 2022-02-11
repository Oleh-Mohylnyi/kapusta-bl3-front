import { useSelector } from "react-redux";
import UserMenu from "../UserMenu/UserMenu";
import Logo from "../Logo/Logo";
import { getIsAuth } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import styles from "./headers.module.scss";

export default function Header() {
  const isAuth = useSelector(getIsAuth);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavLink to="/" className={styles.logoLink}>
          <Logo />
        </NavLink>
        {isAuth ? <UserMenu /> : <></>}
      </header>
    </div>
  );
}
