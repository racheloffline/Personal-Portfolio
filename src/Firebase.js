// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1_am6PWtz5RDUT4aBy4Ff-V33lOv339Y",
  authDomain: "portfolio-sample-bc06f.firebaseapp.com",
  projectId: "portfolio-sample-bc06f",
  storageBucket: "portfolio-sample-bc06f.appspot.com",
  messagingSenderId: "1019278387309",
  appId: "1:1019278387309:web:45af0b123875e3bf89f764",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
