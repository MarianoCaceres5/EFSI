import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CheckoutContext = createContext();

const CheckoutProvider = (props) => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([
        ...products,
        product
    ])
  }

  if (products !== []) {
    return (
      <CheckoutContext.Provider
        value={{
          products,
          addProduct
        }}
      >
        {props.children}
      </CheckoutContext.Provider>
    );
  }
};

export default CheckoutProvider;
