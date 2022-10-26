import React, { createContext, useState } from 'react';
import { useState } from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth'
import app from '../../firebase/firebase.config'
import { createContext } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const Authprovider = ({ children }) => {
    const [user, setUser] = useState({})

    const googleProviderLogin = () => {
        return signInWithPopup(auth, provider)
    }

    const authInfo = { user }
    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default Authprovider;