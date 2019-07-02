import {SET_DATA, LOADING_DATA} from '../types';

const initialState = {
	loading: false,
	data: []
}

export default function(state = initialState, action) {
	switch(action.type) {
		case SET_DATA:
			return {
				...state,
				loading: false,
				data: action.payload
			};
			case LOADING_DATA: 
			return {
				...state,
				loading: true
			}
			default:
				return state;
	}
}