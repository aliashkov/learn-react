import { Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
import React from 'react';

const RequireAdmin = ({children} : any) => {
  const isAdmin = useSelector<{ state : any , isAdminReducer: any }>(state => state.isAdminReducer.isAdmin);
  if (!isAdmin) {
     return <Navigate to='/'></Navigate>
  }
  return children
}


export default RequireAdmin;