import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setEmail, setPassword, signinUser } from "../Redux/Slice/Signup_slice";

const Login = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  const [signinFormData, setSigninFormData] = useState({
    email: "",
    password: ""
  });

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setSigninFormData({
      ...signinFormData,
      [name]: value,
    });

    if (name === "email") dispatch(setEmail(value));
    if (name === "password") dispatch(setPassword(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: signinFormData.email,
      password: signinFormData.password
    };
    
    dispatch(signinUser(userData)).then(() => {
      if (error) {
        // Trigger a toast notification on error
        toast.error(`Signin Failed: Invalid Credentials`, {
          autoClose: 5000, // Close after 5 seconds
        });
      } else {
        toast.success("Signin Successful", {
          autoClose: 5000
        });
      }
    });
  };

  return (
    <div className="bg-[#faeada]">
      <div className="w-full mt-20 bg-[#faeada]">
        <div className="container">
          <div className="max-w-full-md mx-auto justify-items-center">
            <h1 className="main-title text-5xl font-light leading-tight text-gray-800 text-center">
              Log In
            </h1>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      value={signinFormData.email} // Corrected to signinFormData
                      onChange={handleFormInput}
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
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-black hover:text-button-hover"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      value={signinFormData.password} // Corrected to signinFormData
                      onChange={handleFormInput}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className={`flex w-full justify-center rounded-md bg-button-dark px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-button-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                    isLoading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Logging in...' : 'LOG IN'}
                </button>

                <div className="flex mt-5 justify-between">
                  <h2 className="text-sm-bold text-gray-700">
                    Don't have an account?
                  </h2>
                  <Link
                    to={'/signup'}
                    className="text-sm-bold text-black underline hover:underline-none"
                  >
                    Sign Up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
