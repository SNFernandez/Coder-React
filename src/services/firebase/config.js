// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHfSMiIXHevq9yrb6o1VdlxfMVX2WIe9M",
    authDomain: "proyecto-react-coder-84bd1.firebaseapp.com",
    projectId: "proyecto-react-coder-84bd1",
    storageBucket: "proyecto-react-coder-84bd1.appspot.com",
    messagingSenderId: "177693556070",
    appId: "1:177693556070:web:f3fb095039911287da1ca7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);