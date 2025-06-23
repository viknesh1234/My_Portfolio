// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgUgCtZYAYxqeamKi4Rn1Rz-byLOViKCA",
  authDomain: "viknesh-1027.firebaseapp.com",
  projectId: "viknesh-1027",
  storageBucket: "viknesh-1027.firebasestorage.app",
  messagingSenderId: "712911550613",
  appId: "1:712911550613:web:6de3faa5b7858e5584c39c",
  measurementId: "G-HJ0DPXGQGP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);