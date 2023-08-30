import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANu1TVgOpVU-Fas0gxT9FLg6TsPoQLCAs",
  authDomain: "chat-app-7211e.firebaseapp.com",
  projectId: "chat-app-7211e",
  storageBucket: "chat-app-7211e.appspot.com",
  messagingSenderId: "905476722929",
  appId: "1:905476722929:web:c5ff01aafcf576343f1950",
  measurementId: "G-5LDMH8BK0W",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
