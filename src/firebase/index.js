// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDckQeEuQgW0sxfHVdpj1806i5obb7Dx8",
  authDomain: "blog-site-a8120.firebaseapp.com",
  projectId: "blog-site-a8120",
  storageBucket: "blog-site-a8120.appspot.com",
  messagingSenderId: "910927612321",
  appId: "1:910927612321:web:0a432edc6331114efb23e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
