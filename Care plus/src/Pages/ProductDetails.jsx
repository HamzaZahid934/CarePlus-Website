import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../Redux/Slice/Products_slice'; // Create this thunk if needed

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product); // Adjust based on your state structure
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProductById(productId));
    }
  }, [status, dispatch, productId]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mt-20">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <img src={`http://localhost:8000/${product.image}`} alt={product.name} className="w-full" />
      <p className="mt-4">{product.description}</p>
      <p className="mt-2 text-gray-600">
        <span className='text-black font-bold'>$ {product.price}.00 USD</span>
      </p>
    </div>
  );
};

export default ProductDetails;