import React from 'react';

class CartItem extends React.Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(event) {
		this.props.changeCartItemQuantity(this.props.cartItem.item.key, event.target.value);
	}

	handleClick(event) {
		this.props.removeCartItem(this.props.cartItem.item.key);
	}

	render() {
		return (
			<div>
				<span>
					{this.props.cartItem.item.name+' '} 
				</span>
				<span>
					Precio c/u: {this.props.cartItem.item.price+'$ '}
				</span>
				<span>
					Cantidad: 
					<input
						min='1'
						onChange={this.handleChange} 
						type='number'
						value={this.props.cartItem.quantity}
					/>
				</span>
				<span onClick={this.handleClick}>
					X
				</span>
			</div>
		);
	}
}

export default CartItem;