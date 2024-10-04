import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to fetch categories data
export const fetchData = createAsyncThunk("categories/fetchData", async () => {
  const response = await axios.get("http://localhost:8000/getcategories");
  return response.data; 
});

// Initial state
const initialState = {
  categories: [], 
status: "idle",     
  error: null,
};

// Categories slice
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.categories = action.payload; // Save the fetched data to categories
        state.status = "succeeded";
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.error.message; // Store the error message
        state.status = "failed";
      });
  }});

// Export the reducer to be used in the store
export default categoriesSlice.reducer;
