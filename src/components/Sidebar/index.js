import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../img/logo.svg';
import './index.css';

const Sidebar = () => {
	return (
		<div className='App-sidebar'> 
			<div className="App-logo">
	        	<a className="App-header-title" href="/"><img src={logo} alt="Watchlist App"/></a>
	      	</div>
			<ul className='sidebar-menu'>
				<li className='sidebar-menu__item'>
					<NavLink exact={true} to='/' activeClassName='is-active'>Popular</NavLink>
				</li>
				<li className='sidebar-menu__item'>
					<NavLink exact={true} to='/top-rated' activeClassName='is-active'>Top Rated</NavLink>
				</li>
				<li className='sidebar-menu__item'>
					<NavLink exact={true} to='/coming-soon' activeClassName='is-active'>Coming Soon</NavLink>
				</li>
			</ul>
		</div>
	)
}

export default Sidebar;