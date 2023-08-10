import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../images/logo.png";
import "../styles.css";

export default function Layout() {
  return (
    <>
      <div style={{position: 'fixed', width: '100%', top: 0, zIndex: 1000}}>
        <div className="header-advice">DISCOUNT OF 50% IN EVERY PRODUCT</div>
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
              <i
                style={{ color: "rgb(245, 181, 53)" }}
                className="fas fa-user"
              ></i>
            </a>
            <a href="#">
              <i
                style={{ color: "rgb(245, 181, 53)" }}
                className="fas fa-shopping-cart"
              ></i>
            </a>
          </div>
        </header>
      </div>
      <Outlet />
      <footer className="footer">
        <div className="footer-bottom">
          <p style={{ fontSize: 1.2 + "rem", fontWeight: "bold" }}>
            &copy; 2023 Diamond Jewellery. All rights reserved.
          </p>
        </div>
        <div className="footer-content">
          <div className="footer-section">
            <div className="social-icons" style={{ marginTop: 10 + "px" }}>
              <a href="mesi">
                <i className="fab fa-facebook" style={{ color: "#ffa500" }}></i>
              </a>
              <a href="mesi">
                <i className="fab fa-twitter" style={{ color: "#ffa500" }}></i>
              </a>
              <a href="mesi">
                <i
                  className="fab fa-instagram"
                  style={{ color: "#ffa500" }}
                ></i>
              </a>
              {/* <!-- Add more social media icons as needed --> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}