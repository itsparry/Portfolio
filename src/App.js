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
import Ux from './pages/Ux/Overview'
import UserResearch from './pages/Ux/UserResearch';



function App() {
  return (
    <div className="App">
      {/* <Homepage/> */}
      <Ux/>
      <UserResearch/>
    </div>
  );
}

export default App;
