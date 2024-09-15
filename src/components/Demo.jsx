import React from 'react'
import dogpic1 from '../images/dogimg1-removebg-preview.png'
export default function Demo() {
  return (
    <div class="bg-yellow-500 text-center py-8 border-[1px] border-solid border-gray-400 h-[200px] w-full">
        <div>
          <img src={dogpic1} alt="" />  
        </div>
    <div class="container mx-auto">
      <h1 class="text-4xl font-bold text-white">
        20% Discount on all Accessories!
      </h1>
      <p class="text-xl text-white mt-2">Hurry up! Offer valid for a limited time.</p>
    </div>
  </div>
  
  )
}
