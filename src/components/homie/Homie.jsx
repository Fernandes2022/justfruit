import React, { useContext } from 'react'
import { ProductContext } from '../productDetails/ProductProvider'
import { CartContext } from '../cartProvider/CartProvider'
import hero1 from '../../assets/fruit-1.jpg'
import hero2 from '../../assets/fruit-2.jpg'
import hero3 from '../../assets/fruit-3.jpg'
import post1 from '../../assets/fruit-banner-1.jpg'
import post2 from '../../assets/fruit-banner-2.jpg'
import post3 from '../../assets/fruit-banner-3.jpg'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { category } from '../productDetails/ProductDetails'
import { ShoppingBag } from 'lucide-react'
import Product from '../product/Product'




export const hero = [
  {
    image: hero1,
    title: 'Focus On Freshness & Quality',
    start: 'Starting At',
    price: 17
  },
  {
    image: hero2,
    title: 'Focus On Variety & Choice',
    start: 'Starting At',
    price: 20
  },
  {
    image: hero3,
    title: 'Focus On Health & Benefits',
    start: 'Starting At',
    price: 8
  }
];

const post = [
  {
    name: 'Fruits So Fresh, It Is Still Smiling',
    date: 'December 21st, 2024',
    image: post1
  },
  {
    name: 'Your Daily Dose Of Delicious',
    date: 'December 23rd, 2024',
    image: post2
  },
  {
    name: 'Life Is A Lot Better With Fruits',
    date: 'December 26th, 2024',
    image: post3
  }
];

const Test = () => {

  const settings = {
  
    dots: true,
    arrows: true,
    infinite: true,
    speed: 700,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
     {
      breakpoint: 10000,
      settings: {
       slidesToShow: 3,
       slidesToScroll: 1,
       infinite: true,
      }
     }, {
      breakpoint: 1024,
      settings: {
       slidesToShow: 2,
       slidesToScroll: 1,
       initialSlide: 2,
      }
     }, {
      breakpoint: 640,
      settings: {
       slidesToShow: 1,
       slidesToScroll: 1,
      }
     }
    ]
   }

  const {product} =  useContext(ProductContext);
  const {addToCart} = useContext(CartContext);
  
  return (
   <div>
   
   <div data-aos='flip-down' data-aos-delay='300' className='px-10 py-8  bg-gradient-to-r from-green-400 to-red-600 mb-8'>
    <div >
    <Link to={'/cartpage'}>
    <Slider {...settings}>
    {category.map((item) => (
      <div data-aos='fade-left' data-aos-delay='800' data-aos-duration='1000'>
        <div className="flex bg-gradient-to-l from-green-100 to-red-400 items-center py-4 space-x-6 shadow-sm rounded-xl mx-2 justify-center px-10">
          <div className='flex flex-col gap-2'>
            <h1 className='font-semibold text-green-600'>
              {item.title}
            </h1>
            <p className='text-sm text-slate-500'>
              {item.much}
            </p>
          </div>

          <div>
            <img src={item.image} alt="" className='w-32'/>
          </div>
        </div>
      </div>
    ))}
    </Slider>
    </Link>
    </div>
   </div>


   <div>
        <div className="p-4 text-center ">
          <div>
            <h1 className="font-bold ">
              Availabe Products
            </h1>

            <p className="text-sm text-slate-700">
              Buy your fresh fruits, vegetables, bread & bakery
            </p>
          </div>

        </div>

        <div className="mt-4 px-4 container mb-8 scroll-mt-[16rem]" id='shop1'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4 " data-aos='fade-up' data-aos-delay='600' data-aos-duration='1000'>
            {product.map(item => {
              return <Product  key={item.id} product={item}/>
            })}
          </div>
        </div>


        <div className="mt-10 p-5">
          <div>
            <h1 className='text-2xl font-semibold'>
              Latest News...
            </h1>
          </div>

          <div className="mb-8">
            <div className="mt-3 grid gap-4 grid-cols-1 md:grid-cols-3 ">
              {post.map((item) => (
                <div className='flex flex-col gap-3 ' data-aos='flip-up' data-aos-delay='800' data-aos-duration='1000'>
                  <div>
                    <img src={item.image} className='w-full' alt="" />
                  </div>

                  <div>
                    <p className='text-slate-500'>
                      {item.date}
                    </p>
                  </div>

                  <div>
                    <h1 className="text-xl font-semibold">
                      {item.name}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
 </div>
  )
}

export default Test