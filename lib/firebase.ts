// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDV8uWUv3g5Sn7friOCLJmJnwcN__Hra_g",
//   authDomain: "journal-io-6397e.firebaseapp.com",
//   projectId: "journal-io-6397e",
//   storageBucket: "journal-io-6397e.firebasestorage.app",
//   messagingSenderId: "171937377125",
//   appId: "1:171937377125:web:db732c941908f5c46ecf8c",
//   measurementId: "G-11XRLBG9BX"
// };

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };