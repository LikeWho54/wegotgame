// Firebase client setup.
// Both websites (We Got Game and Speed Basketball) use the SAME Firebase
// project. Media documents are tagged with a `site` field so each site only
// shows its own uploads.
import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Shared project "speedandwgg". This web config is public by design (it ships to
// every browser); data is protected by the rules in firebase/. NEXT_PUBLIC_FIREBASE_*
// env vars override it, e.g. to point a test build at another project.
// Each variable must be referenced literally so Next.js can inline it at build time.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyANgITE4ZcY_4XnwowqOekF2Zkn3tT-SwE",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "speedandwgg.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "speedandwgg",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "speedandwgg.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "933802668950",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:933802668950:web:0844d4e8a0d968864ee3b7",
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.storageBucket
);

function getFirebaseApp(): FirebaseApp {
  if (!isFirebaseConfigured) {
    throw new Error("Firebase nu este configurat. Setează variabilele NEXT_PUBLIC_FIREBASE_*.");
  }
  return getApps().length ? getApp() : initializeApp(firebaseConfig);
}

export const getFirebaseAuth = () => getAuth(getFirebaseApp());
export const getDb = () => getFirestore(getFirebaseApp());
export const getFirebaseStorage = () => getStorage(getFirebaseApp());
