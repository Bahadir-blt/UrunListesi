import React from 'react'
import '../css/Products.css'

 const ProductItem = ({product,  setCart}) => {
    const addToCart = (product) => {
    //setCart([...cart, product])
    setCart((prevState) => [...prevState, product])
  };
 
 
  return (
    <>
     <div className='item'>
    <img className='imageItems' src={product.image}  alt="" />
    <div className='prdct'>
      <h2 className='productName'>{product.name} </h2>
      <p className='productPrice'>{product.price} </p>
      <button className='addToBasket'onClick={() => addToCart (product)} >Sepete Ekle  </button>
    </div>
    </div>
    </>
   
  )
};


export default ProductItem ;