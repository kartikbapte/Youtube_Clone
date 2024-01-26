// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   user: null,
// };
const initialState = {
  name: "",
  email: "",
  photo: "",
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      console.log("userdetails" ,state,action);
      // state.user = action.payload;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
      
    },
    setSignOutState: (state) => {
      state.user = null;
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = authSlice.actions;
// export const { setUser, clearUser } = authSlice.actions;
// export const selectAuth = (state) => state.auth;

export const selectUserName = (state) => {
  console.log("selectuser",state);
  return state?.auth?.name || ""
};

export const selectUserEmail = (state) => state?.auth?.email;
export const selectUserPhoto = (state) => state?.auth?.photo || "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png";

export default authSlice.reducer;
