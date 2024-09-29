import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/Slice/Categories_slice';
import CategoryPageCard from "../Components/CategoryPageCard";

const Categories = () => {
  const dispatch = useDispatch();
  const { categories, status, error } = useSelector((state) => state.categories);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(6);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = categories.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(categories.length / cardsPerPage);

  return (
    <>
      <div className="bg-[#faeada]">
        <div className="w-full mt-20 bg-[#faeada]">
          <div className="container">
            <div className="max-w-full-md mx-auto">
              <h1 className="main-title text-5xl font-light leading-tight text-gray-800">
                Browse by Category
              </h1>
              
              <div className="grid grid-cols-3 gap-10 mt-20">
                {currentCards.map((category, index) => (
                  <CategoryPageCard 
                    key={index}
                    index={index}
                    title={category.title}
                    subtitle={category.subtitle}
                    imageUrl={category.imageUrl}
                  />
                ))}
              </div>
              <div className="flex justify-end mt-10">
                {currentPage > 1 && (
                  <button
                    className="bg-button-dark hover:bg-button-hover text-white font-bold py-2 px-4 rounded mr-4"
                    onClick={() => paginate(currentPage - 1)}
                  >
                    Previous Page
                  </button>
                )}
                {currentPage < totalPages && (
                  <button
                    className="bg-button-dark hover:bg-button-hover text-white font-bold py-2 px-4 rounded"
                    onClick={() => paginate(currentPage + 1)}
                  >
                    Next Page
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;