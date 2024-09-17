import { useEffect, useState } from "react";

import Categories from "./components/Categories";

import Footer from "./components/Footer";
import Fishaccess from "./components/Fishaccess";

import DogBreedsSection from "./components/DogsSection";
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home from "./components/Home";
function App() {

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
    // <div className="App">

    //   <Header/> 
    //  <Carousel/> 
    //  {/* <Demo/> */}
    //  <Shopwithus/>
    //  <Categories/>
    //  <Footer/>
    // </div>

<Router>
<div className="App relative h-screen w-full ">
      {/* Custom Cursor */}
      <div 
        className={`fixed top-0 left-0 w-[20px] h-[20px] bg-black  rounded-full pointer-events-none transform transition-transform duration-200 ease-out ${
          isHovered ? 'scale-150' : ''
        }`}
        style={{
          transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
       
        }}
      />

 
      <Home/>

      {/* <DogBreedsSection/> */}

      <div className="content">
          <Routes>
            <Route path="*"  element={<Categories/>} />
            <Route path="/DOGS-BREEDS" element={<DogBreedsSection/>}/>
            <Route path="/FISH-ACCESSORIES" element={<Fishaccess/>}/>
            {/* <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} /> */}
          </Routes>
        </div>

        <Footer />
      
    </div>
</Router>
   
  );
}

export default App;
