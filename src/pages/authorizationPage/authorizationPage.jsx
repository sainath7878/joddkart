import { Navigate, Outlet, useLocation } from "react-router-dom";
import "./authorizationPage.css";
import { useAuth } from "../../context";

function AuthorizationPage() {
  const {
    authState: { isLoggedIn },
  } = useAuth();
  let location = useLocation();
  const from = location?.state?.from || "/";

  return isLoggedIn ? <Navigate to={from} replace /> : <Outlet />;
}

export { AuthorizationPage };
