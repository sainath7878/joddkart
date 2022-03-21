import { Header, Footer, SignIn, SignUp } from "../../components/index";
import { useLocation } from "react-router-dom";
import "./authorizationPage.css";

function AuthorizationPage() {
  let location = useLocation();
  return (
    <>
      <div className="authorization">
        <Header />
        <div className="flex-1">
          {location.pathname === "/signIn" ? <SignIn /> : <SignUp />}
        </div>
        <Footer />
      </div>
    </>
  );
}

export { AuthorizationPage };
