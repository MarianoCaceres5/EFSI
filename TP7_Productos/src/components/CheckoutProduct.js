import React, {useContext} from 'react'
import deleteIcon from '../images/deleteIcon.png'
import { CheckoutContext } from '../context/CheckoutContext'

export default function CheckoutProduct({ product }) {

  let {deleteProduct} = useContext(CheckoutContext);

  return (
    <div className='productCheckout'>
      <div>
        <h1>{product.title}</h1>
        <h2 style={{ color: 'rgb(245, 181, 53)' }} >${product.price}</h2>
      </div>
      <img src={product.images[1]} className="logo" alt="" />
      <button onClick={() => deleteProduct(product)} className="deleteContainer">
        <img src={deleteIcon} className="deleteIcon" alt="" />
      </button>
    </div>
  )
}
