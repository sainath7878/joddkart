import { Header, Footer, Main, Toast } from "../../components/index";
import { useAuth } from "../../context";

export function LandingPage() {
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
