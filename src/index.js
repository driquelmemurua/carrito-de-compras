import React from 'react';
import ReactDOM from 'react-dom';
import SearchFilter from './searchFilter'
import ItemsTable from './itemsTable'
import ShoppingCart from './shoppingCart'
import ShoppingList from './shoppingList'

var DEFAULT_CATEGORY = {key:'default', name: 'Cualquier categoría'}

var ITEMS = [
				{
					key:0,
					name:'Cerco eléctrico',
					category:'Cercos',
					price: 40000
				},
				{
					key:1,
					name:'Cámara de seguridad',
					category:'Camaras',
					price: 20000
				},
				{
					key:2,
					name:'Cerco con puas',
					category:'Cercos',
					price: 30000
				},
				{
					key:3,
					name:'Kit seguridad',
					category:'Kits',
					price: 150000
				},
				{
					key:4,
					name:'Alarma de incendio',
					category:'Alarmas',
					price: 25000
				},
			]

var CATEGORIES = [
					{
						key:1,
						name:'Kits',
					},
					{
						key:2,
						name:'Camaras',
					},
					{
						key:3,
						name:'Cercos',
					},
					{
						key:4,
						name:'Alarmas',
					},
				]

function fetchCategories() {
	const fetchedCategories = CATEGORIES;
	const defaultCategory = [DEFAULT_CATEGORY];
	const categories = defaultCategory.concat(fetchedCategories);
	return categories;
}

function fetchItems(keywords, category) {
	const fetchedItems = ITEMS;
	let filteredItems = [];

	fetchedItems.forEach((item) => {
		if(
			category === DEFAULT_CATEGORY.name 
			|| item.category === category
		) {
			let found = false;
			keywords.forEach((keyword) => {
				if (item.name.search(keyword) > -1) {
					found = true;
				}
			});
			if(found) {
				filteredItems.push(item);
			}
		}
	});

	return filteredItems;
}

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			filterText: '',
			category:   '',
			categories: [],
			items:      [],
			cartItems:  [],
			checkout: false
		};

		this.addCartItem = this.addCartItem.bind(this);
		this.changeCartItemQuantity = this.changeCartItemQuantity.bind(this);
		this.onCategoryChange = this.onCategoryChange.bind(this);
		this.onSearchBarChange = this.onSearchBarChange.bind(this);
		this.onSearch = this.onSearch.bind(this);
		this.removeCartItem = this.removeCartItem.bind(this);
		this.toggleCheckout = this.toggleCheckout.bind(this);
	}

	componentDidMount() {
		const items = fetchItems([''], DEFAULT_CATEGORY.name);
		const categories = fetchCategories();
		const category = DEFAULT_CATEGORY.name;
		this.setState({category, categories, items});
	}

	addCartItem(item) {
		let cartItems = this.state.cartItems;
		const index = cartItems.findIndex(x => x.item.key===item.key);

		if(index < 0) {
			const newCartItem = {item: item, quantity: 1};
			cartItems.push(newCartItem);
		} else {
			cartItems[index].quantity++;
		}

		this.setState({cartItems});
	}

	changeCartItemQuantity(key, quantity) {
		let cartItems = this.state.cartItems;
		const index = cartItems.findIndex(x => x.item.key===key);

		if (index > -1) {
			cartItems[index].quantity = quantity;
			this.setState({cartItems});
		}
	}

	onCategoryChange(category) {
		this.setState({category});
	}

	onSearchBarChange(filterText) {
		this.setState({filterText});
	}

	onSearch(keywords, category) {
		const items = fetchItems(keywords, category);
		this.setState({items});
	}

	removeCartItem(key) {
		let cartItems = this.state.cartItems;
		const index = cartItems.findIndex(x => x.item.key===key);

		if (index > -1) {
			cartItems.splice(index, 1);
			this.setState({cartItems});
		}
	}

	toggleCheckout() {
		this.setState(prevState => ({
			checkout: !prevState.checkout
		}));
	}

	render() {
		if(!this.state.checkout) {
			return (
				<div>
					<SearchFilter
						filterText={this.state.filterText}
						category={this.state.category}
						categories={this.state.categories}
						onSearchBarChange={this.onSearchBarChange}
						onCategoryChange={this.onCategoryChange}
						onSearch={this.onSearch}
					/>
					<ItemsTable
						items={this.state.items}
						addCartItem={this.addCartItem}
					/>
					<ShoppingCart 
						cartItems={this.state.cartItems}
						toggleCheckout={this.toggleCheckout}
					/>
				</div>
			);
		} else {
			return (
				<div>
					<ShoppingList
						cartItems = {this.state.cartItems}
						changeCartItemQuantity = {this.changeCartItemQuantity}
						removeCartItem = {this.removeCartItem}
						toggleCheckout = {this.toggleCheckout}
					/>
				</div>
			);
		}
	}
}

ReactDOM.render ( 
	<App />, 
	document.getElementById('root')
);