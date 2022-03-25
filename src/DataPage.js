import { BrowserRouter, Routes, Route } from "react-router-dom";
import EnhancedTable from "./EnhancedTable";
import PageLink from "./PageLink";

const DataPage = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageLink />} />
          <Route path='/datatable' element={<EnhancedTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default DataPage;
