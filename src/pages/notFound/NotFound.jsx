import { oops } from "../../assets/images/index";
import "./notFound.css";
import { Link } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";

function NotFound() {
  useDocument("Page Not Found");
  return (
    <div className="not-found-container">
      <img src={oops} alt="oops" height="500px" />
      <Link to="/">
        <button className="btn btn-secondary fs-s">Go back to Homepage</button>
      </Link>
    </div>
  );
}

export { NotFound };
