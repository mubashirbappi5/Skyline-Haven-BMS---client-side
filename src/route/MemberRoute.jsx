import React from 'react';
import useAuth from '../Hooks/useAuth';
import useMember from '../Hooks/useMember';
import { Navigate, useLocation } from 'react-router-dom';

const MemberRoute = ({children}) => {
    const {user,  loading}=useAuth()
    const location = useLocation();
    const [isMember,isPending]=useMember()
    if(loading || isPending){
        return <h1>loading</h1>
    }
    if( user &&isMember){
        return children
    }
    return (
        <div>
            <Navigate to="/" state={{ from: location }} replace></Navigate>
        </div>
    );
};

export default MemberRoute;