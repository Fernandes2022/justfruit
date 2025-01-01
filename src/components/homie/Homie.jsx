import React, { useContext } from 'react'
import { ProductContext } from '../productDetails/ProductProvider'
import { CartContext } from '../cartProvider/CartProvider'
import hero1 from '../../assets/hero__1.webp'
import hero2 from '../../assets/hero__2.webp'
import hero3 from '../../assets/hero__3.webp'
import post1 from '../../assets/post__1.webp'
import post2 from '../../assets/post__2.webp'
import post3 from '../../assets/post__3.webp'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { category } from '../productDetails/ProductDetails'
import { ShoppingBag } from 'lucide-react'
import Product from '../product/Product'




export const hero = [
  {
    image: hero1,
    title: 'Dried Fruits Best Healthy',
    start: 'Starting At',
    price: 17
  },
  {
    image: hero2,
    title: 'Best Yummy Pizza',
    start: 'Starting At',
    price: 20
  },
  {
    image: hero3,
    title: 'Best Yummy Chips',
    start: 'Starting At',
    price: 8
  }
];

const post = [
  {
    name: 'Healthy Food, Healthy Life',
    date: 'December 21st, 2024',
    image: post1
  },
  {
    name: 'Healthy Food, Healthy Life',
    date: 'December 23rd, 2024',
    image: post2
  },
  {
    name: 'Healthy Food, Healthy Life',
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
   
   <div data-aos='flip-down' data-aos-delay='300' className='px-10 py-8  bg-gray-200 mb-8'>
    <div >
    <Link to={'/cartpage'}>
    <Slider {...settings}>
    {category.map((item) => (
      <div data-aos='fade-left' data-aos-delay='800' data-aos-duration='1000'>
        <div className="flex bg-gray-100 items-center py-4 space-x-6 border rounded-xl mx-2 justify-center px-10">
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

        <div className="mt-4 px-4 container mb-8">
          <div id='shop' className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4 scroll-mt-[9rem]" data-aos='fade-up' data-aos-delay='600' data-aos-duration='1000'>
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