import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { createContext } from 'react';
import { auth } from '../../Firebace/Firebace.init';

export const Authcontext = createContext()
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const googlelogin = ()=>{
        return signInWithPopup(auth,provider)
      }

    const authinfo = {
        name:'bappi',
        googlelogin,
    }
    return (
        <Authcontext.Provider value={authinfo}>
           {children} 
        </Authcontext.Provider>
    );
};

export default AuthProvider;