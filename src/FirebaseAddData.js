import { collection, addDoc } from "firebase/firestore";
import db from "./FirebaseApp";

export const FirebaseAddData = async (object) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      username: object.username,
      email: object.email,
      password: object.password,
      city: object.city,
      gender: object.gender,
    });
    // debugger;
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
