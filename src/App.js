import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Movie from './components/Movie';
import {PATH_POPULAR, PATH_TOP_RATED, PATH_UPCOMING } from './api'
import SearchResults from './components/SearchResults';
import './App.css';

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
	      	<div className='App'>
	        	<div className='App-main'>
		        	<div className='App-sidebar-wrapper'>
		        		<Sidebar />
		        	</div>
		        	<div className='App-content-wrapper'>
		        		<Header />
		        		<Route exact path='/' render={()=><Main title='Popular' section={PATH_POPULAR}/>}/>
		        		<Route exact path='/top-rated' render={()=><Main title='Top Rated' section={PATH_TOP_RATED}/>}/>
		        		<Route exact path='/coming-soon' render={()=><Main title='Coming Soon' section={PATH_UPCOMING}/>}/>
		        		<Route path='/search' component={SearchResults}/>
		        	</div>
		        	<div className='App-preview-wrapper'>
		        		<Route path='/movie/:id-:title' component={Movie}/>
		        	</div>
		        </div>
	      	</div>
	    </BrowserRouter>
    );
  }
}

export default App;