/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import css from './Nav.module.css'
import Logo from '../../assets/Logo.png'

const Nav = () => {
  return (
    <nav className={css.navigation}>
      <li><a href="#">About</a></li>
      <li><a href="#">Products</a></li>
      <a href="#">
      <img src={Logo} alt='logo'/>
      </a> 
      <li><a href="#">Stores</a></li>
      <li><a href="#">Contacts</a></li>
    </nav>
  )
}

export default Nav