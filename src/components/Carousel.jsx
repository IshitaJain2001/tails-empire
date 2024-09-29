import React from 'react'
import dog1 from '../images/offer1.png'
import dog2 from '../images/offer1.png'
import dog3 from '../images/offer1.png'
import dog4 from '../images/offer1.png'
import dog5 from '../images/offer1.png'
import dog6 from '../images/offer1.png'
import dog7 from '../images/offer1.png'

import { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [dog1, dog2, dog3, dog4, dog5, dog6, dog7];


  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };


  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };


  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000); 

    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <>
      <div id="default-carousel" className="relative top-[120px] w-[99%] mt-[-100px] mx-auto  h-[230px] rounded z-[-1] overflow-hidden" data-carousel="slide">
        {/* Carousel wrapper */}
        <div className="relative h-[150px] rounded-lg md:h-96">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-[99%] h-[50%] transition-transform duration-700 ease-in-out mx-[20px] ${
                index === currentSlide ? 'translate-x-[1px]' : currentSlide > index ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              <img
                src={slide}
                className="absolute block w-[98%] h-[100%] mx-auto"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>




        {/* Left Button */}
        <button
          className="absolute top-1/2 left-6 transform -translate-y-11 bg-gray-700 text-white px-6 py-4 rounded-full  opacity-40"
          onClick={prevSlide}
        >
          &#10094;
        </button>

        {/* Right Button */}
        <button
          className="absolute top-1/2 right-6 transform -translate-y-11 bg-gray-700 text-white px-6 py-4 rounded-full  opacity-40"
          onClick={nextSlide}
        >
          &#10095;
        </button>

     
      </div>
    </>
  );
};

export default Carousel;





