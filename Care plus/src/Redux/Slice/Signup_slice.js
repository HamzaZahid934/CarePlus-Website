import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  username: '',
  email: '',
  password: '',
  error: null,
  isLoading: false,
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    signupRequest: (state) => {
      state.isLoading = true;
    },
    signupSuccess: (state) => {
      state.isLoading = false;
    },
    signupFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
     
    },
  },
});

export const {
  setUsername,
  setEmail,
  setPassword,
  signupRequest,
  signupSuccess,
  signupFailure,
} = signupSlice.actions;

export const signupUser = (userData) => {
  return (dispatch) => {
    dispatch(signupRequest());
    // Send data to backend API
    fetch('http://localhost:8000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          dispatch(signupFailure(data.error));
        } else {
          dispatch(signupSuccess());
        }
      })
      .catch((error) => {
        dispatch(signupFailure(error.message));
      });
  };
};

export default signupSlice.reducer;