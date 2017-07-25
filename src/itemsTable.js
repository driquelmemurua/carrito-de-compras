import React from 'react';
import Item from './item';

class ItemsTable extends React.Component {
	render() {
		const items = this.props.items.map((item)=>{
			return (
				<Item
					key={item.key}
					item={item}
					addCartItem={this.props.addCartItem}
				/>
			);
		});

		return (
			<container>
				{items}
			</container>
		);
	}
}

export default ItemsTable;