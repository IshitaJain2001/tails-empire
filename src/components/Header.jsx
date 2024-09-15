import React from "react";

import insta from '../images/video.png'
import fb from '../images/social-media.png'
import wp from '../images/whatsapp.png'
export default function Header() {
  return (
    <header className="bg-white ">
 
      <div className="bg-yellow-500 text-center text-sm text-black border-black border-solid border-[1px] font-bold flex justify-between  h-[40px] py-[10px] px-[150px]">
      <div className="flex justify-center gap-[70px]">
      <p>Contact-: +91-9999999</p> 
      <p>Email-: abs12@gmail.com</p>
        </div>  
        <div className="flex justify-center gap-[30px] mt-[-5px]">
         <a href=""><img src={insta} className="h-[30px]" /></a>
         <a href=""><img src={fb} className="h-[30px]  " /></a>
         <a href=""><img src={wp} className="h-[30px]  " /></a>
        </div>
     
      </div>
      
      <div className="container mx-auto flex  justify-around items-center py-4">
      
        <nav className="flex items-center gap-[30px]">
   
          <div className="relative group">
             <button className="font-semibold text-black">CATEGORIES</button>
        
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
       
              <ul>
             
                <li className="px-4 py-2 hover:bg-gray-100">Option 1</li>
            <li className="px-4 py-2 hover:bg-gray-100">Option 2</li>
               
              </ul>
        
            </div>
       
          </div>
 
          <div className="relative group">
      
            <button className="font-semibold text-black">THE EDITORIAL</button>
          
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100">Option 1</li>
                <li className="px-4 py-2 hover:bg-gray-100">Option 2</li>
       
              </ul>
           
            </div>
     
          </div>
 
          <div className="relative group">
          
            <button className="font-semibold text-black">ABOUT US</button>
      
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           
              <ul>
            
                <li className="px-4 py-2 hover:bg-gray-100">Option 1</li>
                 <li className="px-4 py-2 hover:bg-gray-100">Option 2</li>
            
              </ul>
 
            </div>
        
          </div>

        </nav>
  
        <div className="font-bold text-3xl text-black flex justify-center gap-0">
          {/* <img src={} className="h-[60px] mt-[-10px] ml-[-10px]" /> */}
      <p className="ml-[-15px]">  Tail's <span className="font-light ml-[5px]"> empire.</span></p>   
        </div>
   
        <div className="flex items-center gap-[30px] ">
      
          <div className="relative">
  
            <input
              type="text"
              placeholder="SEARCH"
              className="border border-gray-500 rounded-full py-1 px-3 text-sm w-[250px]"
            />
          
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2  text-[22px]">
              🔍 
            </button>
   
          </div>
        <button className="text-4xl">👤</button>
          <button className="relative text-4xl">
          🛒
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs rounded-full px-2 py-0.5">
       0 
            </span>
           
          </button>
         
        </div>
 
      </div>

    </header>
  );
}
