import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFruits from "../../hooks/useFruits";
import InventoryCart from "../InventoryCart/InventoryCart";

const Inventory = () => {
  const [fruits, setFruits] = useFruits();
  return (
    <div className="text-center mt-4 mb-4">
      <h1 className="text-primary mb-4">Inventory</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 mx-4">
      {fruits.slice(0,6).map((f) => (
        <InventoryCart key={f._id} fruit={f}></InventoryCart>
      ))}
      </div>
<Link to={'/inventory'}> See All Fruits</Link>
    </div>
  );
};

export default Inventory;
