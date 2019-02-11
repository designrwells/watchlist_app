import React from 'react';
import logo from '../../img/logo.svg';
import './index.css';

const Header = () => {
  return (
    <div className="App-header">
      <div className="App-logo">
        <a className="App-header-title" href="/"><img src={logo} alt="Watchlist App"/></a>
      </div>
    </div>
  );
}

export default Header;