

import React from 'react'
import { toast, Toaster } from "react-hot-toast";
import { useDispatch, useSelector} from 'react-redux';

 function Husky() {

const dispatch= useDispatch()
  const huskies = [
    {
      name: 'Husky-1',
    //   image: `${aquarium}`,
      description: 'Golden Retrievers are friendly, intelligent, and devoted. They are great family pets and are known for their friendly and tolerant attitude.',
      price:800
    },
    {
      name: 'husky-2',
    //   image: `${filter}`,
      description: 'German Shepherds are courageous, confident, and smart. They are known for their loyalty and are often used as working dogs in police and military roles.',
      price:400
    },
    {
      name: 'husky-3',
    //   image: `${airfilter}`,
      description: 'Bulldogs are known for their muscular build and wrinkled face. They are calm, courageous, and have a friendly demeanor, making them great companions.',
      price:200
    },
    // Add more breeds as needed
  ];
 
  const productname= useSelector(state=>state.productadded)
  console.log(productname)

 const dispatched=(payment,item)=>{
    dispatch({
type:"ITEM_ADDED",
payload:{
  pay:payment,
  item:item
}
    })

    toast.success("product added")
    console.log('dispatched')
 }
  return (
<section className="dog-breeds-section py-10 mt-[50px]">
<Toaster position="top-right" reverseOrder={false} />
      <h2 className="text-center text-4xl font-bold mb-6">huskies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 ">
        {huskies.map((breed, index) => (
          <div key={index} className="breed-card border rounded-[50px] overflow-hidden shadow-lg bg-gray-200">
            <img src={breed.image} alt={breed.name} className="w-full h-[400px] object-cover"/>
            <div className="p-4">
              <h3 className="text-3xl h-[50px] w-[300px] bg-gray-400 text-center font-semibold py-[5px] mx-auto mb-2">{breed.name}</h3>
              <h3 className="text-3xl h-[50px] w-[300px] bg-gray-400 text-center font-semibold py-[5px] mx-auto mb-2">{breed.price}</h3>
              <button className="text-gray-700 border border-black rounded-[50px]" onClick={()=>dispatched(`${breed.price}`,`${breed.name}`)}>ADD TO CART</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default React.memo(Husky)