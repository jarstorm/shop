import React from 'react';

import {Company} from '../imports/api/company.js';
import { createContainer } from 'meteor/react-meteor-data';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export class ResolutionsWrapper extends TrackerReact(React.Component) {

	constructor() {
		super();
		this.state = {
			subscription: {
				companies:  Meteor.subscribe('allCompanies')
			}
		}
	}

	componentWillUnmount() {
		this.state.subscription.companies.stop();
	}

	render() {				
		return (
			<div>
				<h1>Listado de empresas</h1>				
				
				
				<ul className="product">
					{this.props.companies.map( (company) => {
						return <a href={"/company/"+company._id}>{company.name}</a>
					})}	
				</ul>
			</div>
		)
	}
}


export default createContainer(() => {
  return {
    companies: Company.find({}).fetch(),
  };
}, ResolutionsWrapper);
