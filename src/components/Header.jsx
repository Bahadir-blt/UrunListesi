import React from 'react'
import { PiPawPrintLight } from "react-icons/pi"
import '../css/Header.css'


const Header = ({ cart }) => {
   return (
      <>
         <div className="header">
            <h3 className='mainTitle'>PisiPisi.com <br /> <span>Patili Dostların Sevilen Adresi</span> </h3>
            
            <div className="categoryOne">
               <a href="">Tüm Ürünler</a>
               <a href="">Kedi Mamaları</a>
               <a href="">Kedi Kumları</a>
            </div>
 <div className="icon">
            <PiPawPrintLight className='pawicon'/>
            <span className='pawIconSpan'>0</span>
            </div>
         </div>
      </>

   )
}
export default Header;

