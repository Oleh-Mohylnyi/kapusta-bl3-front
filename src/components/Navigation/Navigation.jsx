import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
// import { useSelector } from 'react-redux';
// import { getIsUserAuth } from '../../redux/authorizations/auth-selectors';

export function Navigation() {
  // const isAuth = useSelector(getIsUserAuth);

  return (
    <nav className={s.navList}>
      <NavLink to="/" className="navLink">
        HomePage
      </NavLink>

      {/* {isAuth && ( */}
        <NavLink to="/main" className="navLink">
          MainPage
      </NavLink>
      <NavLink to="/statistics" className="navLink">
          StatisticsPage
        </NavLink>
      {/* ) */}
      {/* } */}
    </nav>
  );
}