import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { collection, getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyAgXKKwQw-yArShqLS0NKAxrf1ZmPvUMzQ",
  authDomain: "arrow-project-8256d.firebaseapp.com",
  projectId: "arrow-project-8256d",
  storageBucket: "arrow-project-8256d.appspot.com",
  messagingSenderId: "811036914575",
  appId: "1:811036914575:web:79645fddf55d871d7a11fa",
  measurementId: "G-H7LSWEWNDC",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const fireStoreCore = getFirestore();
const dataTransactions = collection(fireStoreCore, "transactions");

export { fireStoreCore, dataTransactions };
