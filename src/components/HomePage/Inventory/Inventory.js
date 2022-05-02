import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFruits from "../../hooks/useFruits";
import InventoryCart from "../InventoryCart/InventoryCart";
import { BsArrowRight } from 'react-icons/bs';
import { Button } from "bootstrap";
import './Inventory.css'

const Inventory = () => {
  const [fruits, setFruits] = useFruits();
  return (
    <div className="text-center mt-4 mb-4">
      <h1 className="text-primary mb-1">Inventory</h1>
      <Link  to={'/inventory'}> <button className='seeAll' >All Fruits <span className="ms-1"><BsArrowRight/></span></button></Link>
      <div className="row row-cols-1 mt-2 row-cols-md-3 g-4 mx-4">
      {fruits.slice(0,6).map((f) => (
        <InventoryCart key={f._id} fruit={f}></InventoryCart>
      ))}
      </div>
    
    </div>
  );
};

export default Inventory;
