import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBeer } from "react-icons/fa";
import { Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home/Home";
import Footer from "./components/SharePage/Footer/Footer";
import NotFound from "./components/NotFoundPage/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/"element={<Home></Home>}></Route>
        <Route path="/home"element={<Home></Home>}></Route>
        <Route path="*"element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
