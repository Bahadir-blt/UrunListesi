import React from 'react'
import '../css/cart.css'

 const Cart = () => {
  return (
    <div className="Cart">
     <h2 className='Basket'>Sepet</h2>
     <ul>
        <li className='SpanTwo'>
            <span>Ürün 1</span>
            <span>100 ₺</span>
        </li>
     </ul>
     <hr  className='hr'/>
     <p className='totalPrice'>Toplam Tutar</p>
      <button className='emptyCart'>Sepeti Boşalt</button>
    </div>
  )
}


export default  Cart ;