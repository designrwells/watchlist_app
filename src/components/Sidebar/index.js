import React from 'react';

import './index.css';

const Sidebar = () => {
	return (
		<div className='App-sidebar'> 
			<ul className='sidebar-menu'>
				<li>
					<a href='/' className='is-active'>Popular</a>
				</li>
				<li className='sidebar-menu__item'>
					<a href='/top-rated'>Top Rated</a>
				</li>
				<li>
					<a href='/coming-soon'>Coming Soon</a>
				</li>
			</ul>
		</div>
	)
}

export default Sidebar;