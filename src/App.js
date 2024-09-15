import Carousel from "./components/Carousel";
import Categories from "./components/Categories";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shopwithus from "./components/Shopwithus";


function App() {
  return (
    <div className="App">

      <Header/> 
     <Carousel/> 
     {/* <Demo/> */}
     <Shopwithus/>
     <Categories/>
     <Footer/>
    </div>
  );
}

export default App;
