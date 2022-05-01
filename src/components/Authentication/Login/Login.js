import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import "./Login.css";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../SharePage/Loading/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, loggedUser, loggedLoading, loggedError] =
    useSignInWithEmailAndPassword(auth);
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  /* ---------------------- SignIn with email funtionalities -------------------
  ------------------------------------------------------------------------ */

  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, "password", password);
    if (email && password) {
      signInWithEmailAndPassword(email, password);
      e.target.reset();
    }
  };

  /* ----------------- googleSingnin functionalities------------------
  -------------------------------------------------------------------- */
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  if (googleLoading) {
    <Loading></Loading>;
  }
  useEffect(() => {
    if (loggedError) {
      switch (loggedError.code) {
        case "auth/wrong-password":
          toast.error("Please enter the correct password !!");
          break;
        case "auth/user-not-found":
          toast.error("Please create an account first !!");
          break;
        default:
          console.log(loggedError.code);
          break;
      }
    }
    if (user) {
      navigate(from, { replace: true });
    }
    if (loading) {
      <p>Loadding...</p>;
      <Loading></Loading>;
    }
  }, [user, loggedError, error]);
  return (
    <div className="f-container">
      <div className="w-25 shadow p-3 rounded-3 mx-auto ">
        <h1 className="m-3">Log in here!</h1>
        <Form onSubmit={handleSignin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button variant="primary" className="w-100 mx-auto" type="submit">
            Submit
          </Button>
        </Form>
        <p>
          New in Fruit shop?{" "}
          <Link to={"/signup"} className="link">
            Creat new account
          </Link>
        </p>
        <div>
          <div>
            <hr></hr>
          </div>
          <button
            type="btn"
            onClick={() => signInWithGoogle()}
            className="btn btn-warning fw-bold fs-4 w-100 my-4 "
          >
            Google SignIn{" "}
          </button>
        </div>
        <Toaster id={'test'}></Toaster>
      </div>
    </div>
  );
};

export default Login;
