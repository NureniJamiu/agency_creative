import React from "react";
import testimonial_img from '../Images/testimonials_img.png'

export default function Testimonials() {
  return (
    <div className='mt-20'>
      <p className='text-center text-sm'>Testimonials</p>
        <h1 className='text-center text-2xl'>People talk about us</h1>
          <img src={testimonial_img}/>
  </div>
  )
}
