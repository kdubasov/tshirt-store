import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from 'firebase/database';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBi7BzJviWwNsgEXIuWmeFu2QpVNyXkqqc",
    authDomain: "tshirt-store-9c043.firebaseapp.com",
    projectId: "tshirt-store-9c043",
    storageBucket: "tshirt-store-9c043.appspot.com",
    messagingSenderId: "415148422160",
    appId: "1:415148422160:web:deeae21699d35566c14695"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const authDB = getAuth(app);
export const realtimeDB = getDatabase(app);
export const storageDB = getStorage(app);