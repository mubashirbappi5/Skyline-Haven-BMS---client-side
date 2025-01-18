import React, { useState } from 'react';
import useAdmin from '../Hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
  const{user,  loading}=useState()
  const location = useLocation();
  const[isAdmin,isPending ]=useAdmin()
 
 if(loading || isPending){
    return <h1>loading</h1>
 }

  if(user && isAdmin){
    return children
  }
    return (
        <div>
            <Navigate to="/" state={{ from: location }} replace></Navigate>
        </div>
    );
};

export default AdminRoute;