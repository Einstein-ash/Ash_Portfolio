import React from 'react'
import "./About.css"
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
        <div className="about_me-image">
         <img src={ME} alt="About Image" />
        </div>
      </div> 

      <div className="about_content">
        <div className="about_cards">

        <article className="about_card">
         <FaAward className='about_icon'/>
         <h5>Leetcode</h5>
         <small>275+ questions</small>
        </article>

        <article className="about_card">
         <FiUsers className='about_icon'/>
         <h5>Codechef</h5>
         <small>Highest rating 1542 </small>
        </article>

        <article className="about_card">
         <VscFolderLibrary className='about_icon'/>
         <h5>Projects</h5>
         <small>6+ Completed</small>
        </article>
        </div>

        <p>
I take pride in my proficiency as a frontend and backend developer. With a passion for competitive programming and creative problem-solving, I'm dedicated to excellence in all things technica</p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
        </div> 
    </section>
  )
}

export default About