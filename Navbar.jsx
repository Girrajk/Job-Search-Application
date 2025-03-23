import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
      <div className='d1'>
        <img src='https://cdn-icons-png.flaticon.com/128/3850/3850285.png' alt='logo not found' />
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/myaccount">My Account</Link></li>
        </div>
        <div className='d2'>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
