import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { AuthContext } from "../../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  // context
  const { user,  loading } = useContext(AuthContext);

  let location = useLocation();

  if(loading){
    return <Loader/>
  }
  if (user) {
    return children;
  }
  return <Navigate to="/v2/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
