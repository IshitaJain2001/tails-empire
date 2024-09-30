
import React from 'react'
import aquarium from '../images/aquarium.jpeg'
import filter from '../images/Filter.jpeg'
import airfilter from '../images/airfilter.jpeg'
export default function Fishaccess() {


  const fishacc = [
    {
      name: 'Aquarium',
      image: `${aquarium}`,
      description: 'Golden Retrievers are friendly, intelligent, and devoted. They are great family pets and are known for their friendly and tolerant attitude.'
    },
    {
      name: 'Water Filter',
      image: `${filter}`,
      description: 'German Shepherds are courageous, confident, and smart. They are known for their loyalty and are often used as working dogs in police and military roles.'
    },
    {
      name: 'Air Filter',
      image: `${airfilter}`,
      description: 'Bulldogs are known for their muscular build and wrinkled face. They are calm, courageous, and have a friendly demeanor, making them great companions.'
    },
    // Add more breeds as needed
  ];
  return (
<section className="dog-breeds-section py-10 mt-[100px]">
      <h2 className="text-center text-4xl font-bold mb-6">Fish Accessories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 ">
        {fishacc.map((breed, index) => (
          <div key={index} className="breed-card border rounded-[50px] overflow-hidden shadow-lg bg-gray-200">
            <img src={breed.image} alt={breed.name} className="w-full h-[400px] object-cover"/>
            <div className="p-4">
              <h3 className="text-3xl h-[50px] w-[300px] bg-gray-400 text-center font-semibold py-[5px] mx-auto mb-2">{breed.name}</h3>
              <p className="text-gray-700">{breed.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
