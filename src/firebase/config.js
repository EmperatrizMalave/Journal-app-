// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkR0uMLbn6AmMzhP9Gh-GI98O6xSj1LZg",
  authDomain: "journal-app-d931e.firebaseapp.com",
  projectId: "journal-app-d931e",
  storageBucket: "journal-app-d931e.appspot.com",
  messagingSenderId: "995601891089",
  appId: "1:995601891089:web:7dc617c027ec79f94f16b0"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );