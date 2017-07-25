import React from 'react';

class Item extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		event.preventDefault();

		this.props.addCartItem(this.props.item);
	}

	render() {
		return (
			<div>
				{this.props.item.name+' '}
				{this.props.item.price+'$'}
				<a onClick={this.handleClick}>(+)</a>
			</div>
		);
	}
}

export default Item;