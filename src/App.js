


import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Fishaccess from "./components/Fishaccess";
import React from "react";
import DogBreedsSection from "./components/DogsSection";
import { BrowserRouter as Router, Route, Switch, Routes, Navigate } from 'react-router-dom';
import Home from "./components/Home";
import Cataccessories from "./components/Cataccessories";
import Dogfood from "./components/Dogfoods";
import Turtlefood from "./components/Turtlefood";
import CatFood from "./components/Catfood";
import Profile from "./components/Profile";
import Categoriesmixed from "./components/Categoriesmixed";
import AboutSection from "./components/About";
import CartPage from "./components/Cartpage";
import Register from "./components/Register";
import Login from "./components/Login";
import AddressForm from "./components/Address";
import PaymentForm from "./components/Pay";
import OrderSummary from "./components/Summary";
import {useSelector } from "react-redux";

import Husky from "./components/Husky";
import Profilepage from "./components/Profilepage";
import AddressforPay from "./components/AddressforPay";
import Thankyou from "./components/Thankyou";
import OnlinePayment from "./components/Onlinepayment";


function App() {
const state= useSelector(state=>state.wordsearched)
const isRegistered = localStorage.getItem("isRegistered");
const hasAddress = localStorage.getItem("hasAddress");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
const registered= useSelector(state=>state.isRegistered)
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
   <>


<Router>
<div className="App relative h-screen w-full ">

      <div 
        className={`fixed top-0 left-0 w-[20px] h-[20px] bg-black  rounded-full pointer-events-none transform transition-transform duration-200 ease-out ${
          isHovered ? 'scale-150' : ''
        }`}
        style={{
          transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
       
        }}
      />

 
      <Home/>



      <div className="content">
          <Routes>
            <Route path="*"  element={<Categoriesmixed/>} />
            <Route path="/DOGS-BREEDS" element={<DogBreedsSection/>}/>
            <Route path="/FISH-ACCESSORIES" element={<Fishaccess/>}/>
            <Route path="/DOGS & CATS-ACCESSORIES" element={<Cataccessories/>}/>
            <Route path="/DOG-FOOD" element={<Dogfood/>}/>
            <Route path="/Turtle-food" element={<Turtlefood/>}/>
            <Route path="/Cat-food" element={<CatFood/>}/>
            <Route
              path="/Profile"
              element={registered||hasAddress ? <Profilepage /> : <Profile />}
            />
            <Route path="/About" element={<AboutSection/>}/>
            <Route path="/Cart" element={<CartPage/>}/>
          
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login  />} />
       
            <Route path="/Address" element={<AddressForm/>}></Route>
            <Route path="/Addressforpayment" element={<AddressforPay/>}></Route>
            <Route path="/Payment" element={<PaymentForm/>} ></Route>
            <Route path="/summary" element={<OrderSummary/>}></Route>
            
            <Route path="/Husky" element={<Husky/>}></Route>
            <Route path="/Thankyou" element={<Thankyou/>}/>
            <Route path="/online-payment" element={<OnlinePayment/>}/>
          </Routes>
        </div>

   <Footer/>
  



    </div>
</Router>
</>
  );
}

export default React.memo(App);



