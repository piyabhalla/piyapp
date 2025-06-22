import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBst8Klir0pQmnz2iuBOBXRkfnBugFvu4Q",
  authDomain: "piyapp-69539.firebaseapp.com",
  projectId: "piyapp-69539",
  storageBucket: "piyapp-69539.appspot.com",
  messagingSenderId: "704366642550",
  appId: "1:704366642550:web:95c123e45c609a423de657"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
