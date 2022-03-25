import { collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import db from "./FirebaseApp";

function FirebaseUpdateDelete() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState([]);
  const [updatedUsername, setUpdatedUsername] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [updatedPassword, setUpdatedPassword] = useState("");
  const [usersData, setUsersData] = useState([]);
  const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");

  useEffect(() => {
    onSnapshot(collection(db, "users"), (snapshot) => {
      setUsersData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    db.collection("users").add({
      name: username,
      email: email,
      password: password,
    });

    setUsername("");
    setEmail("");
    setPassword("");
  };

  const updateData = (e) => {
    e.preventDefault();
    updateDoc(doc(collection(db, "users"), dataIdToBeUpdated), {
      username: updatedUsername,
      email: updatedEmail,
      password: updatedPassword,
    });

    setUpdatedUsername("");
    setUpdatedEmail("");
    setUpdatedPassword("");
  };

  const deleteData = (id) => {
    deleteDoc(doc(collection(db, "users"), id));
  };

  return (
    <div className='App__DataDisplay'>
      <div className='AppUpdateform'>
        <div className='UpdateUsernameForm'>
          <input type='text' placeholder='Username' value={updatedUsername} onChange={(e) => setUpdatedUsername(e.target.value)} />
        </div>
        <div className='UpdateEmailForm'>
          <input type='text' placeholder='Email' value={updatedEmail} onChange={(e) => setUpdatedEmail(e.target.value)} />
        </div>
        <div className='UpdatePasswordForm'>
          <input type='text' placeholder='Password' value={updatedPassword} onChange={(e) => setUpdatedPassword(e.target.value)} />
        </div>
        <button onClick={updateData}>Update</button>
      </div>
      <thead>
        <table>
          <tr>
            <th>Username</th>
            <br />
            <th>Email</th>
            <br />
            <th>Password</th>
          </tr>

          {usersData?.map(({ id, data }) => (
            <tr key={id}>
              <td>{data.username}</td>
              <br />
              <td>{data.email}</td>
              <br />
              <td>{data.password}</td>
              <td>
                <button
                  onClick={() => {
                    setDataIdToBeUpdated(id);
                    setUpdatedPassword(data.password);
                    setUpdatedUsername(data.username);
                    setUpdatedEmail(data.email);
                  }}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    deleteData(id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </thead>
    </div>
  );
}

export default FirebaseUpdateDelete;
