import React, { Component } from 'react';
import API from "../../utils/API";

class LoveLanguagesModal extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loveLanguages: this.props.loveLanguages,
			myLoveLanguages: this.props.myLoveLanguages
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.myLoveLanguages = [
			this.props.myLoveLanguages[0],
			this.props.myLoveLanguages[1],
			this.props.myLoveLanguages[2]
		];

		this.myLoveLanguages[0]	= this.refs.loveLanguage1.value;
		this.myLoveLanguages[1] = this.refs.loveLanguage2.value;

		this.props.callbackFromLoveLanguagesModal(this.myLoveLanguages);

		API.updateLoveLanguages(
			{
				id: localStorage.getItem("lifeCallingId"),
				myLoveLanguages: this.myLoveLanguages
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
		const listOfLoveLanguages = this.state.loveLanguages.map((loveLanguage) =>
			<option key={loveLanguage.id}>{loveLanguage.name}</option>
		);

		return (
			<div>
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">
							Select Your Love Languages
						</h5>

						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>

					<form>
						<div className="modal-body">
							<div className="form-group">
								<label htmlFor="loveLanguage1">Choose Type</label>

								<select className="form-control" id="loveLanguage1" ref="loveLanguage1">
									<option selected disabled hidden>{this.props.myLoveLanguages[0]}</option>
									{listOfLoveLanguages}
								</select>
							</div>

							<div className="form-group">
								<label htmlFor="loveLanguage2">Choose Type</label>

								<select className="form-control" id="loveLanguage2" ref="loveLanguage2">
									<option selected disabled hidden>{this.props.myLoveLanguages[1]}</option>
									{listOfLoveLanguages}
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

export default LoveLanguagesModal;