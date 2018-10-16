import React, { Component } from 'react';
import API from "../../utils/API";

class StrengthsModal extends Component {

	constructor(props) {
		super(props);
		this.state = {
			myStrengths: this.props.myStrengths
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.myStrengths = [this.props.myStrengths[0], this.props.myStrengths[1], this.props.myStrengths[2], this.props.myStrengths[3], this.props.myStrengths[4]];
		this.myStrengths[0]=this.refs.strength1.value;
		this.myStrengths[1]=this.refs.strength2.value;
		this.myStrengths[2]=this.refs.strength3.value;
		this.myStrengths[3]=this.refs.strength4.value;
		this.myStrengths[4]=this.refs.strength5.value;
		this.props.callbackFromStrengthsModal(this.myStrengths);
		API.updateStrengths(
			{
				id: localStorage.getItem("lifeCallingId"),
				strengths: this.myStrengths
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
		const strengths = this.props.strengths.map((strength) =>
			<option key={strength.id}>{strength.name}</option>
		);

		return (
			<div>
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Select Your Strengths</h5>

						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>

					<form>
						<div className="modal-body">
							<div className="form-group">
								<label htmlFor="strength1">Highest Strength</label>

								<select className="form-control" id="strength1" ref="strength1">
									<option selected disabled hidden>{this.props.myStrengths[0]}</option>
									{strengths}
								</select>
							</div>

							<div className="form-group">
								<label htmlFor="strength2">Second Highest Strength</label>

								<select className="form-control" id="strength2" ref="strength2">
									<option selected disabled hidden>{this.props.myStrengths[1]}</option>
									{strengths}
								</select>
							</div>

							<div className="form-group">
								<label htmlFor="strength3">Third Highest Strength</label>

								<select className="form-control" id="strength3" ref="strength3">
									<option selected disabled hidden>{this.props.myStrengths[2]}</option>
									{strengths}
								</select>
							</div>

							<div className="form-group">
								<label htmlFor="strength4">Fourth Highest Strength</label>

								<select className="form-control" id="strength4" ref="strength4">
									<option selected disabled hidden>{this.props.myStrengths[3]}</option>
									{strengths}
								</select>
							</div>

							<div className="form-group">
								<label htmlFor="strength5">Fifth Highest Strength</label>

								<select className="form-control" id="strength5" ref="strength5">
									<option selected disabled hidden>{this.props.myStrengths[4]}</option>
									{strengths}
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

export default StrengthsModal;