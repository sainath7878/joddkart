import "../signIn/signIn.css";
import {
  BiDoorOpenFill,
  BiEyeFill,
  BiEyeSlashFill,
} from "../../assets/icons/Icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function SignUp() {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setError({ msg: "", state: false });
    }, 5000);
    return () => clearTimeout(timeOut);
  });
  const [signUpDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({ msg: "", state: false });
  const [showPassword, setShowPassword] = useState({password:true, confirmPassword:true});

  const validation = /^(?=.*\d)(?=.*[a-z])([!@#$%]*).{5,}$/;

  const signUpHandler = (event, { name, email, password, confirmPassword }) => {
    event.preventDefault();
    if (!name && !email && !password && !confirmPassword) {
      setError({ msg: "Please fill all the fields", state: true });
    } else if (!password.match(validation)) {
      setError({
        msg: "Password must be alphanumeric with more than 5 characters!",
        state: true,
      });
    } else if (password !== confirmPassword) {
      setError({
        msg: "Both passwords must match",
        state: true,
      });
    }
  };

  return (
    <>
      <form className="form d-flex align-center flex-column">
        <h1 className="fs-l text-align-center">SIGN UP</h1>
        <p className="danger-text fs-s">{error.state && error.msg}</p>
        <input
          type="text"
          id="username"
          placeholder="Enter Username"
          className={`form-input ${error.state ? "error-border" : ""}`}
          onChange={(e) =>
            setSignUpDetails({ ...signUpDetails, name: e.target.value })
          }
        />
        <input
          type="email"
          id="email"
          placeholder="Enter Email"
          className={`form-input ${error.state ? "error-border" : ""}`}
          onChange={(e) =>
            setSignUpDetails({ ...signUpDetails, email: e.target.value })
          }
        />
        <div className="password-input">
          <input
            type={`${showPassword.password ? "password" : "text"}`}
            id="password"
            placeholder="Enter Password"
            className={`form-input ${error.state ? "error-border" : ""}`}
            onChange={(e) =>
              setSignUpDetails({ ...signUpDetails, password: e.target.value })
            }
          />
          <span className="visibility-icon fs-s">
            {showPassword.password ? (
              <BiEyeFill onClick={() => setShowPassword({...showPassword, password:false})} />
            ) : (
              <BiEyeSlashFill onClick={() => setShowPassword({...showPassword, password:true})} />
            )}
          </span>
        </div>
        <div className="password-input">
          <input
            type={`${showPassword.confirmPassword ? "password" : "text"}`}
            id="password"
            placeholder="Enter Password"
            className={`form-input ${error.state ? "error-border" : ""}`}
            onChange={(e) =>
              setSignUpDetails({
                ...signUpDetails,
                confirmPassword: e.target.value,
              })
            }
          />
          <span className="visibility-icon fs-s">
            {showPassword.confirmPassword ? (
              <BiEyeFill onClick={() => setShowPassword({...showPassword, confirmPassword:false})} />
            ) : (
              <BiEyeSlashFill onClick={() => setShowPassword({...showPassword, confirmPassword:true})} />
            )}
          </span>
        </div>
        <button
          className="btn btn-secondary fs-s"
          onClick={(e) => signUpHandler(e, signUpDetails)}
        >
          <BiDoorOpenFill /> SIGNUP
        </button>
        <Link to="/signin" className="fs-s">
          Already a Member <span className="underline">Sign In</span>
        </Link>
      </form>
    </>
  );
}

export { SignUp };