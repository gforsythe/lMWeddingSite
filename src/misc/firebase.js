// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE__API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE__AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE__PROJECT_ID,
  storageBucket:process.env.REACT_APP_FIREBASE__STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_FIREBASE__MESSEGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE__APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE__MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);