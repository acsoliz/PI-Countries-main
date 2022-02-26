import { GET_COUNTRIES, GET_NAME_COUNTRY } from '../actions/index';

const initialState = {
	countries  : [],
	details    : [],
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
		default:
			return {
				state
			};
	}
}
