// Frontend - Navbar.js

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PetsContext from './PetsContext';

export default function Navbar() {
  const isAdmin = localStorage.getItem('isAdmin');
  const { UpdateUserInfo } = useContext(PetsContext)
  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('profileData');
    // Other logout logic...
    navigate('/');
    localStorage.removeItem('user')
    UpdateUserInfo(null)
  };

  return (
    <>
      <div className='z-10 max-w-screen-2xl container mx-auto h-[80px] fixed top-0 left-0 right-0'>
        <div className='navbar bg-base-100'>
          <div className='navbar-start'>
            <div className='dropdown'>
              <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
                <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
                  <rect x='0' y='0' width='100%' height='100%' />
                  <circle cx='50%' cy='50%' r='4' fill='white' />
                </svg>
              </div>
              <p></p>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
              >
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/Petlisting'>Pet Listing</Link>
                </li>
                <li>
                  <Link to='/Contactus'>Contact Us</Link>
                </li>
                <li>
                  <Link to='/Blog'>Blog</Link>
                </li>
                <li>
                  <Link to='/CallToAction'>Call To Action</Link>
                </li>
                {isAdmin && (
                  <>
                    <li>
                      <Link to='/Dashboard'>Dashboard</Link>
                    </li>
                    <li>
                      <Link to='/Profile'>Profile</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <Link className='text-5xl font-bold cursor-pointer text-red-500' to='/'>
              Petzee
            </Link>
          </div>
          <div className='navbar-end'>
            <div className='navbar-center hidden lg:flex'>
              <ul className='menu menu-horizontal px-1 font-bold'>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/Petlisting'>Pet Listing</Link>
                </li>
                <li>
                  <Link to='/Contactus'>Contact Us</Link>
                </li>
                <li>
                  <Link to='/Blog'>Blog</Link>
                </li>
                <li>
                  <Link to='/CallToAction'>Call To Action</Link>
                </li>
                {isAdmin && (
                  <>
                    <li>
                      <Link to='/Dashboard'>Dashboard</Link>
                    </li>
                    <li>
                      <Link to='/Profile'>Profile</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div className=''>
              {isAdmin ? (
                <Link className='btn bg-red-500 text-white' onClick={handleLogout} to='/'>
                  Logout
                </Link>
              ) : (
                <Link className='btn bg-red-500 text-white' to='/register'>
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}