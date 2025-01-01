import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ProductProvider from './components/productDetails/ProductProvider.jsx'
import CartProvider from './components/cartProvider/CartProvider.jsx'

createRoot(document.getElementById('root')).render(
  <CartProvider>
  <ProductProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </ProductProvider>
  </CartProvider>
  ,
)
