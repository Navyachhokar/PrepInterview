import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnOBrdcdDBloXa5kofjpiosPab6Uyxgwk",
  authDomain: "prepinterview-25679.firebaseapp.com",
  projectId: "prepinterview-25679",
  storageBucket: "prepinterview-25679.firebasestorage.app",
  messagingSenderId: "15173568306",
  appId: "1:15173568306:web:4d6d0540ce5a548c42792b",
  measurementId: "G-8R8LFDMVKB"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
