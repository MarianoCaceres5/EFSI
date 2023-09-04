import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductsContext = createContext();

const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((result) => {
        setProducts(result.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (products !== []) {
    return (
      <ProductsContext.Provider
        value={{
          products
        }}
      >
        {props.children}
      </ProductsContext.Provider>
    );
  }
};

export default ProductsProvider;
