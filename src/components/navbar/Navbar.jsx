import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  return (
      <nav className='navbar'>
          <div className='container'>
              <div className="navbar-content">
                  <div className='brand-and-toggler flex flex-sb'>
                      <Link to='/' className='navbar-brand text-uppercase fw-7 text-white ls-2 fs-22'>Serhii</Link>
                      <button type='button' className='navbar-open-btn text-white'>
                          <FaBars size={30}/>
                      </button>
                      <div className='navbar-collapse'>
                          <button type='button' className='navbar-close-btn text-white'>
                              <FaTimes size={30}/>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
    </nav>
    )
}
