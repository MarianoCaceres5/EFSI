import React from 'react'
import { useContext } from 'react'
import { CheckoutContext } from '../context/CheckoutContext';
import CheckoutProduct from '../components/CheckoutProduct';

export default function Checkout() {

  let {products} = useContext(CheckoutContext);

  return (
    <>
     <main>      
      <div className='checkoutContainer'>
        {products.map((product,id) => (
          <CheckoutProduct key={id} product={product}/>   
        ))}
        <div className='buttonCheckoutContainer'>
          <button className='buttonCheckout'>CHECKOUT</button>
        </div>        
      </div>
      </main>
    </>
  )
}
