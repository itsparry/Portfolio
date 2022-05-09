import React from 'react'
import Icon from '../../components/icon'

const DesignIterations = () => {
    const designs = [
        {name: 'Userflows', image: require('../../assets/userflow.png')},
        {name: 'Low Fidelity Wireframes', image: require('../../assets/low-wireframe.png')},
        {name: 'High Fidelity Wireframes', image: require('../../assets/high-wireframe.png')},
        {name: 'Prototypes', image: require('../../assets/prototypes.png')},
        {name: 'Typography & Colors', image: require('../../assets/typo.png')}
      ]
  return (
    <div>
        <div className='tools-title'>
          <h2>Design & Iterations</h2>
          <hr/>
        </div>
        <div>
            {designs.map((design, i) => (
                        <div key={i} className="">
                            <img src={design.image}/>
                            <span className="">{design.name}</span>  
                            <hr/>
                        </div>
                    ))}
            <a href='https://xd.adobe.com/view/b181c9ad-73c2-4419-9902-95b81812106b-e4d2/' target='_blank'>
                <Icon.Xd/>
                <p>Try it on Xd!</p>
            </a>
        </div>
        <p>more coming soon...</p>
        <hr/>
    </div>
  )
}

export default DesignIterations