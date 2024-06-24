// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8KCxXfhLfC5B-o7Sk5zLbbKnr0RWYtL8",
    authDomain: "dp-v1-bf973.firebaseapp.com",
    projectId: "dp-v1-bf973",
    storageBucket: "dp-v1-bf973.appspot.com",
    messagingSenderId: "50686902866",
    appId: "1:50686902866:web:c37221d957f48f9797558b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }