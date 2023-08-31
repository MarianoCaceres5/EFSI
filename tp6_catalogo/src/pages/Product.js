import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Product() {

  const { productId } = useParams();
  const [producto, setProducto] = useState({images: []});

  let loadProduct = () => {    
    axios
      .get("https://dummyjson.com/products/"+productId)
      .then((result) => {
        console.log(result.data.images)
        setProducto(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadProduct();  
  }, [productId]);

  if(producto === {} && producto !== undefined && producto !== null && producto.images !== undefined){
    return(
        <><div>Loading...</div></>
    )
  }else {
    return (
      <main>    
        <section className="product-detail">
          <div className="product-image">
            <img src={producto.images[1]} alt="Product Name" />
          </div>
          <div className="product-info">
            <h1 className="product-name">{producto.title}</h1>
            <p className="product-detail-price">${producto.price}</p>
            <p className="product-description">
              {producto.description}
            </p>            
            <button className="btnAddToCart">ADD TO CART</button>
          </div>
        </section>
      </main>
    )
  }

}
