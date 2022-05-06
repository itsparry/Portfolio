import React from 'react'
import Icon from '../../components/icon'

const Footer = () => {
  return (
    <div>
        <div className='footer-title'>
          <h2>Lets Create</h2>
          <hr style={{color: 'red', backgroundColor: 'blue', height: 5}}/>
        </div>
        <div className='ux-content-container'>
            <div>
                <p>Say Hi!</p>
                <a href='mailto:parry_chan@hotmail.com' target='_blank'>
                    <span>parry_chan@hotmail.com</span>
                </a>
            </div>
            <div>
                <a href='mailto:parry_chan@hotmail.com' target='_blank'>
                    <Icon.Email/>
                </a>
                <a href='https://www.linkedin.com/in/parry-chan/' target='_blank'>
                    <Icon.Linkedin width='24' height='24' color='red'/>
                </a>
                <a href='https://github.com/itsparry' target='_blank'>
                    <Icon.Github/>
                </a>
            </div>
            <hr style={{color: 'red', backgroundColor: 'blue', height: 5}}/>
        </div>
    </div>
  )
}

export default Footer