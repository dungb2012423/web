// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv3c_tubMxjJsvXkMRVF_3YD6AHzo80RA",
  authDomain: "hehe-18502.firebaseapp.com",
  databaseURL: "https://hehe-18502-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hehe-18502",
  storageBucket: "hehe-18502.appspot.com",
  messagingSenderId: "838268224933",
  appId: "1:838268224933:web:26d61e70374581f278944c",
  measurementId: "G-H8GJHFFV7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);