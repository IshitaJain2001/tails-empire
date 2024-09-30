

import React, { useState } from 'react';
import dogsgrp from '../images/Gemini_Generated_Image_i0zybqi0zybqi0zy.jpeg';
import dogfood from '../images/Gemini_Generated_Image_bvsz9sbvsz9sbvsz.jpeg';
import fishacc from '../images/Gemini_Generated_Image_brmf9sbrmf9sbrmf.jpeg';
import turtlefood from '../images/Gemini_Generated_Image_j0xyk5j0xyk5j0xy.jpeg';
import catacc from '../images/Gemini_Generated_Image_my5li8my5li8my5l.jpeg';
import catfood from '../images/Gemini_Generated_Image_gklu46gklu46gklu.jpeg';
import { Link } from 'react-router-dom';

export default function Categories() {
  const [hovered, setHovered] = useState(null);

  return (
    <Link to="/Home">

    <section className="categories-section mt-[40px] md:mt-[70px] lg:mt-[30px] mx-[20px] md:mx-[50px]">
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Shop by Category</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] md:gap-[50px] lg:gap-[30px] mt-[30px] md:mt-[50px]">
        {/* Dog Breeds */}

        <Link to="/DOGS-BREEDS">
        <div 
          className={`category-card bg-yellow-300 p-4 rounded-[20px] md:rounded-[30px] lg:rounded-[40px] text-center transition-transform duration-300 ease-out
          ${hovered !== null && hovered !== 0 ? ' scale-[0.95] opacity-90' : ''} 
          ${hovered === 0 ? 'scale-[1]' : ''}`}
          onMouseEnter={() => setHovered(0)}
          onMouseLeave={() => setHovered(null)}
        >
          <img src={dogsgrp} alt="Dog Breeds" className="w-full h-[70px] md:h-[200px] lg:h-[250px] object-cover rounded-[20px] md:rounded-[30px] lg:rounded-[40px]" />
          <h3 className="mt-4 text-[20px] md:text-[25px] lg:text-[30px] font-semibold">Dog Breeds</h3>
        <button className="bg-yellow-600 text-white px-4 py-2 mt-4 rounded">Shop Now</button>    </div>  </Link>
     

        {/* Fish Accessories */}
        <Link to="/FISH-ACCESSORIES">
        <div 
          className={`category-card bg-blue-500 p-4 rounded-[20px] md:rounded-[30px] lg:rounded-[40px] text-center transition-transform duration-300 ease-out
          ${hovered !== null && hovered !== 1 ? ' scale-[0.95] opacity-90' : ''} 
          ${hovered === 1 ? 'scale-[1]' : ''}`}
          onMouseEnter={() => setHovered(1)}
          onMouseLeave={() => setHovered(null)}
        >
          <img src={fishacc} alt="Fish Accessories" className="w-full h-[150px] md:h-[200px] lg:h-[250px] object-cover rounded-[20px] md:rounded-[30px] lg:rounded-[40px]" />
          <h3 className="mt-4 text-[20px] md:text-[25px] lg:text-[30px] font-semibold">Fish Accessories</h3>

        
          <button className="bg-blue-700 text-white px-4 py-2 mt-4 rounded">Shop Now</button>
          </div>
          </Link>
      

        {/* Cat Accessories */}
        <Link to="DOGS & CATS-ACCESSORIES">
        <div 
          className={`category-card bg-yellow-300 p-4 rounded-[20px] md:rounded-[30px] lg:rounded-[40px] text-center transition-transform duration-300 ease-out
          ${hovered !== null && hovered !== 2 ? ' scale-[0.95] opacity-90' : ''} 
          ${hovered === 2 ? 'scale-[1]' : ''}`}
          onMouseEnter={() => setHovered(2)}
          onMouseLeave={() => setHovered(null)}
        >
          <img src={catacc} alt="Cat Accessories" className="w-full h-[150px] md:h-[200px] lg:h-[250px] object-cover rounded-[20px] md:rounded-[30px] lg:rounded-[40px]" />
          <h3 className="mt-4 text-[20px] md:text-[25px] lg:text-[30px] font-semibold">Dog & Cat Accessories</h3>
          <button className="bg-yellow-600 text-white px-4 py-2 mt-4 rounded">Shop Now</button>
        </div>
        </Link>
    

        {/* Dog Food */}

        <Link to="/DOG-FOOD">
     
        <div 
          className={`category-card bg-yellow-300 p-4 rounded-[20px] md:rounded-[30px] lg:rounded-[40px] text-center transition-transform duration-300 ease-out
          ${hovered !== null && hovered !== 4 ? ' scale-[0.95] opacity-90' : ''} 
          ${hovered === 4 ? 'scale-[1]' : ''}`}
          onMouseEnter={() => setHovered(4)}
          onMouseLeave={() => setHovered(null)}
        >
          <img src={dogfood} alt="Dog Food" className="w-full h-[150px] md:h-[200px] lg:h-[250px] object-cover rounded-[20px] md:rounded-[30px] lg:rounded-[40px]" />
          <h3 className="mt-4 text-[20px] md:text-[25px] lg:text-[30px] font-semibold">Dog Food</h3>
          <button className="bg-yellow-600 text-white px-4 py-2 mt-4 rounded">Shop Now</button>
        </div>
        </Link>
        {/* Turtle Food */}

        <Link to="/Turtle-Food">
        <div 
          className={`category-card bg-blue-500 p-4 rounded-[20px] md:rounded-[30px] lg:rounded-[40px] text-center transition-transform duration-300 ease-out
          ${hovered !== null && hovered !== 3 ? ' scale-[0.95] opacity-90' : ''} 
          ${hovered === 3 ? 'scale-[1]' : ''}`}
          onMouseEnter={() => setHovered(3)}
          onMouseLeave={() => setHovered(null)}
        >
          <img src={turtlefood} alt="Turtle Food" className="w-full h-[150px] md:h-[200px] lg:h-[250px] object-cover rounded-[20px] md:rounded-[30px] lg:rounded-[40px]" />
          <h3 className="mt-4 text-[20px] md:text-[25px] lg:text-[30px] font-semibold">Turtle Food</h3>
          <button className="bg-blue-700 text-white px-4 py-2 mt-4 rounded">Shop Now</button>
        </div>
        </Link>
        

        {/* Cat Food */}

        <Link to="/Cat-Food">
        <div 
          className={`category-card bg-yellow-300 p-4 rounded-[20px] md:rounded-[30px] lg:rounded-[40px] text-center transition-transform duration-300 ease-out
          ${hovered !== null && hovered !== 5 ? ' scale-[0.95] opacity-90' : ''} 
          ${hovered === 5 ? 'scale-[1]' : ''}`}
          onMouseEnter={() => setHovered(5)}
          onMouseLeave={() => setHovered(null)}
        >
          <img src={catfood} alt="Cat Food" className="w-full h-[150px] md:h-[200px] lg:h-[250px] object-cover rounded-[20px] md:rounded-[30px] lg:rounded-[40px]" />
          <h3 className="mt-4 text-[20px] md:text-[25px] lg:text-[30px] font-semibold">Cat Food</h3>
          <button className="bg-yellow-600 text-white px-4 py-2 mt-4 rounded">Shop Now</button>
        </div>
        </Link>
      
      </div>
    </section>
    </Link>
  );
}

