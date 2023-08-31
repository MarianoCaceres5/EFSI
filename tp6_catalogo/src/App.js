import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.js";
import Home from "./pages/Home.js";
import Products from "./pages/Products.js";
import Contact from "./pages/Contact.js";
import Product from "./pages/Product.js";
import axios from "axios";
import CategoriesProvider from "./context/CategoriesContext.js";

export default function App() {
  const [productos, setProductos] = useState([]);

  const loadProducts = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((result) => {
        setProductos(result.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadProducts();
    //
  }, []);

  if (productos === []) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }

  return (
    <CategoriesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home productos={productos} />}></Route>
            <Route
              path="/products"
              element={<Products productos={productos} />}
            ></Route>
            <Route path="/products/:productId" element={<Product />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<h1>404</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </CategoriesProvider>
  );
}
