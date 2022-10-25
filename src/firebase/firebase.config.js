// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnLWaS_J4U65hM4dD5tnynuH9E-AkcBe8",
    authDomain: "sera-course-client.firebaseapp.com",
    projectId: "sera-course-client",
    storageBucket: "sera-course-client.appspot.com",
    messagingSenderId: "989182336235",
    appId: "1:989182336235:web:e5b47be0c0048dec3932ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;