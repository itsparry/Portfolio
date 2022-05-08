import React from 'react'

const Feedback = () => {
    const chalSol = [
        {
        title: 'Challenges',
        points: [
                'Sign up and login isn&apos;t as intuitive',
                'People don&apos;t know how to use the app when first getting in',
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
    <div>
        <div>
            <h4>Feedback</h4>
            <hr style={{color: 'red', backgroundColor: 'blue', height: 5}}/>
        </div>
        <div>
            <div>
                <p>I conducted a total of 34 rounds of usability testing.</p>
                <div>
                    <h3>First round</h3>
                    <p>I tested it with students I obtained from random sampling from around the 
                        campus and on social media platforms. This round is to test would users 
                        navigate and handle the app the way we want them to and to look for 
                        friction points in the user experience. </p>
                </div>
                <div>
                <h3>Second round</h3>
                    <p>Testing with 100 users on appstore soft launch to see whether core function would solve the main pain point.</p>
                </div>
            </div>
            <div>
                {chalSol.map((cs,i)=>(
                    <div key={i}>
                        <h3>{cs.title}</h3>
                        {cs.points.map((point,i)=>(
                        <ul key={i}>
                            <li>{point}</li>
                        </ul>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Feedback