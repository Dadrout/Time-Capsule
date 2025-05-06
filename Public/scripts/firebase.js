import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAaYnmkiIR01-kuFYQRR7RGK8HWVs7duLg",
  authDomain: "time-capsule-d5a66.firebaseapp.com",
  projectId: "time-capsule-d5a66",
  storageBucket: "time-capsule-d5a66.firebasestorage.app",
  messagingSenderId: "218071541143",
  appId: "1:218071541143:web:b0baea0beb7ffec2ff50d2",
  measurementId: "G-8V0B6X0HMK",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
