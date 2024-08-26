import React from 'react'
import Navbar from '../Components/Navbar'


const Home = () => {
  return (

    <div className="bg-[#f8f5f1] min-h-screen p-10">
      <div className="grid grid-cols-3 gap-4">
        {/* Main Heading */}
        <div className="col-span-2 flex flex-col justify-center">
          <h1 className="text-5xl font-bold">
            Where every pet finds comfort and joy!
          </h1>
          <button className="mt-6 px-4 py-2 bg-blue-900 text-white font-semibold">
            VIEW COLLECTION
          </button>
        </div>

        {/* Image Section */}
        <div className="flex flex-col space-y-4">
          <div className="h-48 bg-yellow-200 flex items-center justify-center">
            <img
              src="../assets/hero-img-1.jpg" // Replace with actual image URL
              alt="Owner with Dog"
              className="h-full"
            />
          </div>
          <div className="h-48 bg-green-300 flex items-center justify-center">
            <img
              src="../assets/hero-img-2.jpg" // Replace with actual image URL
              alt="Owner with Dog"
              className="h-full"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-3 gap-4 mt-10">
        <div className="p-4 bg-red-200">
          <p className="text-3xl font-bold">$2M</p>
          <p>Over $5 million in pet products sold worldwide.</p>
        </div>
        <div className="p-4 bg-blue-200">
          <p className="text-3xl font-bold">96%</p>
          <p>Our customers report satisfaction with our products.</p>
        </div>
        <div className="p-4 bg-gray-100">
          <p className="font-bold">PetPedicure Nail Clippers</p>
          <p>Your solution to maintaining your pet's paw perfection.</p>
        </div>
      </div>
    </div>


  )
}

export default Home