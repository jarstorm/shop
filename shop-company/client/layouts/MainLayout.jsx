import React from 'react';
import AccountsUI from '../AccountsUI.jsx';
import Login from '../Login.jsx';
import ShoppingCartLink from '../ShoppingCartLink.jsx';

export const MainLayout = ({content}) => (
	<div className="main-layout">
			

		<nav className="navbar navbar-light bg-faded">
  <a className="navbar-brand" href="/">Empresas</a>
  <ul className="nav navbar-nav pull-right">
    <li className="nav-item active">
      <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
    </li>
    <li className="nav-item">
      <ShoppingCartLink />
    </li>
    <li className="nav-item">

      <Login />

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

