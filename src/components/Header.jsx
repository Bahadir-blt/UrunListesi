import React from 'react'

import '../css/Header.css'
import CartIcon from './cartIcon';


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
          <CartIcon  />
         </div>
      </>

   )
}
export default Header;

