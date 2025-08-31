import { createContext, useEffect, useMemo, useState } from 'react'
import products from './ProductDetails'




export const ProductContext = createContext();



const ProductProvider = ({children}) => {

  const [product, setProduct] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setProduct(products);
  }, []);

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return product;
    return product.filter((p) => p.title.toLowerCase().includes(query));
  }, [product, searchQuery]);
  
  
 

  return <ProductContext.Provider value={{product: filteredProducts, rawProducts: product, searchQuery, setSearchQuery}}>
    {children}
  </ProductContext.Provider>
}

export default ProductProvider