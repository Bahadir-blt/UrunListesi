import React from 'react'
import '../css/Header.css'


export const Header = () => {
  return (
    <>
    <div className="header">
       <h3 className='mainTitle'>PisiPisi.com <br /> <span>Patili Dostların Sevilen Adresi</span> </h3>
       
       <div className="categoryOne">
       <a  href="">Tüm Ürünler</a>
       <a href="">Kedi Mamaları</a>
       <a href="">Kedi Kumları</a>
       </div>

       <div className="pawicon"> 
      <a href=""><img src="src/images/icons8-paw-35.png" alt="" /></a> 
          <span className='itemsInCart'>0</span>
       </div>
        </div>
     </>
    
  )
}
export default Header

