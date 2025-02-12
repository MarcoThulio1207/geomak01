import {initializeAuth, getReactNativePersistence} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8FCwzCVeR58q7QcmLDz2jgRxfQFOOqf4",
  authDomain: "portifolio-a7c99.firebaseapp.com",
  projectId: "portifolio-a7c99",
  storageBucket: "portifolio-a7c99.firebasestorage.app",
  messagingSenderId: "1037683702197",
  appId: "1:1037683702197:web:3c79cc4b043423501401fc",
  measurementId: "G-B85E89JJ3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const banco = getFirestore(app)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})

export {banco, auth};
