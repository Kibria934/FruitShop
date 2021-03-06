import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import useFruits from "../../hooks/useFruits";
import Loading from "../../SharePage/Loading/Loading";
import Title from "../../Title/Title";
import "./InventorRoute.css";

const InventoryRoute = () => {
  const [fruits, setFruits] = useFruits();

  const [user, loading, authError] = useAuthState(auth);
  if (loading) {
    <Loading></Loading>;
  }

  const handleDelete = (id) => {
    const procced = window.confirm(
      "Are really want to delete this fruit item?"
    );
    if (procced) {
      fetch(`https://dry-tor-91636.herokuapp.com/fruit/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const rest = fruits.filter((f) => f._id !== id);
          setFruits(rest);
        });
    }
  };
  return (
    <div className="container inventory-container">
      <Title id={"Manage inventory(All Fruits)"}></Title>
      <h1 className="text-primary m-4 text-center">All fruits</h1>
      <Link className="text-white seeAll text-decoration-none" to={"/addItem"}>
        Add New
      </Link>
      <div className="row row-cols-1 row-cols-md-3 g-5  mt-4 mx-2 ">
        {fruits.map((f) => (
          <div key={f._id} className="c-container">
            {
              <div className="col">
                <div className="card text-start">
                  <img height={"500px"} src={f.picture} alt="fuite image" />
                  <div className="card-body">
                    <h3 className="card-title">{f.name?.toUpperCase()}</h3>
                    <h3>
                      Price: ${f.price}
                      <small>/pc</small>
                    </h3>
                    <h3>Quantity: {f.quantity}</h3>
                    <h3>Supplier Name:{"name"}</h3>
                    <p
                      className="card-text"
                      title={`Click the button and see about ${f.name}`}
                    >
                      {f.description.length > 110
                        ? f.description.slice(0, 110) + "..."
                        : f.description}
                    </p>
                    <div className=" d-flex justify-content-center w-100">
                      <button
                        onClick={() => handleDelete(f._id)}
                        className="text-red border px-4 mx-3 update-btn "
                      >
                        Delete
                      </button>
                      <button className="update-btn">
                        <Link
                          className="text-white text-decoration-none"
                          to={`/inventory/${f._id}`}
                        >
                          Update
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryRoute;
