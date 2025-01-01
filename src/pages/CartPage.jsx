import React, { useContext } from 'react'
import { CartContext } from '../components/cartProvider/CartProvider'
import { Minus, Plus, Trash, X } from 'lucide-react';

const CartPage = () => {
  const {cart, removeFromCart, clearCart, increaseCart, reduceFromCart, total} = useContext(CartContext);
  return (
    <div>
      <div>
        <div className="mt-24">
          <h1 className="text-3xl text-center font-semibold">
            Your Cart Items
          </h1>

          <div className="mt-8 mx-auto">
            <div className='md:px-10 p-4'>
              {cart.map((item) => {
              return  <div className="flex justify-between gap-4 items-center border rounded-xl my-6 mx-auto sm:w-[400px] md:p-6 p-4">
                <div key={item.id} className="flex flex-col items-center  ">
                  <div>
                    <img className='w-44' src={item.image} alt="" />
                  </div>

                  <div>
                    <h1 className="font-semibold">
                      {item.title}
                    </h1>
                  </div>

                  <div>
                    <p className='text-slate-400'>$ {item.price}</p>
                  </div>

                  <div>
                    <div className="border rounded-lg mt-2 flex p-1 space-x-3">
                      <button onClick={() => reduceFromCart(item.id)}>
                        <Minus  className='w-4 text-red-600'/>
                      </button>

                      <p>{item.amount}</p>

                      <button onClick={() => increaseCart(item.id)}>
                        <Plus className='w-4 text-green-800'/>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <button onClick={() => removeFromCart(item.id)}>
                  <X  className='text-red-700'/>
                  </button>

                  <div>
                    <p className='text-slate-600'>
                      $ {item.price * item.amount}
                    </p>
                  </div>
                </div>
              </div>
              })}
            </div>
          </div>

          <div className=''>
            <div className="bg-gradient-to-r from-purple-600 to-purple-300 mt-16 my-6 mx-auto sm:w-[400px] md:p-6 p-4 md:px-10 px-6 text-white flex justify-between">
              <div className='flex gap-3 items-center'>
                <h1 className="text-xl font-bold ">
                  Total:
                </h1>
                <span>
                 $ {total}
                </span>
              </div>

              <button onClick={() => clearCart()}>
              <Trash className='font-semibold text-red-600'/>
              </button>
            </div>
          </div>


          <div>
       <div className="absolute right-0 left-0 border bottom-0 border-t-slate-400 border-r-0 border-l-0 border-b-0 mt-16">
       <div className="flex flex-col items-center py-3 text-slate-400">
         <h1>Copyright &copy; 2024. All rights reserved</h1>
          <h1>Designed by Timi-tech (X: @Timi_tech_)</h1>
      	 </div>
         </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage