// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdJH6hQ-WAFx_W8p6oQTOgGPwYud0CTFc",
  authDomain: "react-firebase-42100.firebaseapp.com",
  projectId: "react-firebase-42100",
  storageBucket: "react-firebase-42100.appspot.com",
  messagingSenderId: "936839027316",
  appId: "1:936839027316:web:b309d498f0b19078eecf21",
  measurementId: "G-7JRCPHB4NL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);