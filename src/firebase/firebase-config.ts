// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfOiK5RBPqVt1tsDdaJN3FrYWRKZ6afkU",
  authDomain: "drapp-4eaee.firebaseapp.com",
  projectId: "drapp-4eaee",
  storageBucket: "drapp-4eaee.appspot.com",
  messagingSenderId: "233761449317",
  appId: "1:233761449317:web:59c23c02a5b8f90711ad8c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
