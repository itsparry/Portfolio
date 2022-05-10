import React from 'react'
import Icon from '../../components/icon'
import Myphoto from '../../assets/myphoto.jpg'

const About = () => {
  return (
    <div className='hp-container'>
        <div className='hp-title-1'>
          <h1 className='me'>Me</h1> 
          <hr className='bot-line'/>
        </div>
        <div className='me-content-cr'>
          <img src={Myphoto} className='myphoto'/>
          <p className='me-description'>
            I graduated from University of Toronto as a Neuroscience Specialist and Psychology. 
            During my final year in university, I cofounded Naka, a social matching startup with 
            the aim of mitigating the problem of loneliness that plague our generation.While leading Naka, 
            I thaught myself how to design and code, so I could infuse my knowlege of the human behavior 
            and motivation into my designs
            <br/>
            <br/>
            Having tasted the power of building your own product, 
            I now have a new found passion for creating products and problem solving. 
            I hope to refine my skills so I can bring my unique background into the field  
            to elevate how everyone experience the digital world.
          </p>
        </div>
        <div className='bot-container'>
          <p className='subtitle'>Parry Chan</p>
          <div className='icon-container'>
            <a href='mailto:parry_chan@hotmail.com' target='_blank'> 
              <Icon.Email className='icon-1'/>
            </a>
            <a href='https://www.linkedin.com/in/parry-chan/' target='_blank'> 
              <Icon.Linkedin className='icon-1'/>
            </a>
            <a href='https://github.com/itsparry' target='_blank'> 
              <Icon.Github className='icon-1'/>
            </a>
          </div>
          
        </div>
        <hr className='bot-line' />
        <hr/>
      </div>
  )
}

export default About