// import React from 'react'

// export default function Footer() {
//   return (
//     <footer class="bg-yellow-400 text-black py-10 mt-[100px]">
//     <div class="max-w-7xl mx-auto px-4">
//       {/* <!-- Top Section with Links --> */}
//       <div class="flex flex-wrap justify-between">
        
//         {/* <!-- About Us --> */}
//         <div class="w-full md:w-1/4 mb-6">
//           <h3 class="font-bold text-lg mb-3">About Us</h3>
//           <p class="text-sm w-[270px]">At Tail's Empire, we are dedicated to providing the best care and accessories for your beloved dogs. Learn more about our mission and values.</p>
//         </div>
        
//         {/* <!-- Quick Links --> */}
//         <div class="w-full md:w-1/4 mb-6">
//           <h3 class="font-bold text-lg mb-3">Quick Links</h3>
//           <ul>
//             <li><a href="#" class="hover:underline">Categories</a></li>
//             <li><a href="#" class="hover:underline">Editorial</a></li>
//             <li><a href="#" class="hover:underline">About Us</a></li>
//             <li><a href="#" class="hover:underline">Contact Us</a></li>
//           </ul>
//         </div>
        
//         {/* faq */}

//         <div class=" md:w-1/5 mb-6 ml-[-210px] ">
//         <h3 class="font-bold text-lg mb-3 ">FAQs</h3>
//         <ul>
//         <details className='w-[300px]'>
//   <summary>Why do you adopt a dog from us?</summary>
//   <p className='ml-[30px] mt-[2px] bg-yellow-500 p-[2px]'>This is some additional content that can be expanded or collapsed.</p>
// </details>

//           <li><a href="#" class="hover:underline">What accessories are available?</a></li>
//           <li><a href="#" class="hover:underline">How to contact customer support?</a></li>
//           <li><a href="#" class="hover:underline">What are the shipping options?</a></li>
//         </ul>
//       </div>
//         {/* <!-- Contact Us --> */}
//         <div class="w-full md:w-1/4 mb-6">
//           <h3 class="font-bold text-lg mb-3">Contact Us</h3>
//           <ul>
//             <li>Email: <a href="mailto:abs12@gmail.com" class="hover:underline">abs12@gmail.com</a></li>
//             <li>Phone: +91-999999999</li>
//             <li>Address: 123 Pet Street, Dog City</li>
//           </ul>
//         </div>
        
//         {/* <!-- Social Media --> */}
//         <div class="w-full md:w-1/4 mb-6">
//           <h3 class="font-bold text-lg mb-3">Follow Us</h3>
//           <div class="flex space-x-4">
//             <a href="#"><img src="facebook-icon.svg" alt="Facebook" class="w-6 h-6"/></a>
//             <a href="#"><img src="instagram-icon.svg" alt="Instagram" class="w-6 h-6"/></a>
//             <a href="#"><img src="whatsapp-icon.svg" alt="WhatsApp" class="w-6 h-6"/></a>
//           </div>
//         </div>
//       </div>
  
//       {/* <!-- Bottom Section with Newsletter and Copyright --> */}
//       <div class="border-t border-black mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
//         <p class="text-sm">&copy; 2024 Tail's Empire. All rights reserved.</p>
        
//         {/* <!-- Newsletter --> */}
//         <div class="flex items-center space-x-3 mt-4 md:mt-0">
//           <label for="newsletter" class="text-sm">Share you Query </label>
//           <input id="newsletter" type="text" placeholder="Enter your Query" class="px-4 py-2 rounded-md bg-white text-black outline-none"/>
//           <button class="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">Submit</button>
//         </div>

//       </div>
//     </div>
//   </footer>
  
//   )
// }





import React from 'react';
import igblack from '../images/insta-black.png';
import igcolor from '../images/insta-color.png';
import fbblack from '../images/facebook-black.png';
import fbcolor from '../images/facebook-color.png';
import wpblack from '../images/whatsapp-black.png';
import wpcolor from '../images/whatsapp-color.png';
import ytblack from '../images/youtube-black.png';
import ytcolor from '../images/youtube-color.png';

export default function Footer() {
  return (
    <footer className="bg-yellow-400 text-black py-10 mt-[100px]">
      <div className="max-w-7xl mx-auto px-4">
        {/* <!-- Top Section with Links --> */}
        <div className="flex flex-wrap justify-between">
          
          {/* <!-- About Us --> */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="font-bold text-lg mb-3">About Us</h3>
            <p className="text-sm w-full md:w-[270px]">At Tail's Empire, we are dedicated to providing the best care and accessories for your beloved dogs. Learn more about our mission and values.</p>
          </div>
          
          {/* <!-- Quick Links --> */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:underline">Categories</a></li>
              <li><a href="#" className="hover:underline">Editorial</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          
          {/* FAQ Section */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="font-bold text-lg mb-3">FAQs</h3>
            <ul>
              <details className='w-[300px]'>
                <summary>Why adopt a dog from us?</summary>
                <p className='ml-[30px] mt-[2px] bg-yellow-500 p-[2px]'>This is some additional content that can be expanded or collapsed.</p>
              </details>
              <li><a href="#" className="hover:underline">What accessories are available?</a></li>
              <li><a href="#" className="hover:underline">How to contact customer support?</a></li>
              <li><a href="#" className="hover:underline">What are the shipping options?</a></li>
            </ul>
          </div>

          {/* <!-- Contact Us --> */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="font-bold text-lg mb-3">Contact Us</h3>
            <ul>
              <li>Email: <a href="mailto:abs12@gmail.com" className="hover:underline">abs12@gmail.com</a></li>
              <li>Phone: +91-999999999</li>
              <li>Address: 123 Pet Street, Dog City</li>
            </ul>
          </div>
          
          {/* <!-- Social Media --> */}
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
            <div className="relative group">
              <img
                src={wpblack}
                className="h-[25px] md:h-[30px] transition-opacity duration-300 opacity-100 ease-in-out group-hover:opacity-0"
              />
              <img
                src={wpcolor}
                className="absolute top-0 left-0 h-[25px] md:h-[30px] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
              />
            </div>
          </a>
          <a href="">
          

<div className="relative group">
  <img
    src={ytblack}
    className="h-[28px] md:h-[30px] transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
  />
  <img
    src={ytcolor}
    className="absolute top-0 left-0 h-[28px] md:h-[30px] transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
  />
</div>

          </a>
          </div>
        </div>
    
        {/* <!-- Bottom Section with Newsletter and Copyright --> */}
        <div className="border-t border-black mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left">&copy; 2024 Tail's Empire. All rights reserved.</p>
          
          {/* <!-- Newsletter --> */}
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <label htmlFor="newsletter" className="text-sm">Share your Query </label>
            <input id="newsletter" type="text" placeholder="Enter your Query" className="px-4 py-2 rounded-md bg-white text-black outline-none"/>
            <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">Submit</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

