import React from 'react'
import { PiPawPrintLight } from "react-icons/pi"
import '../css/Header.css'


 const cartIcon = ({cart}) => {
  return (
    <> 
    <div className="icon">
    <PiPawPrintLight className='pawicon' />
    {cart.length > 0 &&
     <span className='pawIconSpan'> { cart.lenght } 
     </span> }
 </div>
 </>
   
  );
};

export default cartIcon ;