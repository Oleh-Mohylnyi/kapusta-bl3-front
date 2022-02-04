import { useDispatch, useSelector } from 'react-redux';
// import getIsAuth from '../redux/auth/selectors';
import {logout} from '../../redux/auth/operations'
import { getUserName } from '../../redux/auth/selectors'
import s from './userMenu.module.scss';
import Button from '../Button/Button'


export default function UserMenu() {
  const name = useSelector(getUserName);
    const dispatch = useDispatch();
    
    const handleLogout = () => {
        dispatch(logout());
    };

  return (
    <div className={s.list}>
      <span
        className={s.name}>
        {name}
      </span>
      <span
        className={s.span}>
        's contacts
      </span>

      <Button
          title="Logout"
          handleClick={() => handleLogout}
          styleType="red" 
          type="button"/>

    </div>
  );
}