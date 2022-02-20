const axios = require('axios');

export const GET_COUNTRIES = 'GET_COUNTRIES';

export function getCountries() {
	return async function(dispatch) {
		const json = await axios.get('http://localhost:3001/countries');
		console.log(json.data, 'AQUI EL JSONNN');
		return dispatch({
			type    : 'GET_COUNTRIES',
			payload : json.data
		});
	};
}
