import React from 'react';
import shepherd from '../images/shepherd.jpeg'
import shitzu from '../images/shitzu.jpeg'
import husky from '../images/husky.jpeg'
import { Link } from 'react-router-dom';
const dogBreeds = [
  {
    name: 'Husky',
    image: `${husky}`,
    
  },
  {
    name: 'German Shepherd',
    image: `${shepherd}`,
    
  },
  {
    name: 'Shitzu',
    image: `${shitzu}`,
    
  },
  // Add more breeds as needed
];

export default function DogBreedsSection() {
  return (
    <section className="dog-breeds-section py-10 mt-[100px]">
   
      <h2 className="text-center text-4xl font-bold mb-6">Dog Breeds</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 ">
        {dogBreeds.map((breed, index) => (

<Link to={`/${breed.name}` }>

<div key={index} className="breed-card border rounded-[50px] overflow-hidden shadow-lg bg-gray-200">
            <img src={breed.image} alt={breed.name} className="w-full h-[400px] object-cover"/>
            <div className="p-4">
              <h3 className="text-3xl h-[50px] w-[300px] bg-gray-400 text-center font-semibold py-[5px] mx-auto mb-2 rounded-lg">{breed.name}</h3>
              <p className="text-gray-700">{breed.description}</p>
            </div>
          </div>
          </Link>
        
        ))}
      </div>
  
     
    </section>
  );
}
