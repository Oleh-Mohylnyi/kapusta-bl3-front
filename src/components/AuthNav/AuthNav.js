import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './authNav.module.scss';


export default function AuthNav() {

    return (
        <nav className={s.listBtn}>
            <NavLink
                to="/login"
                // activeClassName={s.ActiveLink}
                className={s.Link}
            >
                Login
            </NavLink>
            <NavLink
                to="/register"
                // activeClassName={s.ActiveLink}
                className={s.Link}
            >
                Register
            </NavLink>
        </nav>
    );
}
