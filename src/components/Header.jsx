
import React from "react";

import igblack from '../images/insta-black.png';
import igcolor from '../images/insta-color.png';
import fbblack from '../images/facebook-black.png';
import fbcolor from '../images/facebook-color.png';
import wpblack from '../images/whatsapp-black.png';
import wpcolor from '../images/whatsapp-color.png';
import ytblack from '../images/youtube-black.png';
import ytcolor from '../images/youtube-color.png';

export default function Header() {
  return (
    <header className="bg-white fixed top-0 left-0 w-full z-50">
      {/* Top Bar */}
      <div className="bg-yellow-500 text-center text-sm text-black border-black border-solid border-[1px] font-bold flex justify-between h-[40px] py-[10px] px-4 md:px-[150px]">
        <div className="flex justify-center gap-[20px] md:gap-[70px]">
          <p>Contact: +91-9999999</p>
          <p>Email: abs12@gmail.com</p>
        </div>
        <div className="flex justify-center gap-[15px] md:gap-[30px] mt-[-5px]">
          <a href="">
            <div className="relative">
              <img
                src={igblack}
                className="h-[25px] md:h-[30px] transition-opacity duration-300 ease-in-out hover:opacity-0"
              />
              <img
                src={igcolor}
                className="absolute top-0 left-0 h-[25px] md:h-[30px] opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"
              />
            </div>
          </a>
          <a href="">
            <div className="relative">
              <img
                src={fbblack}
                className="h-[25px] md:h-[30px] transition-opacity duration-300 ease-in-out hover:opacity-0"
              />
              <img
                src={fbcolor}
                className="absolute top-0 left-0 h-[25px] md:h-[30px] opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"
              />
            </div>
          </a>
          <a href="">
            <div className="relative">
              <img
                src={wpblack}
                className="h-[25px] md:h-[30px] transition-opacity duration-300 ease-in-out hover:h-[0px]"
              />
              <img
                src={wpcolor}
                className="absolute top-0 left-0 h-[25px] md:h-[30px] opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"
              />
            </div>
          </a>
          <a href="">
            <div className="relative">
              <img
                src={ytblack}
                className="h-[25px] md:h-[30px] transition-opacity duration-300 ease-in-out hover:h-[0px]"
              />
              <img
                src={ytcolor}
                className="absolute top-0 left-0 h-[25px] md:h-[30px] opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"
              />
            </div>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="container  flex flex-col md:flex-row justify-evenly items-center py-4  md:px-0" style={{ boxShadow: "1px 1px 4px gray" }}>
        <nav className="flex flex-col md:flex-row items-center gap-[20px] md:gap-[30px] mb-2  md:mb-0">
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

        <div className="font-bold text-2xl md:text-3xl text-black text-center">
          Tail's <span className="font-light">empire.</span>
        </div>

        <div className="flex items-center gap-[15px] md:gap-[30px] mt-2 md:mt-0">
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="SEARCH"
              className="border border-gray-500 rounded-full py-1 px-3 text-sm w-full md:w-[250px]"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[22px]">
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
