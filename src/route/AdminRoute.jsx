import React, { useState } from 'react';
import useAdmin from '../Hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Loading from '../Shared/Loading';

const AdminRoute = ({children}) => {
  const{user, loading}=useAuth()
  const location = useLocation();
  const[isAdmin,isPending ]=useAdmin()
 
 if(loading || isPending){
    return <Loading/>
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