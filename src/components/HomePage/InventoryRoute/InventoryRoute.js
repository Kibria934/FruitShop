import React from "react";
import useFruits from "../../hooks/useFruits";
import "./InventorRoute.css";

const InventoryRoute = () => {
  const [fruits, setFruits] = useFruits();

  return (
    <div className="container">
      <h1 className="text-primary m-4 text-center">All fruits</h1>

      <div className="row row-cols-1 row-cols-md-3 g-5  mt-4 mx-2 ">
        {fruits.map((f) => (
          <div className="  c-container">
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
                    <h3>Supplier Name:{"name"}</h3>
                    <p
                      className="card-text"
                      title={`Click the button and see about ${f.name}`}
                    >
                      {f.description.length > 110 &&
                        f.description.slice(0, 110) + "..."}
                    </p>
                    <div className=" d-flex justify-content-center w-100">
                        <button className="btn px-4 mx-3 btn-primary">Delete</button>
                        <button className="btn px-4 mx-3 btn-primary">Add New</button>
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
