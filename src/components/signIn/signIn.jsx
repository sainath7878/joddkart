import "./signIn.css";
import {
  BiDoorOpenFill,
  BiEyeFill,
  BiEyeSlashFill,
} from "../../assets/icons/Icons";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth, useProducts } from "../../context/index";
import axios from "axios";
import { useDocument } from "../../hooks/useDocument";

function SignIn() {

  useDocument("SignIn")
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(true);
  const { authDispatch } = useAuth();
  const { dispatch } = useProducts();
  const navigate = useNavigate();
  const [error, setError] = useState({ msg: "", state: false });

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setError({ msg: "", state: false });
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [error.state]);

  const signInHandler = async (loginDetails) => {
    const { email, password } = loginDetails;

    try {
      const response = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.encodedToken);
        authDispatch({
          type: "SET_USER",
          payload: {
            isLoggedIn: true,
            encodedToken: response.data.encodedToken,
          },
        });
        authDispatch({
          type: "SET_TOAST",
          payload: {
            type: "snackbar-success",
            msg: "Sign In Successful",
            toastState: true,
          },
        });
        dispatch({
          type: "INITIALIZE_CART",
          payload: response.data.foundUser.cart,
        });
        dispatch({
          type: "INITIALIZE_WISHLIST",
          payload: response.data.foundUser.wishlist,
        });
        navigate("/products", { replace: true });
      }
    } catch (err) {
      console.log("Error while signin In ", err);
      setError({ msg: "Please Enter valid Credentials", state: true });
    }
  };

  const formHandler = (event, { email, password }) => {
    event.preventDefault();
    if (!email && !password) {
      setError({ msg: "Please fill all the fields", state: true });
    } else {
      signInHandler(loginDetails);
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
          setLoginDetails({ ...loginDetails, email: e.target.value })
        }
      />{" "}
      <div className="password-input">
        <input
          type={`${showPassword ? "password" : "text"}`}
          id="password"
          placeholder="Enter Password"
          className={`form-input ${error.state ? "error-border" : ""}`}
          onChange={(e) =>
            setLoginDetails({ ...loginDetails, password: e.target.value })
          }
        />
        <span className="visibility-icon fs-s">
          {showPassword ? (
            <BiEyeFill onClick={() => setShowPassword(false)} />
          ) : (
            <BiEyeSlashFill onClick={() => setShowPassword(true)} />
          )}
        </span>
      </div>
      <button
        type="button"
        className="btn btn-secondary-outline fs-s"
        onClick={() =>
          signInHandler({ email: "johndoe@gmail.com", password: "johnDoe123" })
        }
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
      <Link to="/signup" className="fs-s">
        Not a Member yet? <span className="underline">Sign up now</span>
      </Link>
    </form>
  );
}

export { SignIn };
