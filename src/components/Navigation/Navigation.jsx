import { NavLink } from 'react-router-dom';
import s from './Navigation.module.scss';

export function Navigation() {

  return (
    <nav className={s.navList}>
      <NavLink to="/" className={s.navLink}>
        Home
      </NavLink>      
        <NavLink to="/main" className={s.navLink}>
          Main
      </NavLink>
      <NavLink to="/statistics" className={s.navLink}>
          Stats
        </NavLink>      
    </nav>
  );
}