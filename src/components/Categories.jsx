import React from 'react'
import { useState } from 'react'
// import dogsgrp from '../images/dogsgrp.avif'
import dogsgrp from '../images/Gemini_Generated_Image_i0zybqi0zybqi0zy.jpeg'
import dogfood from '../images/Gemini_Generated_Image_bvsz9sbvsz9sbvsz.jpeg'
import fishacc from '../images/Gemini_Generated_Image_brmf9sbrmf9sbrmf.jpeg'
import turtlefood from '../images/Gemini_Generated_Image_j0xyk5j0xyk5j0xy.jpeg'
import catacc from '../images/Gemini_Generated_Image_my5li8my5li8my5l.jpeg'
import catfood from '../images/Gemini_Generated_Image_gklu46gklu46gklu.jpeg'
export default function Categories() {
  const [hovered, setHovered] = useState(null);

  return (

    <section className="categories-section mt-8 mx-[50px]">
    <h2 className="text-center text-5xl font-bold mb-6">Shop by Category</h2>
    <div className="grid grid-cols-3 md:grid-cols-3 gap-[70px] mt-[50px]">
      
      {/* <!-- Dog Breeds (Mustard) --> */}
      <div 
        className={`category-card bg-yellow-300 p-4 rounded-[40px] text-center transition-transform duration-300 ease-out
        ${hovered !== null && hovered !== 0 ? 'blur-sm scale-[0.98] opacity-50' : ''} 
        ${hovered === 0 ? 'scale-105' : ''}`}
        onMouseEnter={() => setHovered(0)}
        onMouseLeave={() => setHovered(null)}
      >
        <img src={dogsgrp} alt="Dog Breeds" className="w-full h-[300px] object-cover rounded-[40px]" />
        <h3 className="mt-4 text-[30px] font-semibold">Dog Breeds</h3>
        <button className="bg-yellow-400 text-white px-4 py-2 mt-4 rounded">Shop Now</button>
      </div>
      
      {/* <!-- Fish Accessories (Bluish Shade) --> */}
      <div 
        className={`category-card bg-blue-500 p-4 rounded-[40px] text-center transition-transform duration-300 ease-out
        ${hovered !== null && hovered !== 1 ? 'blur-sm scale-[0.98] opacity-50' : ''} 
        ${hovered === 1 ? 'scale-105' : ''}`}
        onMouseEnter={() => setHovered(1)}
        onMouseLeave={() => setHovered(null)}
      >
        <img src={fishacc} alt="Fish Accessories" className="w-full h-[300px] object-cover rounded-[40px]" />
        <h3 className="mt-4 text-[30px] font-semibold">Fish Accessories</h3>
        <button className="bg-blue-700 text-white px-4 py-2 mt-4 rounded">Shop Now</button>
      </div>
  
      {/* <!-- Cat Accessories (Grey) --> */}
      <div 
        className={`category-card bg-yellow-300 p-4 rounded-[40px] text-center transition-transform duration-300 ease-out
        ${hovered !== null && hovered !== 2 ? 'blur-sm scale-[0.98] opacity-50' : ''} 
        ${hovered === 2 ? 'scale-105' : ''}`}
        onMouseEnter={() => setHovered(2)}
        onMouseLeave={() => setHovered(null)}
      >
        <img src={catacc} alt="Cat Accessories" className="w-full h-[300px] object-cover rounded-[40px]" />
        <h3 className="mt-4 text-[30px] font-semibold">Cat Accessories</h3>
        <button className="bg-yellow-400 text-white px-4 py-2 mt-4 rounded">Shop Now</button>
      </div>

      {/* <!-- Dog Food (Mustard) --> */}
      <div 
        className={`category-card bg-yellow-300 p-4 rounded-[40px] text-center transition-transform duration-300 ease-out
        ${hovered !== null && hovered !== 4 ? 'blur-sm scale-[0.98] opacity-50' : ''} 
        ${hovered === 4 ? 'scale-105' : ''}`}
        onMouseEnter={() => setHovered(4)}
        onMouseLeave={() => setHovered(null)}
      >
        <img src={dogfood} alt="Dog Food" className="w-full h-[300px] object-cover rounded-[40px]" />
        <h3 className="mt-4 text-[30px] font-semibold">Dog Food</h3>
        <button className="bg-yellow-400 text-white px-4 py-2 mt-4 rounded">Shop Now</button>
      </div>
      
      {/* <!-- Turtle Food (Green) --> */}
      <div 
        className={`category-card bg-blue-500 p-4 rounded-[40px] text-center transition-transform duration-300 ease-out
        ${hovered !== null && hovered !== 3 ? 'blur-sm scale-[0.98] opacity-50' : ''} 
        ${hovered === 3 ? 'scale-105' : ''}`}
        onMouseEnter={() => setHovered(3)}
        onMouseLeave={() => setHovered(null)}
      >
        <img src={turtlefood} alt="Turtle Accessories" className="w-full h-[300px] object-cover rounded-[40px]" />
        <h3 className="mt-4 text-[30px] font-semibold">Turtle Food</h3>
        <button className="bg-blue-700 text-white px-4 py-2 mt-4 rounded">Shop Now</button>
      </div>
  
      
  
      {/* <!-- Cat Food (Grey) --> */}
      <div 
        className={`category-card bg-yellow-300 p-4 rounded-[40px] text-center transition-transform duration-300 ease-out
        ${hovered !== null && hovered !== 5 ? 'blur-sm scale-[0.98] opacity-50' : ''} 
        ${hovered === 5 ? 'scale-105' : ''}`}
        onMouseEnter={() => setHovered(5)}
        onMouseLeave={() => setHovered(null)}
      >
        <img src={catfood} alt="Cat Food" className="w-full h-[300px] object-cover rounded-[40px]" />
        <h3 className="mt-4 text-[30px] font-semibold">Cat Food</h3>
        <button className="bg-yellow-400 text-white px-4 py-2 mt-4 rounded">Shop Now</button>
      </div>
  
    </div>
  </section>
  


  )
}
