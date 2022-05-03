import React from "react";
import { Button, Card, CardGroup, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import './InventoryCart.css'


const InventoryCart = ({ fruit }) => {
  console.log(fruit);
  const { _id, name, price, picture, quantity,SupplierName, description } = fruit;
  return (
    <Link className="text-decoration-none  text-dark" to={`/inventory/${_id}`} >
  <div className="col ">
    <div className="card inventory-card text-start ">
     <div className="inv-container">
     <img height={"400px"} className={'inventory-img'} src={picture} alt="fuite image"/>
     </div>
      <div className="card-body  card-text">
        <h3 className="card-title name">{name.toUpperCase()}</h3>
        <h3>Price: {price}<small>/pc</small></h3>
        <h3 className="quantity">Quantity: {quantity}</h3>
        <h3>Supplier Name:{SupplierName}</h3>
        <p className="card-text" title={`Click the button and see about ${name}`}>{description.length>110 && description.slice(0,110)+'...'}</p>
        <button className="update-btn"><Link className="text-white text-decoration-none" to={`/inventory/${_id}`}>Update</Link></button>
   
      </div>
    </div>
</div>
    </Link>
  );
};

export default InventoryCart;
