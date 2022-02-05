import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { getUserName } from "../../redux/auth/selectors";
import Button from "../Button/Button";
import styles from "./userMenu.module.css";
// import button from "../Button/Button";

import logoutIcon from "../../images/icons/logout-icon.svg";

export default function UserMenu() {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.list}>
      <div className={styles.personalInf}>
        <span className={styles.avatar}>{/* {avatar} */}U</span>
        <span className={styles.name}>{/* {name} */}User Name</span>
      </div>
      {/* <svg width="16" height="16">
        <use href={`${logoutIcon}#logoutIcon`}></use>
      </svg> */}
      <Button
        title="Выйти"
        className={styles.buttonLogout}
        handleClick={() => handleLogout}
        type="button"
      />
    </div>
  );
}
