import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "./firebase.config";
import { createContext, useEffect, useState, } from "react";



export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const [user, setUser] = useState([])
    const [foodDonatorName, setFoodDonatorName] = useState([])
    const [foodDonatorEmail, setFoodDonatorEmail] = useState([])
    const [foodDonatorImage, setFoodDonatorImage] = useState([])
    const [loading, setLoading] = useState(true)


    const SignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)

    }
    const GoogleProvider = new GoogleAuthProvider();

    const googleSignIn = (email, password) => {
        return signInWithPopup(auth, GoogleProvider);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
            setUser(user)
            if (user) {

                const foodDonatorName = user.displayName;
                setFoodDonatorName(foodDonatorName)
                const foodDonatorEmail = user.email;
                setFoodDonatorEmail(foodDonatorEmail)
                const foodDonatorImage = user.photoURL;
                setFoodDonatorImage(foodDonatorImage)
                setLoading(false)

            }
        })
        return () => unSubscribe();
    }
        , [])


    const authInfo = {
        user,
        createUser,
        logOut,
        SignIn,
        loading, googleSignIn,
        foodDonatorImage,
        foodDonatorEmail,
        foodDonatorName

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
}

export default AuthProvider;