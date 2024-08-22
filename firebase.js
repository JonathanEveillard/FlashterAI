// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6qX_gQXyHtkRwWb49vyNT1yB47Zg68RQ",
  authDomain: "flashcard-e287f.firebaseapp.com",
  projectId: "flashcard-e287f",
  storageBucket: "flashcard-e287f.appspot.com",
  messagingSenderId: "221531639474",
  appId: "1:221531639474:web:79b845ab6753b3cd3083ab",
  measurementId: "G-BX8WWMRMVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);