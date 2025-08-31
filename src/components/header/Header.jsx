import { ShoppingCart, User } from 'lucide-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../cartProvider/CartContext'
import { ProductContext } from '../productDetails/ProductProvider'


const Header = () => {

  const {amount} = useContext(CartContext);
  const { searchQuery, setSearchQuery } = useContext(ProductContext);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const productsSection = document.getElementById('shop1');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <div>
     <section>
      <div className="flex justify-between items-center p-3 md:p-4 border-b border-slate-200 bg-white/80 backdrop-blur right-0 left-0 top-0 fixed z-50 md:px-12">
       
       <div className='flex items-center gap-2'>
        <Link to={"/"} className='flex items-center gap-2'>
          <h1 className='text-lg md:text-xl font-bold'>
            <span className='bg-gradient-to-b from-green-600 to-green-800 bg-clip-text text-transparent'>just</span>
            <span className='text-green-700'>FRUITS</span>
          </h1>
        </Link>
       </div>

       <div className='flex-1 max-w-xl mx-3 md:mx-8'>
        <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 border border-slate-300 rounded-full px-3 py-1 bg-white" autoComplete="off" role="search">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onInput={(e) => setSearchQuery(e.currentTarget.value)}
            placeholder='Search products...'
            className='outline-none bg-transparent text-sm w-full'
            aria-label='Search products'
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="none"
            spellCheck={false}
            enterKeyHint="search"
            inputMode="search"
            name="q"
          />
        </form>
       </div>

       <div className='flex items-center gap-3'>
        <button className='rounded-full border border-slate-300 p-1 hover:bg-slate-50' aria-label='Account'>
         <User className='text-slate-700 w-6 h-6'/>
        </button>
        <Link to={"/cartpage"} className='relative rounded-full border border-slate-300 p-1 hover:bg-slate-50' aria-label='Cart'>
         <ShoppingCart className='text-slate-700 w-6 h-6'/>
         {amount > 0 && (
          <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 text-[11px] leading-[18px] text-white bg-green-600 rounded-full text-center">
            {amount}
          </span>
         )}
        </Link>
       </div>
      </div>
     </section>
    </div>
  )
}

export default Header