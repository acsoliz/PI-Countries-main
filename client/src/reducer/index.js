import { GET_COUNTRIES, GET_NAME_COUNTRY, GET_DETAIL, FILTER_CONTINENT, BUTTON_ORDER_ALPH, BUTTONS_TO_ORDER_NUM } from '../actions/index';

const initialState = {
	countries       : [], // Estado permanente
	details         : [],
	countriesAux    : [],
	countriesLoaded : []
};

export default function rootReducer(state = initialState, action) {
	const allCountries = state.countries; //Siempre voy a filtrar sobre este estado que tiene todos los countries
	switch (action.type) {
		case GET_COUNTRIES:
			return {
				...state,
				countries    : action.payload,
				countriesAux : action.payload
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
		case BUTTONS_TO_ORDER_NUM: {
			let allCountriesAux = state.countries;
			let filteredByNum =

					action.payload === 'mas' ? allCountriesAux.sort(function(a, b) {
						if (a.population < b.population) {
							return 1;
						}
						if (a.population > b.population) {
							return -1;
						}
						return 0;
					}) :
					allCountriesAux.sort(function(a, b) {
						if (a.population > b.population) {
							return 1;
						}
						if (a.population < b.population) {
							return -1;
						}
					});
					console.log(filteredByNum, "Soy el filtro por poblacion")
			return {
				...state,
				countries : filteredByNum
			};
		}
		case FILTER_CONTINENT:
			const statusFiltered =

					action.payload === 'All' ? allCountries :
					allCountries.filter((el) => el.continents === action.payload);
			console.log(statusFiltered, ' soy el reducer', state.countriesLoaded);
			return {
				...state,
				countries : statusFiltered
			};

		default:
			return {
				state
			};
	}
}
