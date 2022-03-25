import { collection, addDoc } from "firebase/firestore";
import db from "./FirebaseApp";

export const FirebaseAddData = async (username, email, password) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      username,
      email,
      password,
    });
    // debugger;
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
