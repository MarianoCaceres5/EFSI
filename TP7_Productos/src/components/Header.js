import React, {useContext} from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../styles.css";
import { CheckoutContext } from "../context/CheckoutContext";

export default function Header() {

  let {products} = useContext(CheckoutContext);

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
        <Link to="/">
          <i style={{ color: "rgb(245, 181, 53)" }} className="fas fa-user"></i>
        </Link>
        <Link to="/checkout">
          <h3 className="checkoutProductsNumber">{products.length}</h3>
          <i
            style={{ color: "rgb(245, 181, 53)" }}
            className="fas fa-shopping-cart"
          ></i>
        </Link>
      </div>
    </header>
  );
}
