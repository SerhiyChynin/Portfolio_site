import React from 'react'
import './Header.css';
import { Navbar } from '../navbar/Navbar';

const Header = () => {
  return (
      <div className='header flex flex-col' id='header'>
        <Navbar/>
          <div className='container flex'>
              <div className='header-content'>
          <h2 className='text-uppercase text-white op-07 fw-6 ls-2'>web design, branding, graphic</h2>
          <h1 className='text-white fw-6 header-title'>Hello, i'm <span
              className='text-brown'>Web & Graphic Designer</span> living in Kyiv, Ukraine</h1>
          <div className='btn-group  flex'>
          <button type='button' className='btn-item bg-brown fw-4 ls-2'>See Works</button>
          <button type='button' className='btn-item bg-dark fw-4 ls-2'>Contact Me</button>
          </div>    
              </div>
        </div>
    </div>
  )
}
export default Header;
