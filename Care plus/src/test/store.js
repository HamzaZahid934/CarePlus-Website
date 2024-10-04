import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Slice/Products_slice.js"; // Adjust the path based on your project structure

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
