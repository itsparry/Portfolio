import React from 'react'
import Icon from '../../components/icon'

const Overview = () => {
  return (

    <div>
        <div className='ux-head-con'>
        <div className='ux-m-title-con'>
            <h3 className='ux-m-title'>Naka</h3>
            <p className='ux-m-subtitle'>A social maching app</p>
        </div>
        </div>
        <div className='cover-pic'></div>
        <div className='ux-con'>
    
            <div className='role-ic'>
        
                <p className='role'>Role: Product manager, Product Designer, Researcher</p>
                <div className='ic-con-1'>
                    <a href='https://xd.adobe.com/view/b181c9ad-73c2-4419-9902-95b81812106b-e4d2/' target='_blank' className='naka-xd-ic'>
                        <Icon.Xd className='icon-1'/>
                        <span className='ad-xd'>Adobe</span>
                    </a>
                </div>
            </div>
            <hr className='ux-line-2'/>
            <div className='ov-cont-con'>
                <p>Making a physical friend in the age of internet is challenging. A poll shows that 30% of the 
                    millennials do not have a single friend. There are 7 billion people in this world but there 
                    are so much wasted potentials of meeting the right people. Naka is the distinct definitive 
                    formula and platform that solve this growing problem of friendlessness. 
                </p>
                <br/>
                <p>   
                Being part of the founding team, I lead the design and development, I was responsible for leading 
                the design process from ideation to launch. I collaborated closely with 3 other cofounding members 
                2 of which were a designer and a full-stack developers. 
                </p>
                <div className='sub-m-con'>
                    <h3 className='sub-m-con-ti'>Problem</h3>
                    <p>
                        One of the biggest problems on university campuses is that compatible friendships are hard to 
                        find. It takes lots of time and effort to look not just to look for friends that align with 
                        people&apos;s value but also to facilitate them into something fruitful.
                    </p>
                </div>
                <div className='sub-m-con'>
                    <h3 className='sub-m-con-ti'>Solution</h3>
                    <p>
                        A social matching platform that utilizes user preference and deep learning to pair potential 
                        friends into a group of 4. 
                    </p>
                </div>
            </div>
            <hr className='ux-line-2'/>
        </div>
    </div>
  )
}

export default Overview