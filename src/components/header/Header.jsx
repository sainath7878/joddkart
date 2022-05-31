import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./header.css";

import {
  BiHeartFill,
  BiCartFill,
  BiPersonFill,
  BiList,
  IcBaselineLogout,
} from "../../assets/icons/Icons";
import { useProducts } from "../../context/product-context";
import { useAuth } from "../../context/auth-context";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRef } from "react";

function Header() {
  const { state, dispatch } = useProducts();
  const { authState, authDispatch } = useAuth();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const timerId = useRef();
  const location = useLocation();

  const logoutHandler = () => {
    authDispatch({ type: "LOGOUT" });
    dispatch({ type: "INITIALIZE_WISHLIST", payload: [] });
    dispatch({ type: "INITIALIZE_CART", payload: [] });
    toast.error("Logged out");
    localStorage.removeItem("token");
    navigate("/");
  };

  const searchHandler = () => {
    dispatch({ type: "SET_SEARCH", payload: search });
  };

  const debounce = (callback, delay = 500) => {
    return function () {
      clearTimeout(timerId.current);
      timerId.current = setTimeout(() => {
        callback();
      }, delay);
    };
  };

  const debounceMethod = debounce(searchHandler, 500);

  return (
    <div>
      <header>
        <nav className="navigation d-flex">
          <div className="nav-section d-flex align-center">
            <button className="btn btn-secondary d-none mobile-view hamburger">
              <BiList className="fs-m" />
            </button>
            <Link to="/">
              <p className="nav-brand-link mr-sm">
                {" "}
                JODD<span className="brand-text">Kart</span>
              </p>
            </Link>
            <ul className="d-inline-block d-flex align-center">
              <Link to="/">
                <li className="d-inline-block fs-s mr-sm">
                  <p className="nav-link">Home</p>
                </li>
              </Link>

              <Link to="/products">
                <li className="d-inline-block fs-s mr-sm">
                  <p className="nav-link">Shop Now</p>
                </li>
              </Link>
            </ul>
          </div>

          <div className="nav-section d-flex align-center">
            <input
              type="text"
              placeholder="Search for games"
              className="form-input nav-search mr-sm"
              onChange={(event) => {
                location.pathname !== "/products" && navigate("/products");
                setSearch(() => event.target.value);
              }}
              onKeyUp={debounceMethod}
            />
            <Link to="/wishList">
              <div className="badge mr-sm">
                <BiHeartFill className="fs-m nav-link" />
                {authState.isLoggedIn ? (
                  <span className="text-badge d-flex-center">
                    {state.wishList.length}
                  </span>
                ) : null}
              </div>
            </Link>

            <Link to="/cart">
              <div className="badge mr-sm">
                <BiCartFill className="fs-m nav-link" />
                {authState.isLoggedIn ? (
                  <span className="text-badge d-flex-center">
                    {state.cart.length}
                  </span>
                ) : null}
              </div>
            </Link>

            {authState.isLoggedIn ? (
              <IcBaselineLogout
                className="fs-xl nav-link logout"
                onClick={() => logoutHandler()}
              />
            ) : (
              <Link to="/signin">
                <BiPersonFill className="fs-m nav-link" />
              </Link>
            )}
          </div>
        </nav>
        <div className="nav-searchbar-res d-none">
          <input
            type="text"
            placeholder="Search for games"
            className="form-input"
            onChange={(event) => searchHandler(event)}
          />
        </div>
      </header>
    </div>
  );
}

export { Header };
