import React, { useEffect } from 'react'
import Footer from '../Homepage/Footer'
import TopNav from '../Homepage/TopNav'
import DesignIterations from './DesignIterations'
import Feedback from './Feedback'
import Overview from './Overview'
import SamplePics from './SamplePics'
import UserResearch from './UserResearch'
import './UxDesign.css'

const Ux = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <div>
        <Overview/>
        <UserResearch/>
        <DesignIterations/>
        <Feedback/>
        <SamplePics/>
    </div>
  )
}

export default Ux