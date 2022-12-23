import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import Login from "./components/Login";
import Users from "./page/Users";
import Products from "./page/Products";
import DataKaryawanAfd from "./page/pageafdeling/DataKaryawanAfd";
import AddKaryawanAfd from "./page/pageafdeling/AddKaryawanAfd";
import AddUser from "./page/AddUser";
import EditUser from "./page/EditUser";
import AddProduct from "./page/AddProduct";
import EditProduct from "./page/EditProduct";
import ListRKH from "./page/pageafdeling/RKH";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/products" element={<Products />} />
          <Route path="/karyawanafd" element={<DataKaryawanAfd />} />
          <Route path="/karyawanafd/add/:id" element={<AddKaryawanAfd />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
          <Route path="/rkh" element={<ListRKH />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
