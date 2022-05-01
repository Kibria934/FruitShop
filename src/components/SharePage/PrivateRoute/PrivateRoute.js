import React, { useEffect } from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";
// import { useSendEmailVerification } from "react-firebase-hooks/auth";

const PrivateRoute = ({ children }) => {
  const [user, loading, authError] = useAuthState(auth);
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);

  let location = useLocation();
  if (loading) {
  return  <Loading></Loading>;
  }

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  //   if(useSendEmailVerification)
  const handleRelode = () => {
    window.location.reload(true);
  };
  if (!user.emailVerified) {
    return (
      <div className="text-center mt-5">
        <h3 className="text-danger">Your Email is not verified </h3>
        <h5 className="text-success"> Please check our email</h5>
        <button className="btn btn-primary" onClick={handleRelode}>
          Refresh
        </button>
      </div>
    );
  }
  return children;
};

export default PrivateRoute;
