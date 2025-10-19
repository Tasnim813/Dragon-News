import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {
    const { user, logout } = use(AuthContext)
    const handleLogout = () => {
        console.log('user trying to logout')
        logout()
            .then(() => {
                alert('Sign-out successful.')
            }).catch((error) => {
                console.log('An error happened.')
            });
    }
    return (
        <div className='flex  justify-between items-center'>
            <div className=''>{user && user.email}</div>
            <div className='nav flex gap-5 text-accent'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='login-btn flex items-center gap-5'>
                <img src={`${user? user.photoURL: userIcon}`} alt="" />
                {
                    user ? <Link onClick={handleLogout} className='btn btn-primary px-10'>Log Out</Link> : <Link to='/auth' className='btn btn-primary px-10'>Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;