import React from 'react'
import './services.css'
import { FaCheck } from "react-icons/fa6";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Project Management</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Defining the goals, deliverables, and boundaries of a project, outlining what is included and excluded.</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Individual units of work contributing to the achievement of project goals, each with specific requirements and deadlines.</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>A prioritized list of tasks, features, or user stories awaiting attention in future sprints or project phases.</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Ensuring that the final product meets specified requirements and is free of defects.</p>
            </li>
          </ul>
        </article>
        {/* End of Project Management */}
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Creating visually appealing and intuitive interfaces for websites and applications.</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Enhancing the overall user experience through usability, accessibility, and interaction design.</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Developing low-fidelity wireframes and interactive prototypes to visualize design concepts.</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Ensuring that designs are optimized for various devices and screen sizes.</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Crafting a cohesive visual identity, including color schemes, typography, and imagery.</p>
            </li>
          </ul>
        </article>
        {/* UI/UX */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Building responsive and interactive user interfaces using HTML, CSS, and JavaScript.</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Providing ongoing support, updates, and maintenance for existing websites.</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Collaborating with designers to implement seamless and visually appealing user interfaces.</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Ensuring consistent performance across different web browsers.</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Keeping codebase clean, organized, and up-to-date.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
