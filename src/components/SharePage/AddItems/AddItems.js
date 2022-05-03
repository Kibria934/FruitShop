import React from "react";
import { useForm } from "react-hook-form";
import useFruits from "../../hooks/useFruits";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./AddItems.css";
import { useNavigate } from "react-router-dom";
import Title from "../../Title/Title";

const AddItems = () => {
  const [user, loading, error] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const [fruits, setFruit] = useFruits();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    fetch(`https://dry-tor-91636.herokuapp.com/fruits`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(data);
        setFruit(result);
        // navigate('/myItem')
      });
  };
  return (
    <div className="container mx-auto text-center m-4 ">
            <Title id={"Add Fruits "}></Title>

      <h1>Add your Products</h1>
      <form
        className="d-flex input-group flex-column w-50 mx-auto m-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="m-2 p-2"
          {...register("name")}
          required
          placeholder="Fruit Name"
        />
        <input
          className="m-2 p-2"
          {...register("picture")}
          required
          placeholder="Image url"
        />
        <input
          className="m-2 p-2"
          {...register("SupplierName")}
          required
          placeholder="Supplier Name"
        />
        <textarea
          className="m-2 p-2"
          {...register("description")}
          required
          placeholder="Description"
        />
        <input
          className="m-2 p-2"
          type="number"
          {...register("price", { min: 1, max: 9999 })}
          required
          placeholder=" Fruit Price"
        />
        <input
          className="m-2 p-2"
          type="number"
          {...register("quantity", { min: 1, max: 9999 })}
          required
          placeholder="Quantity"
        />
        <input
          className="m-2 p-2 opacity-25"
          {...register("email")}
          value={user?.email}
          readOnly
        />
        <input className="m-2 submit p-2" type="Submit" />
      </form>
    </div>
  );
};

export default AddItems;
