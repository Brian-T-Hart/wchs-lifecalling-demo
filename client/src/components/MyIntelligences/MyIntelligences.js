import React, { Component } from 'react';
import listOfIntelligences from "../Dashboard/listOfIntelligences.js";

class MyIntelligences extends Component {

	constructor(props) {
		super(props);
		this.state = {
			intelligenceName: "",
			intelligenceDescription: ""
		}
		this.handleClick = this.handleClick.bind(this);
	}

	intelligenceIndex(name) {
		for (let i = 0; i < listOfIntelligences.length; i++) {
			if (listOfIntelligences[i].name === name) {
				this.setState({ intelligenceName: listOfIntelligences[i].name });
				this.setState({ intelligenceDescription: listOfIntelligences[i].description })
			}
		}
	}

	handleClick(e) {
		e.preventDefault();
		var intelligenceName = e.target.dataset.txt;
		this.intelligenceIndex(intelligenceName);
	}

	render() {

		const listOfMyIntelligences = this.props.myIntelligences.map((intelligence) =>
			<li key={this.props.myIntelligences.indexOf(intelligence) + 1} className="list-group-item d-flex align-items-center" data-txt={intelligence} onClick={this.handleClick}>{intelligence}</li>
		);

		const allIntelligences = listOfIntelligences.map((allIntelligences) =>
			<div key={allIntelligences.id}>
				<div className="row">
					<h5 className="allNames">{allIntelligences.name}</h5>
				</div>

				<div className="row">
					<h6>{allIntelligences.description}</h6>
				</div>
			</div>
		);

		return (
			<div className="infoContainer col-md-12">
				{/* title row */}
				<div className="infoTitle row">
					<div className="col-md-12">
						{/* Trigger modal with title span */}
						<span className="clickable" data-toggle="modal" data-target="#allIntelligencesModal">
							<h3>Multiple Intelligences</h3>
						</span>

						{/* Trigger modal with edit icon */}
						<span data-toggle="modal" data-target="#intelligencesModalWrapper">
							<img id="editIcon" src="./../images/editIcon.png" alt="" />
						</span>
					</div>
				</div>

				{/* display container */}
				<div className="infoInfoBox row">
					<div className="col-md-12">
						<ul className="list-group list-group-flush">
							<span data-toggle="modal" data-target="#intelligenceModal">
								{listOfMyIntelligences}
							</span>
						</ul>
					</div>
				</div>

				{/* Modal for displaying individual Strength Info */}
				<div className="modal fade" id="intelligenceModal" role="dialog">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">{this.state.intelligenceName}</h4>

								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>

							<div className="modal-body">
								<h5>{this.state.intelligenceDescription}</h5>
							</div>

							<div className="modal-footer">
								<button id="modalSubmitBtn" type="button" className="btn btn-default" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
				{/* -------------end of Modal------------- */}

				{/* Modal for displaying all Myers-Briggs Info */}
				<div className="modal fade" id="allIntelligencesModal" role="dialog">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">Multiple Intelligences</h4>

								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>

							<div className="modal-body">
								{allIntelligences}
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

export default MyIntelligences;