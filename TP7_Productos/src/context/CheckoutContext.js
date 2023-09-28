import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CheckoutContext = createContext();

const CheckoutProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cantProducts, setCantProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addProduct = (product) => {
    setProducts([
        ...products,
        product
    ])
  }

  const updateTotalPrice = () => {
    let price = 0;
    products.map((product) => {
      price += product.price;
    })
    setTotalPrice(price);
  }

  useEffect(() => {
    setCantProducts(products.length);  
    updateTotalPrice();
  }, [products]);

  if (products !== []) {
    return (
      <CheckoutContext.Provider
        value={{
          products,
          addProduct,
          cantProducts,
          totalPrice
        }}
      >
        {props.children}
      </CheckoutContext.Provider>
    );
  }
};

export default CheckoutProvider;
