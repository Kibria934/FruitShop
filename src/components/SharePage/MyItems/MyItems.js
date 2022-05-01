import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const MyItems = () => {
  const [myFruit, setMyFruit] = useState([]);
  const [user] = useAuthState(auth);
  const email = user.email;
  console.log(email);
  const url = `http://localhost:5000/myFruit?email=${email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMyFruit(data);
      });
  }, []);
  console.log(myFruit);
  return (
    <div>
      <div className="container">
        {myFruit.map((f) => (
          <div>
            <div><img width={'400px'}height={'400px'} src={f.picture} alt=""/></div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
