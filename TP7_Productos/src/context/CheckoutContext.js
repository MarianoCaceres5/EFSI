import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CheckoutContext = createContext();

const CheckoutProvider = (props) => {

  const KEY_PRODUCTS = 'products'

  const [products, setProducts] = useState([]);
  const [cantProducts, setCantProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const loadProducts = () => {
    let items = JSON.parse(localStorage.getItem(KEY_PRODUCTS));
    if(items){
      setProducts(items);      
    }else{
      setProducts([]);
    }
  }

  const clearProducts = () => {
    setProducts([])
    localStorage.setItem(KEY_PRODUCTS, JSON.stringify(products));
  }

  const addProduct = (product) => {
    setProducts([
        ...products,
        product
    ])
    localStorage.setItem(KEY_PRODUCTS, JSON.stringify(products));
  }

  const updateTotalPrice = () => {
    let price = 0;
    products.map((product) => {
      price += product.price;
    })
    setTotalPrice(price);
  }

  useEffect(() => {
    loadProducts();
  }, []);

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
          totalPrice,
          clearProducts
        }}
      >
        {props.children}
      </CheckoutContext.Provider>
    );
  }
};

export default CheckoutProvider;
