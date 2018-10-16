import React, { Component } from 'react';
import API from "../../utils/API";
import "./MyOthers.css";

class OthersModal extends Component {

	constructor(props) {
		super(props);
		this.state = {
		}
		this.uploadJohari = this.uploadJohari.bind(this);
		this.uploadLearningStyles = this.uploadLearningStyles.bind(this);
		this.uploadCv = this.uploadCv.bind(this);
	}

	uploadCv(e) {
		e.preventDefault();
		window.cloudinary.openUploadWidget(
			{
				cloud_name: 'dfonttj4w',
				upload_preset: 'bfkrw8gu',
				folder: 'wchs-life-calling'
			},

			function(error, result) {
				if (error) {
					console.log(error);
				}
				
				API.saveCvUrl(
					{
						id: localStorage.getItem("lifeCallingId"),
						documentUrl: result[0].secure_url
					}
				)
				.then(res =>
					{
						alert('The document was saved!');
						window.location = '/dashboard';
					}
				)
				.catch(err =>
					{
						alert('Something went wrong. Please try again!');
					}
				)
			}
		)
	}

	uploadJohari(e) {
		e.preventDefault();
		window.cloudinary.openUploadWidget(
			{
				cloud_name: 'dfonttj4w',
				upload_preset: 'bfkrw8gu',
				folder: 'wchs-life-calling'
			},

			function(error, result) {
				if (error) {
					console.log(error);
				}

				API.saveJohariUrl(
					{
						id: localStorage.getItem("lifeCallingId"),
						johariUrl: result[0].secure_url
					}
				)
				.then(res =>
					{
						alert('The document was saved.');
						window.location = '/dashboard';
					}
				)
				.catch(err =>
					{
						alert('Something went wrong. Please try again!');
					}
				)
			}
		)
	}

	uploadLearningStyles(e) {
		e.preventDefault();
		window.cloudinary.openUploadWidget(
			{
				cloud_name: 'dfonttj4w',
				upload_preset: 'bfkrw8gu',
				folder: 'wchs-life-calling'
			},

			function(error, result) {
				if (error) {
					console.log(error);
				}

				API.saveLearningStylesUrl(
					{
						id: localStorage.getItem("lifeCallingId"),
						learningStylesUrl: result[0].secure_url
					}
				)
				.then(res =>
					{
						alert('The document was saved.');
						window.location = '/dashboard';
					}
				)
				.catch(err =>
					{
						alert('Something went wrong. Please try again.');
					}
				)
			}
		)
	}

	render() {

		return (
			<div>
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Add A Document</h5>

						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>

					<form>
						<div className="modal-body">
							<div className="uploadButtonDiv">
								<button className="uploadButton" onClick={this.uploadLearningStyles}>Upload Learning Styles</button>
							</div>

							<div className="uploadButtonDiv">
							<button className="uploadButton" onClick={this.uploadJohari}>Upload Johari Window</button>
							</div>

							<div className="uploadButtonDiv">
							<button className="uploadButton" onClick={this.uploadCv}>Upload CV</button>
							</div>
						</div>

						<div className="modal-footer">
							<button id="modalSubmitBtn" type="button" className="btn btn-default" data-dismiss="modal">Close</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default OthersModal;