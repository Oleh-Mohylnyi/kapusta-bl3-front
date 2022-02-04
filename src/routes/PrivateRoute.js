import { Navigate } from "react-router-dom";

export function PrivateRoute({ isAuth, component: Contacts }) {
  
  return (
    <>
      {isAuth ? <Contacts /> : <Navigate to="/login" />}
    </>
  );
}