import { NavLink, useLocation } from "react-router-dom";
import s from "./TransactionsNav.module.scss";

const TransactionsNav = () => {
  const location = useLocation();
  return (
    <ul className={s.navList}>
      <li>
        <NavLink
          to="expense"
          className={({ isActive }) =>
            s.link +
            (isActive || location.pathname === ""
              ? ` ${s.activeLink}`
              : ` ${s.noActiveLink}`)
          }
        >
          Расход
        </NavLink>
      </li>
      <li>
        <NavLink
          to="income"
          className={({ isActive }) =>
            s.link + (isActive ? ` ${s.activeLink}` : ` ${s.noActiveLink}`)
          }
        >
          Доход
        </NavLink>
      </li>
    </ul>
  );
};

export default TransactionsNav;
