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
		if (Meteor.user()) {
			return(
				<div>
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
					<h1>Listado de empresas</h1>				
					
					<p>Aqui se puede manejar la info de la tienda</p>				
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
