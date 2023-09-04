import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CategoriesContext = createContext();

const CategoriesProvider = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((result) => {
        setCategories(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if(categories !== []){
    return (
        <CategoriesContext.Provider
          value={{
            categories,
          }}
        >
          {props.children}
        </CategoriesContext.Provider>
      );
  }
};

export default CategoriesProvider;
