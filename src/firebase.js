// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAiO9KQ8x1aXKumrMO8jE9JL_jpy_B7Fw",
  authDomain: "to-do-app-6f148.firebaseapp.com",
  projectId: "to-do-app-6f148",
  storageBucket: "to-do-app-6f148.appspot.com",
  messagingSenderId: "21590521852",
  appId: "1:21590521852:web:a50df49432c0b5da65a479",
//   measurementId: "G-BXX3DNWX36"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };