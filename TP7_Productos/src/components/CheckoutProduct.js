import React from 'react'

export default function CheckoutProduct({ product }) {
  return (
    <div className='productCheckout'>
      <div>
        <h1>{product.title}</h1>
        <h2 style={{ color: 'rgb(245, 181, 53)' }} >${product.price}</h2>
      </div>
      <img src={product.images[1]} className="logo" alt="" />
    </div>
  )
}
