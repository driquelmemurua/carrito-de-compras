import React from 'react';
import SearchBar from './searchBar'
import Categories from './categories'

class SearchFilter extends React.Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();

		const keywords = this.props.filterText.split(" ");
		this.props.onSearch(keywords, this.props.category);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<Categories 
					category={this.props.category}
					categories={this.props.categories} 
					onCategoryChange={this.props.onCategoryChange}
				/>
				<SearchBar 
					filterText={this.props.filterText}
					onSearchBarChange={this.props.onSearchBarChange}
				/>
				<input 
					type='submit'
					value='Buscar'
				/>
			</form>
		);
	}
}

export default SearchFilter;