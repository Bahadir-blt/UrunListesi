import React from 'react'
import '../css/cart.css'


const Cart = ({ cart, emptyCart }) => {
const total = cart.reduce ((cart, item) => cart + item.price, 0) ;


    if (cart.length === 0 ) return;

    return (
        <>
            <div className="Cart">
                <h2 className='Basket'>Sepet</h2>
                <ul>
                    {cart.map((item) => (
                    <li className='SpanTwo' key={item.id}>
                        <span> {item.name} </span>
                        <span> {item.price} </span>
                    </li>
                    ))}
                </ul>
                <hr className='hr' />
                <p className='totalPrice'>Toplam: {total} TL </p>
                <button className='emptyCart'onClick={emptyCart} >Sepeti Boşalt</button>
            </div>
            </>

    )
}


export default Cart;