import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config';


export const AuthContext = createContext(app);
const auth = getAuth();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, SetLoader] =useState(true)

    const login = (email, password) => {
        SetLoader(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signUp =(email,password) => {
        SetLoader(true)
       return signInWithEmailAndPassword(auth,email,password)
    }
     
    const LogOut = () => {
        localStorage.removeItem('genius-token');
        return signOut(auth);
       
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

    const authInfo = {user,loading,login,signUp,providerLogin,LogOut}


    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    ); 
};

export default AuthProvider;