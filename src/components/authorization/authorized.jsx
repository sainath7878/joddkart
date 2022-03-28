import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

function Authorized() {
  const { authState } = useAuth();
  const location = useLocation();
  return (
    <>
      {authState.isLoggedIn ? (
        <Outlet />
      ) : (
        <Navigate to="/signin" from={{ state: location }} replace />
      )}
    </>
  );
}

export { Authorized };
