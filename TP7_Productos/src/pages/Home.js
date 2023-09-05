import React, { useContext } from "react";
import slider3 from "../images/slider3.jpg";
import slider2 from "../images/slider2.png";
import { Link } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import SimpleImageSlider from "react-simple-image-slider";

export default function Home() {
  const { products } = useContext(ProductsContext);

  let sliderData = [
    {
      url: slider3,
    },
    {
      url: slider2,
    },
  ];

  if (products === undefined || products === null || products === []) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <main>
          <div className='slider-container'>
            <SimpleImageSlider              
              width={'90%'}
              height={300}
              images={sliderData}
              showBullets={true}
              showNavs={true}
            />
          </div>          
          <section className="product-list">
            {products.map((producto) =>
              producto.id <= 6 ? (
                <Link
                  key={producto.id}
                  className="product"
                  to={"products/" + producto.id}
                >
                  <img
                    className="product-img"
                    src={producto.images[0]}
                    alt={producto.id}
                  />
                  <button className="btn">SEE MORE</button>
                </Link>
              ) : (
                <></>
              )
            )}
          </section>
        </main>
      </>
    );
  }
}
