import React from 'react'
// import CV from '../../assets/cv1.pdf'
// import CV from '../../assets/ash_cv.pdf'
import CV from '../../assets/Resume_Ashwani_FE_4.pdf'
export const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
