import React from "react";
import useFruits from "../../hooks/useFruits";
import "./Health.css";
const Heath = () => {
  const [fruits, setFruits] = useFruits();
  return (
    <div>
      <h1 className="text-center mt-4">Fruit and health</h1>
      <div className="d-flex justify-content-between mt-1 container">
        <div className="d-flex align-items-center justify-content-center">
          <div>
            <div className="array-fruit">
              {fruits.map((f) => (
                <div className="d-flex f-box ">
                  <div>
                    <img
                      width={"80px"}
                      height={"80px"}
                      className="mini-fruit m-2"
                      src={f.picture}
                      alt=""
                    />
                  </div>
                  <div className="d-flex ms-2 align-items-center">
                      <h5>{f.name}</h5>
                  </div>
                </div>
              ))}
            </div>
            <div></div>
          </div>
        </div>
        <div className="d-flex right-side">
          <div>
            <img src="https://i.ibb.co/D5TTXCb/ruler.jpg" alt="" />
          </div>
          <div className="d-flex">
           
            <div>
              <p className="advise">
                You've heard of Superfoods, but…Superfruits? Not every fruit
                qualifies. Those deemed "super" by nutrition scientists are
                packed with antioxidants, fiber, vitamins and minerals, and
                other nutrients that can help you live longer, look better, and
                even prevent disease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heath;
