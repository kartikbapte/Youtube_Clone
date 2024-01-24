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
    setUser: (state, action) => {
      // state.user = action.payload;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
// export const selectAuth = (state) => state.auth;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default authSlice.reducer;
