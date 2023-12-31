import React from 'react'
import './header.css'
import CTA from './CTA'
import profile from '../../assets/profile.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Henriette</h1>
        <h5 className='text-light'>Frontend Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={profile} alt='My profile' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
