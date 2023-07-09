import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Logo from '../assets/Pizza-logo HQ.png';

function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <a href='/'><img src={Logo} alt='brandLogo' /></a>
      </nav>
      <div>
      <nav className='navLinks'>
        <div className='link1'>
        <Link to='/menu'>Menu</Link>
        </div>
        <div className='link2'>
        <Link to='/about'>About</Link>
        </div>
        <div className='link3'>
        <Link to='/contact'>Contact</Link>
        </div>
        <div className='link4'>
        <Link to='/faq'>FAQ</Link>
        </div>
      </nav>
      </div>
    </div>
  );
}

export default Navbar;
