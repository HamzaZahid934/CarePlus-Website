import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductsByCategoryID } from '../Redux/Slice/Products_slice';


const Products = () => {
  const { categoryid, categoryname } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProductsByCategoryID(categoryid));
    }
  }, [status, dispatch, categoryid]);
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }
 const filteredproducts  =products .filter((product)=>{
  console.log('productcategoryID:',product.category)
  return product.category === categoryid
 })
 console.log(filteredproducts)



  return (
    <div className="container mt-20">
      <div className="flex flex-col flex-wrap">
        <h1 className="text-3xl font-bold mb-8">{categoryname}</h1>
        <div className="flex flex-wrap justify-start gap-10">
          {filteredproducts.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;