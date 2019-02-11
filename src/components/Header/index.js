import React from 'react';
import SearchBar from '../../components/SearchBar';
import logo from '../../img/logo.svg';
import './index.css';

const Header = () => {
  return (
    <div className="App-header">
      <div className="App-logo">
        <a className="App-header-title" href="/"><img src={logo} alt="Watchlist App"/></a>
      </div>
      <SearchBar />
    </div>
  );
}

export default Header;