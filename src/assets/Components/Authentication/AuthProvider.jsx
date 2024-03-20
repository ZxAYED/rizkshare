import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebase.config";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [foodDonatorName, setFoodDonatorName] = useState([]);
  const [foodDonatorEmail, setFoodDonatorEmail] = useState([]);
  const [foodDonatorImage, setFoodDonatorImage] = useState([]);
  const [loading, setLoading] = useState(true);

  const SignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const GoogleProvider = new GoogleAuthProvider();

  const googleSignIn = (email, password) => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
   
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (CurrentUser) => {
     
        setLoading(false);
        setUser(CurrentUser);
      const loggedUser = { email: CurrentUser?.email };
      if (CurrentUser) {
       
        const foodDonatorName = CurrentUser.displayName;
        setFoodDonatorName(foodDonatorName);
        const foodDonatorEmail = CurrentUser.email;
        setFoodDonatorEmail(foodDonatorEmail);
        const foodDonatorImage = CurrentUser.photoURL;
        setFoodDonatorImage(foodDonatorImage);
     

        axios
          .post("https://zayed-rizkshare-server.vercel.app/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => console.log("token response", res.data));
      }
      else{
        axios.post('/rizkShare/logOut',loggedUser,{
            withCredentials: true,
          }).then(res=>console.log(res.data))
      }
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    createUser,
    logOut,
    SignIn,
    loading,
    googleSignIn,
    foodDonatorImage,
    foodDonatorEmail,
    foodDonatorName,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
