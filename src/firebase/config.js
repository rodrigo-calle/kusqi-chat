// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB39sRs70C1YR8Rsu6P_yH8TfQLLwKwocI",
  authDomain: "whali-chat-co.firebaseapp.com",
  projectId: "whali-chat-co",
  storageBucket: "whali-chat-co.appspot.com",
  messagingSenderId: "269243766473",
  appId: "1:269243766473:web:45a1505b9126028ed21f18",
  measurementId: "G-7V4LWSC28F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
