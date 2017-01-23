import React from 'react';
import Rating from './Rating.jsx';

export default class ProductDetail extends React.Component {

	render() {		
		return (			
			<div className="col-md-4">
				<div className="product-detail">					
				<a href={"/product/"+this.props.product._id}>
					<div>
					<img width="200" height="200" src={this.props.product.thumbnail} />
					<div className="row">
						<span>{this.props.product.title}</span><Rating value={this.props.product.rating} />
					</div>
					</div>
				</a>
				<div className="row">
					<a href={"/company/"+this.props.product.companyId}>{this.props.product.companyName}<Rating value="1" /></a>
				</div>
				<br/><span className="price">{this.props.product.price}€</span>									
				</div>
			</div>
		)
	}
}
