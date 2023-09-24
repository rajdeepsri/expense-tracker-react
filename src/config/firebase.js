import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApTtFhKPQN5Xm72YPGRfqWr7Xzh7cDh78",
  authDomain: "expense-tracker-aebf0.firebaseapp.com",
  projectId: "expense-tracker-aebf0",
  storageBucket: "expense-tracker-aebf0.appspot.com",
  messagingSenderId: "111608665364",
  appId: "1:111608665364:web:f80185c394588bd03c9e01",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
