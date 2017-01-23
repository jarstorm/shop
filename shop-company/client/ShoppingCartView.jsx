import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { createContainer } from 'meteor/react-meteor-data';
import {ShoppingCart} from '../imports/api/shopping-cart.js';

export class ShoppingCartView extends TrackerReact(React.Component) {	

	componentWillMount() {
		console.log("entra a crear");
		this.state = {
			subscription: {
				resolutions:  Meteor.subscribe('shoppingCart', this.props.id)
			}
		}
	}

	componentWillUnmount() {
	   this.state.subscription.resolutions.stop();
	}

	proceed() {
		console.log("Comprado", this.props.product);
		Meteor.call("proceed", Meteor.userId());
	}

	render() {
		console.log("Producto", this.props.products);
		if (this.props.product) {
		let price = 0;
		return (			
			<div>
				<p>Revisar pedido</p>
				<div className="col-md-8">
				{this.props.product.products.map( (product) => {
					price += product.price;
					return (
							<div key={product.productId}>
								<p>{product.title} - <span>{product.price}€</span></p>
								
								
							</div>
						)
					
					}
					)}	
				</div>
				<div className="col-md-4">
					<p><b>Total: {price} </b></p>
				<button onClick={this.proceed.bind(this)}>Comprar</button>
				</div>
			</div>			
		)
	} else {
		return (<p>Loading</p>)
	}
	}
}

export default createContainer(() => {		
  return {  	
    product: ShoppingCart.findOne(),
  };
}, ShoppingCartView);