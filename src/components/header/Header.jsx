import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

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

  const getActiveStyle = (isActive) => {
    return isActive ? { color: "#a40ae0" } : null;
  };

  return (
    <div>
      <header>
        <nav className="navigation d-flex">
          <div className="nav-section d-flex align-center">
            <button className="btn btn-secondary d-none mobile-view hamburger">
              <BiList className="fs-m" />
            </button>
            <NavLink to="/">
              <p className="nav-brand-link mr-sm">
                {" "}
                JODD<span className="brand-text">Kart</span>
              </p>
            </NavLink>
            <ul className="d-inline-block d-flex align-center">
              <NavLink
                className="nav-link"
                to="/"
                style={({ isActive }) =>
                  isActive ? { color: "#a40ae0" } : null
                }
              >
                <li className="d-inline-block fs-s mr-sm">
                  <p>Home</p>
                </li>
              </NavLink>

              <NavLink
                className="nav-link"
                to="/products"
                style={({ isActive }) => getActiveStyle(isActive)}
              >
                <li className="d-inline-block fs-s mr-sm">
                  <p>Shop Now</p>
                </li>
              </NavLink>
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
            <NavLink to="/wishList">
              <div className="badge mr-sm">
                <BiHeartFill className="fs-m nav-link" />
                {authState.isLoggedIn ? (
                  <span className="text-badge d-flex-center">
                    {state.wishList.length}
                  </span>
                ) : null}
              </div>
            </NavLink>

            <NavLink to="/cart">
              <div className="badge mr-sm">
                <BiCartFill className="fs-m nav-link" />
                {authState.isLoggedIn ? (
                  <span className="text-badge d-flex-center">
                    {state.cart.length}
                  </span>
                ) : null}
              </div>
            </NavLink>

            {authState.isLoggedIn ? (
              <IcBaselineLogout
                className="fs-xl nav-link logout"
                onClick={() => logoutHandler()}
              />
            ) : (
              <NavLink to="/signin">
                <BiPersonFill className="fs-m nav-link" />
              </NavLink>
            )}
          </div>
        </nav>
        <div className="nav-searchbar-res d-none">
          <input
            type="text"
            placeholder="Search for games"
            className="form-input"
            onChange={(event) => {
              location.pathname !== "/products" && navigate("/products");
              setSearch(() => event.target.value);
            }}
            onKeyUp={debounceMethod}
          />
        </div>
      </header>
    </div>
  );
}

export { Header };
