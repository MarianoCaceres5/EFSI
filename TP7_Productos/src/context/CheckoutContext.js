import React, { createContext, useState, useEffect } from "react";

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
    localStorage.setItem(KEY_PRODUCTS, JSON.stringify([]));
  }

  const addProduct = (product) => {
    setProducts([
        ...products,
        product
    ])
    localStorage.setItem(KEY_PRODUCTS, JSON.stringify([...products, product]));
  }

  const deleteProduct = (deletedProduct) => {
    let newArray = products.filter(product => product !== deletedProduct);
    setProducts(newArray);
    localStorage.setItem(KEY_PRODUCTS, JSON.stringify(newArray));
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
          clearProducts,
          deleteProduct
        }}
      >
        {props.children}
      </CheckoutContext.Provider>
    );
  }
};

export default CheckoutProvider;
