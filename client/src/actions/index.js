import axios from 'axios';

export function getCountries() {
	return async function(dispatch) {
		//por defecto hacer axios.get
		var json = await axios('http://localhost:3001/countries');

		return dispatch({
			type    : 'GET_CHARACTERS',
			payload : json.data
		});
	};
}
