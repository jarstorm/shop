import React from 'react';

import {Company} from '../imports/api/company.js';
import { createContainer } from 'meteor/react-meteor-data';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import MainPublicPage from './MainPublicPage.jsx';

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
		if (Meteor.user()) {
			return(
				<div>
					<div className="btn-group" role="group" aria-label="...">
					  <button type="button" className="btn btn-default">Left</button>
					  <button type="button" className="btn btn-default">Middle</button>
					  <button type="button" className="btn btn-default">Right</button>
					</div>
					<p>Esto es un usuario. Añadir producto</p>				
					<ul>
						<li>Pedidos en curso</li>
						<li>Tareas pendientes</li>
						<li>Gestionar info</li>
						<li>Ver y gestionar productos</li>
						<li>Ver facturas y cobros pendientes</li>
					</ul>
				</div>
			)
		} else {	
			return (
				<div>
					<MainPublicPage />				
				</div>
			)
		}
	}
}


export default createContainer(() => {
  return {
    companies: Company.find({}).fetch(),
  };
}, ResolutionsWrapper);
