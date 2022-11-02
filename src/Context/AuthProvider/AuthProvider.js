import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import app from '../../firebase/firebase.config';


export const AuthContext = createContext(app);
const auth = getAuth();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, SetLoader] =useState(true)

    const createUser = (email, password) => {
        SetLoader(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signUp =(email,password) => {
        SetLoader(true)
       return signInWithEmailAndPassword(auth,email,password)
    }
     
    const providerLogin = (provider) => {
        SetLoader(true)
        return signInWithPopup(auth,provider)
    };

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, CurrentUser => {
        setUser(CurrentUser)
        SetLoader(false)
     })
     return () => {
        return unsubscribe
     }
    },[])

    const authInfo = {user,loading,createUser,signUp,providerLogin}
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    ); 
};

export default AuthProvider;