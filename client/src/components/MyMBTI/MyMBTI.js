import React, { Component } from 'react';
import listOfMBTI from "../Dashboard/listOfMBTI.js";

class MyMBTI extends Component {

	constructor(props) {
		super(props);
		this.state = {
			mbtiName: "",
			mbtiDescription: ""
		}
		this.handleClick = this.handleClick.bind(this);
	}

	mbtiIndex(name) {
		for (let i = 0; i < listOfMBTI.length; i++) {
			if (listOfMBTI[i].name === name) {
				this.setState({ mbtiName: listOfMBTI[i].name });
				this.setState({ mbtiDescription: listOfMBTI[i].description })
			}
		}
	}

	handleClick(e) {
		e.preventDefault();
		var mbtiName = e.target.dataset.txt;
		this.mbtiIndex(mbtiName);
	}

	render() {

		const listOfMyMbti = this.props.myMbti.map((mbti) =>
			<li key={this.props.myMbti.indexOf(mbti) + 1} className="list-group-item d-flex" data-txt={mbti} onClick={this.handleClick}>{mbti}</li>
		);

		const allMBTI = listOfMBTI.map((allMBTI) =>
			<div key={allMBTI.id}>
				<div className="row">
					<h5 className="allNames">{allMBTI.name}</h5>
				</div>

				<div className="row">
					<h6>{allMBTI.description}</h6>
				</div>
			</div>
		);

		return (

			<div className="infoContainer col-md-12">
				{/* title row */}
				<div className="infoTitle row">
					<div className="col-md-12">
					{/* Trigger modal with title span */}
						<span className="clickable" data-toggle="modal" data-target="#allMBTIModal">
							<h3>Myers-Briggs </h3>
						</span>

						{/* Trigger modal with edit icon */}
						<span data-toggle="modal" data-target="#mbtiModalWrapper">
							<img id="editIcon" src="./../images/editIcon.png" alt="" />
						</span>
					</div>
				</div>

				{/* display container */}
				<div className="infoInfoBox row">
					<div className="col-md-12">
						<ul className="list-group list-group-flush">
							<span data-toggle="modal" data-target="#mbtiModal">
								{listOfMyMbti}
							</span>
						</ul>
					</div>
				</div>

				{/* Modal for displaying individual Spiritual Gift Info */}
				<div className="modal fade" id="mbtiModal" role="dialog">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">{this.state.mbtiName}</h4>

								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>

							<div className="modal-body">
								<h5>{this.state.mbtiDescription}</h5>
							</div>

							<div className="modal-footer">
								<button id="modalSubmitBtn" type="button" className="btn btn-default" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
				{/* -------------end of Modal------------- */}

				{/* Modal for displaying all Myers-Briggs Info */}
				<div className="modal fade" id="allMBTIModal" role="dialog">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">Myers-Briggs</h4>

								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>

							<div className="modal-body">
								{allMBTI}
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

export default MyMBTI;