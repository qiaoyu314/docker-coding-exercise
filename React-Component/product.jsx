/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
	render: function(){
		return (
			<tr>
				<td className="product-image">
					<img src={this.props.productImage} />
				</td>
				<td className="product-info">
					<div className="product-info-left">
						<div className="product-name">{this.props.productName}</div>
						<div className="proudct-vendor">{this.props.vendor}</div>
						<div className="product-price">{this.props.price}</div>
					</div>
					<div className="product-info-right">
						<div className="product-rating">Rating: {this.props.rating}</div>
						<div className="proudct-category">{this.props.category}</div>
					</div>
				</td>
			</tr>
		)
	}
});