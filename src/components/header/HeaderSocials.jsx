import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/ashwani-selwal-a177a6220/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/Einstein-ash' target='_blank'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials