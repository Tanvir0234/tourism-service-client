import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';
import './Login.css';
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Login = () => {
  const { user, handleGoogleSignIn, error, setError, setUser } = useAuth()

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

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="d-flex justify-content-center align-items-center my-5 ">
      <div className="my-5 bg-light shadow rounded p-5 ">
        <h1 className="text-center mb-4">Please Log In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("firstName", { required: true, maxLength: 20 })} placeholder="Email" /> <br /> <br />
          <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} placeholder="Password" /> <br /> <br />

          <input className="btn btn-success" type="submit" />
        </form>
        <br />
        <p className="text-center">------or-----</p>
        <button onClick={googleLogIn} className="ms-4 p-2 text-white fw-bold rounded btn-google"><FaGoogle /> &nbsp;Google Sign In</button>
      </div>

    </div>
  );
};

export default Login;