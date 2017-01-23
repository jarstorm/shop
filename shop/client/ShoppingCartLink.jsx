import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {ShoppingCart} from '../imports/api/shopping-cart.js';

export class ShoppingCartLink extends TrackerReact(React.Component) {

	constructor() {
		super();
		this.state = {
			subscription: {
				resolutions:  Meteor.subscribe('shoppingCart', Meteor.userId())
			}
		}
	}

	render() {
		let counter = 0;
		if (this.props.cart) {
			counter = this.props.cart.products.length;
		}
		
		return (
			<a href={"/shopping-cart/"+Meteor.userId()} className="nav-link"><span className="badge">{counter}</span><span className="glyphicon glyphicon-shopping-cart"></span></a>
		)
	}
}

export default createContainer(() => {
  return {
    cart: ShoppingCart.findOne(),
  };
}, ShoppingCartLink);
