import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

import {
  BiHeartFill,
  BiCartFill,
  BiPersonFill,
  BiList,
} from "../../assets/icons/Icons";

function Header() {
  return (
    <div>
      <header>
        <nav className="navigation d-flex">
          <div className="nav-section d-flex align-center">
            <button className="btn btn-secondary d-none mobile-view hamburger">
              <BiList className="fs-m" />
            </button>
            <a href="/" className="nav-brand-link mr-sm">
              JODD<span className="brand-text">Kart</span>
            </a>
            <ul className="d-inline-block d-flex align-center">
              <Link to="/">
                <li className="d-inline-block fs-s mr-sm">
                  <a href="/" className="nav-link">
                    Home
                  </a>
                </li>
              </Link>

              <Link to="/products">
                <li className="d-inline-block fs-s mr-sm">
                  <a href="/" className="nav-link">
                    Shop Now
                  </a>
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
            <a href="/" className="mr-sm">
              <BiHeartFill className="fs-m nav-link" />
            </a>
            <div className="badge mr-sm">
              <a href="/">
                <BiCartFill className="fs-m nav-link" />
                <span className="text-badge d-flex-center">5</span>
              </a>
            </div>
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
