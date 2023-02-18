import React from "react";
import intro_img from '../Images/intro_img.png'

const Intro = () => {
  return <div className="flex-col ">
          <div className="text-center">
            
            <h1 className="p-4 text-[28px] font-extrabold ">Make your dream <br/>business goal come true</h1>
                  <p className="text-sm pb-10"> when you need us for improve your business,<br/>
                        then come with us to help your business have reach it,<br/> 
                          you just sit and feel that goal. 
                            </p>
                               <button className="bg-[#377DFF] text-sm rounded-3xl py-2.5 px-2.5 justify-center w-36">Start Project</button>
                                 
                                 {/* image - 1st in the page */}
                                    <div className="align-middle mt-5">
                                       <img src={intro_img} />
                                          </div>
                            </div>
  </div>;
};

// ! image not responding to desktop alignment to centre 
export default Intro;
