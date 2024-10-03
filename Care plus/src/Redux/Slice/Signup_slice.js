import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
// Initial state
const initialState = {
  username: "",
  email: "",
  password: "",
  error: null,
  isLoading: false,
  token: null, // to store authentication token after signup or signin
};
const navigate=useNavigate
// Async thunk for signing up
export const signupUser = createAsyncThunk(
  "auth/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:9000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      console.log("data",data)
      if (response.ok) {
        return data; // Return data like token if successful
      } else {
        return rejectWithValue(data.error); // Return error message
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for signing in
export const signinUser = createAsyncThunk(
  "auth/signin",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:9000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      console.log("data",data)

      Cookies.set("token",data.token)
      if (response.ok) {
        const token= Cookies.get("token")
        console.log(token)
        if(token){

        }
        return data; // Return data like token if successful
      } else {
        return rejectWithValue(data.error); // Return error message
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


// Slice
const authSlice = createSlice({
  name: "auth",
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
  },
  extraReducers: (builder) => {
    // Handling signup
    builder
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token; // Assuming the token comes in the payload
        state.error = null;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // Handling signin
    builder
      .addCase(signinUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token; // Assuming the token comes in the payload
        state.error = null;
      })
      .addCase(signinUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

  },
});

// Export actions and reducer
export const { setUsername, setEmail, setPassword  } = authSlice.actions;
export default authSlice.reducer;
