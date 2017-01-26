import React from 'react';

import {Company} from '../imports/api/company.js';
import { createContainer } from 'meteor/react-meteor-data';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export class MainPublicPage extends TrackerReact(React.Component) {

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
		
		return(
			<div>
				<p>Pues esta es la parte publica</p>
			</div>
		)		
	}
}


export default createContainer(() => {
  return {
    companies: Company.find({}).fetch(),
  };
}, MainPublicPage);
