import React from 'react'
import Icon from '../../components/icon'

const Overview = () => {
  return (
    <div>
        <div>
            <h3>Naka</h3>
            <p>A social maching app</p>
        </div>
        <img src={require('../../assets/blue.jpg')} />
        <div>
            <div>
                <p>Role: Product manager, Product Designer, Researcher</p>
                <a href='https://xd.adobe.com/view/b181c9ad-73c2-4419-9902-95b81812106b-e4d2/' target='_blank'>
                    <Icon.Xd/>
                    <p>Adobe Xd</p>
                </a>
            </div>
            <hr/>
            <div>
                <p>Making a physical friend in the age of internet is challenging. A poll shows that 30% of the 
                    millennials do not have a single friend. There are 7 billion people in this world but there 
                    are so much wasted potentials of meeting the right people. Naka is the distinct definitive 
                    formula and platform that solve this growing problem of friendlessness. 
                    {'\n'}
                Being part of the founding team, I lead the design and development, I was responsible for leading 
                the design process from ideation to launch. I collaborated closely with 3 other cofounding members 
                2 of which were a designer and a full-stack developers. 
                </p>
                <div>
                    <h3>Problem</h3>
                    <p>
                        One of the biggest problems on university campuses is that compatible friendships are hard to 
                        find. It takes lots of time and effort to look not just to look for friends that align with 
                        people&apos;s value but also to facilitate them into something fruitful.
                    </p>
                </div>
                <div>
                    <h3>Solution</h3>
                    <p>
                        A social matching platform that utilizes user preference and deep learning to pair potential 
                        friends into a group of 4. 
                    </p>
                </div>
            </div>
            <hr/>
        </div>
    </div>
  )
}

export default Overview