import React from 'react'
import ProductItem from './ProductItem'
import '../css/Products.css'
import productData from '../productData'


export const Products = () => {
  return (
    <> 
    <div className="product">
         {productData.map((product) => (<ProductItem key={product.id}
          product={product}
         /> 
         ))}
    </div>
 
</>

    )
}
