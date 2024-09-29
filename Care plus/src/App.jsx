import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Categories from "./Pages/Categories";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Blogs from "./Pages/Blogs";
import Reviews from "./Pages/Reviews";
import Contact from "./Pages/Contact";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element= {<SignUp/>}/>
          <Route path="/login" element ={<Login/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
