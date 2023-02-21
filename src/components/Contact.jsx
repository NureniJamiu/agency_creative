import React from 'react'
import logo from '../Images/logo_2.png'

export default function Contact() {
  return (
    <div className='mt-[50px] bg-[#383638] mb-50 '>
      {/* logo */}
            <div className='p-[50px]'>
              <img src={logo} alt="" className='w-[187px] h-[88px] ' />
            </div>
{/* t&cs & company in one div but with each seperate div of info */}
      <div className='flex justify-between'>
            <div className='ml-4'>
              <p className='p-1 font-black'>Terms & Policies</p>
                <p className='p-1'>Terms of services</p>
                  <p className='p-1'>Privacy Policy</p>
                      </div>
            <div className='mr-4'>
              <p className='p-1 font-black'>Company</p>
              <p className='p-1'>Home</p>
                <p className='p-1'>About Us</p>
                  <p className='p-1'>Contact Us</p>
                    </div>
      </div>

{/* social media icons */}
<div className='flex mt-10 ml '>

<ul className="flex gap-[25px] justify-center items-center mb-2">
                                                                
      <li>
                                                                    
              <i className="fab fa-whatsapp hover:text-sky-400"></i>
      </li>
                                                                    
      <li>
                                                                  
              <i className="fab fa-twitter hover:text-sky-400"></i>
      </li>
                                                                    
      <li>
                                                              
              <i className="fab fa-github hover:text-sky-400"></i>  
      </li>
                                    
      <li>
                                                                    
                <i className="fab fa-linkedin hover:text-sky-400"></i> 
      </li>

      <li>
                                                                    
                <i className="fab fa-facebook hover:text-sky-400"></i> 
      </li>

          <li>
                                                                   
                <i className="fab fa-instagram hover:text-sky-400"></i> 
        </li>
  </ul>
</div>
      
       <hr/>
      
      <p className=' mt-5 text-sm text-center'>Copyright @ 2022 Agency Creative. All Right Reserved</p>
    
    
    </div>
  )
}

