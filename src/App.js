import React from 'react';
import './App.css';
import Homepage from '../src/pages/Homepage/index'
import Ux from '../src/pages/Ux'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import TopNav from './pages/Homepage/TopNav';
import Footer from './pages/Homepage/Footer';




function App() {

  return (
    <Router>
      <TopNav/>
      <Routes>
        
        <Route path='/' element={<Homepage/>} />
        <Route path='/naka-case-study' element={<Ux/>} />
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
