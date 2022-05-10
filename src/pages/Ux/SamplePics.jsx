import React from 'react'

const SamplePics = () => {
    const isc = [
        require('../../assets/screen1.png'), 
        require( '../../assets/screen2.png'),
        require('../../assets/screen3.png'),
       require('../../assets/screen4.png')
    ]
    
  return (
    <div className='ux-con'>
        <div className='sp-grid'>
        {isc.map((isc, i) => (
            <div key={i} className='sp-img-con'>
                <img src={isc} className='sp-img'/>
            </div>
        ))}
        </div>
    </div>
  )
}

export default SamplePics