import React from 'react'
import '../css/Products.css'

 const ProductItem = () => {
  return (
    <div className='item'>
    <img className='imageItems' src="https://via.placeholder.com/250" alt="" />
    <div className='prdct'>
        <h2 className='productName'>Ürün 1</h2>
        <p className='productPrice'>100₺</p>
        <button className='addToBasket'>Sepete Ekle</button>
    </div>
    </div>
  )
}


export default ProductItem