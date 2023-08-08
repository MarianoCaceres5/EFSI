import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout.js'
import Home from './pages/Home.js'
import Products from './pages/Products.js'
import Contact from './pages/Contact.js'
import Product from './pages/Product.js';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/products/:productId" element={<Product/>}></Route>
            <Route path="/contact" element={<Contact />}></Route>
        </Route>
    </Routes>
  </BrowserRouter>
  )
}
