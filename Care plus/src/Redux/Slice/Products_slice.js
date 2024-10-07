import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch products by category ID
export const fetchProductsByCategoryID = createAsyncThunk(
  'products/fetchProductsByCategoryID',
  async (categoryId) => {
    const response = await axios.get(`http://localhost:8000/getproductsbycategories/${categoryId}`);
    return response.data;
  
  }
);

// Async thunk to fetch product by ID
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id) => {
    const response = await axios.get(`http://localhost:8000/getproductbyid/${id}`);
    return response.data;
  }
);

// Initial state
const initialState = {
  products: [],
  status: 'idle',
  error: null,
};

// Slice
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByCategoryID.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByCategoryID.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchProductsByCategoryID.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
      })
      .addCase(fetchProductById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.product = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      });
  },
});



export default productsSlice.reducer;