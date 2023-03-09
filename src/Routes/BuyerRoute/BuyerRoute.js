import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { AuthContext } from '../../context/AuthProvider';
import useBuyer from '../../hooks/useBuyer';

const BuyerRoute = ({children}) => {
  // context
  const { user,  loading } = useContext(AuthContext);
  const [isBuyer,isBuyerLoading] = useBuyer(user?.email);
  let location = useLocation();
  
  if(loading || isBuyerLoading){
    return <Loader/>
  }
  if (user && isBuyer) {
    return children;
  }
  return <Navigate to="/v2/login" state={{ from: location }} replace />;
};


export default BuyerRoute;