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
import Loading from "../../SharePage/Loading/Loading";

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
    if (password.length < 6) {
      setErrors({
        ...errors,
        passError: "Please enter more than 6 character password",
      });
    }
    if (password.length >= 6) {
      setErrors({ ...errors, passError: "" });

      if (password !== confirmPassword) {
        setErrors({ ...errors, confirmError: "Password did not match" });
        setErrors({ ...errors, passError: "" });
      }
      if (password == confirmPassword || !user) {
        await createUserWithEmailAndPassword(email, password);
        setErrors({ ...errors, confirmError: "" });
        e.target.reset();
        setErrors({ ...errors, passError: "" });
        // await updateProfile({displayName:name})
      }
    }
  };
  useEffect(() => {
    if (error) {
      // console.log(error.code);
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
      {
        toast.success("Your account created");
      }
    }
    if (googleUser && !googleError) {
      {
        toast.success("Your account created");
      }
    }
  }, [user, error, googleUser, googleError]);
  if (loading) {
    <Loading></Loading>;
  }
  useEffect(() => {
    if (user) {
      if (user) {
        console.log(user);
        updateProfile({ displayName: name });
        navigate(from, { replace: true });
      }
    }
    if (updating) {
      <Loading></Loading>;
    }
  }, [user, updating]);

  const handleGoogle = (e) => {
    signInWithGoogle();
  };
  return (
    <div>
      <div className="f-container">
        <div className="w-25 shadow p-3 rounded-3 mx-auto ">
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
