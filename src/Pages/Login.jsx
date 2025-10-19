import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const [error,setError]=useState('')
  const {signIn}=use(AuthContext)
  const location =useLocation()
  const navigate=useNavigate()
  // console.log(location)
  const handleLogin=(e)=>{
    e.preventDefault()
    const email=e.target.email.value;
    const password=e.target.password.value;
    // console.log({email,password})
    signIn(email,password)
    .then(result=>{
      // console.log(result.user)
      alert('Login Succevfully')
      navigate(`${location.state?  location.state:'/'}`)
    })
    .catch(error=>{
      // console.log(error)
      setError(error.message)
    })
  }
    return (
   
<div className='flex justify-center min-h-screen items-center'>
      <div className="card py-10 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className='font-semibold text-center text-2xl'>Login your account</h1>
      <form onSubmit={handleLogin}className="card-body">
        <fieldset className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input type="email" name='email' required className="input" placeholder="Email" />
          {/* password */}
          <label className="label">Password</label>
          <input name='password' required type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          {
            error && <p className='text-red-600 underline'>{error}</p>
          }
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <h1 className='pt-5 text-center'>Dont’t Have An Account ? <Link className='text-secondary' to='/auth/registration' >Register</Link></h1>
      </form>
    </div>
</div>
  
    );
};

export default Login;