import { Navigate } from "react-router-dom";
import { getAuthenticated } from "../redux/auth/selectors";

import { useSelector } from 'react-redux';


export function PublicRoute({ component: Component }) {
  // const isAuth = useSelector(getIsAuth);
  // console.log(isAuth);

  const isAuthenticated = useSelector(getAuthenticated);
  // console.log(isAuthenticated);
  
  return (
    <>
      {isAuthenticated ? <Navigate to="/main" /> : <Component />}
    </>
  );
}