import React from 'react'
import '../css/Header.css'
import './Cart'

const cartIcon = () => {
    return (
       <> 
       <div className="pawicon"> 
      <a href=""><img src="src/images/icons8-paw-35.png" alt="" /></a> 
         {cartIcon.length > 0 && (
             <span className='itemsInCart'>{cart.lenght} 
             {cart.length}
             </span  >
         )}
            </div> 
       </>

    );
};

export default cartIcon ;


