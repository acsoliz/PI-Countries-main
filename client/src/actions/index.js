const axios = require('axios');

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_NAME_COUNTRY = 'GET_NAME_COUNTRY';
export const GET_DETAIL = 'GET_DETAIL';
const URL_GET = 'http://localhost:3001/countries';
const URL_NAME_GET = 'http://localhost:3001/countries?name=';
export const FILTER_CONTINENT = "FILTER_CONTINENT"

export function getCountries() {
	return async function(dispatch) {
		try {
			let json = await axios.get(URL_GET); // axios devuelve una accion con un objeto data
			return dispatch({
				type    : 'GET_COUNTRIES',
				payload : json.data
			});
		} catch (err) {
			console.log(err);
		}
	};
}

export function getNameCountries(name) {
	return async function(dispatch) {
		try {
			var json = await axios.get(URL_NAME_GET + name);
			return dispatch({
				type    : 'GET_NAME_COUNTRY',
				payload : json.data
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function getDetail(id) {
	return async function(dispatch) {		
		try {
			const json = await axios.get(`http://localhost:3001/countries/${id}`);
			return dispatch({
				type    : 'GET_DETAIL',
				payload : json.data
			});
		} catch (e) {
			console.log(e);
		}
	};
}


export function filterByContinent(payload){
	return {
        type: FILTER_CONTINENT,
        payload
    }
}