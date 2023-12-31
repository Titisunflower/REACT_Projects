import React from 'react'
import './about.css'
import about from '../../assets/about.png'
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoFolderOpenSharp } from "react-icons/io5";

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={about} alt='About Image'></img>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward  className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
              <FaUsers  className='about__icon'/>
              <h5>Clients</h5>
              <small>100+ Clients</small>
            </article>

            <article className='about__card'>
              <IoFolderOpenSharp  className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>

          <p>
          As an aspiring UX/UI designer and Frontend dev, I am passionate about improving the lives of others through design and Development,
          Am constantly looking to learn new things. I am dedicated to use my skills and expertise to make a meaningful contribution to the growth and success of any organization I am part of.
          </p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
