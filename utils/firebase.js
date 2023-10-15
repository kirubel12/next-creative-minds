// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: NEXT_PUBLIC_apikey,
  authDomain: NEXT_PUBLIC_authDomain,
  projectId:NEXT_PUBLIC_projectId ,
  storageBucket: NEXT_PUBLIC_storageBucket,
  messagingSenderId:NEXT_PUBLIC_messagingSenderId,
  appId:NEXT_PUBLIC_appId,
  measurementId: NEXT_PUBLIC_measurementId
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)