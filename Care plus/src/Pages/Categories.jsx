import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "../Components/Cards/Categorycard";
import { fetchData } from "../Redux/Slice/Categories_slice";
import { Link } from "react-router-dom";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const status = useSelector((state) => state.categories.status);
  const error = useSelector((state) => state.categories.error);

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

  return (
    <div className="container mt-20">
      <div className="flex flex-col flex-wrap">
        <h1 className="text-3xl font-bold mb-8">Browse by Category</h1>
        <div className="flex flex-wrap justify-start  gap-10">
          {categories.map((category, index) => (
            <Link to={`/shop/${category._id}/${category.name}`}>
            <CategoryCard
              key={index}
              image={category.image}
              title={category.name}
              subtitle={category.subtitle}
            />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;