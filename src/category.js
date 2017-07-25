import React from 'react';

class Category extends React.Component {
	render() {
		return (
			<option>
				{this.props.name}
			</option>
		);
	}
}

export default Category;