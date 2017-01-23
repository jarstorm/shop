import React, {Component} from 'react';
import ReactDOM from 'react-dom';


export default class Login extends Component {



	logout() {
		Meteor.logout(function() {
			FlowRouter.redirect('/');
		});		
	}

	render() {
		if (Meteor.user() !== null) {
			return (				
				<a href="#" className="nav-link" onClick={this.logout.bind(this)}>Logout <span className="sr-only">(current)</span></a>									
			)
		} else {
			return (
				<a href="/login" className="nav-link">Login <span className="sr-only">(current)</span></a>								
			)
		}
	}
}