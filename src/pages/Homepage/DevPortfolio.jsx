import React from 'react'
import Icon from '../../components/icon'
import devData from '../../DevData.json'

const DevPortfolio = () => {
  return (
    <div className= 'hp-container' >
        <div className='hp-title-1'>
            <h2>Front-end Dev</h2>
            <hr className='bot-line'/>
        </div>
        <div className='dev-content-grid'>
            {devData.map((project,i) =>(
                <div key={i}  className={project.title === 'Map Content Display'? 'dev-content-mcd' :'dev-content-container'}>
                    <div className='dev-i-d'>
                        <a href={project.previewUrl} target="_blank" className='dev-p-link' rel="noreferrer noopener">
                            <img src={project.image} className='dev-main-pic' alt='pics of my projects'/>
                        </a>
                        <div className='dev-d-container'>
                            <p className='p-des'>{project.description}</p>
                            <div className='tech-l-c' >
                            {project.tools.map((tool,i) => ( 
                                <ul key={i} className='techused'>
                                    <li>{tool}</li>
                                </ul>
                            ))}
                            </div>
                        </div>
                    </div>
                    <div className='bot-container'>
                        <p className='subtitle'>{project.title}</p>
                        <a href={project.previewUrl} target="_blank" className='icon-name' rel="noreferrer noopener">
                            <Icon.Github className='icon-1'/>
                        </a>
                    </div>
                    <hr className='bot-line'/>
                </div>
            ))}
        </div>
        <p className='mcs'>more coming soon...</p>
    </div>
  )
}

export default DevPortfolio