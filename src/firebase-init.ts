import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApUr1mOOlB-zfEMjpJSmCOiuegy_-PGqI",
  authDomain: "whatsapp-clone-2f961.firebaseapp.com",
  projectId: "whatsapp-clone-2f961",
  storageBucket: "whatsapp-clone-2f961.appspot.com",
  messagingSenderId: "202987937332",
  appId: "1:202987937332:web:e2e1f5e26078bc71ac7461",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
