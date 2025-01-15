import React, { useContext } from 'react';
import { Authcontext } from '../Provider/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(Authcontext)
    const location = useLocation()
 if(loading){
    return <h1>loading....</h1>
 }
 
    if(user){
        return children
    }
   
      return <div>
               <Navigate to="/login" state={{from: location}} replace></Navigate>
      </div> 


  
};

export default PrivateRoute;