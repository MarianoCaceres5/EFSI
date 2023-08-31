import React from "react";
import slider3 from "../images/slider3.jpg";
import slider2 from "../images/slider2.png";
import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";

export default function Home({productos}) {
  
  let sliderData = [
    {
      image:slider3
    },
    {
      image:slider2
    }
  ];

  if(productos === undefined || productos === null){
    return(
      <div>Loading...</div>
    )
  }else{
    return (
      <>
        <main>  
          <ImageSlider slides={sliderData} />;        
          <section className="product-list">
          {productos.map((producto) => (
            producto.id <= 6 ? (
              <Link key={producto.id} className="product" to={"products/"+producto.id}>
                  <img
                    className="product-img"
                    src={producto.images[1]}
                    alt={producto.id}
                  />
                  <button className="btn">SEE MORE</button>
              </Link>
            ) : (
              <div></div>
            )
  
          ))}        
        </section>
        </main>
      </>
    );
  }
}
