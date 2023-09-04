import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../styles.css";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} className="logo" alt="" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="user-icons">
        <a href="#">
          <i style={{ color: "rgb(245, 181, 53)" }} className="fas fa-user"></i>
        </a>
        <a href="#">
          <i
            style={{ color: "rgb(245, 181, 53)" }}
            className="fas fa-shopping-cart"
          ></i>
        </a>
      </div>
    </header>
  );
}
