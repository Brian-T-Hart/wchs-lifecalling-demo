import React, { Component } from 'react';
import API from "../../utils/API";
import "./PasswordReset.css";

class PasswordReset extends Component {

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleReset = event => {
		event.preventDefault();
		var password = this.state.password;
		var formValidated = true;

		if (password.length < 4 || password.length > 20) {
			alert("The password should be between 4 and 20 characters in length.")
			formValidated = false;
		}

		if (formValidated === true) {

			API.passwordReset(
				{
					id: localStorage.getItem('lifeCallingId'),
					email: this.state.email,
					password: this.state.password,
					adminPassword: this.state.adminPassword
				}
			)
			.then(
				res => {
					if (res.data === "You do not have admin privileges!" || res.data === "The admin password is incorrect") {
						alert(res.data);
					}
					else {
						this.props.history.push("/allStudents");
					}
				}
			)
			.catch(
				err => console.log(err)
			);
		}
	}

	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			adminPassword: ""
		}
	}

	render() {

		return (
			<div className="row container-fluid content-container loginContentRow">
				<div className="col-md-6 largeLogo">
					<img id="largeLogo" src="../../images/lc-logo.jpg" alt="" />
				</div>
				<div className="col-md-6">
					<form id="reset-form" >
						<h2 className="form-title">Reset Password</h2>

						<label htmlFor="email">Student Email *</label>

						<input type="email" name="email" id="email" tabIndex="1" placeholder="Student Email" value={this.state.email} onChange={this.handleInputChange} required></input>

						<label htmlFor="password">New Password *</label>

						<input type="text" name="password" id="new-password" tabIndex="2" placeholder="New Password" value={this.state.password} onChange={this.handleInputChange} required></input>

						<label htmlFor="adminPassword">Admin Password *</label>

						<input type="password" name="adminPassword" id="adminPassword" tabIndex="3" placeholder="Admin Password" value={this.state.adminPassword} onChange={this.handleInputChange} required></input>

						<button type="submit" name="reset-submit" id="reset-submit" tabIndex="4" className="form-control btn btn-primary btn-reset" value="Reset" onClick={this.handleReset}>Reset</button>
					</form>
				</div>
			</div>
		)

	}
}

export default PasswordReset;