import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2AHZA5TfK5gS9ksq7uhMSBx08MRQWjYo",
  authDomain: "todolist-3e74b.firebaseapp.com",
  projectId: "todolist-3e74b",
  storageBucket: "todolist-3e74b.appspot.com",
  messagingSenderId: "361513918628",
  appId: "1:361513918628:web:d837f8f77e9f4b49674631",
  measurementId: "G-1RM3HME08H",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
