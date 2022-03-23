import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

function Authorized() {
  const { authState } = useAuth();
  return (
    <>{authState.isLoggedIn ? <Outlet /> : <Navigate to="/signin" replace />}</>
  );
}

export { Authorized };
