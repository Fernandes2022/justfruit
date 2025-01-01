import React from 'react'
import Slider from 'react-slick'
import { hero } from './Homie'
import { ArrowBigRight, ArrowRight } from 'lucide-react'
import Aos from 'aos'
const Carous = () => {

 const settings = {
  
  dots: false,
  arrows: false,
  infinite: true,
  speed: 700,
  slidesToScroll: 1,
  autoplay: true,
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
     slidesToShow: 1,
     slidesToScroll: 1,
     initialSlide: 1,
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

  return (
    <div>
     <div>
     <div className='md:hidden mb-2 '>
     <Slider {...settings}>
        {hero.map((item) => (
          <div className='relative' data-aos='fade-up' data-aos-delay='500' data-aos-duration='1000'>
            <div>
              <img className='w-full h-[400px]' src={item.image} alt="" />
            </div>

            <div className="absolute top-[20%] pl-10">
             <div className='text-green-300'>
              {item.price === 17 && '100% Original Dry Fruits'}
             </div>
             <div className='flex flex-col gap-4'>
              <h1 className='text-2xl font-bold'>
               {item.title}</h1>
               <p className='text-slate-400 text-xl'>{item.start}</p>
               <p className='text-red-500'>$ {item.price}</p>
               <a href="#shop" className='bg-black rounded-full font-semibold w-[130px] p-2 flex gap-2'>
               <p className='text-white'>Shop now</p>
               <ArrowRight className='text-white'/>
               </a>
             </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>

    <div className='container hidden mt-16 md:block mx-auto shrink-0'>
        <div className='flex items-' data-aos='fade-up' data-aos-delay='500'>
        <div >
        {hero.map((item) => {
         return <div>
          {item.price === 17 && 
          <div className='relative' >
            <div>
              <img className='w-full' src={item.image} alt="" />
            </div>

            <div className="absolute top-[20%] pl-10">
             <div className='text-green-300'>
              {item.price === 17 && '100% Original Dry Fruits'}
             </div>
             <div className='flex flex-col gap-4'>
              <h1 className='text-2xl font-bold'>
               {item.title}</h1>
               <p className='text-slate-400 text-xl'>{item.start}</p>
               <p className='text-red-500'>$ {item.price}</p>
               <a href="#shop" className='bg-black rounded-full font-semibold w-[130px] p-2 flex gap-2'>
               <p className='text-white'>Shop now</p>
               <ArrowRight className='text-white'/>
               </a>
             </div>
            </div>
          </div>
         }
         </div>
        })}
        </div>
        <div>
        {hero.map((item) => {
         return <div>
          {item.price !== 17 && 
          <div className='relative'>
            <div>
              <img className='w-full h-[100%]' src={item.image} alt="" />
            </div>

            <div className="absolute top-[12%] pl-10">
             <div className='text-green-300'>
              {item.price === 17 && '100% Original Dry Fruits'}
             </div>
             <div className='flex flex-col gap-2'>
              <h1 className='text-2xl font-bold'>
               {item.title}</h1>
               <p className='text-slate-400 text-xl'>{item.start}</p>
               <p className='text-red-500'>$ {item.price}</p>
               <a href="#shop" className='bg-black rounded-full font-semibold w-[130px] p-2 flex gap-2'>
               <p className='text-white'>Shop now</p>
               <ArrowRight className='text-white'/>
               </a>
             </div>
            </div>
          </div>
         }
         </div>
        })}
        </div>
        </div>
    </div>
     </div>
    </div>
  )
}

export default Carous