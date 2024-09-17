import { useEffect, useState } from "react";
import Carousel from "./components/Carousel";
import Categories from "./components/Categories";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shopwithus from "./components/Shopwithus";
import tuna from "./images/tuna-unscreen.gif"
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
            <Route path="/home"  element={<Categories/>} />
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
