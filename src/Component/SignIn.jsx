import React, { useState } from 'react'
import { useFirebase } from '../context/Firebasecontext'
import facebook from '../assests/facebook.png'
import github from '../assests/github.png'
import twitter from '../assests/twitter.png'
import google from '../assests/google.png'
import { GoogleAuthProvider,signInWithPopup,getAuth } from "firebase/auth";
import { app } from '../firebase'
import './Sign.css'
const SignIn = ({onclick}) => {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const firebase = useFirebase();
  const googleprovider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const handleSubmit = (e) => {
    e.preventDefault()
    firebase.SigninUser(email , password)
  }

  const handleChange = (e) => {
    const {id , value} = e.target
    if(id === 'email'){
      setEmail(value)
    }
    if(id === 'password'){
      setPassword(value)
    }
  }

  const handleGoogle = () => {
    signInWithPopup(auth, googleprovider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);

    });
  }

  return (
      <div className='h-full myfont w-full md:p-3'>
        <div className='font-bold  w-full h-1/7 text-xl  md:text-3xl'>Welcome back</div>
        <div className='text-sm w-lvw md:text-lg md:w-auto'>Sign in to continue your progress</div>
        <div className='w-full pt-6 flex flex-col gap-2 '>
          <label htmlFor="email">Email/Username</label>
          <input type="email" id="email" placeholder="Email" name='email' onChange={handleChange} value={email} className='bg-zinc-100 rounded-lg p-1'/>
          <label htmlFor="password"> Enter your password </label>
          <input type="password" placeholder="Password" onChange={handleChange} value={password} name='password' id='password' className='bg-zinc-100 rounded-lg p-1'/>
          <div className='flex justify-between'>
            <div>
            <input type="checkbox" name="remember" id="remember" className='mr-2 bg-zinc-300'/>
            <label htmlFor="remember" className='text-sm md:text-base'>Remember me</label>   
            </div>
            <div>
              <a className='text-blue-800 hover:text-blue-500 text-sm md:text-base' href="">Forget Password?</a>
            </div>
            
          </div>
          <button className='w-full p-2 bg-red-500 hover:bg-red-300 text-white rounded' onClick={handleSubmit}>Sign In</button>

        </div>
        <div className='h-1/5 w-full '>
          <div className='text-center p-2 my-2'>or log in with</div>
            <div className='flex items-center justify-center gap-8 mb-2'>
              <img src={facebook} alt="facebook" className='w-1/12 grayscale'/>
              <img src={github} alt="instagram" className='w-1/12 grayscale'/>
              <img src={twitter} alt="twitter" className='w-1/12 grayscale'/>
              <img src={google} onClick={handleGoogle} alt="google" className='w-1/12 grayscale hover:cursor-pointer hover:grayscale-0'/>
            </div>
            
          <span className='flex items-center justify-center'>Don't have an account?<a  onClick={onclick} className='text-blue-800 hover:text-blue-500 pl-1 hover:cursor-pointer'>Sign Up</a></span>
        </div>


      </div>
  )
}

export default SignIn
