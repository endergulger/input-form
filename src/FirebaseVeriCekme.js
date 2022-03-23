import { collection, onSnapshot } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import firestore from "./FirebaseApp";

function FirebaseVeriCekme() {
  const ref = collection(firestore, "users");
  console.log(ref);

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  function getData() {
    onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
      setLoader(false);
    });
  }

  useEffect(() => {
    getData();
    console.log(data);
  });

  return (
    <div className='App'>
      <h1>#firebase firestore database</h1>
    </div>
  );
}

export default FirebaseVeriCekme;
