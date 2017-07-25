import React from 'react';
import Category from './category';

class Categories extends React.Component {
	constructor(props) {
		super(props)

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.onCategoryChange(event.target.value)
	}

	render() {
		const categories = this.props.categories.map((category)=>{
			return (
				<Category 
					key={category.key}
					name={category.name} 
				/>
			);
		});

		return (
			<select 
				value={this.props.category}
				onChange={this.handleChange}
			>
				{categories}
			</select>
		);
	}
}

export default Categories;