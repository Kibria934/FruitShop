import React from "react";
import { Button, Form } from "react-bootstrap";
import './Login.css'
const Login = () => {
    const handleGoogleSign = (e)=>{
        e.preventDefault()
        const email =e.target.email.value;
        console.log(email);

    }
  return (
   <div className="f-container">
        <div className="w-25 shadow p-3 rounded-3 mx-auto ">
      <h1 className="m-3">Log in here!</h1>
      <Form onSubmit={handleGoogleSign}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="email" placeholder="Enter email" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="password" placeholder="Password"  required/>
  </Form.Group>
  <Button variant="primary" className="w-100 mx-auto" type="submit">
    Submit
  </Button>
</Form>
<div>
    <div>
        <hr></hr>
    </div>
    <button type="btn" className="btn btn-warning fw-bold fs-4 w-100 my-4 ">Google SignIn </button>
</div>
    </div>
   </div>
  );
};

export default Login;
