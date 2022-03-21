import "./signIn.css";
import { BiDoorOpenFill } from "../../assets/icons/Icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function SignIn() {

  useEffect(()=>{
    const timeOut = setTimeout(()=>{
      setError({msg: "", state: false})
    },3000)
    return () => clearTimeout(timeOut);
  })

  const [error, setError] = useState({ msg: "", state: false });
  const [loginDetails, setLoginDetails] = useState({
    userName: "",
    password: "",
  });
  const validation = /^(?=.*\d)(?=.*[a-z]).{5,10}$/;

  const formHandler = (event, { userName, password }) => {
    event.preventDefault();
    if (!userName && !password) {
      setError({ msg: "Please fill all the fields", state: true });
    } else if (!password.match(validation)) {
      setError({
        msg: "Password must be alphanumeric with more than 5 characters!",
        state: true,
      });
    }
  };

  return (
    <form className="form d-flex align-center flex-column">
      <h1 className="fs-l text-align-center">Login</h1>
      <p className="danger-text fs-s">{error.state && error.msg}</p>
      <input
        type="email"
        id="email"
        placeholder="Enter Email"
        className={`form-input ${error.state ? "error-border" : ""}`}
        onChange={(e) =>
          setLoginDetails({ ...loginDetails, userName: e.target.value })
        }
      />
      <input
        type="password"
        id="password"
        placeholder="Enter Password"
        className={`form-input ${error.state ? "error-border" : ""}`}
        onChange={(e) =>
          setLoginDetails({ ...loginDetails, password: e.target.value })
        }
      />
      <button
        className="btn btn-secondary-outline fs-s"
        onClick={(e) => e.preventDefault()}
      >
        <BiDoorOpenFill />
        LOGIN WITH TEST CREDENTIALS
      </button>
      <button
        className="btn btn-secondary fs-s"
        onClick={(e) => formHandler(e, loginDetails)}
      >
        <BiDoorOpenFill />
        LOGIN
      </button>
      <Link to="/signUp" className="fs-s">
        Not a Member yet? <span className="underline">Sign up now</span>
      </Link>
    </form>
  );
}

export { SignIn };
