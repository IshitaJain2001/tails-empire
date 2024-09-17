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

  // Next Slide Function
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  // useEffect to handle automatic sliding
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000); // Move to the next slide every 3 seconds

    // Cleanup interval when the component unmounts or when currentSlide changes
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <>
      <div id="default-carousel" className="relative top-[120px] w-[99%] m-auto h-[230px] rounded mt-[4px] overflow-hidden" data-carousel="slide">
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

        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 translate-y-[18px] bottom-5 left-1/2 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-6 h-6 rounded-full border-black border-[1px] border-solid ${
                index === currentSlide ? 'bg-black' : 'bg-white'
              }`}
              aria-current={index === currentSlide ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;


// import React, { useState, useEffect } from 'react';
// import dog1 from '../images/offer1.png';
// import dog2 from '../images/offer1.png';
// import dog3 from '../images/offer1.png';
// import dog4 from '../images/offer1.png';
// import dog5 from '../images/offer1.png';
// import dog6 from '../images/offer1.png';
// import dog7 from '../images/offer1.png';

// const Carousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = [dog1, dog2, dog3, dog4, dog5, dog6, dog7];

//   // Next Slide Function
//   const nextSlide = () => {
//     setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
//   };

//   // useEffect to handle automatic sliding
//   useEffect(() => {
//     const slideInterval = setInterval(nextSlide, 3000); // Move to the next slide every 3 seconds

//     // Cleanup interval when the component unmounts or when currentSlide changes
//     return () => clearInterval(slideInterval);
//   }, [currentSlide]);

//   return (
//     <>
//       <div
//         id="default-carousel"
//         className="relative top-[120px] w-[99%] m-auto h-[230px] md:h-[300px] lg:h-[400px] xl:h-[500px] rounded mt-[4px] overflow-hidden"
//         data-carousel="slide"
//       >
//         {/* Carousel wrapper */}
//         <div className="relative h-[150px] md:h-[250px] lg:h-[350px] xl:h-[450px] rounded-lg">
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`absolute w-full h-full transition-transform duration-700 ease-in-out ${
//                 index === currentSlide
//                   ? 'translate-x-0'
//                   : currentSlide > index
//                   ? '-translate-x-full'
//                   : 'translate-x-full'
//               }`}
//             >
//               <img
//                 src={slide}
//                 className="block w-full h-full object-cover rounded-lg"
//                 alt={`Slide ${index + 1}`}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Slider indicators */}
//         <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-4 h-4 md:w-6 md:h-6 rounded-full border border-black ${
//                 index === currentSlide ? 'bg-black' : 'bg-white'
//               }`}
//               aria-current={index === currentSlide ? 'true' : 'false'}
//               aria-label={`Slide ${index + 1}`}
//             ></button>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Carousel;


