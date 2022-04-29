// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbEIent_lPfUWFqjywvmd8vJqZ5Al7DSs",
  authDomain: "fruit-shop-8ea11.firebaseapp.com",
  projectId: "fruit-shop-8ea11",
  storageBucket: "fruit-shop-8ea11.appspot.com",
  messagingSenderId: "828650848431",
  appId: "1:828650848431:web:db652b5d085afda657145a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;