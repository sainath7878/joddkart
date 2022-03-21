import "../signIn/signIn.css";
import { BiDoorOpenFill } from "../../assets/icons/Icons";
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

  const validation = /^(?=.*\d)(?=.*[a-z])([!@#$%]*).{5,}$/;

  const signUpHandler = (event, { name, email, password, confirmPassword }) => {
    event.preventDefault();
    if (!name && !email && !password && !confirmPassword) {
        setError({ msg: "Please fill all the fields", state: true });
      }
      else if(!password.match(validation)) {
        setError({
          msg: "Password must be alphanumeric with more than 5 characters!",
          state: true,
        });
      } 
      else if(password !== confirmPassword){
        setError({
            msg: "Both passwords must match",
            state: true,
          });
      }
      
      
  };

  return (
    <>
      <form class="form d-flex align-center flex-column">
        <h1 class="fs-l text-align-center">SIGN UP</h1>
        <p className="danger-text fs-s">{error.state && error.msg}</p>
        <input
          type="text"
          id="username"
          placeholder="Enter Username"
          class={`form-input ${error.state ? "error-border" : ""}`}
          onChange={(e) =>
            setSignUpDetails({ ...signUpDetails, name: e.target.value })
          }
        />
        <input
          type="email"
          id="email"
          placeholder="Enter Email"
          class={`form-input ${error.state ? "error-border" : ""}`}
          onChange={(e) =>
            setSignUpDetails({ ...signUpDetails, email: e.target.value })
          }
        />
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          class={`form-input ${error.state ? "error-border" : ""}`}
          onChange={(e) =>
            setSignUpDetails({ ...signUpDetails, password: e.target.value })
          }
        />
        <input
          type="password"
          id="confirm-password"
          placeholder="Confirm Password"
          class={`form-input ${error.state ? "error-border" : ""}`}
          onChange={(e) =>
            setSignUpDetails({
              ...signUpDetails,
              confirmPassword: e.target.value,
            })
          }
        />
        <button class="btn btn-secondary fs-s" onClick={(e) => signUpHandler(e,signUpDetails)}>
          <BiDoorOpenFill /> SIGNUP
        </button>
        <Link to="/signIn" className="fs-s">
          Already a Member <span class="underline">Sign In</span>
        </Link>
      </form>
    </>
  );
}

export { SignUp };
