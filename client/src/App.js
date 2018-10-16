import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import AllStudents from "./components/AllStudents/AllStudents.js";

class App extends Component {
	render() {

	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/" component={Login} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/allStudents" component={AllStudents} />
				</Switch>
			</div>
		</Router>
	)}
}

export default App;