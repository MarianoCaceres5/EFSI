import React from "react";
import slider3 from "../images/slider3.jpg";
import slider2 from "../images/slider2.png";
import { Link } from "react-router-dom";

export default function Home({productos}) {
  return (
    <>
      <main>
        <section className="carousel">
          <div className="carousel-inner">
            <div className="carousel-slide">
              <img src={slider3} alt="Carousel 1" />
            </div>
            <div className="carousel-slide">
              <img src={slider2} alt="Carousel 2" />
            </div>
            <div className="carousel-slide">
              <img src={slider3} alt="Carousel 3" />
            </div>
            {/* <!-- Add more carousel slides here --> */}
          </div>
          <button className="carousel-prev">&#10094;</button>
          <button className="carousel-next">&#10095;</button>
        </section>
        <section className="product-list">
        {productos.map((producto, id) => (
            <Link key={id} className="product" to={"products/"+id} data-category="collars">
                <img
                    src={producto.img}
                    alt={id}
                />
                <h1>{producto.name}</h1>
                <h3>{producto.price}</h3>
                <button className="btn">SEE MORE</button>
            </Link>
        ))}        
      </section>
      </main>
    </>
  );
}
