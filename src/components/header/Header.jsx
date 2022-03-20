import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

import {
  BiHeartFill,
  BiCartFill,
  BiPersonFill,
  BiList,
} from "../../assets/icons/Icons";
import { useProducts } from "../../context/product-context";

function Header() {
  const { state } = useProducts();

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
            />
            <Link to="/wishList">
              <div className="badge mr-sm">
                <BiHeartFill className="fs-m nav-link" />
                <span className="text-badge d-flex-center">{state.wishList.length}</span>
              </div>
            </Link>
              

            <Link to="/cart">
              <div className="badge mr-sm">
                <BiCartFill className="fs-m nav-link" />
                <span className="text-badge d-flex-center">{state.cart.length}</span>
              </div>
            </Link>

            <a href="/">
              <BiPersonFill className="fs-m nav-link" />
            </a>
          </div>
        </nav>
        <div className="nav-searchbar-res d-none">
          <input
            type="text"
            placeholder="Search for games"
            className="form-input"
          />
        </div>
      </header>
    </div>
  );
}

export { Header };
