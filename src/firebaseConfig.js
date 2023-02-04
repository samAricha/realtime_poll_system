// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKoMwOwXbybdX9fFM3FC3-Ch5xH2B6UuY",
    authDomain: "fast-poll.firebaseapp.com",
    projectId: "fast-poll",
    storageBucket: "fast-poll.appspot.com",
    messagingSenderId: "815308631742",
    appId: "1:815308631742:web:5489944c6ac2ffab0ef8ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)