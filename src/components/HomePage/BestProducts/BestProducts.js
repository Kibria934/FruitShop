import React from "react";
import { Link, useParams } from "react-router-dom";
import useFruits from "../../hooks/useFruits";
import "./BestProducts.css";
const BestProducts = () => {
  const [fruits, setFruits] = useFruits();
//   const { id } = useParams();
  return (
    <div className="mx-auto text-center">
      <h1>Best products</h1>
      <div className="d-flex best-product-container container mx-auto">
        {fruits.slice(10, 15).map((f) => (
          <div>
            <div className="border m-3 b-container">
              <img
                className="rounded-3 "
                height={"400px"}
                width={"100%"}
                src={f.picture}
                alt=""
              />
              <div className="overlay">
                <h3>
                  Quantity:{f.quantity} <br />
                  <button className="btn-v mt-1 px-3 ">
                    <Link className="text-decoration-none" to={`/inventory/${f._id}`}>Visite here</Link>
                  </button>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestProducts;
