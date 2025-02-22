// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMAVvEcTMwWr2o_MMqEstj7vgBs-laOJ8",
  authDomain: "afropix-app.firebaseapp.com",
  projectId: "afropix-app",
  storageBucket: "afropix-app.firebasestorage.app",
  messagingSenderId: "1080320160532",
  appId: "1:1080320160532:web:221ce4c637cbcb92948801",
  measurementId: "G-6V72YBJ0SM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);