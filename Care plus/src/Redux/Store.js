
import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./Slice/Categories_slice.js"; // Adjust the path based on your project structure
import signupReducer from  "./Slice/Signup_slice.js"; // Adjust the path based on your project structure
import productsReducer from  "./Slice/Products_slice.js"; // Adjust the path based on your project structure

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    auth: signupReducer,
    products:  productsReducer,
  },
});

export default  store;