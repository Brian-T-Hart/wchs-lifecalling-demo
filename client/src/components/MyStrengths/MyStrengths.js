import React, { Component } from 'react';
import listOfStrengths from "../Dashboard/listOfStrengths.js";
import listOfStrengthsExplorer from "../Dashboard/listOfStrengthsExplorer.js";

class MyStrengths extends Component {

	constructor(props) {
		super(props);
		this.state = {
			strengthName: "",
			strengthDescription: "",
		}
		this.handleClick = this.handleClick.bind(this);
	}

	strengthIndex(name) {
		let strengthObject = listOfStrengthsExplorer.find(strength => strength.name === name);
		if (strengthObject) {
			this.setState(
				{
					strengthName: strengthObject.name,
					strengthDescription: strengthObject.description
				}
			);
		}

		else {
			strengthObject = listOfStrengths.find(strength => strength.name === name);
			this.setState(
				{
					strengthName: strengthObject.name,
					strengthDescription: strengthObject.description
				}
			);
		}
	}

	handleClick(e) {
		e.preventDefault();
		var strengthName = e.target.dataset.txt;
		this.strengthIndex(strengthName);
	}

	render() {

		const listOfMyStrengths = this.props.myStrengths.map((strength) =>
			<li key={strength} className="list-group-item d-flex align-items-center" data-txt={strength} onClick={this.handleClick}>
				{strength}
			</li>
		);

		const allStrengths = listOfStrengthsExplorer.map((allStrength) =>
			<div key={allStrength.id}>
				<div className="row">
					<h5 className="allNames">
						{allStrength.name}
					</h5>
				</div>

				<div className="row">
					<h6>
						{allStrength.description}
					</h6>
				</div>
			</div>
		);

		return (

			<div className="infoContainer col-md-12">

				{/* title row */}
				<div className="infoTitle row">
					<div className="col-md-12">
						{/* Trigger modal with title span */}
						<span className="clickable" data-toggle="modal" data-target="#allStrengthsModal">
							<h3>Strengths Explorer</h3>
						</span>

						{/* Trigger modal with edit icon */}
						<span data-toggle="modal" data-target="#strengthsModalWrapper">
							<img id="editIcon" src="./../images/editIcon.png" alt="" />
						</span>
					</div>
				</div>

				{/* display container */}
				<div className="infoInfoBox row">
					<div className="col-md-12">
						<ul className="list-group list-group-flush">
							<span data-toggle="modal" data-target="#strengthModal">
								{listOfMyStrengths}
							</span>
						</ul>
					</div>
				</div>

				{/* Modal for displaying individual Strength Info */}
				<div className="modal fade" id="strengthModal" role="dialog">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">{this.state.strengthName}</h4>

								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>

							<div className="modal-body">
								<h5>{this.state.strengthDescription}</h5>
							</div>

							<div className="modal-footer">
								<button id="modalSubmitBtn" type="button" className="btn btn-default" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
				{/* -------------end of Modal------------- */}

				{/* Modal for displaying all Strengths Info */}
				<div className="modal fade" id="allStrengthsModal" role="dialog">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">Strengths</h4>

								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>

							<div className="modal-body">
								{allStrengths}
							</div>

							<div className="modal-footer">
								<button id="modalSubmitBtn" type="button" className="btn btn-default" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
				{/* -------------end of Modal------------- */}

			</div>
		)
	}
}

export default MyStrengths;