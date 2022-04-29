import React from "react";
import { Button, Card, CardGroup, Col, Row } from "react-bootstrap";

const InventoryCart = ({ fruit }) => {
  console.log(fruit);
  const { _id, name, price, picture, quantity, description } = fruit;
  return (
    <div>
  <div className="col">
    <div className="card text-start">
      <img height={"500px"} src={picture} alt="fuite image"/>
      <div className="card-body">
        <h3 className="card-title">{name.toUpperCase()}</h3>
        <h3>Price: ${price}<small>/pc</small></h3>
        <h3>Supplier Name:{'name'}</h3>
        <p className="card-text" title={`Click the button and see about ${name}`}>{description.length>110 && description.slice(0,110)+'...'}</p>
        <button className="btn btn-primary" >Update</button>
      </div>
    </div>
</div>
    </div>
  );
};

export default InventoryCart;