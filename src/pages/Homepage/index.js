import React from 'react'
import '../../style/everything.css'
import TopNav from '../Homepage/TopNav'
import Header from '../Homepage/Header'
import About from '../Homepage/About'
import UxDesign from '../Homepage/UxDesign'
import DevPortfolio from '../Homepage/DevPortfolio'
import Tools from '../Homepage/Tools'
import Footer from '../Homepage/Footer'

const Homepage = () => {
  return (
    <div>
        <Header/>
        <About/>
        <UxDesign/>
        <DevPortfolio/>
        <Tools />
    </div>
  )
}

export default Homepage