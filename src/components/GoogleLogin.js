// src/components/GoogleLogin.js
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { setUser } from "../utils/authSlice";
// import { auth, provider } from './firebase';

// const GoogleLogin = () => {
//   const dispatch = useDispatch();

//   const handleGoogleLogin = async () => {
//     try {
//       const result = await auth.signInWithPopup(provider);
//       const user = result.user;
//       dispatch(setUser(user));
//     } catch (error) {
//       console.error('Google login error:', error.message);
//     }
//   };

//   return (
//     <button
//       onClick={handleGoogleLogin}
//       className="bg-blue-500 text-white p-2 rounded"
//     >
//       Login with Google
//     </button>
//   );
// };

// export default GoogleLogin;
