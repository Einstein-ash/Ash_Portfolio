import React from 'react'
import './footer.css'
import { FiInstagram } from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>ASH</a>

      <ul className='permalinks'>
        {/* <li><a href="#"></a>Home</li>
        <li><a href="#about"></a>About</li>
        <li><a href="#experience"></a>Experience</li>
        <li><a href="#contact"></a>Contact</li> */}
        
 <li></li>
      </ul>

     {/* <div className='footer_socials'>
      <a href="https://instagram.com"><FiInstagram/></a>
      <a href="https://twitter.com"><IoLogoTwitter/></a>
     </div> */}
    </footer>
  )
}

export default footer