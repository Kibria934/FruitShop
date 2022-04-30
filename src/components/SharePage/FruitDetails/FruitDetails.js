import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FruitDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [fruit, setFruit] = useState([]);
  const url = `http://localhost:5000/fruit/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFruit(data));
  }, []);
  console.log(fruit);
  const {
    _id,
    name,
    picture,
    SupplierName,
    quantity,
    price,
    description,
  } = fruit;
  return (
    <div className="container ">
     <div className="f-section m-4 d-flex justify-content-around w-100">
     <div >
          <img width={'500px'} src={picture} alt=""/>
      </div>
      <div className="ms-2">
          <h2>Fruit Name: {name}</h2>
          <small>Fruit ID: {id}</small>
          <h3>Quantity: <strong>{quantity}</strong></h3>
          <h4>Price: <span>{price}</span></h4>
          <h5>Supplier Name: {SupplierName}</h5>
          <p>About Fruit:{description}</p>
      </div>
     </div>
    </div>
  );
};

export default FruitDetails;
