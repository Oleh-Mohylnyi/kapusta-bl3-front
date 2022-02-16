// import { NavLink, useLocation } from "react-router-dom";
// import s from "./TransactionsNav.module.scss";

// const TransactionsNav = () => {
//   const location = useLocation();
//   return (
//     <ul className={s.navList}>
//       <li>
//         <NavLink
//           to="expenses"
//           className={({ isActive }) =>
//             s.link +
//             (isActive || location.pathname === "/transactions"
//               ? ` ${s.activeLink}`
//               : ` ${s.noActiveLink}`)
//           }
          
//         >
//           Расход
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="income"
//           className={({ isActive }) =>
//             s.link + (isActive ? ` ${s.activeLink}` : ` ${s.noActiveLink}`)
//           }
//         >
//           Доход
//         </NavLink>
//       </li>
//     </ul>
//   );
// };

// export default TransactionsNav;


import { NavLink, useLocation } from "react-router-dom";
import s from "./TransactionsNav.module.scss";

const TransactionsNav = () => {
  // const location = useLocation();
  return (
    <nav className={s.navList}>
<NavLink
          to="expenses"
        className={s.navLink}
        // activeClassName={s.activeNavLink}
          // className={({ isActive }) =>
          //   s.link +
          //   (isActive || location.pathname === "/transactions"
          //     ? ` ${s.activeLink}`
          //     : ` ${s.noActiveLink}`)
          // }
        >
          Расход
        </NavLink>
      <NavLink
          to="income"
        className={s.navLink}
        // activeClassName={s.activeNavLink}
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
