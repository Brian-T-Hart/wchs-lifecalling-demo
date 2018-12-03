import axios from "axios";

export default {

	// retrieve all students from the database
	getAllStudents: function (Data) {
		return axios.post("students/getAllStudents", Data);
	},

	// retrieve Spiritual Gifts info from database
	getGifts: function (Data) {
		return axios.post("students/getGifts", Data);
	},

	// retrieve multiple intelligence info from database
	getIntelligences: function (Data) {
		return axios.post("students/getIntelligences", Data);
	},

	// retrieve love languages info from database
	getLoveLanguages: function (Data) {
		return axios.post("students/getLoveLanguages", Data);
	},

	// retrieve meyers-briggs info from database
	getMBTI: function (Data) {
		return axios.post("students/getMBTI", Data);
	},

	// retrieve strengths from database
	getStrengths: function (Data) {
		return axios.post("students/getStrengths", Data);
	},

	// retrieve strengths from database
	getStudentInfo: function (Data) {
		return axios.post("students/getStudentInfo", Data);
	},

	// Saves a Account to the database
	loginAccount: function (Data) {
		return axios.post("accounts/login", Data);
	},
	
	// Saves a Account to the database
	registerAccount: function (Data) {
		return axios.post("accounts/register", Data);
	},

	// update spiritual gifts in the database
	updateGifts: function (Data) {
		return axios.post("students/updateGifts", Data);
	},

	// update multiple intelligences in the database
	updateIntelligences: function (Data) {
		return axios.post("students/updateIntelligences", Data);
	},

	// update love languages in the database
	updateLoveLanguages: function (Data) {
		return axios.post("students/updateLoveLanguages", Data);
	},

	// update meyers-briggs type indicators in the database
	updateMBTI: function (Data) {
		return axios.post("students/updateMBTI", Data);
	},

	// update strengths in database
	updateStrengths: function (Data) {
		return axios.post("students/updateStrengths", Data);
	},

	// save a cv
	saveCvUrl: function (Data) {
		return axios.post("students/saveDocument", Data);
	},

	// save johari window document
	saveJohariUrl: function (Data) {
		return axios.post("students/saveJohari", Data);
	},

	// save learning styles document
	saveLearningStylesUrl: function (Data) {
		return axios.post("students/saveLearningStyles", Data);
	},

	// reset student password
	passwordReset: function (Data) {
		return axios.post("accounts/passwordReset", Data);
	}
}