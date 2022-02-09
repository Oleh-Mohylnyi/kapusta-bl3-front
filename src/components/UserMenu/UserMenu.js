import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { logout } from "../../redux/auth/operations";
import {authSelectors} from '../../redux/auth'
import Button from "../ButtonLogout/ButtonLogout";
import IconLogout from "../IconLogout/IconLogout";
import styles from "./userMenu.module.scss";

export default function UserMenu() {
  const dispatch = useDispatch();

  const name = useSelector(authSelectors.getUserEmail);
  const userName=name.split('@')[0];
  const userAvatar=name.substring(0,1)

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.item}>
      <div className={styles.personalInf}>
        <span className={styles.avatar}>{userAvatar}</span>
        <span className={styles.name}>{userName}</span>
        <span className={styles.vector}>|</span>
      </div>
      <IconLogout handleClick={() => handleLogout}></IconLogout>
      <Button title="Выйти" handleClick={() => handleLogout} type="button" />
    </div>
  );
}
