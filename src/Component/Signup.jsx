import React, { useState, useEffect } from 'react'
import { useFirebase } from '../context/Firebasecontext';
import facebook from '../assests/facebook.png'
import github from '../assests/github.png'
import twitter from '../assests/twitter.png'
import google from '../assests/google.png'
import { motion } from 'framer-motion'
import { GoogleAuthProvider,signInWithPopup,getAuth } from "firebase/auth";
import { app } from '../firebase'
import './Sign.css'
const SignUp = ({ onclick }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const firebase = useFirebase();
  const googleprovider = new GoogleAuthProvider();
  const auth = getAuth(app);

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
  const handleSubmit = (e) => {
    if (!email || !password || !confirmPassword || !name) {
      alert('please fill all the fields')
    }
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('password does not match')
    }
    else {
      firebase.SetData('user/email ', { email: email, password: password , name: name });
      firebase.SignupUser(email, password);
    }
  } 
  const onchange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value)
      setFormdata({ ...formdata, email: e.target.value })
    }
    if (e.target.name === 'password') {
      setPassword(e.target.value)
      setFormdata({ ...formdata, password: e.target.value })
    }
    if (e.target.name === 'confirmPassword') {
      setConfirmPassword(e.target.value)
      setFormdata({ ...formdata, confirmPassword: e.target.value })
    }
    if (e.target.name === 'name') {
      setName(e.target.value)
      setFormdata({ ...formdata, name: e.target.value })
    }
  }

  const filleddata = Object.values(formdata).filter((value) => value !== '').length
  const progress = (filleddata / Object.keys(formdata).length) * 100


  return (
    <div className='h-full w-full myfont'>
      <div className='font-bold w-full h-1/7 text-3xl'>Create an account</div>
      <div>Sign up to start your journey</div>   <div className='h-2 w-full rounded bg-black'>
        <motion.div
        initial={{
          width: '0%'
        }}
        animate={{
          width: `${progress}%`
        }}
        transition={{
          duration: 1
        }}
        
        className='h-full w-1/12 bg-cyan-300'>
        </motion.div>
      </div>
      <div className=' w-full pt-1 flex flex-col gap-1'>
        <label htmlFor="email">Enter your email</label>
        <input type="email" id="email" placeholder="Email" name='email' onChange={onchange}
          value={email} className='bg-zinc-100 rounded-lg p-0.5' />
        <label htmlFor="password"> Enter your password </label>
        <input type="password" placeholder="Password" name='password' id='password' onChange={onchange} value={password} className='bg-zinc-100 rounded-lg p-0.5' />
        <label htmlFor="confirmPassword"> Confirm your password</label>
        <input type="password" id="confirmPassword" placeholder="Confirm Password" name='confirmPassword'   onChange={onchange} value={confirmPassword} className='bg-zinc-100 rounded-lg p-1' />
        <label htmlFor="name">Enter your name</label>
        <input type="text" placeholder="Name" id="name" name='name' onChange={onchange} value={name} className='bg-zinc-100 rounded-lg p-0.5' />
        <button className='w-full p-2 bg-red-500 rounded-lg hover:bg-red-300 hover:text-white' onClick={handleSubmit}>Create Account</button>

      </div>
      <div className='h-1/5 w-full '>
        <div className='text-center p-1'>or log in with</div>
        <div className='flex items-center justify-center gap-8 mb-2'>
          <img src={facebook} alt="facebook" className='w-1/12 grayscale' />
          <img src={github} alt="instagram" className='w-1/12 grayscale' />
          <img src={twitter} alt="twitter" className='w-1/12 grayscale' />
          <img src={google} onClick={handleGoogle} alt="google" className='w-1/12 grayscale hover:cursor-pointer hover:grayscale-0' />
        </div>

        <span className='flex items-center justify-center'>Already have an account?<a onClick={onclick} className='text-blue-800 cursor-pointer hover:text-blue-400 pl-2'>Sign In</a></span>
      </div>


    </div>
  )
}

export default SignUp;
