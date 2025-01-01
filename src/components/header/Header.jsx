import { SearchIcon, ShoppingCart, User } from 'lucide-react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../cartProvider/CartProvider'

const Header = () => {

  const {amount} = useContext(CartContext);

  return (
    <div>
     <section>
      <div className="flex justify-between space-x-3 p-2 items-center border-t-slate-300 border-b-slate-300 border right-0 left-0 top-0 fixed z-50 pr-8 md:px-12">
       
       <div>
        <Link to={"/"}>
        <h1 className='text-sm bg-gradient-to-b from-green-200 to-green-800 bg-clip-text text-transparent'>
         just<span className='text-3xl font-bold font-sans'>FRUITS</span>
        </h1></Link>
       </div>

       <div>
        <div className="flex gap-0 border rounded-xl p-1 space-x-1 ">
         <input type="text"  placeholder='search for products' className=' border border-r-slate-300 border-t-0 border-l-0 border-b-0 max-w-[80px] sm:max-w-[200px] flex-1 overflow-hidden bg-transparent text-sm'/>
         <a href="/cartpage">
         <SearchIcon  className='w-5 text-slate-500 '/>
         </a>
        </div>
       </div>

       <div className='flex gap-2'>
        <div className='rounded-full border border-slate-400 p-1'>
         <User className='text-slate-600 w-6 h-6'/>
        </div>
        <div className='rounded-full border border-slate-400 p-1'>
         <Link to={"/cartpage"}>
         <ShoppingCart className='text-slate-600 w-6 h-6'/>
         <div className="absolute top-0 z-50 bg-green-400 text-white rounded-full ">
         <p className=''>{amount}</p>
        </div>
         </Link>
        </div>

        
       </div>
      </div>
     </section>
    </div>
  )
}

export default Header