import React from "react";
import { useForm } from "react-hook-form";
import useFruits from "../../hooks/useFruits";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const AddItems = () => {
  const [user, loading, error] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const [fruits, setFruit] = useFruits();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`http://localhost:5000/fruits`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setFruit(result);
      });
  };
  return (
    <div className="container mx-auto text-center m-4 ">
      <h1>Add your Products</h1>
      <form
        className="d-flex flex-column w-50 mx-auto m-4"
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
        <input className="m-2 p-2" type="Submit" />
      </form>
    </div>
  );
};

export default AddItems;
