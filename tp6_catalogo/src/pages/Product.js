import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Product({productos}) {

  const { productId } = useParams();
  const [producto, setProducto] = useState({});

  useEffect(() => {
    console.log(productos)
    productos.map(producto => {
      if (producto.id == productId){
        console.log(producto.id == productId)
        setProducto(producto)
      }
    })    
  }, [productId]);

  if(producto === {}){
    return(
        <><div>Loading...</div></>
    )
  }else {
    return (
      <main>    
        <section className="product-detail">
          <div className="product-image">
            <img src="https://www.0800donrouch.com.ar//images/725/DIJE_BABY_ROUCH_CLSICOPLATA_0800_DON_ROUCH2021-12-07-05-32-50pm.png" alt="Product Name" />
          </div>
          <div className="product-info">
            <h1 className="product-name">{producto.name}</h1>
            <p className="product-description">
              {producto.detail}
            </p>
            <p className="product-detail-price">${producto.price}</p>
            <button className="btnAddToCart">Add to Cart</button>
          </div>
        </section>
      </main>
    )
  }

}
