import { NavLink, useLocation } from "react-router-dom";
import s from "./TransactionsNav.module.scss";

const TransactionsNav = () => {
  const location = useLocation();
  return (
    <nav className={s.navList}>
<NavLink
          to="expense"
<<<<<<< HEAD
        className={s.navLink}
          // {({ isActive }) =>
          //   s.link +
          //   (isActive || location.pathname === ""
          //     ? ` ${s.activeLink}`
          //     : ` ${s.noActiveLink}`)
          // }
=======
          className={({ isActive }) =>
            s.link +
            (isActive || location.pathname === "/transactions"
              ? ` ${s.activeLink}`
              : ` ${s.noActiveLink}`)
          }
>>>>>>> main
        >
          Расход
        </NavLink>
      <NavLink
          to="income"
          className={s.navLink}
          // className={({ isActive }) =>
          //   s.link + (isActive ? ` ${s.activeLink}` : ` ${s.noActiveLink}`)
          // }
        >
          Доход
        </NavLink>
    </nav>
    // <ul className={s.navList}>
    //   <li className={s.navItem}>
        
    //   </li>
    //   <li className={s.navItem}>
        
    //   </li>
    // </ul>
  );
};

export default TransactionsNav;
