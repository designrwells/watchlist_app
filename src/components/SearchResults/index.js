import React from 'react';
import List from '../../components/List';

const SearchResults = ({match, location}) => {
	const {result} = location.state;

	return (
		<div>
			<h1 className="App-main-title">Search results</h1>
		      { result ?
		    	<div>
		       		<p>There are <b>{result.total_results}</b> results for: "{match.params.searchTerm}".</p>
		       		 <List list={result.results} />
		    	</div>
		    	:
		    	<div>
		    		<p>
		    			There are no results for the movie you entered.
		    		</p>
		    	</div>
		      }
		</div>
	);
}

export default SearchResults;