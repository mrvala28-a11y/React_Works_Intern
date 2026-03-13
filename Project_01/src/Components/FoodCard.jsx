import React from 'react';

const FoodCard = ({ image, title, description, active }) => {
  return (
    <div className={`relative flex flex-col items-center rounded-2xl p-4 transition-all duration-300 w-full max-w-[160px] 
      ${active 
        ? 'bg-white shadow-xl scale-105 z-10' 
        : 'bg-[#324b61] text-white shadow-lg mt-4'
      }`}>
      
      {/* Product Image - Floating effect */}
      <div className="absolute -top-10 w-24 h-24 rounded-full overflow-hidden border-4 border-gray-100 shadow-md">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="mt-14 text-center">
        <h3 className={`font-bold text-sm ${active ? 'text-gray-800' : 'text-white'}`}>
          {title}
        </h3>
        <p className={`text-[10px] mt-1 leading-tight ${active ? 'text-gray-500' : 'text-gray-300'}`}>
          {description}
        </p>
      </div>

      {/* Plus Button */}
      <button className={`mt-4 w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-transform active:scale-90
        ${active ? 'bg-[#324b61] text-white' : 'bg-white text-[#324b61]'}`}>
        <span className="text-xl font-bold">+</span>
      </button>
    </div>
  );
};

export default FoodCard;