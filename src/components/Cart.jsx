import React from 'react'
import '../css/cart.css'

const Cart = ({ cart, emptyCart }) => {

if (cart.length === 0  ) return

    return (
        <>
            <div className="Cart">
                <h2 className='Basket'>Sepet</h2>
                <ul>
                    {cart.map((item) => (
                    <li className='SpanTwo'>
                        <span> {item.name} </span>
                        <span> {item.price} </span>
                    </li>
                    ))}
                </ul>
                <hr className='hr' />
                <p className='totalPrice'>Toplam Tutar</p>
                <button className='emptyCart'onClick={emptyCart} >Sepeti Boşalt</button>
            </div>
            </>

    )
}


export default Cart;