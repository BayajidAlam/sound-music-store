// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBtzh8-Jx4YHF8tj7lXzXM8bR58sM2Qu5M",
  authDomain: "sound-music-store.firebaseapp.com",
  projectId: "sound-music-store",
  storageBucket: "sound-music-store.appspot.com",
  messagingSenderId: "930048215498",
  appId: "1:930048215498:web:ed151d1ed8442af857a733",
  measurementId: "G-SVECRM5K1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;