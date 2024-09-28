import React from 'react'



const Categories = () => {
  return (<>
  
  <hero className='bg-[#faeada]'>
  <div className="w-full mt-20 bg-[#faeada]">
  
      <div className="container">
        <div className="w-layout-blockcontainer max-w-screen-md mx-auto">
          <h1 className="main-title text-5xl font-light leading-tight text-gray-800">
            Browse by Category
          </h1>
          <div className='grid grid-cols-3 bg-red-200'>
            <div className='bg-red-200 w-1/3'>
              <img src="https://cdn.prod.website-files.com/6630d25f16e3c1e0bd8d0f52/66323751df305a4adb43fd80_category-thumb-01.jpg" alt="image" />
              {/* <h2 className="absolute text-2xl font-bold text-gray-800">Fashion</h2> */}
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  </hero>
  </>
    
  )
}

export default Categories