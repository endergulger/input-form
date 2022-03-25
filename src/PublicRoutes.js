import { BrowserRouter, Routes, Route } from "react-router-dom";
import EnhancedTable from "./EnhancedTable";
import { RegisterScreen } from "./components/RegisterScreen";
import UpdateScreen from "./components/UpdateScreen";

function PublicRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RegisterScreen />} />
        <Route path='datatable' element={<EnhancedTable />} />
        <Route path='update' element={<UpdateScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PublicRoutes;
