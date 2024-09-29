import React from 'react'

const CategoryPageCard = ({title,subtitle,imageUrl,index}) => {
  return (
    <div key={index}
  className="bg-yellow-50 rounded-lg shadow-md bg-cover bg-center relative"
  style={{
    height: '500px',
    backgroundImage: `url('${imageUrl}')`,
  }}
>
  {/* Overlay to make the text readable */}
  <div className=" rounded-lg"></div>

  {/* Title and Subtitle */}
  <div className="relative p-4">
    <h2 className="text-xl font-semibold text-black">{title}</h2>
    <p className="text-black">{subtitle}</p>
    <img src={imageUrl}/>
    </div>
  </div>
  )
}

export default CategoryPageCard