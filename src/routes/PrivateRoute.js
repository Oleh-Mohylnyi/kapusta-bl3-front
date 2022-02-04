import { Navigate } from "react-router-dom";

export function PrivateRoute({ isAuth, component: Component }) {
  
  return (
    <>
      {isAuth ? <Component /> : <Navigate to="/" />}
    </>
  );
}