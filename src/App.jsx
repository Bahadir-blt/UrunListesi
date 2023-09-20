import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Header  from './components/Header'
import  Products  from './components/Products'
import Cart from './components/Cart'





function App() {
   const  [cart, setCart] = useState ([]) ;
 
   const  emptyCart = () => {
    setCart([])
   }

  return (
    <>
    <Header cart={cart} />
    <Products cart= {cart} setCart={setCart} />
    <Cart cart={cart} emptyCart={emptyCart} />
    </>
  )
}

export default App
