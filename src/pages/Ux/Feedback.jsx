import React from 'react'

const Feedback = () => {
    const chalSol = [
        {
        title: 'Challenges',
        points: [
                'Sign up and login isn\'t as intuitive',
                'People don\'t know how to use the app when first getting in',
                'Sometimes they want to connect with someone from a group individually'
            ]},
        {
        title: 'Solutions',
        points: [

                'Seperated each field of the sign up form into its own page ',
                'a starting tutorial for first time users',
                'Direct messaging'
            ]
        }]

  return (
    <div className='ux-con'>
        <div className='ux-ti-con'>
            <h4 className='ux-ti'>Feedback</h4>
            <hr className='bot-line'/>
        </div>
        <div>
            <div className='ov-cont-con'>
                <p className='fe-1'>I conducted a total of 34 rounds of usability testing.</p>
                <div className='sub-m-con'>
                    <h3 className='sub-m-con-ti'>First round</h3>
                    <p>I tested it with students I obtained from random sampling from around the 
                        campus and on social media platforms. This round is to test would users 
                        navigate and handle the app the way we want them to and to look for 
                        friction points in the user experience. </p>
                </div>
                <div className='sub-m-con'>
                <h3 className='sub-m-con-ti'>Second round</h3>
                    <p>Testing with 100 users on appstore soft launch to see whether core function would solve the main pain point.</p>
                </div>
            </div>
            <div className='info-con'>
                {chalSol.map((cs,i)=>(
                    <div key={i} className='info-pts-con'>
                        <h3 className='info-ti'>{cs.title}</h3>
                        {cs.points.map((point,i)=>(
                        <ul key={i} className='pts-con'>
                            <li className='pts'>{point}</li>
                        </ul>
                        ))}
                    </div>
                ))}
            </div>
        </div>
        <hr className='bot-line' />
    </div>
  )
}

export default Feedback