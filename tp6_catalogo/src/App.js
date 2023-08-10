import React, {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout.js'
import Home from './pages/Home.js'
import Products from './pages/Products.js'
import Contact from './pages/Contact.js'
import Product from './pages/Product.js';

export default function App() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    let listaProductos = [
        {id: 0, img: 'https://www.0800donrouch.com.ar//images/725/DIJE_BABY_ROUCH_CLSICOPLATA_0800_DON_ROUCH2021-12-07-05-32-50pm.png', name: 'Any Product', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tristique quam.', price: 199.99},
        {id: 1, img: 'https://www.0800donrouch.com.ar//images/719/BABY_ROUCH_ANILLO_PLATA_CLASICO_0800_DON_ROUCH2022-07-04-01-28-03pm.jpg', name: 'Any Product', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tristique quam.', price: 199.99},
        {id: 2, img: 'https://www.0800donrouch.com.ar//images/723/CHAIN_BABY_ROUCH_PLATA_FULL_ICE_0800_DON_ROUCH2021-12-06-06-38-49pm.png', name: 'Any Product', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tristique quam.', price: 199.99},
        {id: 3, img: 'https://www.0800donrouch.com.ar//images/608/ARIT8S_PLATA_0800_DON_ROUCH_AROS2023-01-05-09-32-28am.png', name: 'Any Product', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tristique quam.', price: 199.99 },
        {id: 4, img: 'https://www.0800donrouch.com.ar//images/838/HILO_SAGRADO_0800_FULL_ICE2023-01-09-10-28-49am.png', name: 'Any Product', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tristique quam.', price: 199.99},
        {id: 5, img: 'https://www.0800donrouch.com.ar//images/571/Chain-pulsera-0800-don-rouch-PLATA2020-10-21-01-37-38pm.jpg', name: 'Any Product', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tristique quam.', price: 199.99}
    ]
    setProductos(listaProductos);
  }, []);
  
  if(productos === []){
    return(
        <><div>Loading...</div></>
    )
  }

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home productos={productos}/>}></Route>
            <Route path="/products" element={<Products productos={productos}/>}></Route>
            <Route path="/products/:productId" element={<Product productos={productos}/>}></Route>
            <Route path="/contact" element={<Contact />}></Route>
        </Route>
    </Routes>
  </BrowserRouter>
  )
}
