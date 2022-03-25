import { collection, onSnapshot } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import firestore from "./FirebaseApp";

function FirebaseGetData() {
  const ref = collection(firestore, "users");

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  const getData = () => {};

  useEffect(() => {
    const unsub = onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id);
        console.log(doc.data());
        items.push(doc.data());
      });
      setData(items);
      setLoader(false);
    });
    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className='App'>
      <h1>#firebase firestore database</h1>
    </div>
  );
}

export default FirebaseGetData;
