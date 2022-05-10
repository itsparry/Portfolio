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

        const FindComp = [
            {
            title: 'Findings',
            points: [
                    'Sign up and login isn\'t as intuitive',
                    `Current solutions used to meet potential friends: events, clubs, hangouts. `,
                    'People that actually uses current solutions to meet potential friends: 5%. ',
                    'The MVP solutions provided saw only 40% dropout.',
                    '70% remained friends after the MVP usage.'
                ]},
            {
            title: 'Competitive Analysis',
            points: [
                    'There’s a huge lack of a purely platonic matching app',
                    ' Existing competitors uses swipping (popularized by the dating app: tinder) as their main tool for matching.',
                    'Solutions in the market are superficial which is being used as a dating solution.'
                ]
            }]
       
  return (
    <div className='ux-con'>
        <div className='ux-ti-con'>
            <h4 className='ux-ti'>User Research</h4>
            <hr className='bot-line'/>
        </div>
        <div className='u-con-con'>
            {audiences.map((audience,i)=>(
                <div key={i} className='u-con'>
                    <div className='ux-img-des'>
                        <img src={audience.image} className='us-img'/>
                        <div className='us-des-con'>
                        {audience.description.map((des,i)=>(
                            <ul key={i} className='des'>
                                <p className='des-d'>{des}</p>
                            </ul>
                        ))}
                        </div>
                    </div>
                    <div className='na-st-con'>
                        <p>{audience.name}</p>
                        <p>{audience.status}</p>
                    </div>
                    <hr className='bot-line'/>
                </div>
            ))}
        </div>
        <div className='exp-fl-con'>
            <p className='exp-fl-p'>40 participants</p>
            <Icon.Rightarrow className='fl-icon'/>
            <p className='exp-fl-p'>No-code Minimal Viable Product</p>
            <Icon.Plus className='fl-icon'/>
            <p className='exp-fl-p'>14 days</p>
            <Icon.Rightarrow className='fl-icon'/>
            <p className='exp-fl-p'>Interview</p>
        </div>
        <div className='info-con'>
            {FindComp.map((fc,i)=>(
                <div key={i} className='info-pts-con'>
                    <h3 className='info-ti'>{fc.title}</h3>
                    <div>
                        {fc.title === 'Competitive Analysis' ? <p className='gps'>3 gaps from existing competitors</p> : <></>} 
                    </div>
                    {fc.points.map((point,i)=>(
                    <ul key={i} className='pts-con'>
                        <li className='pts'>{point}</li>
                    </ul>
                    ))}
                <hr className='bot-line'/>
                </div>
            ))}
        </div>
        <img src={require('../../assets/comp.png')} className='comppic' />
        <hr className='bot-line'/>
    </div>
  )
}

export default UserResearch