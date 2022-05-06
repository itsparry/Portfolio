import React from 'react'
import Icon from '../../components/icon'

const Tools = () => {
    const classes = {
        toolIcon:'',
        toolIconBW: "",
        toolIconColour: "red"
      }

      const tools = [
        {name: 'HTML5', icon: <Icon.Html className={classes.toolIcon} bw={classes.toolIconBW} color={classes.toolIconColour} />},
        {name: 'CSS3', icon: <Icon.Css className={classes.toolIcon} bw={classes.toolIconBW} color={classes.toolIconColour} />},
        {name: 'Javascript', icon: <Icon.Js className={classes.toolIcon} bw={classes.toolIconBW} color={classes.toolIconColour} />},
        {name: 'Git', icon: <Icon.Git className={classes.toolIcon} bw={classes.toolIconBW} color={classes.toolIconColour} />},
        {name: 'React', icon: <Icon.React className={classes.toolIcon} bw={classes.toolIconBW} color={classes.toolIconColour} />},
        {name: 'React Native', icon: <Icon.React className={classes.toolIcon} bw={classes.toolIconBW} color={classes.toolIconColour} />},
        {name: 'Redux', icon: <Icon.Redux className={classes.toolIcon} bw={classes.toolIconBW} color={classes.toolIconColour} />},
        {name: 'Python', icon: <Icon.Python className={classes.toolIcon} bw={classes.toolIconBW} color={classes.toolIconColour} />},
        {name: 'Adobe Xd', icon: <Icon.Xd className={classes.toolIcon} bw={classes.toolIconBW} color={classes.toolIconColour} />},
        {name: 'Figma', icon: <Icon.Figma className={classes.toolIcon} bw={classes.toolIconBW} color={classes.toolIconColour} />}
      ]

  return (
    <div>
        <div className='tools-title'>
          <h2>Tools</h2>
          <hr style={{color: 'red', backgroundColor: 'blue', height: 5}}/>
        </div>
        <div>
            {tools.map((tool, i) => (
                        <div key={i} className="">
                            <div className="">
                            {tool.icon}
                            </div>
                            <span className="">{tool.name}</span>  
                        </div>
                    ))}
        </div>
        <p>more coming soon...</p>
        <hr style={{color: 'red', backgroundColor: 'blue', height: 5}}/>
    </div>
  )
}

export default Tools