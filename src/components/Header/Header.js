import { useSelector } from 'react-redux';
import UserMenu from '../UserMenu/UserMenu';
import { getIsAuth } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';

export default function Header() {
    const isAuth = useSelector(getIsAuth);
    
    return (
        <div>
            <header>
                <NavLink to="/" >
                </NavLink>
                {isAuth ? <UserMenu /> : <></>}
            </header>

        </div>
    );
}