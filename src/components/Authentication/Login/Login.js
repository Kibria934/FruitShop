import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import "./Login.css";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../SharePage/Loading/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Title from "../../Title/Title";

const Login = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, loggedUser, loggedLoading, loggedError] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [emailAcount, SetEmailAcount] = useState("");
  const from = location.state?.from?.pathname || "/";

  /* ---------------------- SignIn with email funtionalities -------------------
  ------------------------------------------------------------------------ */

  const handleSignin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (email && password) {
      await signInWithEmailAndPassword(email, password);
      e.target.reset();
      const { data } = await axios.post(
        "https://dry-tor-91636.herokuapp.com/login",
        { email: email }
      );
      localStorage.setItem("token", data);
    }
  };

  /* ----------------- googleSingnin functionalities------------------
  -------------------------------------------------------------------- */
  const handleGoogleSignIn = () => {
    signInWithGoogle();
    navigate(from, { replace: true });
  };
  if (googleLoading || loggedLoading) {
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
          break;
      }
    }
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, loggedError, error]);
  return (
    <div className="f-container">
      <Title id={"Login "}></Title>

      <div className=" shadow p-3 log-section rounded-3 mx-auto ">
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
          New in Fruit shop?
          <Link to={"/signup"} className="link ms-1">
            Creat new account
          </Link>
        </p>
        {loggedError?.code == "auth/wrong-password" && (
          <p
            onClick={async () => {
              await sendPasswordResetEmail(emailAcount);
              toast.success("Sent email");
            }}
            className="mt-0 text-danger resetBtn text-decoration-underline"
          >
            Forgot Password
          </p>
        )}

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
        <Toaster id={"test"}></Toaster>
      </div>
    </div>
  );
};

export default Login;
