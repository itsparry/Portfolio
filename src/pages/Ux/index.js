import React from 'react'
import Footer from '../Homepage/Footer'
import TopNav from '../Homepage/TopNav'
import DesignIterations from './DesignIterations'
import Feedback from './Feedback'
import Overview from './Overview'
import UserResearch from './UserResearch'

const index = () => {
  return (
      <div>
        <TopNav/>
        <Overview/>
        <UserResearch/>
        <DesignIterations/>
        <Feedback/>
        <div>
            <img src={require('../../assets/screen1.png')} />
            <img src={require('../../assets/screen2.png')} />
            <img src={require('../../assets/screen3.png')} />
            <img src={require('../../assets/screen4.png')} />
        </div>
        <Footer/>
    </div>
  )
}

export default index