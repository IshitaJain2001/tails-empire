import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Fishaccess from "./components/Fishaccess";

import DogBreedsSection from "./components/DogsSection";
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
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
<<<<<<< Updated upstream
import {useSelector } from "react-redux";

import EmptyCart from "./components/EmptyCart";
import Husky from "./components/Husky";
=======
import {useSelector} from "react-redux";

>>>>>>> Stashed changes
function App() {
const state= useSelector(state=>state.wordsearched)
console.log(state)
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

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
            <Route path="/Profile" element={<Profile/>}/>
            <Route path="/About" element={<AboutSection/>}/>
            <Route path="/Cart" element={<CartPage/>}/>
          
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login  />} />
       
            <Route path="/Address" element={<AddressForm/>}></Route>
            <Route path="/Payment" element={<PaymentForm/>} ></Route>
            <Route path="/Order Summary" element={<OrderSummary/>}></Route>
            <Route path="/Empty-Cart" element={   <EmptyCart/>}></Route>
            <Route path="/Husky" element={<Husky/>}></Route>
          </Routes>
        </div>

   <Footer/>
  



    </div>
</Router>
</>
  );
}

export default App;
