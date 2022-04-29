import React, { useEffect, useState } from "react";
import useFruits from "../../hooks/useFruits";

const Inventory = () => {
  const [fruits, setFruits] = useFruits();
  return (
    <div className="text-center">
      {fruits.map((f) => (
        <ul key={f._id}>
          <li>{f.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default Inventory;
