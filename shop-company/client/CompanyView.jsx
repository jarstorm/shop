import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { createContainer } from 'meteor/react-meteor-data';
import {Company} from '../imports/api/company.js';
import CustomMap from './CustomMap.jsx';
import {Product} from '../imports/api/product.js';
import ProductDetail from './ProductDetail.jsx';

export class CompanyView extends TrackerReact(React.Component) {	

	componentWillMount() {
		console.log("entra a crear");
		this.state = {
			subscription: {
				company:  Meteor.subscribe('companyById', this.props.id),
				products:  Meteor.subscribe('productsByCompany', this.props.id)
			}
		}
	}

	componentWillUnmount() {
	   this.state.subscription.company.stop();
	   this.state.subscription.products.stop();
	}

	render() {
		console.log("Producto", this.props.product);
		let opts = {};
        if (Meteor.user() === null) {
            opts['disabled'] = 'disabled';
        }

		if (this.props.company) {
		return (			
			<div>				
				<h1>{this.props.company.name}</h1>
				<p>{this.props.company.description}</p>
				<CustomMap />
				<p>List of producst for this company</p>
				<ul className="product">
					{this.props.products.map( (product) => {
						return <ProductDetail key={product._id} product={product}/>	
					})}	
				</ul>
			</div>
		)
	} else {
		return (<p>Loading</p>)
	}
	}
}

export default createContainer(() => {		
  return {  	
    company: Company.findOne(),
    products: Product.find()
  };
}, CompanyView);