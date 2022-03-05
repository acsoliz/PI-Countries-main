import { GET_COUNTRIES, GET_NAME_COUNTRY, GET_DETAIL, FILTER_CONTINENT } from '../actions/index';

const initialState = {
	countries       : [], // Estado permanente
	details         : [],
	countriesLoaded : []
};

export default function rootReducer(state = initialState, action) {
	const allCountries = state.countries; //Siempre voy a filtrar sobre este estado que tiene todos los countries
	switch (action.type) {
		case GET_COUNTRIES:
			return {
				...state,
				countries       : action.payload,
				countriesLoaded : action.payload
			};
		case GET_NAME_COUNTRY:
			return {
				...state,
				countries : action.payload
			};
		case GET_DETAIL:
			return {
				...state,
				details : action.payload
			};
		case FILTER_CONTINENT:
			const statusFiltered =
					action.payload === 'All' ? allCountries :
					allCountries.filter((el) => el.continents === action.payload);
			console.log(statusFiltered, ' soy el reducer', state.countriesLoaded);
			return {
				...state,
				countriesLoaded: statusFiltered,				
			};

		default:
			return {
				state
			};
	}
}
