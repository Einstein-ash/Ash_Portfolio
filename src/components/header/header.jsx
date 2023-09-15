import React from 'react'
import './header.css'
import CTA from './CTA'

import HeaderSocial from './HeaderSocials'
const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Ashwani</h1>
        <h5 className="text-light">MERN STACK Developer</h5>
        <CTA/>
        <HeaderSocial/>
        
        {/* <div className="me">
          <img src={ME} alt="me"/>
        </div> */}

        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header
