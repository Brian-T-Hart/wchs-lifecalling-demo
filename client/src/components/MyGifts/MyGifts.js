import React, { Component } from 'react';
import listOfSpiritualGifts from "../Dashboard/listOfSpiritualGifts.js";

class MyGifts extends Component {

	constructor(props) {
		super(props);
		this.state = {
			giftName: "",
			giftDescription: ""
		}
		this.handleClick = this.handleClick.bind(this);
	}

	giftIndex(name) {
		for (let i = 0; i < listOfSpiritualGifts.length; i++) {
			if (listOfSpiritualGifts[i].name === name) {
				this.setState({ giftName: listOfSpiritualGifts[i].name });
				this.setState({ giftDescription: listOfSpiritualGifts[i].description })
			}
		}
	}

	handleClick(e) {
		e.preventDefault();
		var giftName = e.target.dataset.txt;
		this.giftIndex(giftName);
	}

	render() {

		const listOfMyGifts = this.props.myGifts.map((gift) =>
			<li key={this.props.myGifts.indexOf(gift) + 1} className="list-group-item d-flex align-items-center" data-txt={gift} onClick={this.handleClick}>{gift}</li>
		);

		const allGifts = listOfSpiritualGifts.map((allGifts) =>
			<div key={allGifts.id}>
				<div className="row">
					<h5 className="allNames">{allGifts.name}</h5>
				</div>

				<div className="row">
					<h6>{allGifts.description}</h6>
				</div>
			</div>
		);

		return (

			<div className="infoContainer col-md-12">
				{/* title row */}
				<div className="infoTitle row">
					<div className="col-md-12">
						<span className="clickable" data-toggle="modal" data-target="#allGiftsModal">
							<h3>Spiritual Gifts</h3>
						</span>

						{/* Trigger modal with edit icon */}
						<span data-toggle="modal" data-target="#giftsModalWrapper">
							<img id="editIcon" src="./../images/editIcon.png" alt="" />
						</span>
					</div>
				</div>

				{/* display container */}
				<div className="infoInfoBox row">
					<div className="col-md-12">
						<ul className="list-group list-group-flush">
							<span data-toggle="modal" data-target="#giftModal">
								{listOfMyGifts}
							</span>
						</ul>
					</div>
				</div>

				{/* Modal for displaying individual Spiritual Gift Info */}
				<div className="modal fade" id="giftModal" role="dialog">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">{this.state.giftName}</h4>

								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>

							<div className="modal-body">
								<h5>{this.state.giftDescription}</h5>
							</div>

							<div className="modal-footer">
								<button id="modalSubmitBtn" type="button" className="btn btn-default" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
				{/* -------------end of Modal------------- */}

				{/* Modal for displaying all Myers-Briggs Info */}
				<div className="modal fade" id="allGiftsModal" role="dialog">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">Spiritual Gifts</h4>

								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>

							<div className="modal-body">
								{allGifts}
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

export default MyGifts;