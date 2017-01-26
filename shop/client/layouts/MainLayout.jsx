import React from 'react';
import AccountsUI from '../AccountsUI.jsx';
import ShoppingCartLink from '../ShoppingCartLink.jsx';

export const MainLayout = ({content}) => { if (Meteor.user() !== null) { return (
	<div className="main-layout">

		<nav className="navbar navbar-light bg-faded">
  			<a className="navbar-brand" href="/">Productos</a>
  			<ul className="nav navbar-nav pull-right">
    			<li className="nav-item active">
      				<a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
			    </li>
			    <li className="nav-item">
			      <ShoppingCartLink />
			    </li>
			    <li className="nav-item">
			    	<a href="#" className="nav-link" 
			    	onClick={Meteor.logout(function() {FlowRouter.redirect('/not_found');})}>
			    	Logout <span className="sr-only">(current)</span></a>									
			    </li>
			</ul>
		</nav>

		<main>	
			<div className="container">		
				{content}
			</div>
		</main>
	

		<div className="navbar">
			<footer>
				<div className="main-footer">
					<hr />
					<p>footer</p>
				</div>
			</footer>
		</div>

	</div>
) } else {
	return(
		<div className="main-layout">

		<nav className="navbar navbar-light bg-faded">
  			<a className="navbar-brand" href="/">Productos</a>
  			<ul className="nav navbar-nav pull-right">
  				<li className="nav-item active">
      				<a className="nav-link" href={Meteor.settings.public.company_url}>Are you a company?</a>
    			</li>
    			<li className="nav-item active">
      				<a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
    			</li>
    
    			<li className="nav-item">
					<a href="/login" className="nav-link">Login <span className="sr-only">(current)</span></a>	
    			</li>
  			</ul>
		</nav>
	
		<main>	
			<div className="container">		
				{content}
			</div>
		</main>
	
		<div className="navbar">
			<footer>
				<div className="main-footer">
					<hr />
					<p>footer</p>
				</div>
			</footer>
		</div>

	</div>
	)	
}
}

