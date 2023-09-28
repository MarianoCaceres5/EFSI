import React, {useContext} from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../styles.css";
import { CheckoutContext } from "../context/CheckoutContext";

export default function Header() {

  let {cantProducts} = useContext(CheckoutContext);

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
          <i className="fas fa-user userIcon"></i>
        </Link>
        <Link to="/checkout">
          <div className="checkoutHeader">            
            <i
              className="fas fa-shopping-cart cartIcon"
            ></i>
            <p className="checkoutProductsNumber">{cantProducts}</p>
          </div>
        </Link>
      </div>
    </header>
  );
}
