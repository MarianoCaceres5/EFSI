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
            <img src={producto.img} alt="Product Name" />
          </div>
          <div className="product-info">
            <h1 className="product-name">{producto.name}</h1>
            <p className="product-detail-price">${producto.price}</p>
            <p className="product-description">
              {producto.detail}
            </p>            
            <button className="btnAddToCart">ADD TO CART</button>
          </div>
        </section>
      </main>
    )
  }

}
