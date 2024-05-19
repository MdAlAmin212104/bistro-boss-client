import { 
    createUserWithEmailAndPassword,
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut, 
    updateProfile
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase_config";
/* eslint-disable react/prop-types */
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInUser = (email, password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    const logout = ()=> {
        setLoading(false);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log("current user", currentUser);
        });
        return () => unsubscribe;

    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        singInUser,
        updateUserProfile,
        logout,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;