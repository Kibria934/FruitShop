import React from "react";
import NavigationBar from "../../SharePage/Navbar/NavigationBar";
import Title from "../../Title/Title";
import Banner from "../Banner/Banner";
import BestProducts from "../BestProducts/BestProducts";
import Heath from "../Health/Heath";
import Inventory from "../Inventory/Inventory";

const Home = () => {
  return (
    <div className="w-100">
      <Title id={'Home'}></Title>
      
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
