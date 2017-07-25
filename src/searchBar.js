import React from 'react';

class SearchBar extends React.Component {
	constructor(props) {
		super(props)
		
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.onSearchBarChange(event.target.value);
	}

	render() {
		return (
			<input 
				value={this.props.filterText}
				onChange={this.handleChange}
			/>
		);
	}
}

export default SearchBar;