import React from 'react';

import {Product} from '../imports/api/product.js';
import ProductDetail from './ProductDetail';
import { createContainer } from 'meteor/react-meteor-data';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export class ResolutionsWrapper extends TrackerReact(React.Component) {

	constructor() {
		super();
		this.state = {
			subscription: {
				resolutions:  Meteor.subscribe('allProducts')
			}
		}
	}

	componentWillUnmount() {
		this.state.subscription.resolutions.stop();
	}

	search(event) {
		event.preventDefault();
		var text = this.refs.product.value.trim();
		this.state.subscription.resolutions.stop();
		if (text) {
			console.log(text);
		

			this.state = {
				subscription: {
					resolutions:  Meteor.subscribe('searchProducts', text)
				}
			};
		} else {
			this.state = {
				subscription: {
					resolutions:  Meteor.subscribe('allProducts')
				}
			};
		}			
	}

	render() {				
		return (
			<div>
				<h1>Listado de empresas</h1>				

				<form className="form-horizontal" onSubmit={this.search.bind(this)}>
					<div className="form-group">						
						<div className="row">							
							<input type="text" ref="product" placeholder="Buscar producto" className="form-control" name="product" onBlur={this.search.bind(this)}/>				
						</div>
					</div>

					
				</form>

				
				
				<ul className="product">
					{this.props.product.map( (product) => {
						return <ProductDetail key={product._id} product={product}/>	
					})}	
				</ul>
			</div>
		)
	}
}


export default createContainer(() => {
  return {
    product: Product.find({}).fetch(),
  };
}, ResolutionsWrapper);
