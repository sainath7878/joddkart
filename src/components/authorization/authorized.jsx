import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

function Authorized() {
  const { authState } = useAuth();
  const location = useLocation();
  const from = location?.pathname || "/";
  return (
    <>
      {authState.isLoggedIn ? (
        <Outlet />
      ) : (
        <Navigate to="/signin" state={{ from: from }} replace />
      )}
    </>
  );
}

export { Authorized };
