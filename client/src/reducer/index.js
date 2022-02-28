import { GET_COUNTRIES, GET_NAME_COUNTRY, GET_DETAIL } from '../actions/index';

const initialState = {
	countries : [], // Estado permanente
	details   : []
};

export default function rootReducer(state = initialState, action) {
	
	switch (action.type) {
		case GET_COUNTRIES:
			return {
				...state,
				countries : action.payload
			};
		case GET_NAME_COUNTRY:
			return {
				...state,
				countries : action.payload
			};
		case GET_DETAIL:
			return {
				...state,
				countries : action.payload,
				details   : action.payload
			};
		default:
			return {
				state
			};
	}
}
