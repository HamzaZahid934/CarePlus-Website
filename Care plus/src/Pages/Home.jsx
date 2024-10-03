import React from 'react'


const Home = () => {
  return (
       <>
        <div className='container mt-20'>
          <div className="flex justify-between items-start gap-6">
            {/* Hero Left Section */}
            <div className="flex flex-col justify-between items-start w-full max-w-[45%] gap-[160px]">
              <div>
                <h1 className="text-[72px] font-semibold leading-[110%] mt-14">
                  Where every pet finds comfort and joy!
                </h1>
                <div className="mt-4">
                  <a href="/category" className="primary-button inline-block">
                    <div className="relative mt-0 px-0">
                      <button className="text-sm font-sans text-white bg-button-dark px-7 py-4 border-r-4 rounded-lg hover:bg-button-hover">
                        VIEW COLLECTION
                      </button>
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex flex-row gap-0 left-0 bottom-0">
                <div className="bg-primary text-white p-5 rounded-t-md mt-20 bg-[#f4765b] w-52 ">
                  <div className="text-[38px] font-semibold leading-[120%] mb-4 bg-[#f4765b]">$2M</div>
                  <div className='bg-[#f4765b]'>Over $5 million in pet products sold worldwide.</div>
                </div>
                <div className="bg-white p-7 rounded-t-md w-52">
                  <div className="text-[38px] font-semibold leading-[120%] mb-4 bg-white">96%</div>
                  <div className='bg-white'>Our customers report satisfaction with our products.</div>
                  <div className="flex gap-1 mt-5 bg-white">
                    <div className="bg-gray-100 rounded w-[35px] overflow-hidden">
                      <img src="https://cdn.prod.website-files.com/65f19ff47c0ac41abb16b0fa/6634848c7fdc874cb4d24b99_fact-01.jpg" alt="Customer Image" className="object-cover w-full h-[35px]" />
                    </div>
                    <div className="bg-gray-100 rounded w-[25px] overflow-hidden">
                      <img src="https://cdn.prod.website-files.com/65f19ff47c0ac41abb16b0fa/66348488a0ec5b931ad48b67_fact-02.jpg" alt="Customer Image" className="object-cover w-full h-[35px]" />
                    </div>
                    <div className="bg-gray-100 rounded w-[25px] overflow-hidden">
                      <img src="https://cdn.prod.website-files.com/65f19ff47c0ac41abb16b0fa/66348488ea5c77f33c7bbe10_fact-03.jpg" alt="Customer Image" className="object-cover w-full h-[35px]" />
                    </div>
                    <div className="bg-gray-100 rounded w-[25px] overflow-hidden">
                      <img src="https://cdn.prod.website-files.com/65f19ff47c0ac41abb16b0fa/663484888f6c951ac4f3835b_fact-04.jpg" alt="Customer Image" className="object-cover w-full h-[35px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Right Section */}
            <div className="flex flex-col items-end w-full max-w-[55%] gap-6">
              <div className="flex justify-between items-end w-full gap-8">
                <div className="relative overflow-hidden rounded bg-gray-100 w-[35%]">
                  <img src="https://cdn.prod.website-files.com/65f19ff47c0ac41abb16b0fa/663486bc2ac98893e7c0025f_hero-2.jpg" alt="Hero Image" className="object-cover w-full h-[295px]" />
                </div>
                <div className="relative overflow-hidden rounded bg-gray-100 w-[65%]">
                  <img src="https://cdn.prod.website-files.com/65f19ff47c0ac41abb16b0fa/663486bdefaafa41dc14d448_hero.jpg" alt="Hero Image" className="object-cover w-full h-[530px]" />
                </div>
              </div>
              <div className="flex gap-12 mt-6 pl-25">
                <div className="flex items-center bg-white rounded w-full max-w-[20%] p-2 gap-2">
                  <img src="https://cdn.prod.website-files.com/65f19ff47c0ac41abb16b0fa/66348a778473b4b6c936bd52_ic-hero.svg" alt="Best Seller Icon" className="w-8 h-8 bg-white" />
                  <div className='bg-white'>Best Seller Product</div>
                </div>
                <div className="flex bg-white rounded w-full max-w-[80%] overflow-hidden">
                  <img src="https://cdn.prod.website-files.com/65f19ff47c0ac41abb16b0fa/66348b9d4e0cdc174e0d3467_best-seller.jpg" alt="Best Seller Image" className="w-1/4 object-cover h-[96px]" />
                  <div className="flex flex-col gap-1 p-3 bg-white">
                    <h6 className="font-semibold bg-white">PetPedicure Nail Clippers</h6>
                    <div className='bg-white'>Your solution to maintaining your pet's paw perfection.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Faq/>
        <MarqueeSlider/> */}
      </>
      
      
  )
}

export default Home