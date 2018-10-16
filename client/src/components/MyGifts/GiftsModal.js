import React, { Component } from 'react';
import API from "../../utils/API";

class GiftsModal extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.myGifts = [this.props.myGifts[0], this.props.myGifts[1], this.props.myGifts[2]];
		this.myGifts[0]=this.refs.gift1.value;
		this.myGifts[1]=this.refs.gift2.value;
		this.myGifts[2]=this.refs.gift3.value;
		this.props.callbackFromGiftsModal(this.myGifts);
		API.updateGifts(
			{
				id: localStorage.getItem("lifeCallingId"),
				myGifts: this.myGifts
			}
		)
		.then(
			res => {
				console.log(res);
			}
		)
		.catch(
			err => {
				alert('A problem occurred. Please try again.');
			}
		)
	}

	render() {
		const listOfGifts = this.props.gifts.map((gift) =>
			<option key={gift.id}>{gift.name}</option>
		);

		return (
			<div>
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Select Your Spiritual Gifts</h5>

						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>

					<form>
						<div className="modal-body">
							<div className="form-group">
								<label htmlFor="gift1">Choose Type</label>

								<select className="form-control" id="gift1" ref="gift1">
									<option selected disabled hidden>{this.props.myGifts[0]}</option>
									{listOfGifts}
								</select>
							</div>

							<div className="form-group">
								<label htmlFor="gift2">Choose Type</label>

								<select className="form-control" id="gift2" ref="gift2">
									<option selected disabled hidden>{this.props.myGifts[1]}</option>
									{listOfGifts}
								</select>
							</div>

							<div className="form-group">
								<label htmlFor="gift3">Choose Type</label>

								<select className="form-control" id="gift3" ref="gift3">
									<option selected disabled hidden>{this.props.myGifts[2]}</option>
									{listOfGifts}
								</select>
							</div>
						</div>

						<div className="modal-footer">
							<button type="submit" className="btn btn-default" data-dismiss="modal" onClick={this.handleClick}>Submit</button>
							
							<button id="modalSubmitBtn" type="button" className="btn btn-default" data-dismiss="modal">Close</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default GiftsModal;