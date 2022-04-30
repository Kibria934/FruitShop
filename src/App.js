import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBeer } from "react-icons/fa";
import { Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home/Home";
import Footer from "./components/SharePage/Footer/Footer";
import NotFound from "./components/NotFoundPage/NotFound";
import Login from "./components/Authentication/Login/Login";
import SignUp from "./components/Authentication/SignUp/SignUp";
import { ToastContainer } from "react-bootstrap";
import NavigationBar from "./components/SharePage/Navbar/NavigationBar";
import InventoryRoute from "./components/HomePage/InventoryRoute/InventoryRoute";
import ManageItems from "./components/SharePage/ManageItems/ManageItems";
import AddItems from "./components/SharePage/AddItems/AddItems";
import MyItems from "./components/SharePage/MyItems/MyItems";
import PrivateRoute from "./components/SharePage/PrivateRoute/PrivateRoute";
import FruitDetails from "./components/SharePage/FruitDetails/FruitDetails";

function App() {
  return (
    <div>
      <NavigationBar></NavigationBar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/inventory"
          element={
            <PrivateRoute>
              <InventoryRoute></InventoryRoute>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/manageItem"
          element={
            <PrivateRoute>
              <ManageItems></ManageItems>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/addItem"
          element={
            <PrivateRoute>
              <AddItems></AddItems>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/myItem"
          element={
            <PrivateRoute>
              <MyItems></MyItems>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/inventory/:id"
          element={
            <PrivateRoute>
              <FruitDetails></FruitDetails>
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      {/* <ToastContainer></ToastContainer> */}
    </div>
  );
}

export default App;
