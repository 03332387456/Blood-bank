// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjyZmyBzg_pfcI4tMZHVSHDk5Rp0RU3F8",
  authDomain: "hakathone-mb.firebaseapp.com",
  databaseURL: "https://hakathone-mb-default-rtdb.firebaseio.com",
  projectId: "hakathone-mb",
  storageBucket: "hakathone-mb.appspot.com",
  messagingSenderId: "6949162347",
  appId: "1:6949162347:web:514628757f5c24a28ed02e",
  measurementId: "G-RV8XTY9PPF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);