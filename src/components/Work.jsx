import React from 'react'
import work_img_1 from '../Images/work_img_1.png'
import work_img_2 from '../Images/work_img_2.png'
import work_img_3 from '../Images/work_img_3.png'
import work_img_4 from '../Images/work_img_4.png'


export default function Work() {
  return (
    <div>
        {/* This image is created according to design  */}
        <div className='grid auto-cols-fr gap-10  mt-10 ml-20 bg-[#0B0F15] w-[262px] h-[269px] border-neutral-900 border-2 rounded-md'>
            <div className='grid mt-10 ml-20 bg-[#E2E2E2] w-[72px] h-[72px] rounded-full mb-20'>
                <i class="fa-solid fa-display text-black py-6 px-6"></i>
                    <p className='text-[16px] mt-3 font-black'>  <br/> SocialMedia Management</p>
                    </div>


        </div>

    

{/* These images are downloads from the design file */}

        <div className='flex-col justify-center items-center pt-2 ml-20'>    
            <div>
                <img src={work_img_2} alt='' className='p-2 w-[262px] h-[269px]' />
                     </div>  
                     
            <div>
                <img src={work_img_3} alt='' className='p-2 w-[262px] h-[269px]' />
                    </div> 

            <div>
                <img src={work_img_4} alt='' className='p-2 w-[262px] h-[269px]' />
                     </div> 
            
        </div>
    </div>
  )
}

// !images are not responding to div alignment eg flex justify-center, they need a restructre 