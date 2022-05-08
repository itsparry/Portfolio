import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Link, animateScroll } from 'react-scroll/modules';

const TopNav = () => {
  const navItems = [
    {title: 'Home', name: 'home'},
    {title: 'Hit me up!', name: 'contact'}
  ]
  const navigate =useNavigate()
  const location = useLocation();

  return (
    <div className='Nav'>
        <nav id='header-nav' style={{position:'fixed'}}>
            <ul className=''>
                {navItems.map((item, i) => (
                <li key={i} className=''>
                    <Link  onClick={() => { item.name === "home" && location.pathname === '/'? (animateScroll.scrollToTop()) : (navigate('/'))}} to={item.name} smooth={true} duration={1500}>
                    <span>{item.title}</span>
                    </Link>                
                </li>
                ))}
                <a href="" target="_blank" rel="noreferrer noopener">
                <li className=''>
                    <span>Resume</span>
                </li>
                </a>
            </ul>
        </nav>
    </div>
  )
}

export default TopNav
