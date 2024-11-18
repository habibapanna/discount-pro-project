// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkwYSQgQAPqPdSjlM6W_N7UDz1hQ7bn68",
  authDomain: "my-first-firebase-projec-653de.firebaseapp.com",
  projectId: "my-first-firebase-projec-653de",
  storageBucket: "my-first-firebase-projec-653de.firebasestorage.app",
  messagingSenderId: "808072267200",
  appId: "1:808072267200:web:0095b4b0620c6c11def425"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;