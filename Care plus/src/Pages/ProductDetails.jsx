import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../Redux/Slice/Products_slice';

const ProductDetails = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
console.log(product)
  useEffect(() => {
    if (id ) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-beige">
      <div className="max-w-4xl bg-white p-8 rounded-lg shadow-lg flex">
        {/* Left Side: Product Info */}
        <div className="flex-1 pr-8">
          <h1 className="text-4xl font-bold mb-4">{product.productData.name}</h1>
          <p className="text-2xl font-semibold mb-4">${product.productData.price} USD</p>
          <p className="text-gray-600 mb-8">
            {product.productData.description}
          </p>
          {/* Add to Cart Button */}
          <div className="flex items-center space-x-4 mb-8">
            <input
              type="number"
              min="1"
              className="w-12 h-10 border rounded-md text-center"
              defaultValue="1"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
          </div>
          {/* Shipping Info */}
          <div className="text-sm text-gray-500">
            <p className="flex items-center mb-2">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c3.866 0 7 3.134 7 7h-4v4H9v-4H5c0-3.866 3.134-7 7-7zM9 21h6m-6-5h6" /></svg>
              Free worldwide shipping on all orders
            </p>
            <p className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-4.418 0-8 3.582-8 8h16c0-4.418-3.582-8-8-8z" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 8c0-2.21 1.79-4 4-4s4 1.79 4 4H8z" /></svg>
              Delivers in: 3-7 Working Days
            </p>
          </div>
        </div>

        {/* Right Side: Product Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={`http://localhost:8000/${product.productData.image}`}
            alt="Whisker Wonder Collar"
            className="object-cover w-64 h-80 rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;