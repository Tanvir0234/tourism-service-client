import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';
import './Login.css';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
const {user,handleGoogleSignIn,error,setError,setUser} = useAuth()

const location = useLocation()
const history = useHistory()
const redirect_uri = location.state?.from || '/home';


const googleLogIn = () => {

    handleGoogleSignIn()
      .then(result => {

        setUser(result.user)
        history.push(redirect_uri);

      })
      .catch(error => setError(error.message))
  }



    return (
        <div className="d-flex justify-content-center align-items-center my-5 ">
            <div className="my-5 bg-light shadow rounded ">
            <button onClick={googleLogIn} className="m-5 p-2 text-white fw-bold rounded btn-google"><FaGoogle/> &nbsp;Google Sign In</button>
            </div>
            
        </div>
    );
};

export default Login;