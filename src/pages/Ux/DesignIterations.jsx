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
    <div className='ux-con'>
        <div className='ux-ti-con'>
          <h2 className='ux-ti'>Design & Iterations</h2>
          <hr className='bot-line'/>
        </div>
        <div className='di-grid'>
            {designs.map((design, i) => (
                        <div key={i} className='di-content-container'>
                            <img src={design.image} className='di-main-pic'/>
                            <span className='di-name'>{design.name}</span>  
                            <hr/>
                        </div>
                    ))}
            <a href='https://xd.adobe.com/view/b181c9ad-73c2-4419-9902-95b81812106b-e4d2/' target='_blank' className='di-xd-con'>
                <Icon.Xd className='icon-1-1'/>
                <p className='tryxd'>Try it on Xd!</p>
            </a>
        </div>
    </div>
  )
}

export default DesignIterations