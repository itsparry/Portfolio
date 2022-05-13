import React from 'react'
import Icon from '../../components/icon'

const Tools = () => {
    const classes = {
        toolIconColour: "white"
      }

      const tools = [
        {name: 'HTML5', icon: <Icon.Html  color={classes.toolIconColour} />},
        {name: 'CSS3', icon: <Icon.Css  color={classes.toolIconColour} />},
        {name: 'Javascript', icon: <Icon.Js  color={classes.toolIconColour} />},
        {name: 'Git', icon: <Icon.Git  color={classes.toolIconColour} />},
        {name: 'React', icon: <Icon.React color={classes.toolIconColour} />},
        {name: 'React Native', icon: <Icon.React   color={classes.toolIconColour} />},
        {name: 'Redux', icon: <Icon.Redux color={classes.toolIconColour} />},
        {name: 'Python', icon: <Icon.Python color={classes.toolIconColour} />},
        {name: 'Adobe Xd', icon: <Icon.Xd color={classes.toolIconColour} />},
        {name: 'Figma', icon: <Icon.Figma color={classes.toolIconColour} />}
      ]

  return (
    <div className='hp-container'>
        <div className='hp-title-2'>
          <h1 className='tools'>Tools</h1>
          <hr className='bot-line'/>
        </div>
        <div className='tool-grid'>
            {tools.map((tool, i) => (
                <div key={i} className='t-i-n'>
                    <div className='icon-3'>{tool.icon}</div>
                    <div className='tool-name'>{tool.name}</div>  
                </div>
                    ))}
        </div>
        <p className='mcs-t'>more coming soon...</p>
        <hr className='bot-line'/>
        
    </div>
  )
}

export default Tools