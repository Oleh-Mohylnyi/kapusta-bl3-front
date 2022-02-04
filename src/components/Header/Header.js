import { useSelector } from 'react-redux';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import {getIsAuth} from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import s from './headers.module.scss';


export default function Header() {
    const isAuth = useSelector(getIsAuth);
    
    return (
        <div
        className={s.container}>
            <header
            className={s.header}>
                <NavLink to="/" className={s.title}>
                    <h1>Phonebook</h1>
                </NavLink>
                {isAuth ? <UserMenu /> : <AuthNav />}
            </header>

        </div>
    );
}