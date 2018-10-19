import decode from 'jwt-decode';

var authenticated = {
	isTrue: false,
	authenticate() {
		var token = localStorage.getItem("lifeCallingToken");
		if (token) {
			const decoded = decode(token);
			const time = parseInt((Date.now() / 1000), Number);
			const timeDifference = parseInt((time - decoded.iat) / 60, Number);
			if (timeDifference < 60) {
				authenticated.isTrue = true;
			}
			else {
				authenticated.isTrue = false;
			}
		}
		else {
			authenticated.isTrue = false;
		}
	}
}

export default authenticated;