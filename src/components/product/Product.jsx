import { useContext } from 'react'
import { ShoppingBag } from 'lucide-react'
import { CartContext } from '../cartProvider/CartContext';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const Product = ({product}) => {
 const {id, image, title, rating, price} = product;
 const {addToCart} = useContext(CartContext);
  return (
   <div  className='flex flex-col gap-2 items-center border rounded-md p-4 group shadow-md transition-all ' >
   <div>
     <img src={image} alt="" className='group-hover:scale-125 duration-300 w-32 h-28 py-3'/>
   </div>

   <div>
     <h1 className="text-xl font-semibold">
       {title}
     </h1>
   </div>

   <div className="flex space-x-4">
     <div>
       <img src={rating} className='w-28' alt="" />
     </div>

     <div className='relative '>
      <Link to={"/cartpage"}>
      <ShoppingBag className='text-green-700'/>
       
      </Link>
     </div>
     
   </div>

   <div>
     <p className='text-slate-600'>
      $ {price}
     </p>
   </div>

   <div>
     <button className='p-2 px-3 bg-green-400 rounded-full text-white font-semibold group-hover:scale-90' onClick={() => addToCart(product, id)}>
       Add to cart
     </button>
   </div>
</div>
  )
}

export default Product

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.any.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
}