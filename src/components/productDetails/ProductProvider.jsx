import React, { createContext, useEffect, useState } from 'react'
import products from './ProductDetails'




export const ProductContext = createContext();



const ProductProvider = ({children}) => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(products);
  },);
  
  
 

  return <ProductContext.Provider value={{product}}>
    {children}
  </ProductContext.Provider>
}

export default ProductProvider