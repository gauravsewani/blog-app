// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrGLe4MZyePN0cDzNmL6wHtmJvAKfgSjs",
  authDomain: "blog-app-21acd.firebaseapp.com",
  projectId: "blog-app-21acd",
  storageBucket: "blog-app-21acd.appspot.com",
  messagingSenderId: "452100138978",
  appId: "1:452100138978:web:31a39a4985ad82869d7bbb",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
