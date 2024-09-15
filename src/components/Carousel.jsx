import React from 'react'
import dog1 from '../images/offer1.png'
import dog2 from '../images/offer1.png'
import dog3 from '../images/offer1.png'

import { useState } from 'react';
export default function Carousel() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [dog1, dog2, dog3];
  
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };
  
    const nextSlide = () => {
      setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };
  return (
<>


<div id="default-carousel" className="relative w-[99%] m-auto h-[230px]  rounded mt-[4px]  overflow-hidden" data-carousel="slide" >
      {/* Carousel wrapper */}
      <div className="relative  h-[150px] rounded-lg md:h-96">
        {slides.map((slide, index) => (
         <div
         key={index}
         className={`absolute w-[99%] h-[50%] transition-transform duration-700 ease-in-out mx-[20px]  ${
           index === currentSlide ? 'translate-x-[1px]' : currentSlide > index ? '-translate-x-full' : 'translate-x-full'
         }`}
       >
            <img
              src={slide}
              className="absolute block w-[98%] h-[100%] mx-auto "
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 translate-y-[18px] bottom-5 left-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-6 h-6 rounded-full border-black border-[1px] border-solid  ${
              index === currentSlide ? 'bg-black' : 'bg-white'
            }`}
            aria-current={index === currentSlide ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

     
    </div>
</>

  )
}
