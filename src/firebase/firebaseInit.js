import {initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBox78IF2KdjeP0PlxbBJRKDoxgFpw-0UM",
    authDomain: "invoice-app-b96c0.firebaseapp.com",
    projectId: "invoice-app-b96c0",
    storageBucket: "invoice-app-b96c0.appspot.com",
    messagingSenderId: "241927893654",
    appId: "1:241927893654:web:4d0eac5a45367efec008b7"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export default db;

