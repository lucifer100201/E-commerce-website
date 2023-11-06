import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <nav className='navbar-container'>
        <div className='navbar-logo'>
          <h1>FASHION BEAST</h1>
        </div>
        <div className='navbar-rightfields'>
          <div className='cart-logo'>
          <Link><i class="fa-solid fa-cart-plus"></i></Link>
          </div>
          <div className='cart-count'>
            <h1>0</h1>
          </div>
        </div>
        
      </nav>

    </>
  )
}

export default Navbar
