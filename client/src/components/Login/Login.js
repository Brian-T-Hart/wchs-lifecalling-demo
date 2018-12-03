import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import API from "../../utils/API";
import decode from 'jwt-decode';
import "./Login.css";

class Login extends Component {

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleLogin = event => {
		event.preventDefault();
		API.loginAccount(
			{
				username: this.state.userName,
				password: this.state.password
			}
		)
		.then(
			res => {
				if (res.data.token) {
					// decode token and set local storage
					const decoded = decode(res.data.token);
					var sub = decoded.sub;
					localStorage.setItem('lifeCallingId', sub);
					localStorage.setItem('lifeCallingToken', res.data.token);
					localStorage.setItem('lifeCallingUsername', res.data.username);
					localStorage.setItem('lifeCallingIsAdmin', res.data.isAdmin);
					window.location = '/dashboard';
				}
				else {
					alert('There was a problem signing in. Please make sure your username and password are correct and then try again.');
				}
			}
		)
		.catch(
			err => {
				alert('There was a problem signing in. Please make sure your username and password are correct and then try again.');
				console.log(err);
			}
		);
	}

	constructor(props) {
		super(props);
		this.state = {
			userName: "",
			username: "",
			email: "",
			password: ""
		}
	}

	render() {
		return (
			<div className="row container-fluid loginContentRow">
				<div className="col-md-6 largeLogo">
					<img id="largeLogo" src="../../images/lc-logo.jpg" alt="" />
				</div>
				
				<div className="col-md-6">
					<form id="login-form" >
						<h2 id="formTitle"> Sign-In </h2>

						<input type="text" name="userName" id="username" tabIndex="1" placeholder="Username *" value={this.state.userName} onChange={this.handleInputChange} autoComplete="username" required></input>

						<input type="password" name="password" id="password" tabIndex="2" placeholder="Password *" value={this.state.password} onChange={this.handleInputChange} autoComplete="current-password" required></input>

						<button type="submit" name="login-submit" id="login-submit" tabIndex="3" className="form-control btn btn-primary btn-login" value="Log In" onClick={this.handleLogin}>Log In</button>

						<div id="registerLink" className="row">
							<NavLink to="/register" >Register</NavLink>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default Login;