import React from 'react'
import Icon from '../../components/icon'
import Myphoto from '../../assets/myphoto.jpg'

const About = () => {
  return (
    <div className='Me'>
        <div>
          <h2>Me</h2> 
          <hr style={{color: 'red', backgroundColor: 'blue', height: 5}}/>
        </div>
        <div>
          <img src={Myphoto}/>
          <p>
            I graduated from University of Toronto as a Neuroscience Specialist and Psychology. 
            During my final year in university, I cofounded Naka, a social matching startup with 
            the aim of mitigating the problem of loneliness that plague our generation.While leading Naka, 
            I thaught myself how to design and code, so I could infuse my knowlege of the human behavior 
            and motivation into my designs
            Having tasted the power of building your own product, 
            I now have a new found passion for creating products and problem solving. 
            I hope to refine my skills so I can bring my unique background into the field  
            to elevate how everyone experience the digital world.
          </p>
        </div>
        <div>
          <p>Parry Chan</p>
          <div>
            <Icon.Email style={{color: 'black', width:'32', height:'32'}}/>
            <Icon.Linkedin style={{color: 'black', width:'32', height:'32'}}/>
            <Icon.Github style={{color: 'black', width:'32', height:'32'}}/>
          </div>
        </div>
        <hr style={{color: 'red', backgroundColor: 'blue', height: 5}}/>
      </div>
  )
}

export default About