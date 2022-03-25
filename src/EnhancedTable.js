import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import db from "./FirebaseApp";
import { collection, onSnapshot } from "firebase/firestore";

const columns = [
  { field: "id", headerName: "ID", width: 200 },
  {
    field: "username",
    headerName: "Username",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
    editable: true,
  },
  {
    field: "password",
    headerName: "Password",
    width: 150,
    editable: true,
  },
];

export default function DataGridDemo() {
  const [usersData, setUsersData] = React.useState([]);

  React.useEffect(() => {
    onSnapshot(collection(db, "users"), (snapshot) => {
      setUsersData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  }, []);

  console.log(usersData);
  return (
    <div style={{ height: 400, width: "50%" }}>
      <DataGrid rows={usersData} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection disableSelectionOnClick />
      <ul>
        <Link to='/'>Home Page</Link>
      </ul>
      <ul>
        <Link to='/update'>Update Page</Link>
      </ul>
    </div>
  );
}
