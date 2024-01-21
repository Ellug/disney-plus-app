// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhyAPnGc4oqW7JXOAl8A4-YswbvHH6tE8",
  authDomain: "react-disney-plus-app-b3702.firebaseapp.com",
  projectId: "react-disney-plus-app-b3702",
  storageBucket: "react-disney-plus-app-b3702.appspot.com",
  messagingSenderId: "691337980693",
  appId: "1:691337980693:web:10d00febd91c57c151571c",
  measurementId: "G-7WV67MX14B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app