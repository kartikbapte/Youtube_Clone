// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4Ax6-JxB7p2FkZx1_IBrIPDD_ntA87sw",
  authDomain: "yt-clone-cdcab.firebaseapp.com",
  projectId: "yt-clone-cdcab",
  storageBucket: "yt-clone-cdcab.appspot.com",
  messagingSenderId: "984714375764",
  appId: "1:984714375764:web:1c62a930442ef57445b3c1"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();
export {auth, provider};