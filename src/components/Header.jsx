
import React, { useEffect, useState } from "react";
import tail from "../images/tail-logo.png"

import igblack from '../images/insta-black.png';
import igcolor from '../images/insta-color.png';
import fbblack from '../images/facebook-black.png';
import fbcolor from '../images/facebook-color.png';
import wpblack from '../images/whatsapp-black.png';
import wpcolor from '../images/whatsapp-color.png';
import ytblack from '../images/youtube-black.png';
import ytcolor from '../images/youtube-color.png';
import headlogo from '../images/german-shepherd-unscreen.gif';
import { Link } from "react-router-dom";
import home from '../images/home.png'
import { useDispatch, useSelector } from "react-redux";


export default function Header() {

  const setHome = useSelector(state=>state.isHome);
  const setBack = useSelector(state=>state.isBack);
  const [aboutClicked,setaboutClicked]=useState(false)
  const [inputtext,setInputtext] = useState("")
  const dispatch= useDispatch()

const state=useSelector(state=>state.wordsearched)
const itemCount=useSelector(state=>state.itemCount)
const valuee= inputtext.trim()

  useEffect(()=>{
    dispatch({
      type:"SEARCH_ITEMS",
      payload: inputtext
    })
  },[inputtext,dispatch])
  function changed(e){
    setInputtext(e.target.value)
 
  }


  const highlightText = (text, search) => {
    if (!search) return text;
    const regex = new RegExp(`(${search})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, index) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <span key={index} className="text-red-500 font-bold">{part}</span>
      ) : (
        part
      )
    );
  };

  function entered(word){
  setInputtext(word)
  }
  return (
    <header className="bg-white relative  left-0 w-full z-50 " >

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

      {/* Main Header */}
      <div className="sticky top-0 flex md:flex-row justify-evenly w-full items-center  
       py-4 px-2 md:px-0 z-[1000]" style={{ boxShadow: "1px 1px 4px gray" }}>

{/* logo container */}
<Link to="Home" onClick={()=>{dispatch({
        type:"NAVIGATOR",
        payload:{
          isHome:false,
        }
       })}}> <div className="absolute flex justify-center items-center z-50 font-bold text-2xl md:text-3xl text-black text-center left-[592px] top-4" >
          <img src={headlogo} alt="german-shepherd" className="h-10"/>Tail's <span className="font-light">Empire.</span>
        </div>
          <div>
            <img src={tail} alt="tail-img" className="h-[50px] absolute top-7 left-[627px] -rotate-12" />
          </div>
        </Link>

        <nav className="flex items-center relative left-10
         md:flex-row  gap-[20px] md:gap-[30px] mb-2  md:mb-0 flex-grow">
          <div className="relative  group h-full">

             <button className="font-semibold text-black">CATEGORIES</button>
           
            <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0  overflow-hidden group-hover:max-h-[400px] group-hover:overflow-visible">
              <ul>
                <Link to='DOGS-BREEDS'>
                <li className="px-4 py-2 hover:bg-gray-100">Dog-Breeds</li>
                </Link>
   <Link to="/FISH-ACCESSORIES">
   <li className="px-4 py-2 hover:bg-gray-100">Fish-Accessories</li>
   </Link>
              
        <Link to="/DOGS & CATS-ACCESSORIES"> <li className="px-4 py-2 hover:bg-gray-100">Dog&Cat-Accessories</li>  </Link>       
         <Link to="/DOG-FOOD"> <li className="px-4 py-2 hover:bg-gray-100">Dog-Food</li>  </Link>      
            <Link to="/TURTLE-FOOD">   <li className="px-4 py-2 hover:bg-gray-100">Turtle-Food</li> </Link>  
           <Link to="/CAT-FOOD">  <li className="px-4 py-2 hover:bg-gray-100">Cat-Food</li> </Link>    
              </ul>
            </div>
          </div>

{
  setBack? <Link to="*"> <button className="font-semibold text-black" onClick={()=>dispatch({
    type:"NAVIGATOR",
    payload:{
      isBack:false
    }
  })}>BACK</button>  
  </Link> 
  :  

  <Link to="/About"> 
  <button className="font-semibold text-black" onClick={()=>dispatch({
    type:"NAVIGATOR",
    payload:{
      isBack:true
    }
  })}>ABOUT US</button>
 
</Link> 
}
    
        </nav>

       

        <div className="relative right-10 flex justify-between items-center gap-[15px] md:gap-[30px] mt-2 md:mt-0">
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="SEARCH"
              className="border border-gray-500 rounded-full py-1 px-3 text-sm w-full md:w-[250px] "
         onChange={changed } 
         value={inputtext}
         />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[22px] ">
              🔍
            </button>
          </div>
          {  setHome?
            ( 
              <Link to="*">
             <button> <img src={home} className="relative h-[30px]  opacity-50" onClick={()=>dispatch({
              type:"NAVIGATOR",
              payload:{
                isHome:false
              }
             })}/>  </button>
              </Link>  
            )
        
            :  (<Link to="/Profile"> <button className="text-4xl" onClick={()=>dispatch({
              type:"NAVIGATOR",
              payload:{
                isHome:true
              }
             })}>👤</button>   </Link>  )
          }
     {
      itemCount==0?
      <Link to="/Empty-Cart">
       <button className="relative text-4xl">
      🛒
      <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs rounded-full px-2 py-0.5">
        0
      </span>
    </button>
      </Link>
      
      :    <Link to="/Cart">    
       <button className="relative text-4xl">
      🛒
      <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs rounded-full px-2 py-0.5">
        0
      </span>
    </button>
    </Link> 
     }
   
        </div>
      </div>


<ul className="bg-gray-200 ml-[970px] z-10 inline-block w-[200px] items-center absolute mt-[-20px] rounded-[10px] ">
        {valuee ? (
          state.length > 0 ? (
            state.map((word, index) => (
              <li key={index} className="hover:bg-gray-300 pl-[50px]" onClick={()=>entered(word)}>{highlightText(word, inputtext)} </li> // Highlight matching text
            ))
          ) : (
            <li>No Item Found</li>
          )
        ) : null}
      </ul>
    </header>
  );
}
