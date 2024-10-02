// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB--3ZKZOYk0VVa9f9VyCPBF6E0bmWI3Gc",
  authDomain: "blog-da483.firebaseapp.com",
  projectId: "blog-da483",
  storageBucket: "blog-da483.appspot.com",
  messagingSenderId: "506567288606",
  appId: "1:506567288606:web:8921b8e08ef62938cbcb0f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
