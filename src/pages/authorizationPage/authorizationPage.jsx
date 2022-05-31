import { SignIn, SignUp } from "../../components/index";
import { useLocation } from "react-router-dom";
import "./authorizationPage.css";

function AuthorizationPage() {
  let location = useLocation();
  return (
    <>
      <div className="authorization">
        <div className="flex-1">
          {location.pathname === "/signin" ? <SignIn /> : <SignUp />}
        </div>
      </div>
    </>
  );
}

export { AuthorizationPage };
