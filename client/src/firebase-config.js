// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBsukIZKpKY_h1yZc1kwzZ5xZJc82fFwtA",
  authDomain: "tinder-clone-4ae0d.firebaseapp.com",
  projectId: "tinder-clone-4ae0d",
  storageBucket: "tinder-clone-4ae0d.appspot.com",
  messagingSenderId: "232364471394",
  appId: "1:232364471394:web:0b7f447bb78fc3d5d38d3b",
  measurementId: "G-XKS3Z9JRRM"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
