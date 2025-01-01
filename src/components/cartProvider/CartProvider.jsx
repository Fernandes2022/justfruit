import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext();
const CartProvider = ({children}) => {

  

  const [cart, setCart] = useState(loadCart());

  function saveCart (cart) {
      localStorage.setItem('cart', JSON.stringify(cart));
  }
  
function loadCart () {
  const saveToCart = localStorage.getItem('cart');

  return saveToCart ? JSON.parse(saveToCart) : [];
}

useEffect(() => {
  saveCart(cart)
}, [cart]);



const addToCart = (product, id) => {
  const newItem = {...product, amount: 1};
  const matchingItem = cart.find((item) => {
    return item.id === id;
  });

    if(matchingItem) {
      const newCart = [...cart].map((item) => {
        if(item.id === id) {
          return {...item, amount: matchingItem.amount + 1};
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  
    
}

  const increaseCart = (id) => {
    const newItem = cart.find((item) => {
      return item.id === id;
    })

    addToCart(newItem, id);
  }

  const reduceFromCart = (id) => {
    const matchingItem = cart.find((item) => {
      return item.id === id;
    });
    
    if(matchingItem) {
      const newCart = [...cart].map((item) => {
        if(item.id === id) {
          return {...item, amount: matchingItem.amount - 1};
        } else {
          return item;
        }
      });
      setCart(newCart);
    } if(matchingItem.amount < 2) {
      return removeFromCart(id);
    }
    
    
  }

  const removeFromCart = (id) => {
    const removeCart = cart.filter((item) => {
      return item.id !== id;
    })
    setCart(removeCart);
    
  }

  const clearCart = () => {
    setCart([]);
  }

  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const amountTotal = cart.reduce((accumulator, newItem) => {
      return accumulator + newItem.amount;
    }, 0)

    setAmount(amountTotal);
  },)
  
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalCal = cart.reduce((accumulator, newItem) => {
      return accumulator + newItem.amount * newItem.price;
    }, 0)

    setTotal(totalCal);
  },)
  

console.log(total);
  return (
    <CartContext.Provider value={{addToCart, cart, removeFromCart, clearCart, increaseCart, reduceFromCart, amount, total}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;