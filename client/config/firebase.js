// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZNGVpqpOI9QrW7kJPlSm8IiImBKPcCco",
  authDomain: "blockchain-reward.firebaseapp.com",
  projectId: "blockchain-reward",
  storageBucket: "blockchain-reward.appspot.com",
  messagingSenderId: "1047931302093",
  appId: "1:1047931302093:web:96e6a0663f264ce59db984"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
