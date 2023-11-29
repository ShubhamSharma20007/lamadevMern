import React, { useState } from 'react'
import "./slider.scss"
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
const Slider = () => {
    const [currentSlide , setcurrentSlide] = useState(0)
    const images=[
        "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        'https://plus.unsplash.com/premium_photo-1661342527041-fb42a8d10b9b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    
      ]

      const nextSlide = () => {
        setcurrentSlide(currentSlide === 2 ? 0 : (prev)=> prev+1)
      };
      const previousSlide = () => {
        setcurrentSlide(currentSlide === 0 ? 2 : (prev)=> prev-1)
      };
   

  return (
    <div>
       <div className="slider overflow-hidden ">
      <div className="cont md:h-full" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
      <img src={images[0]}  className='object-fill md:w-full w-[100vw]' alt="" />
      <img src={images[1]}  className='object-fill md:w-full w-[100vw]' alt="" />
      <img src={images[2]} className='oject-fill md:w-full w-[100vw]' alt="" />
      </div>
      
    <div className="icons left-[40%] md:left-[48%]">
      <div className="icon bg-slate-300 p-1 md:p-2 rounded-full cursor-pointer hover:bg-slate-400" onClick={previousSlide}>
      <WestIcon></WestIcon>
      </div>
      <div className="icon bg-slate-300 p-1 md:p-2 rounded-full cursor-pointer hover:bg-slate-400" onClick={nextSlide}>
      <EastIcon></EastIcon>
      </div>
    </div>
     </div>
    </div>
  )
}

export default Slider
