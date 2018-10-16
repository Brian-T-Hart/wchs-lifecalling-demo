import React, { Component } from 'react';
import API from "../../utils/API";

class MBTIModal extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.myMbti = [this.props.myMbti[0], this.props.myMbti[1], this.props.myMbti[2], this.props.myMbti[3]];
		this.myMbti[0]=this.refs.mbti1.value;
		this.myMbti[1]=this.refs.mbti2.value;
		this.myMbti[2]=this.refs.mbti3.value;
		this.myMbti[3]=this.refs.mbti4.value;
		this.props.callbackFromMBTIModal(this.myMbti);
		API.updateMBTI(
			{
				id: localStorage.getItem("lifeCallingId"),
				myMbti: this.myMbti
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
		return (
			<div>
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Select Your Types</h5>

						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>

					<form>
						<div className="modal-body">
							<div className="form-group">
								<label htmlFor="mbti1">Choose Type</label>

								<select className="form-control" id="mbti1" ref="mbti1">
									<option selected disabled hidden>{this.props.myMbti[0]}</option>

									<option>Extrovert</option>

									<option>Introvert</option>
								</select>
							</div>

							<div className="form-group">
								<label htmlFor="mbti2">Choose Type</label>

								<select className="form-control" id="mbti2" ref="mbti2">
									<option selected disabled hidden>{this.props.myMbti[1]}</option>

									<option>Sensing</option>

									<option>Intuition</option>
								</select>
							</div>

							<div className="form-group">
								<label htmlFor="mbti3">Choose Type</label>

								<select className="form-control" id="mbti3" ref="mbti3">
									<option selected disabled hidden>{this.props.myMbti[2]}</option>

									<option>Thinking</option>

									<option>Feeling</option>
								</select>
							</div>

							<div className="form-group">
								<label htmlFor="mbti4">Choose Type</label>

								<select className="form-control" id="mbti4" ref="mbti4">
									<option selected disabled hidden>{this.props.myMbti[3]}</option>

									<option>Perceiving</option>

									<option>Judging</option>
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

export default MBTIModal;