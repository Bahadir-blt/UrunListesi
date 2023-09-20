import React from 'react'
import ProductItem from './ProductItem'
import '../css/Products.css'
import productData from '../productData'


 const Products = (props) => {
  return (
    <> 
    <div className="product">
         {productData.map((product) => (<ProductItem key={product.id}
          product={product} 
          setCart={props.setCart}
         /> 
         ))}
    </div>
 
</>

    );
};

export default Products
