import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Products } from './components/Products'
import Cart from './components/Cart'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Products />
   <Cart />
    </>
  )
}

export default App
