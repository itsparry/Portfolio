import React from 'react'
import Icon from '../../components/icon'
import uxData from '../../DesignData.json'
import { useNavigate } from 'react-router-dom'

const UxDesign = () => {
  let navigate =useNavigate()

  return (
        <div className='hp-container'>
            <div className='hp-title-2'>
                <h1 className='ux-design'>UX Design</h1>
                <hr className='bot-line'/>
            </div>
            <div className='ux-content-container'>
            {uxData.map((project,i) =>(
                <div key={i}>
                    <button onClick={() => {navigate('/naka-case-study')}} className='ux-button'>
                        <img src={project.image} className='ux-main-pic' alt='design portfolio pics'/>
                    </button>
                    <div className='bot-container ux-bot-container'>
                        <p className='subtitle'>{project.title}</p>
                        <div className='ux-icon-container'>
                            <div className='icon-name'>
                                <Icon.Figma className='icon-2'/>
                                <p className='icon-subtitle'>Figma</p>
                            </div>
                            <a href={project.previewUrl} target="_blank" className='icon-name' rel="noreferrer">
                                <Icon.Xd className='icon-1'/>
                                <span className='icon-subtitle-xd'>Xd</span>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
            <hr/>
            <p className='mcs'>more coming soon...</p>
            </div>
        </div>
  )
}

export default UxDesign