import React from 'react'

import TopNav from '../Homepage/TopNav'
import Header from '../Homepage/Header'
import About from '../Homepage/About'
import UxDesign from '../Homepage/UxDesign'
import DevPortfolio from '../Homepage/DevPortfolio'
import Tools from '../Homepage/Tools'
import Footer from '../Homepage/Footer'
import './homepageStyle.css'

const Homepage = () => {
  return (
    <div >
        <TopNav/>
        <Header/>
        <About/>
        <UxDesign/>
        <DevPortfolio/>
        <Tools />
        <Footer />
    </div>
  )
}

export default Homepage