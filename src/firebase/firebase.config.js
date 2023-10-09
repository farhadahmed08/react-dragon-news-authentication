// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_iNLRicME30HL_ChQ5xz8jU5nqDGyeJg",
  authDomain: "react-dragon-news-auth-f1611.firebaseapp.com",
  projectId: "react-dragon-news-auth-f1611",
  storageBucket: "react-dragon-news-auth-f1611.appspot.com",
  messagingSenderId: "986378663034",
  appId: "1:986378663034:web:35ce5cbd948191aeb5b7c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;