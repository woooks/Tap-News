//Logic Part

import React from 'react';
import LoginForm from './LoginForm';
import Auth from '../Auth/Auth';

class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: {},
			user: {
				email: '',
				password: ''
			}
		};
		this.processForm = this.processForm.bind(this);
		this.changeForm = this.changeForm.bind(this);
		console.log(this.props);
	}

	processForm(event) {
		event.preventDefault();
		const email = this.state.user.email;
		const password = this.state.user.password;

		console.log('email: ' + email);
		console.log('password: ' + password);

		// post login data to server and handle response
		fetch('http://localhost:3000/auth/login', { //http://localhost:3000
			method: 'POST',
			cache: 'no-cache',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: this.state.user.email,
				password: this.state.user.password
			})
		})
		.then(response => {
			if(response.status === 200){
				this.setState({
					errors: {}
				})
				response.json().then(function(json) {
								console.log('successfully login!!');
	          		console.log(json);
	          		Auth.authenticateUser(json.token, email);
	          		this.props.history.replace('/'); //go back to index page from login page
				}.bind(this));
			}else{
				console.log('Login failed!');
				response.json().then(function(json) {
					const errors = json.errors ? json.errors : {};
					errors.summary = json.message;
					this.setState({errors});
				}.bind(this));
			}
		})
	}

	changeForm(event) {
		const field = event.target.name;
		const user = this.state.user;
		user[field] = event.target.value;

		this.setState({
			user
		});
	}

	render() {
		return (
			<LoginForm
				onSubmit={this.processForm}
				onChange={this.changeForm}
				errors={this.state.errors}
			/>
		);
	}
}

export default LoginPage;
