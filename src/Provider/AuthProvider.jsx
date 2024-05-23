import { 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut, 
    updateProfile
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase_config";
import useAxiosPublic from "../hooks/useAxiosPublic";
/* eslint-disable react/prop-types */
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()
    const axiosPublic = useAxiosPublic()


    const createUser = (email, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInUser = (email, password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSingIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
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
            if(currentUser){
                const userInfo = { email : currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        console.log(res.data);
                        localStorage.setItem('access_token', res.data.token);
                    })
                //set token and store client
            }else{
                //remove token(if store token in the client site)
                localStorage.removeItem('access_token');
                
            }
            setLoading(false);
        });
        return () => unsubscribe;

    },[axiosPublic])

    const authInfo = {
        user,
        loading,
        createUser,
        singInUser,
        googleSingIn,
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