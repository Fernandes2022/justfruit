import { ChartCandlestick, Gift, PhoneCall, Truck } from 'lucide-react'
import React from 'react'




const footer = [
 {
  name: 'Free Shipping',
  know: 'Anywhere withing Lagos State',
  icon: <Truck />
 },
 {
  name: 'Best Price Guaranteed',
  know: 'We have got your back',
  icon: <ChartCandlestick />
 },
 {
  name: 'Free Cupside Pickup',
  know: 'We will never let you down',
  icon: <Gift />
 },
 {
  name: 'Support 24/7',
  know: 'Anytime, Anywhere',
  icon: <PhoneCall />
 },
]

const SemiFooter = () => {
  return (
    <div>
     <section >
      <div className='mt-4 px-8 mb-6 md:pl-12'>
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 '>
        {footer.map((item) => (
         <div className='flex gap-3 items-center '>
           <div className="rounded-full p-2 bg-gray-200 text-black">
            {item.icon}
           </div>

           <div className=''>
            <h1 className='text-xl font-semibold text-slate-600'>
             {item.name}
            </h1>
            <p className='text-sm text-slate-400'>
             {item.know}
            </p>
           </div>
         </div>
        ))}
       </div>
      </div>


      <div>
       <div className="relative border bottom-0 border-t-slate-400 border-r-0 border-l-0 border-b-0 mt-16">
       <div className="flex flex-col items-center py-3 text-slate-400">
         <h1>Copyright &copy; 2024. All rights reserved</h1>
          <h1>Designed by Timi-tech (X: @Timi_tech_)</h1>
      	</div>
       </div>
      </div>
     </section>
    </div>
  )
}

export default SemiFooter