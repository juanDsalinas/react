import React from 'react';
import SearchBar from './SearchBar';
import logo from '../assets/react.svg';
import '../styles/header.css';

function Header() {
  return (
    <header className='nav-bar'>
            <img src={logo} alt="Logo" className='Logo'/>
            <div className="nav-bar__content">
                <ul>
                    <li><a href="#">StartUp</a></li>
                    <li><a href="#">Explore</a></li>
                    <li><a href="#">Design</a></li>
                    <li><a href="#">Live</a></li>
                    <li><a href="#">How..</a></li>
                    <li><a href="#">About us</a></li>
                </ul>
            </div>
            <SearchBar place={"Search..."}/>
            <div className='Hamburger'></div>
    </header>
  )
}

export default Header;