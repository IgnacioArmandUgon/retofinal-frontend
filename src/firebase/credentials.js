// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDE119d-d1HS-nFfUsDrp2fRLbVtHN8TQo",
    authDomain: "retofinal-1ef66.firebaseapp.com",
    projectId: "retofinal-1ef66",
    storageBucket: "retofinal-1ef66.appspot.com",
    messagingSenderId: "1062050447466",
    appId: "1:1062050447466:web:515eda7b7bc1225405ca13",
    measurementId: "G-DXMG0NXHZE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)