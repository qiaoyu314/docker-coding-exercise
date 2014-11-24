/** @jsx React.DOM */

var React = require('react');
var Product = require('./Product.jsx');

var data = [{name: 'iPhone 6', vendor: 'Apple', price: '649', rating: 4.5, category: 'eletronic', image: 'img/iphone.jpg' },
			{name: 'Nexus 6', vendor: 'Moto', price: '649', rating: 4.5, category: 'eletronic', image: 'img/nexus.jpg' },
			{name: 'Note 4', vendor: 'Samsung', price: '649', rating: 4.5, category: 'eletronic', image: 'img/note4.jpg' }];
var ProductList = React.createClass({
	render: function(){
		var Productrow = [];
		this.props.data.forEach(function(product){
			Productrow.push(<Product productName={product.name} vendor={product.vendor} productImage={product.image} rating={product.rating} category={product.category} />);
		});
		return (
			<table>
				{Productrow}
			</table>
		);
	}
});

React.render(<ProductList data={data} />, document.body);