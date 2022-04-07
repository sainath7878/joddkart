import { Header, Footer, Main, Toast } from "../../components/index";
import { useAuth } from "../../context";
import { useDocument } from "../../hooks/useDocument";

export function LandingPage() {
  useDocument("Home");
  const {
    authState: { toast },
  } = useAuth();
  return (
    <div>
      <Header />
      {toast.toastState && <Toast />}
      <Main />
      <Footer />
    </div>
  );
}
