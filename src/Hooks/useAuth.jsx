import React, { useContext } from 'react';
import { Authcontext } from '../Provider/AuthProvider/AuthProvider';

const useAuth = () => {
    const context = useContext(Authcontext)
    return context
};

export default useAuth;