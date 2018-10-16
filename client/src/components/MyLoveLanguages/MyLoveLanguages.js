import React, { Component } from 'react';
import listOfLoveLanguages from "../Dashboard/listOfLoveLanguages.js";

class MyLoveLanguages extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loveLanguageName: "",
			loveLanguageDescription: ""
		}
		this.handleClick = this.handleClick.bind(this);
	}

	loveLanguageIndex(name) {
		for (let i = 0; i < listOfLoveLanguages.length; i++) {
			if (listOfLoveLanguages[i].name === name) {
				this.setState({ loveLanguageName: listOfLoveLanguages[i].name });
				this.setState({ loveLanguageDescription: listOfLoveLanguages[i].description })
			}
		}
	}

	handleClick(e) {
		e.preventDefault();
		var loveLanguageName = e.target.dataset.txt;
		this.loveLanguageIndex(loveLanguageName);
	}

	render() {
		const listOfMyLoveLanguages = this.props.myLoveLanguages.map((loveLanguage) =>
			<li key={this.props.myLoveLanguages.indexOf(loveLanguage) + 1} className="list-group-item d-flex align-items-center" data-txt={loveLanguage} onClick={this.handleClick}>{loveLanguage}</li>
		);

		const allLoveLanguages = listOfLoveLanguages.map((allLoveLanguages) =>
			<div key={allLoveLanguages.id}>
				<div className="row">
					<h5 className="allNames">{allLoveLanguages.name}</h5>
				</div>

				<div className="row">
					<h6>{allLoveLanguages.description}</h6>
				</div>
			</div>
		);

		return (

			<div className="infoContainer col-md-12">
				{/* title row */}
				<div className="infoTitle row">
					<div className="col-md-12">
						{/* Trigger modal with title span */}
						<span className="clickable" data-toggle="modal" data-target="#allLoveLanguagesModal">
							<h3>Love Languages</h3>
						</span>

						{/* Trigger modal with edit icon */}
						<span data-toggle="modal" data-target="#loveLanguagesModalWrapper">
							<img id="editIcon" src="./../images/editIcon.png" alt="" />
						</span>
					</div>
				</div>

				{/* display container */}
				<div className="infoInfoBox row">
					<div className="col-md-12">
						<ul className="list-group list-group-flush">
							<span data-toggle="modal" data-target="#loveLanguageModal">
								{listOfMyLoveLanguages}
							</span>
						</ul>
					</div>
				</div>

				{/* Modal for displaying individual Strength Info */}
				<div className="modal fade" id="loveLanguageModal" role="dialog">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">{this.state.loveLanguageName}</h4>

								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>

							<div className="modal-body">
								<h5>{this.state.loveLanguageDescription}</h5>
							</div>

							<div className="modal-footer">
								<button id="modalSubmitBtn" type="button" className="btn btn-default" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
				{/* -------------end of Modal------------- */}

				{/* Modal for displaying all Myers-Briggs Info */}
				<div className="modal fade" id="allLoveLanguagesModal" role="dialog">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">Love Languages</h4>

								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>

							<div className="modal-body">
								{allLoveLanguages}
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

export default MyLoveLanguages;