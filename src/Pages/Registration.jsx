import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';


const Registration = () => {
  const [nameError, setNameError] = useState('')
  const { createUser, setUser,user,  updateUser } = use(AuthContext)

  const navigate=useNavigate()
  const handleRegister = (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    if (name.length < 5) {
      setNameError('Name should be more 5 character')
      return;
    } else {
      setNameError('')
    }
    const photo = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log({ name, photo, email, password })
    createUser(email, password)
      .then(result => {
        // console.log(result.user)
        updateUser({ displayName: name, photoURL: photo }).then(() => {
          setUser({...user,displayName: name, photoURL: photo})
          navigate('/')
        }).catch((error) => {
          // console.log(error)
          setUser(user)
        });

      })
      .catch(error => {
        // console.log(error)
      })


  }

  return (
    <div className='flex justify-center min-h-screen items-center'>
      <div className="card py-10 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className='font-semibold text-center text-2xl'>Register your account</h1>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Your Name</label>
            <input name='name' type="text" className="input" placeholder="Enter your name" required />
            {
              nameError && <p className='text-red-400'>{nameError}</p>
            }
            {/* photo */}
            <label className="label">Photo URL</label>
            <input name='photo' type="text" className="input" placeholder="Enter your Photo url" required />
            {/* email */}
            <label className="label">Email</label>
            <input name='email' type="email" className="input" placeholder="Email" required />
            {/* password */}
            <label className="label">Password</label>
            <input name='password' type="password" className="input" placeholder="Password" required />
            <div><a className="link link-hover">Forgot password?</a></div>
            <button type='submit' className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <h1 className='pt-5 text-center'>Already Have An Account ? <Link className='text-secondary' to='/auth' >Login</Link></h1>

        </form>
      </div>
    </div>
  );
};

export default Registration;