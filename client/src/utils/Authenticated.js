import decode from 'jwt-decode';

function authenticated() {

	var token = localStorage.getItem("lifeCallingToken");
	var user = localStorage.getItem('lifeCallingUsername');
	var admin = localStorage.getItem('lifeCallingIsAdmin');
	
	if (token) {
		const decoded = decode(token);
		const time = parseInt((Date.now() / 1000), Number);
		const timeDifference = parseInt((time - decoded.iat) / 60, Number);

		if (timeDifference < 60) {
			var authenticated = {
				isTrue: true,
				userName: user,
				isAdmin: admin
			}

			return authenticated;
		}

		else {
			return false;
		}
	}

	else {
		return false;
	}
}

export default authenticated();