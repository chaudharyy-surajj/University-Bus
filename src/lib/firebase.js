import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDP_ZAh7PUaFxjWb6TMA7Zq8x3ql-rVhOc",
  authDomain: "adtu-bus-service.firebaseapp.com",
  projectId: "adtu-bus-service",
  storageBucket: "adtu-bus-service.firebasestorage.app",
  messagingSenderId: "149407824679",
  appId: "1:149407824679:web:047cecbe1e27332eccc702",
  measurementId: "G-7SNQ4L8VGZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
