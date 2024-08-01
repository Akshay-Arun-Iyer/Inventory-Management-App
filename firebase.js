// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtZb3nbOy028PbaYQGH0JJqgLl5IARuuQ",
  authDomain: "pantry-app-95f4f.firebaseapp.com",
  projectId: "pantry-app-95f4f",
  storageBucket: "pantry-app-95f4f.appspot.com",
  messagingSenderId: "635097755888",
  appId: "1:635097755888:web:390e03b836b41aedc49235",
  measurementId: "G-W1PSG8GSER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore=getFirestore(app);
export {firestore}