import React from 'react';
import CartItem from './cartItem'

class ShoppingList extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.toggleCheckout();
	}

	render() {
		let totalPrice = 0;
		const cartItems = this.props.cartItems.map((cartItem)=>{
			totalPrice += cartItem.item.price * cartItem.quantity;
			return (
				<CartItem 
					key={cartItem.item.key}
					cartItem={cartItem}
					changeCartItemQuantity={this.props.changeCartItemQuantity}
					removeCartItem={this.props.removeCartItem}
				/>
			);
		})
		return (
			<container>
				<div>
					{cartItems}
				</div>
				<div>
					Precio total: {totalPrice+'$'}
				</div>
				<a onClick={this.handleClick}> 
					Volver a tienda
				</a>
			</container>
		);
	}
}

export default ShoppingList;