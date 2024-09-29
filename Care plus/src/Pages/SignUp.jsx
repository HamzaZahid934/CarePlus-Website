import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../Redux/Slice/Signup_slice';
import { Link } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
 
  

  const [signupFormData,setSignupFormData]=useState({
    name:"",
    email:"",
    password:"",
  });

const handleFormInput=(e)=>{
  setSignupFormData({...signupFormData,[e.target.name]:e.target.value})
}
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { username: signupFormData.name, email: signupFormData.email, password: signupFormData.password };
    dispatch(signupUser(userData));
  };

  return (
    <div className="bg-[#faeada]">
      <div className="w-full mt-20 bg-[#faeada]">
        <div className="container">
          <div className="max-w-full-md mx-auto justify-items-center">
            <h1 className=" main-title text-5xl font-light leading-tight text-gray-800 text-center">
              Sign Up
            </h1>
            <div className="mt-10  sm:mx-auto sm:w-full sm:max-w-sm">
              <form action="#" method="POST" onSubmit={handleSubmit} className="space-y-6 mb-20">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={signupFormData.name}
                      onChange={(e)=>handleFormInput(e)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={signupFormData.email}
                      onChange={(e)=>handleFormInput(e)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      value={signupFormData.password}
                      onChange={(e)=>handleFormInput(e)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 text-button-dark border-gray-300 rounded focus:ring-button-dark"
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                    I agree to the{" "}
                    <a
                      href="#"
                      className="font-medium text-button-dark hover:text-button-hover"
                    >
                      terms and conditions
                    </a>
                  </label>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-button-dark py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-button-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-button-dark"
                  >
                    Sign Up
                  </button>
                  <div className="flex mt-5 justify-between">
                    <h2 className="text-sm-bold text-gray-700" >Already Have an Account?</h2>
                    <Link to={'/login'} className="text-sm-bold text-black underline hover: underline:none">Log In</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;