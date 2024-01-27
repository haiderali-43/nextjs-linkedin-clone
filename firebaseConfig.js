// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh8ymTk3aTT8v8j13dHGUnTEjOgnCAiZU",
  authDomain: "nextjs-linkedin-clone-3f612.firebaseapp.com",
  projectId: "nextjs-linkedin-clone-3f612",
  storageBucket: "nextjs-linkedin-clone-3f612.appspot.com",
  messagingSenderId: "72999976390",
  appId: "1:72999976390:web:0cf1492bf1d2300ccf06c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);