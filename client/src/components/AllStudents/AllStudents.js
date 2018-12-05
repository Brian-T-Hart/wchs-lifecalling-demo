import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from "../../utils/API";
import "./AllStudents.css";

class AllStudents extends Component {

	constructor(props) {
		super(props);
		this.state = {
			allStudents: []
	}
}

	componentWillMount() {

		API.getAllStudents({
			id: localStorage.getItem("lifeCallingId"),
			username: localStorage.getItem("lifeCallingUsername")
		})
		.then(res => {
			var students = res.data;
			var data = [];
			for (var i = 0; i < students.length; i++) {
				data[i] = students[i]
			}
			this.setState({allStudents: data});
		})
		.catch(err => {
			console.log(err);
		})
	}

	render() {

		const allTheStudents = this.state.allStudents.map((student) =>
				<tr className="studentInfoRow" key={student.id}>
					<td>{student.username}</td>
					<td>{student.email}</td>

					<td>
						{student.strengths != null ? 
							<ul>
								{student.strengths.map((myStrength) => <li key={myStrength}>{myStrength}</li>)}
							</ul> : ""}
					</td>

					<td>
						{student.mbti != null ? 
							<ul>
								{student.mbti.map((type) => <li key={type}>{type}</li>)}
							</ul> : ""}
					</td>

					<td>
						{student.gifts != null ? 
							<ul>
								{student.gifts.map((gift) => <li key={gift}>{gift}</li>)}
							</ul> : ""}
					</td>

					<td>
						{student.loveLanguages != null ? 
							<ul>
								{student.loveLanguages.map((loveLanguage) => <li key={loveLanguage}>{loveLanguage}</li>)}
							</ul> : ""}
					</td>

					<td>
						{student.intelligences != null ? 
							<ul>
								{student.intelligences.map((intelligence) => <li key={intelligence}>{intelligence}</li>)}
							</ul> : ""}
					</td>

					<td>
						<a href={student.learningStylesUrl}>Learning Styles</a><br></br>
						<a href={student.johariUrl}>Johari Window</a><br></br>
						<a href={student.documentUrl}>CV</a>
					</td>

					<td>
						<Link to="/passwordReset">edit password</Link>
					</td>
				</tr>
		)

		return (

			<div className="table-container">
				<table className="table all-students">
					<thead>
						<tr>
						<th scope="col">Username</th>
						<th scope="col">Email</th>
						<th scope="col">Strengths</th>
						<th scope="col">Myers-Briggs</th>
						<th scope="col">Spiritual Gifts</th>
						<th scope="col">Love Languages</th>
						<th scope="col">Multiple-Intelligences</th>
						<th scope="col">Documents</th>
						</tr>
					</thead>

					<tbody>
						{ allTheStudents }
					</tbody>
				</table>
			</div>
		)
	}
}

export default AllStudents;