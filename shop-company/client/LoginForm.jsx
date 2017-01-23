import React, {Component} from 'react';
import ReactDOM from 'react-dom';


export default class LoginForm extends Component {


	submit(event) {	 
		event.preventDefault();
		var emailVar = event.target.loginEmail.value;
		var passwordVar = event.target.loginPassword.value;
		Meteor.loginWithPassword(emailVar, passwordVar, function() {
			FlowRouter.redirect('/');
		});    
	}

	render() {
		
		return (
			<div className="container">
				<div className=" col-sm-12">
					<div className="panel panel-default">
						<form className="form-horizontal" onSubmit={this.submit.bind(this)}>
							<div className="form-group">
								<label htmlFor="loginEmail" className="col-sm-2 control-label">Email</label>
								<div className="col-sm-8">
									<input type="email" className="form-control" id="loginEmail" name="loginEmail" placeholder="Email" />
								</div>
							</div>
							<div className="form-group">
								<label htmlFor="loginPassword" className="col-sm-2 control-label">Password</label>
								<div className="col-sm-8">
									<input type="password" className="form-control" id="loginPassword" name="loginPassword" placeholder="Password" />
								</div>
							</div>
							<div className="form-group">
								<div className="col-sm-offset-2 col-sm-8">
									<button type="submit" className="btn btn-default">Login</button>
								</div>
							</div>
						</form>
						<a href="/register">Register</a>
						</div>	
				</div> 
			</div>
		)
		
	}
}