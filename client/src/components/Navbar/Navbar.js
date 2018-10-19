import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import authenticated from "../../utils/Authenticated";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			adminLink: false,
			username: ''
		}
	  }

	componentWillMount() {
		var isAdmin = localStorage.getItem('lifeCallingIsAdmin');
		var username = localStorage.getItem('lifeCallingUsername');
		if (isAdmin === "true") {
			this.setState(
				{
					adminLink: true
				}
			)
		}
		if (username) {
			this.setState({
				username
			})
		}
	}

	handleLogOut = () => {
		this.setState(
			{
				adminLink: false,
				username: ''
			}
		)

		localStorage.clear("lifeCallingToken");
		localStorage.clear("lifeCallingId");
		localStorage.clear("lifeCallingUsername");
		localStorage.clear("lifeCallingIsAdmin");
	}

	handleRoute = (e) => {
		e.preventDefault();
		authenticated.authenticate();
		if (authenticated.isTrue) {
			window.location.replace("/dashboard");
		}
		else {
			alert("You must be logged in to view your dashboard.");
		}
	}

	render() {

		return (
			<nav id="mainNavbar" className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-light">
				<NavLink id="navTitle" to="/dashboard" onClick={this.handleRoute}><img id="navLogo" src="../../images/lifeCallingLogoRed.png" alt="" />LIFE CALLING</NavLink>

				<ul id="navDropdownMenu" className="navbar-nav ml-auto">
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							{this.state.username}</a>

						<div id="navDropdown" className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
							<NavLink className="dropdown-item" to="/dashboard" onClick={this.handleRoute}>Dashboard</NavLink>

							<NavLink className="dropdown-item" to="/login">Login</NavLink>

							<NavLink className="dropdown-item" to="/register">Register</NavLink>
							
							{this.state.adminLink ? <NavLink className='dropdown-item' disabled={true} to='/allStudents'>Students</NavLink> : null}
							<Link className="dropdown-item" to="/login" id="navLogoutLink" onClick={this.handleLogOut}>Logout</Link>
						</div>
					</li>
				</ul>
			</nav>
		)
	}
}

export default Navbar;