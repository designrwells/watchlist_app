import React, {Component} from 'react';
import { API_KEY, PATH_BASE, PATH_MOVIE, PATH_SEARCH, DEFAULT_PAGE, PATH_PAGE } from '../../api';
import './index.css';

class SearchResults extends Component {

	constructor(props) {
    super(props);

    this.state = {

    };

  }

    componentDidMount = () => {
    this.getMovies(this.props.section, DEFAULT_PAGE)
  }

  render () {

    const { movies } = this.state;
    const { page } = movies;
    const searchTerm = this.props.match.params.searchTerm;

    return (
    	<div>
    		<h1 className="App-main-title">Search results</h1>
        		{ movies.results &&
        	<div>
          <p>There are <b>{movies.total_results}</b> results for: "{searchTerm}".</p>
          <List list={movies.results} />
        </div>
        }
        <Button
          className="button"
          onClick={() => this.getSearchMovies(searchTerm, page + 1)}
          text="Load more"
         />
    	</div>
    	);
   }
}
export default SearchResults;