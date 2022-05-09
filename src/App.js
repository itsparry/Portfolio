import React from 'react';
import './App.css';
// import TopNav from '../src/pages/Homepage/TopNav'
// import Header from '../src/pages/Homepage/Header'
// import About from '../src/pages/Homepage/About'
// import UxDesign from '../src/pages/Homepage/UxDesign'
// import DevPortfolio from '../src/pages/Homepage/DevPortfolio'
// import Tools from '../src/pages/Homepage/Tools'
// import Footer from '../src/pages/Homepage/Footer'
import Homepage from '../src/pages/Homepage/index'
import Ux from '../src/pages/Ux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopNav from './pages/Homepage/TopNav';
import Footer from './pages/Homepage/Footer';



function App() {
  return (
    <Router>
      <TopNav/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/naka-case-study' element={<Ux/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
