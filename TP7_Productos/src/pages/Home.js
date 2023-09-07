import React, { useContext } from "react";
import slider3 from "../images/slider3.jpg";
import slider2 from "../images/slider2.png";
import { ProductsContext } from "../context/ProductsContext";
import SimpleImageSlider from "react-simple-image-slider";
import Product from "../components/Product";

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
              autoPlay={true}
              autoPlayDelay={2.0}
            />
          </div>
          <section className="product-list">
            {products.map((producto) =>
              producto.id <= 6 ? (
                <Product producto={producto} url={"products/" + producto.id} showProductDetail={false}/>
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
