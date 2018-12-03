import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import authenticated from "../../utils/Authenticated";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			authenticated: authenticated.isTrue,
			isAdmin: authenticated.isAdmin,
			username: authenticated.userName
		}
	  }

	handleLogOut = () => {
		this.setState(
			{
				authenticated: false,
				isAdmin: false,
				username: ''
			}
		)

		localStorage.clear("lifeCallingId");
		localStorage.clear("lifeCallingIsAdmin");
		localStorage.clear("lifeCallingToken");
		localStorage.clear("lifeCallingUsername");		
	}

	render() {

		return (
			<nav id="mainNavbar" className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-light">
				<NavLink id="navTitle" to={this.state.authenticated ? "/dashboard" : "/login"}><img id="navLogo" src="../../images/lifeCallingLogoRed.png" alt="" />LIFE CALLING</NavLink>

				<ul id="navDropdownMenu" className="navbar-nav ml-auto">
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							{this.state.username}</a>

						<div id="navDropdown" className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
							{this.state.username ? <NavLink className="dropdown-item" to="/dashboard" onClick={this.handleRoute}>Dashboard</NavLink> : null}

							{!this.state.authenticated ? <NavLink className="dropdown-item" to="/login">Login</NavLink> : null}

							{!this.state.authenticated ? <NavLink className="dropdown-item" to="/register">Register</NavLink> : null}
							
							{this.state.isAdmin === 'true' ? <NavLink className='dropdown-item' disabled={true} to='/allStudents'>Students</NavLink> : null}

							{this.state.authenticated ? <Link className="dropdown-item" to="/login" id="navLogoutLink" onClick={this.handleLogOut}>Logout</Link> : null}
						</div>
					</li>
				</ul>
			</nav>
		)
	}
}

export default withRouter(Navbar);