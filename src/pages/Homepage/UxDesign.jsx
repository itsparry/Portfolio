import React from 'react'
import Icon from '../../components/icon'
import uxData from '../../DesignData.json'

const UxDesign = () => {
  return (
    <div>
        <div className='ux-title'>
          <h2>UX Design</h2>
          <hr style={{color: 'red', backgroundColor: 'blue', height: 5}}/>
        </div>
        <div className='ux-content-container'>
        {uxData.map((project,i) =>(
            <div key={i}>
                <img src={project.image} className='ux-main-pic'/>
                <div>
                    <p className='ux-main-title'>{project.title}</p>
                    <div className='ux-icon-container'>
                        <div className='icon-name'>
                            <Icon.Figma />
                            <p>Figma</p>
                        </div>
                        <a href={project.previewUrl} target="_blank" className='icon-name'>
                            <Icon.Xd />
                            <p>Figma</p>
                        </a>
                    </div>
                </div>
            </div>
        ))}
        <hr style={{color: 'red', backgroundColor: 'blue', height: 5}}/>
        <p>more coming soon...</p>
        </div>
    </div>
  )
}

export default UxDesign