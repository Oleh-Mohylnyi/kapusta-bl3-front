// import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import SectionTransactions from "../SectionTransactions";
import s from "./TransactionsNav.module.scss";

const TransactionsNav = ({ onClick }) => {
  // const location = useLocation();

  const [toggle, setToggle] = useState(true);

  const toggler = (e) => {
    setToggle(!toggle);
    onClick(toggle);
  };

  return (
    <>
      <div className={s.navList}>
        <button onClick={toggler} className={s.link}>
          <h2 className={s.title}>Доход</h2>
        </button>

        <button onClick={toggler} className={s.link}>
          <h2 className={s.title}>Расход</h2>
        </button>
      </div>
      {toggle && <SectionTransactions />}
    </>
  );
};

export default TransactionsNav;

// import { NavLink, useLocation } from "react-router-dom";
// import s from "./TransactionsNav.module.scss";

// const TransactionsNav = () => {
//   const location = useLocation();
//   return (
//     <nav className={s.navList}>
// <NavLink
//           to="expenses"
//           className={s.navLink}
//           // className={({ isActive }) =>
//           //   s.link +
//           //   (isActive || location.pathname === "/transactions"
//           //     ? ` ${s.activeLink}`
//           //     : ` ${s.noActiveLink}`)
//           // }
//         >
//           Расход
//         </NavLink>
//       <NavLink
//           to="income"
//           className={s.navLink}
//           // className={({ isActive }) =>
//           //   s.link + (isActive ? ` ${s.activeLink}` : ` ${s.noActiveLink}`)
//           // }
//         >
//           Доход
//         </NavLink>
//     </nav>
//     // <ul className={s.navList}>
//     //   <li className={s.navItem}>

//     //   </li>
//     //   <li className={s.navItem}>

//     //   </li>
//     // </ul>
//   );
// };

// export default TransactionsNav;
