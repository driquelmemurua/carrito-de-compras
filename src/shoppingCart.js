import React from 'react';

class ShoppingCart extends React.Component {
	constructor(props) {
		super(props)

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.toggleCheckout();
	}

	render() {
		return (
			<div onClick={this.handleClick}>
				Carro ({this.props.cartItems.length})
			</div>
		);
	}
}

export default ShoppingCart;