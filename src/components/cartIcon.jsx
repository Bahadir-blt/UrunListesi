import React from 'react'
import { PiPawPrintLight } from "react-icons/pi"
import '../css/Header.css'


 const cartIcon = () => {
  return (
    <> 
    <div className="icon">
    <PiPawPrintLight className='pawicon' />
    <span className='pawIconSpan'>0</span>
 </div></>
   
  );
};

export default cartIcon ;