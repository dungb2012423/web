// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClI0IetxYyYX15z-JW00sfxU_kdto6108",
  authDomain: "asdas-a5e4e.firebaseapp.com",
  databaseURL: "https://asdas-a5e4e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "asdas-a5e4e",
  storageBucket: "asdas-a5e4e.appspot.com",
  messagingSenderId: "257160615063",
  appId: "1:257160615063:web:949c1191ceaff17c7285d2",
  measurementId: "G-BLFL94Y2P0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);