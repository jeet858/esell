// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8Rdy7itYprVAULZJiZU1iztHNJHXwd_M",
  authDomain: "esell-31.firebaseapp.com",
  databaseURL:
    "https://esell-31-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "esell-31",
  storageBucket: "esell-31.appspot.com",
  messagingSenderId: "573129441879",
  appId: "1:573129441879:web:dbf85882a1cf9c83f41912",
  measurementId: "G-5WC3MR0MZZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
