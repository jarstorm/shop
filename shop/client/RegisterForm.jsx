import React, {Component} from 'react';
import ReactDOM from 'react-dom';


export default class RegisterForm extends Component {

	submit(event) {	
        event.preventDefault();
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
        Accounts.createUser({
            email: emailVar,
            password: passwordVar,
            profile: {
	            type: 'customer'
	        }
        }, function() {
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
									<label htmlFor="registerEmail" className="col-sm-2 control-label">Email</label>
									<div className="col-sm-8">
										<input type="email" className="form-control" id="registerEmail" name="registerEmail" placeholder="Email" />
									</div>
								</div>
								<div className="form-group">
									<label htmlFor="registerPassword" className="col-sm-2 control-label">Password</label>
									<div className="col-sm-8">
										<input type="password" className="form-control" id="registerPassword" name="registerPassword" placeholder="Password" />
									</div>
								</div>
								<div className="form-group">
									<div className="col-sm-offset-2 col-sm-8">
										<button type="submit" className="btn btn-default">Register</button>
									</div>
								</div>
							</form>
							<a href="/login">Login</a>
							</div>	
					</div> 
				</div>				
			)
		
	}
}