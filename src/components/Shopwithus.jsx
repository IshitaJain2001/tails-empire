// import React, { useState, useEffect } from 'react';

// export default function Shopwithus() {
//   const [currentIndex, setCurrentIndex] = useState(0);

  
//   const values = ["DOGS", "TURTLES-ACCESSORIES", "CATS-ACCESSORIES", "DOGS-FOOD","DOGS-ACCESSORIES","CATS-FOOD","FISH-FOOD"];

//   useEffect(() => {

//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % values.length);
//     }, 3000);

   
//     return () => clearInterval(interval);
//   }, [values.length]);

//   return (
//     <div className="flex  justify-center  mt-[150px]">
//       <h1 className="text-[40px] font-bold text-gray-800">
//         We sell {""}
//         <span className="text-indigo-600 transition-all duration-300">
//           {values[currentIndex]}
//         </span>
//       </h1>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';

export default function Shopwithus() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const values = [
    "DOGS",
    "TURTLES-ACCESSORIES",
    "CATS-ACCESSORIES",
    "DOGS-FOOD",
    "DOGS-ACCESSORIES",
    "CATS-FOOD",
    "FISH-FOOD"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % values.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [values.length]);

  return (
    <div className="flex justify-center mt-[80px] md:mt-[100px] lg:mt-[150px] px-4 text-center">
      <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-gray-800 leading-snug md:leading-tight">
        We sell {""}
        <span className="text-indigo-600 transition-all duration-300">
          {values[currentIndex]}
        </span>
      </h1>
    </div>
  );
}
