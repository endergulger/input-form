import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const FirebaseApp = initializeApp({
  apiKey: "AIzaSyBp69hI6h3248fgXwUfXlPyrIArCoLZfyg",
  authDomain: "informations-90569.firebaseapp.com",
  projectId: "informations-90569",
  storageBucket: "informations-90569.appspot.com",
  messagingSenderId: "1025491895222",
  appId: "1:1025491895222:web:398360114c7ea1d520f717",
});

const db = getFirestore(FirebaseApp);

export default db;
