import React, { Component } from 'react';
import authenticated from "../../utils/Authenticated";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			adminLink: false
		};
	  }

	componentWillMount() {
		var isAdmin = localStorage.getItem('lifeCallingIsAdmin');
		if (isAdmin === "true") {
			this.setState(
				{
					adminLink: true
				}
			)
		}
	}

	handleLogOut() {
		localStorage.clear("lifeCallingToken");
		localStorage.clear("lifeCallingId");
		localStorage.clear("lifeCallingUsername");
		localStorage.clear("lifeCallingIsAdmin");
	}

	handleRoute(e) {
		e.preventDefault();
		authenticated.authenticate();
		if (authenticated.isTrue) {
			window.location.replace("/dashboard");
		}
		else {
			alert("You must be logged in to view your dashboard.");
			window.location.replace("/login");
		}
	}

	render() {

		return (
			<div>
				<nav id="mainNavbar" className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-light">
					<a id="navTitle" href="/dashboard" onClick={this.handleRoute}><img id="navLogo" src="../../images/lifeCallingLogoRed.png" alt="" />LIFE CALLING</a>

					<ul id="navDropdownMenu" className="navbar-nav ml-auto">
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								{this.props.username}</a>

							<div id="navDropdown" className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="/dashboard" onClick={this.handleRoute}>Dashboard</a>

								<a className="dropdown-item" href="/login">Login</a>

								<a className="dropdown-item" href="/register">Register</a>
								
								{this.state.adminLink ? <a className='dropdown-item' disabled={true} href='/allStudents'>Students</a> : null}
								<a className="dropdown-item" href="/login" id="navLogoutLink" onClick={this.handleLogOut}>Logout</a>
							</div>
						</li>
					</ul>
				</nav>
			</div>
		)
	}
}

export default Navbar;