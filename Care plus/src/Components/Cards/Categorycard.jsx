import React from 'react';


const CategoryCard = ({ image, title, subtitle ,index}) => {
  console.log(image)
  console.log(title)
  return (
    <div key={index} className="bg-white rounded-md shadow-md overflow-hidden p-4 max-w-sm">
      <img className="w-full" src={`http://localhost:8000/${image}`} alt="Info card" />
      <div className="px-6 py-4">
        <h2 className="text-lg font-bold leading-tight text-gray-900">{title}</h2>
        <p className="mt-2 text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
