import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'


// Async thunk to fetch products
export const fetchProductbyID = createAsyncThunk('products/fetchProducts', async (id) => {
    const response = await axios.get(`http://localhost:8000/getproductbyid/:${id}`); // Replace with your API endpoint
    return response.data();
});

// Initial state
const initialState = {
  products: [],
  status: "idle",
  error: null,
};

// Slice
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductbyID.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductbyID.fulfilled, (state, action) => {
        state.products = action.payload; // Save the fetched data to categories
        state.status = "succeeded";
      })
      .addCase(fetchProductbyID.rejected, (state, action) => {
        state.error = action.error.message; // Store the error message
        state.status = "failed";
      });
    }
    });

export default productsSlice.reducer;