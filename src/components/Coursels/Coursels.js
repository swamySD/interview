import React, { useRef } from 'react';
import { FaCirclePlus } from "react-icons/fa6";

const CarouselComponent = ({ courses }) => {
  const carouselRef = useRef(null);

  const ingredients = [
    { name: 'Flour', count: 500 },
    { name: 'Sugar', count: 300 },
    { name: 'Salt', count: 10 },
    { name: 'Butter', count: 200 },
    { name: 'Eggs', count: 6 },
    { name: 'Milk', count: 250 },
    { name: 'Baking Powder', count: 1 },
  ];

  return (
    <div>
      <div className="overflow-x-auto scrolhide">
        <div className="flex">
          {courses.map((course, index) => (
            <div key={index}>
            <div className="h-28 border-2 m-2 w-28 rounded-lg">
              <img src={course.imageUrl} alt={course.title} className="w-full h-auto" />
             
              <button className='p-2 mt-1' onClick={() => window.open(course.link, '_blank')}>
                  
                  {/* <FaCirclePlus className="text-white-500 bg-red-500 rounded-full p-2 " /> */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30" height="30" style={{ fill: 'red' }}>
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
                  
                </button>
              </div>
              <div>
                <a href={course.link}>Ingredient</a>
                <p>Quantity: {course.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-h-40 overflow-y-auto mt-4">
        <ul className="list-none">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="flex justify-between items-center mb-4 mr-2 ml-2">
              <div className="flex items-center">
                <span className="text-gray-500 text-lg mr-2 ">&#8226;</span>
                <span className="flex-1">{ingredient.name}</span>
              </div>
              <div>
                <span className='mr-2'>{ingredient.count}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarouselComponent;
