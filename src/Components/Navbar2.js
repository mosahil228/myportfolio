import React from 'react'
import logo from "../images/logo.svg"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <header className='header-pro'>
        <nav>
          <div className='navbar2'>
            <div className='leftnav'>
              <img src={logo} alt="logo" />
            </div>
            <div className='rightnav'>
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/">Blog</NavLink></li>
              </ul>
              <div className='navProject'><NavLink to="/projects" >Projects</NavLink></div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar