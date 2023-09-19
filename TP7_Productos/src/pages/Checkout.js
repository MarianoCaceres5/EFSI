import React from 'react'
import { useContext } from 'react'
import { CheckoutContext } from '../context/CheckoutContext';

export default function Checkout() {

  let {products} = useContext(CheckoutContext);
  console.log(products)

  return (
    <>
     <main>
      <div className='checkoutContainer'>
        {products.map((product,id) => (
          <div key={id} className='productCheckout'>
            <div>
              <h1>{product.title}</h1>
              <h2 >${product.price}</h2>
            </div>
            <img src={product.images[1]} className="logo" alt="" />
          </div>          
        ))}
      </div>
      </main>
    </>
  )
}
