import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { createContainer } from 'meteor/react-meteor-data';
import {Product} from '../imports/api/product.js';
import Rating from './Rating.jsx';
import {Company} from '../imports/api/company.js';

export class ProductView extends TrackerReact(React.Component) {	

	componentWillMount() {
		console.log("entra a crear");
		this.state = {
			subscription: {
				product: Meteor.subscribe('productById', this.props.id),
				company: Meteor.subscribe('companyById', this.props.product ? this.props.product.companyId : "")
			}
		}
	}

	componentWillUnmount() {
	   this.state.subscription.product.stop();
	   this.state.subscription.company.stop();
	}

	addItem() {
		console.log("Added", this.props.product);
		Meteor.call("addProduct", Meteor.userId(), this.props.product._id);
	}

	render() {
		console.log("Producto", this.props.product);
		let opts = {};
        if (Meteor.user() === null) {
            opts['disabled'] = 'disabled';
        }

		if (this.props.product && this.props.company) {
		return (			
			<div>
				<h1>{this.props.product.title}</h1>
				<p>{this.props.product.description}</p>
				<Rating value={this.props.company.rating} />
				<p>{this.props.company.name}</p>
				<span>{this.props.product.price}€</span>
				<Rating value={this.props.product.rating} />
				<img src={this.props.product.thumbnail} />
				<button {...opts} onClick={this.addItem.bind(this)}>Comprar</button>
				<button>Añadir a lista de deseos</button>
				<h1>Comentarios</h1>
				
				{this.props.product.comments.map( (comment) => {
					return (
							<p>{comment}</p>
						)
					
					}
					)}
			</div>
		)
	} else {
		return (<p>Loading</p>)
	}
	}
}

export default createContainer(() => {		
  return {  	
    product: Product.findOne(),
    company: Company.findOne()
  };
}, ProductView);