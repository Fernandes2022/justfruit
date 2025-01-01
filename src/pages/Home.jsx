import React from 'react'
import Homie from '../components/homie/Homie'
import Carous from '../components/homie/Carous'
import { Mail } from 'lucide-react'
import SemiFooter from '../components/semiFooter/SemiFooter'

const Home = () => {


  

  return (
    <>
    <div>
    <div className='mt-14 '>

      <div>
      <Carous />
      </div>

      <div className=" md:mt-10 md:px-8">
      <Homie />
      </div>

      <div className='bg-gradient-to-r from-gray-800 to-gray-600 md:mx-12 mb-8'>
        <div className='py-3 px-6 flex flex-col md:flex-row md:justify-between items-center gap-4' data-aos='zoom-in-up' data-aos-delay='800' data-aos-duration='1000'>
          <div className='flex items-center gap-3  text-white'>
            <div>
              <Mail />
            </div>

            <div>
              <h2>Sign up to Newsletter</h2>
              <p className="text-sm text-slate-200">
                ...and discount of 20% for the first Shopping
              </p>
            </div>
          </div>

          <div>
            <div className="rounded-full bg-white flex ">
              <input type="text" placeholder='Enter your email' className='text-sm pl-1 rounded-full'/>

              <button className='px-2 ml-0 m-1 rounded-full bg-gray-600 '>
                subscribe
              </button>
            </div>
          </div>
        </div>

      </div>

      <div>
        <div className="mt-5">
          <SemiFooter />
        </div>
      </div>
    </div>

    
    
    </div>
    
    
    </>
  )
}

export default Home