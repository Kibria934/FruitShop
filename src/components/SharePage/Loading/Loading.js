import React from "react";
import { Spinner } from "react-bootstrap";
import './Loading.css'
const Loading = () => {
  return (
    <div className="text-center w-100 loader ">
     <div>
     <Spinner className="spinner" animation="grow" variant="success" />
     <p className="fs-2">Loading...</p>
     </div>
    </div>
  );
};

export default Loading;
