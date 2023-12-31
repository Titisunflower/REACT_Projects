import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/henriette-uwizeyimana-364768243/" target='_blank'><FaLinkedin /></a>
      <a href="https://github.com/Titisunflower" target='_blank'><FaGithub /></a>
      <a href="mailto:henrietteuwz@gmail.com" target='_blank'><MdEmail /></a>
    </div>
  )
}

export default HeaderSocials
