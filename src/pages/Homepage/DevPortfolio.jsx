import React from 'react'
import Icon from '../../components/icon'
import devData from '../../DevData.json'
import { Element } from 'react-scroll'

const DevPortfolio = () => {
  return (
    <Element name= 'devPortfolio' >
        <div className='dev-title'>
        <h2>Front-end Dev</h2>
        <hr style={{color: 'red', backgroundColor: 'blue', height: 5}}/>
        </div>
        <div className='dev-content-container'>
        {devData.map((project,i) =>(
            <div key={i}>
                <div>
                    <img src={project.image} className='dev-main-pic'/>
                    <div>
                        <p>{project.description}</p>
                        {project.tools.map((tool,i) => (
                            <ul key={i}>
                                <li>{tool}</li>
                            </ul>
                        ))}
                    </div>
                </div>
                <div>
                    <p className='dev-main-title'>{project.title}</p>
                    <a href={project.previewUrl} target="_blank" className='icon-name'>
                        <Icon.Github />
                    </a>
                </div>
            </div>
        ))}
        <hr style={{color: 'red', backgroundColor: 'blue', height: 5}}/>
        <p>more coming soon...</p>
        </div>
    </Element>
  )
}

export default DevPortfolio