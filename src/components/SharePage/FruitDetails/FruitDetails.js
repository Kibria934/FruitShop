import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import'./FruitDetails.css'

const FruitDetails = () => {
  const { id } = useParams();
  const [fruit, setFruit] = useState([]);
  const url = `http://localhost:5000/fruit/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFruit(data));
  });
  const { _id, name, picture, SupplierName, quantity, price, description } =
    fruit;
  const [number, setNumber] = useState(0);
  const [update, setUpdate] = useState(false);
  /* ==============================================
                  deleverd function 
    ============================================== */
  const handleDeliverSingleItem = () => {
    if (quantity > 0) {
      const updateFruit = {
        _id: _id,
        name: name,
        picture: picture,
        SupplierName: SupplierName,
        quantity: quantity - 1,
        price: price,
        description: description,
      };
      fetch(`http://localhost:5000/fruit/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateFruit),
      })
        .then((res) => res.json())
        .then((result) => {});
    }
    if (quantity <= 0 ) {
      toast.error(`No ${name} available`);
    }
  };

  const handleDelivered = (e) => {
    e.preventDefault();
    const number = e.target.number.value;
    const count = +number;

    if (count && count > 0) {
      const updateFruit = {
        _id: _id,
        name: name,
        picture: picture,
        SupplierName: SupplierName,
        quantity: +quantity + count,
        price: price,
        description: description,
      };
      fetch(`http://localhost:5000/fruit/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateFruit),
      })
        .then((res) => res.json())
        .then((result) => {
          e.target.reset();
        });
    }
  };
  return (
    <div className="container fruit-details-container ">
      <div className="details-section m-4 d-flex justify-content-around w-100">
        <div>
          <img width={"500px"} src={picture} alt="" />
        </div>
        <div className="ms-2 content-section">
          <h2> {name}</h2>
          <small>Fruit ID: {id}</small>
          <h3>
            Quantity: <strong>{quantity}</strong>
          </h3>
          <h4>
            Price: <span>{price}</span>
          </h4>
          <h5>Supplier Name: {SupplierName}</h5>
          <p>About Fruit:{description}</p>
          <form onSubmit={handleDelivered}>
            <input className="int-box" type="number" name="number" placeholder="Number" />
            <input className="int-box-submit" type="submit" name="submit" value="Add Fruit" />
          </form>
          <button className="delivery-btn" onClick={() => handleDeliverSingleItem()}> Delivered</button>
          <Link to="/inventory">
            <button className="mange-btn">Manage Inventor</button>
          </Link>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default FruitDetails;
