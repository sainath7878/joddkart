import { Main} from "../../components/index";
import { useDocument } from "../../hooks/useDocument";

export function LandingPage() {
  useDocument("Home");
  return (
    <div>
      <Main />
    </div>
  );
}
