import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication()

const useFirebase=()=>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();


  

   
    const handleGoogleSignIn =()=>{
      return  signInWithPopup(auth, googleProvider)
       
    }

    const handleLogOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {

            setUser({})
        }).catch((error) => {
            setError("");
        }).finally(() => setIsLoading(false));
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setError('')
                setUser(user)

            } else {
                setError("")
            }
            setIsLoading(false)
        });

    }, [auth])

    return {
        handleGoogleSignIn,
        user,
        handleLogOut,
        setUser,
        error,
        setError,
        isLoading
    }

}
export default useFirebase;