import React from 'react'
import Sunny from '../../assets/Sunny.png'
import Michael from '../../assets/Michael.png'
import Icon from '../../components/icon'

const UserResearch = () => {
    const audiences=[
        {
            name:'Sunny',
            status: 'International Student',
            description:[
                `Came here for education and burried her head in books most of the time.`,
                `Wants to make friends but doesn’t know where to start and can’t find efficient solution.`
            ],
            image: Sunny,
         },
        {
            name:'Michael',
            status: 'Commuting Student',
            description:[
                `Spends most of his time commuting to school and studying.`,
                `Pressure from school leaving him no time to explore extracurriculars.`,
                `Resorted to sticking with high school friends instead of buidling out network.`
            ],
            image: Michael
        }]
       
  return (
    <div>
        <div>
            <h4>User Research</h4>
            <hr/>
        </div>
        <div>
            {audiences.map((audience,i)=>(
                <div key={i}>
                    <div>
                        <img src={audience.image}/>
                        {audience.description.map((des,i)=>(
                            <ul key={i}>
                                <p>{des}</p>
                            </ul>
                        ))}
                    </div>
                    <div>
                        <p>{audience.name}</p>
                        <p>{audience.status}</p>
                    </div>
                </div>
            ))}
            <hr/>
        </div>
        <div>
            <p>40 participants</p>
            <Icon.Rightarrow/>
            <p>No-code Minimal Viable Product</p>
            <Icon.Plus/>
            <p>14 days</p>
            <Icon.Rightarrow/>
        </div>

        <hr/>
    </div>
  )
}

export default UserResearch