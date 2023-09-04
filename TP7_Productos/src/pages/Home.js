import React, { useContext } from "react";
import slider3 from "../images/slider3.jpg";
import slider2 from "../images/slider2.png";
import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import { ProductsContext } from "../context/ProductsContext";

export default function Home() {
  const { products } = useContext(ProductsContext);

  let sliderData = [
    {
      image: slider3,
    },
    {
      image: slider2,
    },
  ];

  if (products === undefined || products === null || products === []) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <main>
          <ImageSlider slides={sliderData} />;
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
