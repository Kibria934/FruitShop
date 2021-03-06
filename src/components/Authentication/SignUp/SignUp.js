import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, ToastContainer } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Title from "../../Title/Title";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    emailError: "",
    passError: "",
    confirmError: "",
    othersError: "",
  });

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [updateProfile, updating, updateError] = useUpdateProfile(auth, {
    updating: true,
  });
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    setName(name);

    // ------------------ VALIDATION-----------------
    if (password.length >= 6 && password === confirmPassword && !user) {
      setErrors({ passError: "", confirmError: "" });
      await createUserWithEmailAndPassword(email, password);
      const { data } = await axios.post("https://dry-tor-91636.herokuapp.com/login", {
        email: email,
      });
      localStorage.setItem("token", data);
      e.target.reset();
    }
    if (password !== confirmPassword) {
      setErrors({ confirmError: "Password did not match" });
    }
    if (password.length < 6) {
      setErrors({
        ...errors,
        passError: "Please enter more than 6 character password",
      });
    }
  };
  useEffect(() => {
    if (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          toast.error("Already have this account!!");
          break;
        case "auth/invalid-email":
          toast.error("Invalid-email");
          break;
        default:
          toast.error(error.code);
          break;
      }
    }
    if (user && !error) {
      updateProfile({ displayName: name });
      navigate(from, { replace: true });

    }
  }, [user]);

  const handleGoogle = (e) => {
    signInWithGoogle();
    navigate(from, { replace: true });

  };
  return (
    <div>
            <Title id={"Signup "}></Title>

      <div className="f-container">
        <div className="shadow p-3 log-section rounded-3 mx-auto ">
          <h1 className="m-3">Signup here!</h1>
          <Form onSubmit={handleSignUp}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="name"
                name="name"
                placeholder="Enter Name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <p className="text-danger">{errors && errors?.passError}</p>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>
            <p className="text-danger">{errors && errors?.confirmError}</p>
            <Button variant="primary" className="w-100 mx-auto" type="submit">
              Submit
            </Button>
          </Form>
          <p>
            Already have an account?{" "}
            <Link to={"/login"} className="link">
              Login here
            </Link>
          </p>
          <div>
            <div>
              <hr></hr>
            </div>
            <button
              type="btn"
              onClick={handleGoogle}
              className="btn btn-warning fw-bold fs-4 w-100 my-4 "
            >
              Google SignIn
            </button>
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default SignUp;
