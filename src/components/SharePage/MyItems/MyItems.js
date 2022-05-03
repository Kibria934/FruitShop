import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./MyItems.css";
import { RiDeleteBack2Line } from "react-icons/ri";
import useFruits from "../../hooks/useFruits";
import { Placeholder } from "react-bootstrap";

const MyItems = () => {
  const [fruits, setFruits] = useFruits();
  const [myFruit, setMyFruit] = useState([]);
  const [user] = useAuthState(auth);
  const email = user.email;
  console.log(email);
  const url = `https://dry-tor-91636.herokuapp.com/myFruit?email=${email}`;
  console.log(url);
  useEffect(() => {
    fetch(url,{
      headers:{
        authorization:`Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyFruit(data);
      });
  }, [fruits]);

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
          console.log("deleted id:", data);
          const rest = fruits.filter((f) => f._id !== id);
          setFruits(rest);
        });
    }
  };

  console.log(myFruit);
  return (
    <div className="my-items">
      {myFruit.length ? (
        <div className=" item-card">
          <h1 className="text-center head-tag">My Chosen Fruits</h1>
          {myFruit?.map((f) => (
            <div className="d-flex justify-content-between align-items-center card  signleIteme">
              <div className="left-side">
                <div className="pic">
                  <img
                    width={"100px"}
                    height={"100px"}
                    src={f.picture}
                    alt=""
                  />
                </div>
                <div className="ms-2">
                  <h1>{f.name}</h1>
                </div>
              </div>
              <span onClick={() => handleDelete(f._id)} className="fs-2 reset-button me-4">
                <button type=""><RiDeleteBack2Line /></button>
              </span>
            </div>
          ))}
        </div>
      ) : <div  className="container">
        <h1 className="text-center head-tag text-primary">You have no chosen fruits!!</h1>
      </div>}
    </div>
  );
};

export default MyItems;
