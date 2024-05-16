// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiKlHEWyv9tm8Y1yD2-zU5rfxSo_eUmvo",
  authDomain: "voda-3e56f.firebaseapp.com",
  projectId: "voda-3e56f",
  storageBucket: "voda-3e56f.appspot.com",
  messagingSenderId: "181585863841",
  appId: "1:181585863841:web:4446f565c29f8b88e2fce0",
  measurementId: "G-GL6E58EYNY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
