import React from "react";
import NavigationBar from "../../SharePage/Navbar/NavigationBar";
import Banner from "../Banner/Banner";
import BestProducts from "../BestProducts/BestProducts";
import Heath from "../Health/Heath";
import Inventory from "../Inventory/Inventory";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <Inventory></Inventory>
      <BestProducts></BestProducts>
      <Heath></Heath>
    </div>
  );
};

export default Home;
