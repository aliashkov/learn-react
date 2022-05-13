import { Navigate, useLocation} from "react-router-dom";
import { useSelector } from "react-redux";
import React from 'react';

const RequireAuth = ({children}) => {
  const isLogined = useSelector( state => state.isLoginedReducer.isLogined)

  if (!isLogined) {
     return <Navigate to='/auth'></Navigate>
  }
  return children
}

export default RequireAuth;
