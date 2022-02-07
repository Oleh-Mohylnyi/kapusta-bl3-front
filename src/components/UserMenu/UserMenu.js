// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../redux/auth/operations";
// import { getUserName } from "../../redux/auth/selectors";
import Button from "../ButtonLogout/ButtonLogout";
import IconLogout from "../IconLogout/IconLogout";
import styles from "./userMenu.module.scss";

export default function UserMenu() {
  // const name = useSelector(getUserName);
  // const dispatch = useDispatch();

  // const avatar = useSelector(getUserAvatar);
  // const dispatch = useDispatch();

  // const handleLogout = () => {
  //   dispatch(logout());
  // };

  return (
    <div className={styles.item}>
      <div className={styles.personalInf}>
        <span className={styles.avatar}>{/*avatar*/}U</span>
        <span className={styles.name}>{/*name*/}User Name</span>
        <span className={styles.vector}>|</span>
      </div>
      <IconLogout></IconLogout>
      <Button
        title="Выйти"
        /*handleClick={() => handleLogout}*/ type="button"
      />
    </div>
  )
}