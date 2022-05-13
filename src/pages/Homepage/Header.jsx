import React from 'react'
import './Homepage.css'

const Header = () => {
  return (
    <div className='header'>
    <h1 className='parry'>Hi! I'm Parry</h1>
    <div className='header-subtitle-container'>
        <span className='pdfd'>Product Designer + Front-end Developer</span>
        <div className='lets-talk-container'>
          <span className='seekops'>Seeking opportunities</span>
          <a href='mailto:parry_chan@hotmail.com' target='_blank' className='header-s-3' rel="noreferrer">
            <div className='header-s-3' >
              <span className='lets-talk'>Lets talk!</span>
              <span><hr className='header-line'/></span>
            </div>
          </a>
        </div>
    </div>
  </div>
  )
}

export default Header