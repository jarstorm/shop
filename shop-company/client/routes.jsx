import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import MainPage from './MainPage.jsx';
import ProductView from './ProductView.jsx';
import CompanyView from './CompanyView.jsx';
import ShoppingCartView from './ShoppingCartView.jsx';

import LoginForm from './LoginForm.jsx';
import RegisterForm from './RegisterForm.jsx';

FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
			content: (<MainPage/>)
		})
	}
});

FlowRouter.route('/login', {
	action() {
		mount(MainLayout, {
			content: (<LoginForm />)
		})
	}
});

FlowRouter.route('/register', {
	action() {
		mount(MainLayout, {
			content: (<RegisterForm />)
		})
	}
});


FlowRouter.route('/product/:id', {
	action(params) {
		mount(MainLayout, {
			content: (<ProductView {...params}/>)
		})
	}
});

FlowRouter.route('/company/:id', {
	action(params) {
		mount(MainLayout, {
			content: (<CompanyView {...params}/>)
		})
	}
});

FlowRouter.route('/shopping-cart/:userId', {
	action(params) {
		mount(MainLayout, {
			content: (<ShoppingCartView {...params}/>)
		})
	}
});

FlowRouter.route('/login', {
	action() {
		mount(MainLayout, {
			content: (<Login/>)
		})
	}
});