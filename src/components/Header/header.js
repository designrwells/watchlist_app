import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';

const Header = () => {
  return (
    <div className='App-header'>
      <div className='App-logo'>
        <a className='App-header-title' href='/'><img src={logo} alt='Watchlist App' /></a>
      </div>
    </div>
    )
}

export default Header;
