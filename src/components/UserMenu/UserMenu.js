import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations'
import { getUserEmail } from '../../redux/auth/selectors'
import Button from '../Button/Button'


export default function UserMenu() {
  const name = useSelector(getUserEmail);
    const dispatch = useDispatch();
    
    const handleLogout = () => {
        dispatch(logout());
    };

  return (
    <div>
      <span>
        {name}
      </span>

      <Button
          title="Logout"
          handleClick={() => handleLogout}
          type="button"/>

    </div>
  );
}
