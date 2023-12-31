import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'><img src={logo} alt='logo' /></a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
      <a href="https://www.linkedin.com/in/henriette-uwizeyimana-364768243/" target='_blank'><FaLinkedin /></a>
      <a href="https://github.com/Titisunflower" target='_blank'><FaGithub /></a>
      <a href="mailto:henrietteuwz@gmail.com" target='_blank'><MdEmail /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Titi small Madam. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
