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
		this.cloudinarySettings = {
			cloudName: "dfonttj4w",
			uploadPreset: "bfkrw8gu",
			sources: [
				"local",
				"url",
				"google_drive",
				"facebook",
        		"dropbox",
        		"instagram"
			],
			showAdvancedOptions: true,
			cropping: true,
			multiple: false,
			defaultSource: "local",
			styles: {
				palette: {
					window: "#000000",
					sourceBg: "#000000",
					windowBorder: "#8E9FBF",
					tabIcon: "#FFFFFF",
					inactiveTabIcon: "#8E9FBF",
					menuIcons: "#2AD9FF",
					link: "#08C0FF",
					action: "#336BFF",
					inProgress: "#00BFFF",
					complete: "#33ff00",
					error: "#EA2727",
					textDark: "#000000",
					textLight: "#FFFFFF"
				},
				fonts: {
					default: null,
					"'Space Mono', monospace": {
						url: "https://fonts.googleapis.com/css?family=Space+Mono",
						active: true
					}
				}
			}
		} //cloudinary settings
	}

	uploadCv(e) {
		e.preventDefault();
		window.cloudinary.openUploadWidget(this.cloudinarySettings,
			(err, result) => {
				if (result.event === "success") {
					console.log("Upload Widget event - ", result);
					API.saveCvUrl(
					{
						id: localStorage.getItem("lifeCallingId"),
						documentUrl: result.info.secure_url
					})
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
				if (err) {
					console.log('error', err);
				}
			}
		);//uploadWidget
	}//uploadCv

	uploadJohari(e) {
		e.preventDefault();
		window.cloudinary.openUploadWidget(
			this.cloudinarySettings,
			(err, result) => {
				if (result.event === "success") {
					console.log("Upload Widget event - ", result);
					API.saveJohariUrl(
						{
							id: localStorage.getItem("lifeCallingId"),
							johariUrl: result.info.secure_url
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
			   if (err) {
				   console.log('error', err);
			   }
			}
		);//uploadWidget
	}//uploadJohari

	uploadLearningStyles(e) {
		e.preventDefault();
		window.cloudinary.openUploadWidget(
			this.cloudinarySettings,
			(err, result) => {
				if (result.event === "success") {
					console.log("Upload Widget event - ", result);
					API.saveLearningStylesUrl(
						{
							id: localStorage.getItem("lifeCallingId"),
							learningStylesUrl: result.info.secure_url
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
				if (err) {
					console.log('error', err);
				}
			}
		);//uploadWidget
	}//uploadLearningStyles

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