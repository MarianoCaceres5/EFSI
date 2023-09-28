import React from "react";
import { useContext } from "react";
import { CheckoutContext } from "../context/CheckoutContext";
import CheckoutProduct from "../components/CheckoutProduct";

export default function Checkout() {
  let { products, totalPrice } = useContext(CheckoutContext);

  return (
    <>
      <main>
        <div className="checkoutContainer">
          {products.map((product, id) => (
            <CheckoutProduct key={id} product={product} />
          ))}
          <div className="buttonCheckoutContainer">
            <button className="buttonCheckout">CHECKOUT</button>
          </div>
          <div className="totalPriceContainer">
            <h1>TOTAL: </h1>
            <h1 style={{ color: "rgb(245, 181, 53)" }}>${totalPrice}</h1>
          </div>
        </div>
      </main>
    </>
  );
}
