import React from 'react'
import Icon from '../../components/icon'
import { Element } from 'react-scroll'


const Footer = () => {
  return (
    <Element name='contact' >
        <div className='footer-container' >
            <div className='hp-title-1'>
                <h2>Lets Create</h2>
                <hr className='bot-line'/>
            </div>
            <div className='c-content-container'>
                <div className='email-con'>
                    <p className='sayhi'>Say Hi!</p>
                    <a href='mailto:parry_chan@hotmail.com' target='_blank' className='email'>
                        <span>parry_chan@hotmail.com</span>
                    </a>
                </div>
                <div className='c-i-con'>
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
            <hr className='bot-line-c'/>
            <div className='p-c-con'><p className='p-c'>Parry &copy; 2022</p></div>
        </div>
    </Element>
  )
}

export default Footer