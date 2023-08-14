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

  return (
    <>
      <main>  
        <ImageSlider slides={sliderData} />;        
        <section className="product-list">
        {productos.map((producto, id) => (
          id < 6 ? (
            <Link key={id} className="product" to={"products/"+id} data-category="collars">
                <img
                    src={producto.img}
                    alt={id}
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
