import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  signupUser,
  setUsername,
  setEmail,
  setPassword,
} from "../Redux/Slice/Signup_slice";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  const [signupFormData, setSignupFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setSignupFormData({
      ...signupFormData,
      [name]: value,
    });

    if (name === "username") dispatch(setUsername(value));
    if (name === "email") dispatch(setEmail(value));
    if (name === "password") dispatch(setPassword(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: signupFormData.username,
      email: signupFormData.email,
      password: signupFormData.password,
    };
    dispatch(signupUser(userData)).then(() => {
      if (error) {
        // Trigger a toast notification on error
        toast.error(`Signup Fialed : User Already Existed`, {
          autoClose: 5000, // Close after 5 seconds
        });
      } else {
        toast.success("User created successfully",{
        autoClose:5000  
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
              Sign Up
            </h1>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={handleSubmit} className="space-y-6 mb-20">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      required
                      value={signupFormData.username}
                      onChange={handleFormInput}
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
                      value={signupFormData.email}
                      onChange={handleFormInput}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      value={signupFormData.password}
                      onChange={handleFormInput}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 text-button-dark border-gray-300 rounded focus:ring-button-dark"
                    required
                  />
                  <label
                    htmlFor="terms"
                    className="ml-2 block text-sm text-gray-900"
                  >
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
                    className={`w-full rounded-md bg-button-dark py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-button-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-button-dark ${
                      isLoading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing up..." : "Sign Up"}
                  </button>

                  <div className="flex mt-5 justify-between">
                    <h2 className="text-sm-bold text-gray-700">
                      Already Have an Account?
                    </h2>
                    <Link
                      to={"/login"}
                      className="text-sm-bold text-black underline"
                    >
                      Log In
                    </Link>
                  </div>
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
export default SignUp;
