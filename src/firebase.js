// File: src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 🔐 Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB036hHCFv-yRyIxH1-AnwF3Y0uqkSt0_A",
  authDomain: "styletrade-e7c6c.firebaseapp.com",
  projectId: "styletrade-e7c6c",
  storageBucket: "styletrade-e7c6c.appspot.com",
  messagingSenderId: "279301077969",
  appId: "1:279301077969:web:0900519f69b2a3bb96fef0",
  measurementId: "G-Q112G8B0M1",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export Firebase services for use in your app
export const auth = getAuth(app);     // For authentication (login, register)
export const db = getFirestore(app);  // For database (feedbacks, users, etc.)
