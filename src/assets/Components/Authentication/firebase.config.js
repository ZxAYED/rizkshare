// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyAvq0bAOu9P1azlxecdHrmuTn1YyMB75YQ",
  // authDomain: "rizkshare.firebaseapp.com",
  // projectId: "rizkshare",
  // storageBucket: "rizkshare.appspot.com",
  // messagingSenderId: "799732772710",
  // appId: "1:799732772710:web:d134b03faa0edfa47c62a7"
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;