import React from "react";
import bottom_image from '../Images/action_img_bottom.png'
import top_image from '../Images/action_img_top.png'

export default function Action() {
  return (
    <div className='flex-col'>
      {/* images - action */}
          <div className='parent mb-50'>
              <img src={bottom_image} className='bottom_image'/>
              <img src={top_image} className='top_image'/>
          </div>

          <div className='mt-[150px]'>
            <p className='text-[28px] text-center' >Interesting Collaboration <br/>With Us?</p>
              <p className='text-sm text-center mt-10'>Help you to reach your business goal</p>
              </div>
              
              <div className='flex  justify-center mt-10 mb-15'>

                <button className="bg-[#E2E2E2] text-black text-sm rounded-3xl py-2.5 px-2.5 w-36 hover:text-sky-400">About us</button>                       
                
              </div>
    </div>

  )
}
